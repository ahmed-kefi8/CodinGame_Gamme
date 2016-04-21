/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var LON = readline();
LON = parseFloat(LON.replace(',', '.')) * Math.PI / 180; // méthode parseFloat pour parser un string et avoir un réel, on remplace la ',' par un '.' et finalement en multiple par ()Math.PI / 180) pour avoir la val en radian
var LAT = readline();
LAT = parseFloat(LAT.replace(',', '.')) * Math.PI / 180;
var N = parseInt(readline());

var dist_min, resultat;

/*l'idée est de diviser les donnée en utilisant les ';' ( méthode split) puis on crée un Javascript object 
avec les données qui nous intéressent à savoir le nom, long et alti seulement le reste n'étant pas important
pour notre programme, par la suite on calcule la distance suivant la formule fournie
et finalement on compare pour avoir la distance minimale et le nom du défib correspondant */
for (var i = 0; i < N; i++) {
    var DEFIB = readline();
    
    var donnees = DEFIB.split(';');
    var DEFIB = {};
    DEFIB.nom = donnees[1];
    DEFIB.long = parseFloat(donnees[4].replace(',', '.')) * Math.PI / 180;
    DEFIB.lati = parseFloat(donnees[5].replace(',', '.')) * Math.PI / 180;
    
    var x = (DEFIB.long - LON) * Math.cos((LAT + DEFIB.lati) / 2);
	var y = (DEFIB.lati - LAT);
	DEFIB.dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
	
	
	if (dist_min == undefined || DEFIB.dist < dist_min)
	{
	    dist_min =  DEFIB.dist;
     	resultat = DEFIB.nom;
	}

}


// Write an action using print()
// To debug: printErr('Debug messages...');

    print(resultat);