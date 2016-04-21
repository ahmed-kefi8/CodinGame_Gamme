/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var MESSAGE = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');


var characteres = MESSAGE.split(''); // séparation du message caractère par caractère
var char_binaire = ''; // variable pour le code binaire de chaque caractère
var binaires =''; //variable pour le code binaire du message entier


/* l'idée au départ et de traduire caractère par caractère en binaire et de les concaténer ensemble,
 mais la méthode To String(2) ne donne pas forcément 7 bits d'où la boucle while (on ajoute des 0 à gauche)*/
for (var i = 0 ; i< characteres.length ; i++){
	char_binaire = characteres[i].charCodeAt().toString(2);
	while (char_binaire.length != 7)
	{
		char_binaire = "0".concat(char_binaire);
	}
		
    binaires += char_binaire;

    }
   
    
var bit_prec; // variable pour garder en mémoire le bit précédent
var resultat = ''; // la variable à afficher à la fin


/* l'idée est simple : on va faire une boucle pour parcourir la chaine de bits un par un , s'il y a un changement 
entre bit précédent et bit actuel et le bit actuel est "1" on ajoute " 0 " (avec les espaces à droite et à gauche)
sinon si le bit actuel est "0" on ajoute " 00 " (toujours avec les espaces à droite et à gauche) sinon
on est toujours sur le même type de bit et on se contente d'ajouter un "0", Remarque ; à la première itération
on n'a pas encore de bit précédent pour comparer donc on aura un "0" de plus en début de chaine qu'il faudra
supprimer pas la suite, Voilà:) */

for (var j = 0 ; j < binaires.length ; j++)
{
    if (binaires[j] == 1 && binaires[j] != bit_prec)
	{resultat += " 0 ";}
	if (binaires[j] == 0 && binaires[j] != bit_prec)
	{resultat += " 00 ";}

	resultat += "0";

bit_prec = binaires[j];
}	
	
resultat = resultat.substring(1, resultat.length);

print(resultat);
	
	
	
	