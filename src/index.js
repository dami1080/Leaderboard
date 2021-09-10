import './style.css';
import addScore from './addScore';
import renderList from './renderList';

const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');
const ul = document.querySelector('ul');

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const data = { user: `${name}`, score: parseInt(`${score}`, 10) };
  addScore(data);
});

refreshBtn.addEventListener('click', () => {
  ul.innerHTML = '';
  renderList();
});

window.onload = () => {
  renderList();
};