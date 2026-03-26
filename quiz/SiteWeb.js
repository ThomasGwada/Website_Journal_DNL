/*SCORE*/

let score = 0;

function Add1() {
	score++;
}

function finish() {
	document.getElementById("score").textContent = score;
	messageFinal();
}

function messageFinal() {
	let message = "";

	if (score === 5) {
		message = "Excellent ! Tu as fait un sans-faute !";
	} 
	else if (score >= 3) {
		message = "Bravo ! Bon travail, tu maîtrises bien le sujet.";
	} 
	else if (score >= 1) {
		message = "Pas mal ! Tu peux encore t'améliorer.";
	} 
	else {
		message = "SKILL ISSUE";
	}

	document.getElementById("message").textContent = message;
}




/* Question 1 */
function Color1() {
	document.getElementById("rep1").style.backgroundColor = "#C62828";
	document.getElementById("rep2").style.backgroundColor = "#2E7D32";
	document.getElementById("rep3").style.backgroundColor = "#C62828";
	
	document.getElementById("rep1").disabled = true;
	document.getElementById("rep2").disabled = true;
	document.getElementById("rep3").disabled = true;
}

/* Question 2 */
function Color2() {
	document.getElementById("rep4").style.backgroundColor = "#2E7D32";
	document.getElementById("rep5").style.backgroundColor = "#C62828";
	document.getElementById("rep6").style.backgroundColor = "#C62828";
	
	document.getElementById("rep4").disabled = true;
	document.getElementById("rep5").disabled = true;
	document.getElementById("rep6").disabled = true;
}

/* Question 3 */
function Color3() {
	document.getElementById("rep7").style.backgroundColor = "#C62828";
	document.getElementById("rep8").style.backgroundColor = "#2E7D32";
	document.getElementById("rep9").style.backgroundColor = "#C62828";
	
	document.getElementById("rep7").disabled = true;
	document.getElementById("rep8").disabled = true;
	document.getElementById("rep9").disabled = true;
}

/* Question 4 */
function Color4() {
	document.getElementById("rep10").style.backgroundColor = "#C62828";
	document.getElementById("rep11").style.backgroundColor = "#C62828";
	document.getElementById("rep12").style.backgroundColor = "#2E7D32";
	
	document.getElementById("rep10").disabled = true;
	document.getElementById("rep11").disabled = true;
	document.getElementById("rep12").disabled = true;
}

/* Question 5 */
function Color5() {
	document.getElementById("rep13").style.backgroundColor = "#C62828";
	document.getElementById("rep14").style.backgroundColor = "#C62828";
	document.getElementById("rep15").style.backgroundColor = "#2E7D32";
	
	document.getElementById("rep13").disabled = true;
	document.getElementById("rep14").disabled = true;
	document.getElementById("rep15").disabled = true;
}



/*Traduction du Site*/


function changeLanguage() {
    let lang = document.getElementById("language").value;

    if(lang === "en"){
        document.getElementById("quiztitle").textContent = "Dark Souls II Quiz";
        document.getElementById("question1").textContent = "Q1: What is the name of the kingdom where Dark Souls II takes place?";
        document.getElementById("question2").textContent = "Q2: Which stat affects item usage speed and rolls?";
        document.getElementById("question3").textContent = "Q3: Which boss is found in Heide's Tower of Flame?";
        document.getElementById("question4").textContent = "Q4: Who is the main boss of the Iron King DLC castle?";
        document.getElementById("question5").textContent = "Q5: Who is Nashandra in the game?";
        document.getElementById("finish").textContent = "Finish";
        document.getElementById("restart").textContent = "Restart";
    } else {
        document.getElementById("quiztitle").textContent = "Quiz Dark Souls II";
        document.getElementById("question1").textContent = "Q1 : Comment s’appelle le royaume où se déroule Dark Souls II ?";
        document.getElementById("question2").textContent = "Q2 : Quelle statistique influence la vitesse d’utilisation des objets et les roulades ?";
        document.getElementById("question3").textContent = "Q3 : Quel boss se trouve dans la zone Heide’s Tower of Flame ?";
        document.getElementById("question4").textContent = "Q4 : Qui est le boss principal du Château de Fer dans le DLC Crown of the Old Iron King ?";
        document.getElementById("question5").textContent = "Q5 : Qui est Nashandra dans le jeu ?";
        document.getElementById("finish").textContent = "Finir";
        document.getElementById("restart").textContent = "Recommencer";
    }
}
