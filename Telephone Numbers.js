

var N = parseInt(readline()); // nombre N de numéros de téléphone
var resultat = 0, ajout = 0, numbers = []; // déclaration de variables

for (var i = 0; i < N; i++) { // première boucle pour parcourir le tableau 'numbers'
    
    var telephone = readline(); // je pourrais supprimer cette ligne et faire le push directement mais je la garde pour la lisibilité du code
    numbers.push(telephone); // on remplit le tableau 'numbers'
    
    ajout = numbers[i].length; // on va supposer que le nouveau numéro n'a rien de commun avec les autres et initialiser ajout(nombre d'élément à jouter) à la longueur totale du numéro
   
    for (var j = 0; j < i; j++) { // deuxième boucle pour le reparcourir à chaque itération de la première boucle mais en s'arretant à l'indice de l'itération actuelle - 1
	
        var compt = 0; // une nouvelle variable pour les éléments en commun entre le nouveau numéro et les numéros déja traités ( un à la fois pour chaque itération de la boucle j)
        
        var long = numbers[i].length < numbers[j].length ? numbers[i].length : numbers[j].length ; // on va récupérer la longueur du numéro le plus court entre le nouveau numéro et le numéro a l'itération j
        
        while (compt < long && numbers[i][compt] === numbers[j][compt]) // tant que les chiffres sont identiques et ' compt < long ' ( pour le cas d'un numéro entièrement inclus dans un autre), on incrément 'compt'
        {compt++;}
	
                if (numbers[i].length-compt < ajout) // si pour l'itération actuelle on a plus de chiffre en commun donc on ajoute moins d'élément mémoire , 'ajout' prendra la nouvelle valeur
                {ajout = numbers[i].length-compt;}
       

                                  }
    resultat += ajout; // à la fin des itérations de la boucle j , la variable 'ajout' a la plus petite valeur possible et on l'additionne au résultat
                                }
                                
                                
                                
print(resultat);