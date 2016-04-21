/* au départ j'ai écrit ce code qui permet grace aux 2 boucles imbriquées de faire toutes 
les comparaisons possibles entre les cases du tableau, ça marche bien sauf que c'est long 
et du coup pour le 3éme test où on a 99999 chevaux ça coince d'ou la 2éme solution
et bien sûr faut toujours optimiser le code au mieux pour avoir des solutions légères et performantes*/

var list = [];
var N = parseInt(readline());
for (var i = 0; i < N; i++) {
    var pi = parseInt(readline());
    list.push(pi);
}

var diff_min = Math.abs(list[1]-list[0]);

for (var i = 0; i < N; i++) {
    for (var j = i+1; j < N; j++) {
        if (Math.abs(list[j]-list[i]) < diff_min)
        {diff_min = Math.abs(list[j]-list[i]);}
    
}
}
print(diff_min);


/* 2éme solution: donc il faut faire moins de tests et vue qu'on on s'intéresse à la différence entre les cases
le fait d'avoir un tableau arrangé ( méthode sort() )du plus petit au plus grand réduirait les tests de : 
N(N-1)/2 tests à seulement N-1 test
et donc pour le 3éme cas où on a N = 99999 on passe de 4999850001 tests à 99998 tests */

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var list = [];
var N = parseInt(readline());
for (var i = 0; i < N; i++) {
    var pi = parseInt(readline());
    list.push(pi);
}

// il faut ajouter la fonction anonyme pour comparer des entiers sinon c'est l'ordre alphabétique
list.sort(function (a, b) { return a > b; });

diff_min = list[1]-list[0];

// on commence la boucle à partir de 2 car les 2 premières cases ont été comparées pour l'initialisation de diff_min
for (var i = 2; i < N; i++) {
    
    if ( Math.abs(list[i]-list[i-1]) < diff_min )
    {diff_min = Math.abs(list[i]-list[i-1]);}
}

print(diff_min);


