var joueur      = 1;
var nbColonnes  = 5;
var nbLignes    = 5;
var jeu         = true;
var texte       = "";
var plateau     = [];

for (var i = 0; i < nbLignes; i++) {
    plateau[i] = [];
}

newGame();

function newGame(){
    for (var i = 0; i < nbLignes; i++) {
        for (var j = 0; j < nbColonnes; j++) {
            plateau[i][j] = 0;
        }
    }
    joueur = 1;
    affichetexteAnnonce("Le jeu commence ! c'est au tour du joueur " + nomDuJoueur(joueur));
    jeu = true;
    creerTableau();
}

function affichetexteAnnonce(texte){
    document.getElementById("texteAnnonce").innerHTML = texte;
}

function nomDuJoueur(numJoueur){
    if (numJoueur == 1){
        return ("rouge");
    }else{
        return("bleu");
    }
}



function creerTableau(){
   texte = '<table>';
   for (i = 0; i < nbLignes; i++) {
       texte += '<tr>';
       for (j = 0; j < nbColonnes; j++) {
           texte += '<td onclick="detecteClick('+j+')" id="'+i+'-'+j+'">';
           if(plateau[i][j] == 1){
               texte += '<div class="joueur1">';
           }else if(plateau[i][j] == 2){
               texte += '<div class="joueur2">';
           }
           texte += '</td>';
       }
       texte += '</tr>';
   }
   texte += '</table>';
   tableau = document.getElementById('puissance4');
   tableau.innerHTML = texte;
}

function detecteClick(j){
  if(verifposition(j) && jeu){
    var ligneEnCours = poseJeton(j);
    var verifEnd = puissance4 (ligneEnCours,j,0,0);
    if (verifEnd)
      {
        jeu=false;
        
      affichetexteAnnonce("Le joueur " + nomDuJoueur(joueur) + " a gagné la partie !");
       
  }else{
    if (joueur==1){
        joueur = 2;
     } else {
        joueur = 1;
    }
    affichetexteAnnonce("C'est au tour du joueur " + nomDuJoueur(joueur));
    }
  }
}

function verifposition(j) {
  if (plateau [0][j]== 0){
    return true;
  }
  else{
    return false;
  }
}

function poseJeton(j) {
  for (var i = nbLignes-1; i >= 0; i--) {
    if (plateau [i][j]==0){
      plateau[i][j] = joueur;
      rafraichisTableau(i, j, joueur);
       return i;
    }
  }
}

function rafraichisTableau(x, y, i) {
   document.getElementById(x+"-"+y).innerHTML = "<div class='joueur"+i+"'></div>";
}

function puissance4(lig,col,l,c) {
    if (c == 0 && l == 0) {
    console.log("initial Valeurs : " + lig + " "+ col +" / Increment "+ l +" "+ c);

    var va = 1 + puissance4(lig, col-1, 0, -1) + puissance4(lig, col+1, 0, 1); 
    var vb = 1 + puissance4(lig-1, col, -1, 0) + puissance4(lig+1, col, 1, 0);
    var vc = 1 + puissance4(lig-1, col-1, -1, -1) + puissance4(lig+1, col+1, 1, 1);
    var vd = 1 + puissance4(lig-1, col+1, -1, 1) + puissance4(lig+1, col-1, 1, -1);

    console.log(va,vb,vc,vd);
      if (va >= 4 || vb >= 4 || vc >= 4 || vd >= 4) {
        return true;    
      }else{
        return false;
      }
    }
        if(lig < nbLignes && lig >= 0 && col < nbColonnes && col >= 0){
          console.log("recu Valeurs :" + lig + " " + col )
          if (plateau[lig][col] == joueur){
            return 1 + puissance4(lig + l, col + c, l, c);
          }else{
            return 0;
          } 
        
        }
  return 0;
}


