import readline from 'readline';
import { convertKvdtToJson } from './modules/kvdt.js';
import { convertArztbriefeToJson } from './modules/ollama.js';
import { sendDataToRestApi } from './modules/restApi.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const asciiArt = `
⚕️ 🏥 ⚕️        W     W  GGGGG  V     V         ⚕️ 🏥 ⚕️
⚕️ 🏥 ⚕️        W     W G       V     V         ⚕️ 🏥 ⚕️
⚕️ 🏥 ⚕️        W  W  W G  GGG   V   V          ⚕️ 🏥 ⚕️
⚕️ 🏥 ⚕️         W W W  G    G    V V           ⚕️ 🏥 ⚕️
⚕️ 🏥 ⚕️          W W    GGGG      V            ⚕️ 🏥 ⚕️
`;

const askQuestion = (query) => {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
};

const main = async () => {
    console.log(asciiArt);
    while (true) {
        console.log("Was möchten Sie tun?");
        console.log("1. KVDT-Datei in JSON konvertieren");
        console.log("2. Arztbriefe mittels Ollama in JSON konvertieren");
        console.log("3. Programm beenden");
        
        const choice = await askQuestion("Bitte wählen Sie eine Option (1/2/3): ");
        
        if (choice === '1') {
            await convertKvdtToJson();
        } else if (choice === '2') {
            await convertArztbriefeToJson();
        } else if (choice === '3') {
            console.log("Programm wird beendet...");
            rl.close();
            break;
        } else {
            console.log("Ungültige Eingabe. Bitte wählen Sie eine gültige Option.");
            continue;
        }
        
        const sendToApi = await askQuestion("Möchten Sie die Daten an die REST-API senden? (ja/nein): ");
        if (sendToApi.toLowerCase() === 'ja') {
            await sendDataToRestApi();
        }
        
        console.log("Prozess abgeschlossen. Kehre zum Hauptmenü zurück...");
    }
};

main();
