export const layout = () => `
<h1>Leaderboard</h1>
<div class="score-container">
  <div class="scores">
   <div class="scores-header">
    <h2>Recent scores</h2>
    <button id="refreshBtn">Refresh</button>
   </div>
   <ul class="score-list" id="score-list">

   </ul>
  </div>
  <div class="add-scores">
    <div class="scores-header">
     <h2>Add your score</h2>
    </div> 
   <form action="">
    <input type="text" id="formName" placeholder="Your name" required><br><br>
    <input type="number" id="formScore" placeholder="Your score" step="1" min="0" max="100" required><br><br>
    <button type="submit" id="submit">Submit</button>
   </form>
  </div
</div>`;

export const showScores = (scores) => scores.map((score) => `<li>${score.user}: ${score.score}</li>`).join('');