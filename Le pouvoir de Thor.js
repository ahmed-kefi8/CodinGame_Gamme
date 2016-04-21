/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

/* explication du code :
La boucle "while (true)" s'exécute une fois pour chaque pas que fait Thor, à chaque fois on teste la position de Thor 
sur les axes Y et X par rapport a la position du 'light'.si Thor et sur le même axe Y que le 'light' on le bougera
sur l'axe X seulement et vice-versa d'où les comparaisons strictes, sinon la direction dans laquelle bougera Thor 
sera la concaténation de (N ou S) avec (W ou E) pour le bouger en diagonale dans la bonne direction :) .
*/
// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
	
	var moveX = "";
	var moveY = "";

    if ( initialTY > lightY )
	{moveY = "N";
     initialTY--;}
	else if ( initialTY < lightY )
    {moveY = "S";
     initialTY++;}
	 
	if ( initialTX > lightX )
	{moveX = "W";
     initialTX--;}
	else if ( initialTX < lightX )
    {moveX = "E";
     initialTX++;}
	 
	 print(moveY+moveX);
}
