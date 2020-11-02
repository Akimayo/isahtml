# ISA Projekt - HTML5
Demo aplikace předvádějící některé funkce HTML5 a technologií s ním spojených. Vytvořeno v rámci semestrální práce pro Unicorn University.
## Funkce
- Registrace a přihlášení
- Správa úkolů
- Použita frontendová knihovna Bootstrap s přizpůsobením
- Sémantika HTML5
- Přístupnost dle WCAG
- SVG a animované SVG
- Canvas s WebGL animací
- Asynchronní požadavky
## Spouštění
Projekt si můžete naklonovat a spustit na vlastním zařízení
### Závislosti
- **MariaDB** - databázový server na adrese [localhost:3306](localhost:3306) s _root_ účtem bez hesla
- **.NET Core** - runtime pro ASP<span></span>.NET Core backend
- **Node.js** - Node server pro vystavování React frontendu

### Před spuštěním
- Spusťte MariaDB server
- Nainstalujte balíčky pomocí `npm i`

### Spuštění aplikace
- Spusťte backend pomocí `dotnet run -p IsaApi/Api`
- Spusťte frontend pomocí `npm run start`
- Otevřete prohlížeč na adrese [localhost:3000](localhost:3000)
