function redirectToSignUp() {
    window.location.href = "../pages/signup.html";
}

document.getElementById('btn_click').addEventListener('click', function() {
    redirectToSignUp();
});

const playerScores = [
    { rank: 1, username: 'Player1', kills: 50, accuracy: '80%', score: 5000 },
    { rank: 2, username: 'Player2', kills: 45, accuracy: '75%', score: 4800 },
    { rank: 3, username: 'Player3', kills: 42, accuracy: '70%', score: 4500 },
    { rank: 4, username: 'Player4', kills: 38, accuracy: '65%', score: 4200 },
    { rank: 5, username: 'Player5', kills: 35, accuracy: '60%', score: 4000 },
    { rank: 6, username: 'Player6', kills: 32, accuracy: '55%', score: 3800 },
    { rank: 7, username: 'Player7', kills: 30, accuracy: '50%', score: 3600 },
    { rank: 8, username: 'Player8', kills: 28, accuracy: '45%', score: 3400 },
    { rank: 9, username: 'Player9', kills: 25, accuracy: '40%', score: 3200 },
    { rank: 10, username: 'Player10', kills: 22, accuracy: '35%', score: 3000 },
];

document.addEventListener('DOMContentLoaded', function() {
    const playerScoresList = document.querySelector('.player-scores');

    playerScores.forEach(score => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="rank">${score.rank}</span>
            <span class="username">${score.username}</span>
            <span class="kills">${score.kills}</span>
            <span class="accuracy">${score.accuracy}</span>
            <span class="score">${score.score}</span>
        `;
        playerScoresList.appendChild(listItem);
    });
});