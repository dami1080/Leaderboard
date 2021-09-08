export const layout = () => `
<h1>Leaderboard</h1>
<div class="score-container">
<div class="scores">
  <div class="scores-header">
   <h2>Recent scores</h2>
   <button>Refresh</button>
  </div>
  <ul class="score-list">
   <li>Name:20</li>
   <li>Name:50</li>
   <li>Name:78</li>
   <li>Name:125</li>
   <li>Name:77</li>
   <li>Name:70</li>
  </ul>
</div>
<div class="add-scores">
  <div class="scores-header">
    <h2>Add your score</h2>
  </div> 
   <form action="">
    <input type="text" id="name" placeholder="Your name"><br><br>
    <input type="number" id="score" placeholder="Your score"><br><br>
    <button type="submit" id="submit">Submit</button>
   </form>
</div
</div>
`;

export default layout;