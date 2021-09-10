import { layout, showScores } from './layout';
import { createGame, addScore, getScores } from './api';
import './style.css';

const root = document.getElementById('root');

root.innerHTML = layout();
const form = document.getElementById('form');
const scoreList = document.getElementById('score-list');
const refreshButton = document.getElementById('refreshBtn');

window.addEventListener('DOMContentLoaded', async () => {
  const gameId = (str) => createGame(str);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('formName');
    const score = document.getElementById('formScore');
    await addScore(name, score, gameId);
    name.value = '';
    score.value = '';
  });

  refreshButton.addEventListener('click', async () => {
    const result = await getScores(gameId);
    scoreList.innerHTML = showScores(result.result);
  });
});