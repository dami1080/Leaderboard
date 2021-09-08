export const layout = () => `
 <div class="main">
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
  </ul>
 </div>
 <div class="add-scores">
 <h2>Add your score</h2>
 </div> 
  <form>
   <input type="text" id="name" placeholder="Your name">
   <input type="number" id="score" placeholder="Your score">
   <button type="submit" id="submit">Submit</button>
  </form>`

export default layout;