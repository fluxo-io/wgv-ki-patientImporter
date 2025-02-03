# bnho-wgv-ai-patientImporter

## Übersicht
Dies Skript konvertiert **Arztbriefe (PDF-Dateien) in Text**, die im Ordner `inputs/` liegen, und analysiert diese mithilfe von **Ollama** und frei wählbaren LLM. Diese können optional auf einem separaten Server im lokalen Netzwerk betrieben werden. Durch vordefinierte **Prompts**, die im Verzeichnis `prompts/` gespeichert sind, werden die extrahierten Inhalte in **strukturierte JSON-Daten** umgewandelt. Diese werden entweder im Ordner `exports/` gespeichert oder optional an eine REST-API gesendet.

Zusätzlich können KVDT-Abrechnungsdaten mit diesem Skript in strukturierte JSON-Dateien für alle Patientenstammdaten umgewandelt werden. Auch diese werden entweder im Ordner `exports/` gespeichert oder optional an eine REST-API gesendet.

## Funktionen
### 1. Verarbeitung von Arztbriefen
- Extrahiert Text aus PDF-Dokumenten
- Nutzt **Ollama** zur Analyse und Strukturierung der Texte
- Erstellt für jeden Patienten eine JSON-Datei mit relevanten Informationen

### 2. Import und Verarbeitung von Abrechnungsdaten
- Importiert Abrechnungsdaten aus externen Systemen
- Erstellt eine strukturierte JSON-Datei für alle Patientenstammdaten
- Speichert die Daten im `exports/`-Verzeichnis

### 3. Optionale REST-API-Integration
- Die strukturierten Daten können automatisch an eine externe REST-API gesendet werden

## Warum Node.js?
Die Wahl von **Node.js** ermöglicht es, das Skript bei Bedarf nahtlos in eine **Electron.js-App** zu integrieren. Dies eröffnet die Möglichkeit, die Anwendung als eigenständige Software in **Arztpraxen** zu verteilen. Ärzte und medizinisches Fachpersonal könnten den gesamten Prozess über eine **visuelle Benutzeroberfläche** steuern und wichtige **Eingabeparameter** wie den **Ollama-Server** und die **API-Zugangsdaten** direkt eingeben. So könnte der Konvertierungs- und Analyseprozess intuitiv und effizient in den Arbeitsalltag integriert werden.

Darüber hinaus bietet **Electron** die Möglichkeit, die Anwendung **zu signieren** und Updates automatisiert an die Praxen auszuliefern. Dadurch würde für die Nutzer der manuelle Installationsaufwand entfallen, und neue Versionen mit Verbesserungen oder Sicherheitsupdates könnten reibungslos verteilt werden. Zwar kann das Skript auch eigenständig in einer Node.js-Umgebung ausgeführt werden, doch die Integration in eine Electron-App bietet eine **komfortablere Benutzerführung**, eine **sichere Verteilung** und eine **automatische Aktualisierung**, was es zur bevorzugten Lösung für den produktiven Einsatz in Praxen macht.

## Installation
### Voraussetzungen
- **Node.js** (>=16.x)
- **NPM** (>=8.x)

### Installation der Abhängigkeiten
```sh
npm install
```

## Nutzung
### Start der Anwendung
```sh
npm start
```


## Repository
Das Projekt ist auf GitHub verfügbar: [bnho-wgv-ai-patientImporter](https://github.com/fluxo-io/bnho-wgv-ai-patientImporter)


## Lizenz
Dieses Projekt ist unter der **MIT-Lizenz** veröffentlicht.