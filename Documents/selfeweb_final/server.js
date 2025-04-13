// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB-Verbindung
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Datenbank verbunden'))
    .catch((err) => console.log('Datenbankfehler: ', err));

// Routen
app.post('/register', async (req, res) => {
    const { username, email, password, bio } = req.body;

    // Überprüfe, ob der Benutzer schon existiert
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Benutzer existiert bereits' });
    }

    // Passwort hashen
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Benutzer speichern
    const newUser = new User({ username, email, password: hashedPassword, bio });
    await newUser.save();

    // JWT erstellen
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'Benutzer erfolgreich registriert', token });
});

// Anmelde-Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Benutzer nicht gefunden' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Falsches Passwort' });
    }

    // JWT erstellen
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Erfolgreich angemeldet', token });
});

// Server starten
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));