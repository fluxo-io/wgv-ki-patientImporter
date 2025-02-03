export const sendDataToRestApi = async () => {
  console.log("Initialisiere den Versand der strukturierten Daten an die REST-API...");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation einer API-Anfrage
  console.log("Die strukturierten JSON-Daten wurden erfolgreich an die REST-API übertragen!");
};
