
// Selfe - Retro Social Text Network
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SelfeApp() {
  const [theme, setTheme] = useState("retro");
  const [loggedIn, setLoggedIn] = useState(false);

  const themes = {
    retro: "bg-pink-200 text-black",
    neon: "bg-black text-green-400",
    modern: "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
  };

  return (
    <div className={\`min-h-screen p-4 \${themes[theme]}\`}>
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Selfe</h1>
        <div className="space-x-2">
          <Button onClick={() => setTheme("retro")}>Retro</Button>
          <Button onClick={() => setTheme("neon")}>Neon</Button>
          <Button onClick={() => setTheme("modern")}>Modern</Button>
        </div>
      </header>

      {!loggedIn ? (
        <div className="mt-10 text-center">
          <p className="mb-4">Willkommen bei Selfe! Hier geht es nur um Texte — keine Fotos, keine Emojis, volle Sicherheit.</p>
          <Button onClick={() => setLoggedIn(true)}>Anmelden / Registrieren</Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-4">
          <Card>
            <CardContent>
              <p className="font-bold">Luna</p>
              <p>Hey, ich bin Luna, 16, mag Bücher & Retro-Games! Lass uns chatten.</p>
              <Button className="mt-2">Chat starten</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="font-bold">Alex</p>
              <p>Ich bin Alex, 14, schreibe gerne Texte über Weltraum und Sci-Fi.</p>
              <Button className="mt-2">Chat starten</Button>
            </CardContent>
          </Card>
          <p className="text-xs mt-6 text-center">Screenshots sind nicht erlaubt. Der Versuch wird gemeldet!</p>
        </div>
      )}
    </div>
  );
}
