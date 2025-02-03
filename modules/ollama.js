export const convertArztbriefeToJson = async () => {
  console.log("Konvertiere Arztbriefe in JSON-Format...");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation der Verarbeitung
  console.log("Arztbriefe wurden erfolgreich in JSON konvertiert!");
};
