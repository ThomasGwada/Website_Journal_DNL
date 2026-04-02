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
		message = "🥳";
	} 
	else if (score >= 3) {
		message = "😁";
	} 
	else if (score >= 1) {
		message = "😐";
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
        document.getElementById("quiztitle").textContent = "Quiz Time !";
        document.getElementById("question1").textContent = "Q1: Which 2D geometric shape has the largest area for a given perimeter?";
        document.getElementById("question2").textContent = "Q2: What is Bernoulli's inequality?";
        document.getElementById("question3").textContent = "Q3: Who was the first mathematician to use the symbol ‘>’?";
        document.getElementById("question4").textContent = "Q4: What index is used to measure wealth inequality within a population?";
        document.getElementById("question5").textContent = "Q5: How many people in the world don't eat enough each day?";
		document.getElementById("rep1").textContent = "The square";
		document.getElementById("rep2").textContent = "The circle";
		document.getElementById("rep3").textContent = "The prism";
		document.getElementById("rep4").textContent = "For all x ≥ −1 and n a natural number, (1+x)n ≥ 1+nx";
		document.getElementById("rep5").textContent = "For all x = −1 and n a natural number, (1+x)n = 1+nx";
		document.getElementById("rep6").textContent = "1+1=1";
		document.getElementById("rep7").textContent = "Pythagoras";
		document.getElementById("rep8").textContent = "Thomas Harriot";
		document.getElementById("rep9").textContent = "Erwin Schrödinger";
		document.getElementById("rep10").textContent = "Dice's Index";
		document.getElementById("rep11").textContent = "The Simpson Index";
		document.getElementById("rep12").textContent = "The Gini coefficient";
		document.getElementById("rep13").textContent = "57.3";
		document.getElementById("rep14").textContent = "12 x 10^45";
		document.getElementById("rep15").textContent = "783 millions";
        document.getElementById("finish").textContent = "Finish";
        document.getElementById("restart").textContent = "Restart";
    } else {
        document.getElementById("quiztitle").textContent = "C'est l'heure du quiz !";
        document.getElementById("question1").textContent = "Q1 : Quelle forme géométrique en 2d possède la plus grande aire pour un même périmètre?";
        document.getElementById("question2").textContent = "Q2 : Quelle est l'inégalité de Bernoulli?";
        document.getElementById("question3").textContent = "Q3 : Quel est le premier mathématicien à faire usage du symbole '>'";
        document.getElementById("question4").textContent = "Q4 : Quel indice permet de mesurer les inégalités de richesse d'une population?";
        document.getElementById("question5").textContent = "Q5 : Combien de personnes dans le monde n'ont pas assez à manger chaque jour?";
		document.getElementById("rep1").textContent = "Le carré";
		document.getElementById("rep2").textContent = "Le cercle";
		document.getElementById("rep3").textContent = "Le prisme";
		document.getElementById("rep4").textContent = "Pour tout x≥−1 et n entier naturel, (1+x)n≥1+nx";
		document.getElementById("rep5").textContent = "Pour tout x=−1 et n entier naturel, (1+x)n=1+nx";
		document.getElementById("rep6").textContent = "1+1=1";
		document.getElementById("rep7").textContent = "Pythagore";
		document.getElementById("rep8").textContent = "Thomas Harriot";
		document.getElementById("rep9").textContent = "Erwin Schrödinger";
		document.getElementById("rep10").textContent = "L'indice de Dice";
		document.getElementById("rep11").textContent = "L'indice de Simpson";
		document.getElementById("rep12").textContent = "L'indice de Gini";
		document.getElementById("rep13").textContent = "57,3";
		document.getElementById("rep14").textContent = "12 x 10^45";
		document.getElementById("rep15").textContent = "783 millions";
        document.getElementById("finish").textContent = "Finir";
        document.getElementById("restart").textContent = "Recommencer";
    }
}
