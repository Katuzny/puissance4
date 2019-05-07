var numerojoueur = 1;
var nbcolonnes = 5;
var nblignes = 5;
var jeu = true;
var texte ="";
var plateau=[];

for (var i = 0; i < nblignes; i++) {
	plateau[i] = new Array();
}
function newgame() {
	console.log(newgame);
}

function newgame() {
	for (var i = 0; i < nblignes; i++) {
	
		for (var j = 0; j < nbcolonnes; j++) {
		plateau[i][j]=[0];
		}
	}
	joueur =1;
	jeu()=true;
}
function affichetexteannonce(argument= "le jeu commence ! c'est au tour du joueur")=nomjoueur(joueur) {
	innerhtml = get element id = affichetexteannonce()
}
function nomjoueur(numerojoueur()) {
	
	if (numerojoueur()==1){
		return ("rouge")

	}
	else{
		return ("bleu")
	}
}