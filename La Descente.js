/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
// my vars


// game loop
while (true) { // cette boucle "while" s'exécute à chaque passage de gauche à droite ou de droite à gauche
var max=0; // pour l'indice la montagne sur laquelle on va tirer à chaque passage ( la montage la plus haute)
var heightmax = 0; // pour l'hauteur de la montage la plus haute à chauqe passage
    for (var i = 0; i < 8; i++) { 
       var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0.
       if (mountainH > heightmax) { // on utilise cette condition pour qu'au bout des exécutions de la boucle on a la hauteur de la montagne la plus haute et surtout son indice 
           heightmax =  mountainH;
           max=i}
      
    }
     print(max); // on tire sur la montage la plus haute d'indice "max" :)
    // Write an action using print()
    // To debug: printErr('Debug messages...');
}

    
