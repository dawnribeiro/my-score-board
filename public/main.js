//import { config } from 'rx'

let team1score = 0
let team2score = 0

const addOneToTeam1Score = () => {
  console.log('adding 1 to team score')
  team1score += 1
  if (team1score > 21) {
    document.querySelector('.team1Score').textContent = '21'
  } else if (team1score === 21) {
    document.querySelector('.winner1').textContent = 'You are the winner!!!'
  }
  updateTeam1Score()
  // add 1 to score

  // save the new score to the DOM
}

const addOneToTeam2Score = () => {
  console.log('adding 1 to team score')
  team2score += 1
  if (team2score > 21) {
    document.querySelector('.team2Score').textContent = '21'
  } else if (team2score === 21) {
    document.querySelector('.winner2').textContent = 'You are the winner!!!'
  }

  updateTeam2Score()
}
const updateTeam2Score = () => {
  document.querySelector('.team2Score').textContent = team2score
}

const updateTeam1Score = () => {
  document.querySelector('.team1Score').textContent = team1score
}

const subtractOneFromTeam2Score = () => {
  console.log('subtracting 1 from team score')
  if (team2score <= 0) {
    document.querySelector('.team2Score').textContent = '0'
  } else {
    team2score -= 1
  }
  updateTeam2Score()
}

const subtractOneFromTeam1Score = () => {
  console.log('subtracting 1 from team score')
  if (team1score <= 0) {
    document.querySelector('.team1Score').textContent = '0'
  } else {
    team1score -= 1
  }
  updateTeam1Score()
}

const changeTeam1Name = () => {
  console.log('updating team name')
  const currentValue = document.querySelector('.team-1-name-update').value
  console.log(currentValue)
  document.querySelector('.team1name').textContent = currentValue
}

const changeTeam2Name = () => {
  console.log('updating team 2 name')
  const currentValue = document.querySelector('.team-2-name-update').value
  console.log(currentValue)
  document.querySelector('.team2name').textContent = currentValue
}

//const name = document.querySelector('.team-1-name-update').value
//console.log(name)

const main = () => {
  // set the score to the zero
  document.querySelector('.team1Score').textContent = team1score
  document.querySelector('.team2Score').textContent = team2score
  //document.querySelector('.team1name').textContent = team1name
}

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToTeam1Score)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneFromTeam2Score)

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToTeam2Score)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneFromTeam1Score)

document
  .querySelector('.button-update-team-1')
  .addEventListener('click', changeTeam1Name)

document
  .querySelector('.button-update-team-2')
  .addEventListener('click', changeTeam2Name)
