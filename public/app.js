Aname = document.getElementById('team1');
Bname = document.getElementById('team2');

function bothteams(team1El, team2El) {
    team1 = document.getElementById(team1El);
    team2 = document.getElementById(team2El);
    Aname.innerHTML = team1.value;
    Bname.innerHTML = team2.value;
}

teamToss = document.getElementById('teamToss');
toss = document.getElementById('toss');
tossFinal = document.getElementById('tossFinal');

function tossOfMatch() {

    tossRandomNum = Math.ceil(Math.random() * 2);
    console.log(tossRandomNum);

    if (tossRandomNum === 1 && teamToss.value === Aname.innerHTML && toss.value.toLocaleLowerCase() === "Head".toLocaleLowerCase() || toss.value.toLocaleLowerCase() === "Heads".toLocaleLowerCase()) {
        tossFinal.innerHTML = 'Its a heads  ' + teamToss.value + ' won the toss and chose to bat first';
    }

    else if (tossRandomNum === 2 && teamToss.value === Aname.innerHTML && toss.value.toLocaleLowerCase() === "Tail".toLocaleLowerCase() || toss.value.toLocaleLowerCase() === "Tails".toLocaleLowerCase()) {
        tossFinal.innerHTML = 'Its a Tail  ' + teamToss.value + ' won the toss and chose to bat first';
    }

    else if (tossRandomNum === 1 && teamToss.value === Bname.innerHTML && toss.value.toLocaleLowerCase() === "Head".toLocaleLowerCase() || toss.value.toLocaleLowerCase() === "Heads".toLocaleLowerCase()) {
        tossFinal.innerHTML = 'Its a heads  ' + teamToss.value + ' won the toss and chose to bat first';
    }

    else if (tossRandomNum === 2 && teamToss.value === Bname.innerHTML && toss.value.toLocaleLowerCase() === "Tail".toLocaleLowerCase() || toss.value.toLocaleLowerCase() === "Tails".toLocaleLowerCase()) {
        tossFinal.innerHTML = 'Its a Tail  ' + teamToss.value + ' won the toss and chose to bat first';
    }
}

wicketId = document.getElementById('noOfWickets');
ScoreId = document.getElementById('score');
totalScore = document.getElementById('totalScore');
teamToss = document.getElementById('teamToss');
totalBalls = document.getElementById('totalBalls');
totalOvers = document.getElementById('totalOvers');
var wicketCount = 0;
var currentScore = 0;
var ballsCounter = 0;


function circketGame() {

    if(teamToss.value.length === 0 && toss.value.length === 0){
        alert('Please enter all the required Fields !');
    }

    else{
        var randomNum = Math.floor(Math.random() * 7);
        console.log(randomNum);
        ballsCounter++;
        if(ballsCounter<12){
            totalBalls.innerHTML = ballsCounter;
        }

        else if (ballsCounter === 12) {
            totalOvers.innerHTML = 'Two overs are completed ' + teamToss.value + ' innigs are over ';
            totalScore.innerHTML = teamToss.value + " total score is " + currentScore;   
            stop();
            document.getElementById("runButton").disabled = true;
        }

        if (randomNum == 0) {
            wicketCount++;
            if (wicketCount < 2) {
                wicketId.innerHTML = wicketCount;
            }
            else {
                wicketId.innerHTML = "All player's are out of " + teamToss.value;
                totalScore.innerHTML = teamToss.value + " total score is " + currentScore;
                stop();
                document.getElementById("runButton").disabled = true;
            }
        }

        else {
            if (ballsCounter <= 12 &&  wicketCount <= 2) {
                currentScore += randomNum;
                totalScore.innerHTML = currentScore;

            }
            else {
                totalScore.innerHTML = teamToss.value + " total score is " + currentScore;
                stop();
            }
        }

        if (ballsCounter <= 12  &&  wicketCount <= 2 ) {
            totalBalls.innerHTML = ballsCounter;
        }
        else {
            totalBalls.innerHTML = '1st inning is over !';
            document.getElementById("runButton").disabled = true;
            stop();
        }
    }
}

wicketId1 = document.getElementById('noOfWickets1');
ScoreId1 = document.getElementById('score1');
totalScore1 = document.getElementById('totalScore1');
teamToss1 = document.getElementById('teamToss1');
totalBalls1 = document.getElementById('totalBalls1');
totalOvers1 = document.getElementById('totalOvers1');
Result = document.getElementById('Result');
var wicketCount1 = 0;
var currentScore1 = 0;
var ballsCounter1 = 0;





function circketMatch() {
    if(currentScore === 0){
        alert(`Match is not Started Yet !`);
    }
    
    else{
        var randomNum1 = Math.floor(Math.random() * 7);
        console.log(randomNum1);
        ballsCounter1++;
        totalBalls1.innerHTML = ballsCounter1;

        if(ballsCounter1 < 12  && currentScore1 >  currentScore){
            Result.innerHTML =  'Team batted at second won the match';
            stop();
            document.getElementById("runButton1").disabled = true;
        }

        else if (ballsCounter1 === 12  && currentScore1 < currentScore  ) {
            totalOvers1.innerHTML = 'Two overs are completed  innig is over ';
            Result.innerHTML =  teamToss.value+' Won the match';
            stop();   
            document.getElementById("runButton1").disabled = true;
        }
        else if(ballsCounter1 === 12  && currentScore1 ===  currentScore){
            Result.innerHTML = 'Match is Drawn';
            stop();   
            document.getElementById("runButton1").disabled = true;

        }

        if (randomNum1 == 0) {
            wicketCount1++;
            if (wicketCount1 < 2) {

                wicketId1.innerHTML = wicketCount1;
            }

            else if (wicketCount1 !== 2 && currentScore1 === currentScore){
                Result.innerHTML =  'Match is drawn';
                stop();
                document.getElementById("runButton1").disabled = true;   
            }
    
            else if(wicketCount1 === 2 && currentScore1 < currentScore){
                wicketId1.innerHTML = "All Wicktes are Down ";
                Result.innerHTML =  teamToss.value+' Won the match';
                stop();
                document.getElementById("runButton1").disabled = true;
            }

            else if(wicketCount1 !== 2 && currentScore1 > currentScore){
                Result.innerHTML =  'Team batted at second won the match';
            stop();
            document.getElementById("runButton1").disabled = true;
            }
        
        }

        else {
            if (ballsCounter1 < 12 ||  wicketCount1 < 2) {

                currentScore1 += randomNum1;
                totalScore1.innerHTML = currentScore1;

            }
            else if(ballsCounter1 < 12  &&  wicketCount1 < 2 && currentScore1 > currentScore  ){
                Result.innerHTML =  'Team batted at second won the match';
                stop();
                document.getElementById("runButton1").disabled = true;
            }
            else if(ballsCounter1 === 12  ||  wicketCount1 ===2 && currentScore1 < currentScore){
                Result.innerHTML =  teamToss.value+' Won the match';
               stop();
            document.getElementById("runButton1").disabled = true;
            }
        }
    }
}