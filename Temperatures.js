/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526
// Write an action using print()
// To debug: printErr('Debug messages...');

if ( n != 0) // test si n différent de 0 sinon on retournera 0
{
	temps = temps.split(" ").map(function(item) { // on utilise la méthode split et map pour changer
		return parseInt(item);					  // le chaine de caractère qu'il nous donne en un tableau
	});											  // d'entier pour pouvoir travailler dessus


	var resultat; // la variable qui recevra la bonne température à retourner à la fin

/* explication de l'idée :
on parcourt le tableau en comparant la valeur absolue de tous les entiers positifs et négatifs 
par la suite on teste si la valeur positive qu'on obtient existe dans le tableau sa signifie 
que c'est la bonne température ( même si son opposé existe nous sommes supposés retournés 
la valeur positive) sinon c'est que c'est l'opposé qui existe et donc on le retournera :)
 */
	for (var i = 0; i < n ;i++) 
	{
		if (Math.abs(temps[i]) < resultat)
		{resultat = Math.abs(temps[i]);}
		}
		
	if (temps.indexOf(resultat)==-1 )
	{ resultat = resultat*(-1);}


	print(resultat);
}
else
{print(0)};



