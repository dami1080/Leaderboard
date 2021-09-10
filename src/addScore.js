const addScore = async (data) => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ai1CllQtDNdMCRSO2Odn/scores';
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return response.json();
};
export default addScore;