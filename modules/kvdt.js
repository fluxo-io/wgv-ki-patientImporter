export const convertKvdtToJson = async () => {
  console.log("Umwandlung der Abrechnungsdaten jedes Patienten in separate JSON Dateien...");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation einer API-Anfrage
  console.log("Daten erfolgreich umgewandelt!");
};
