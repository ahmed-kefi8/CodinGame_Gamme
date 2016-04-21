/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways

var links = [];
for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);
    links.push(N1+' '+N2); // on récupère tous les liens dans le tableau links
}
var exits = [];
for (var i = 0; i < E; i++) {
    var EI = parseInt(readline()); // the index of a gateway node
    exits.push(EI); // on récupère toutes les sorties dans le tableau exits
}

// game loop
while (true) {

    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    
    
/* l'idée est de voir s'il y a une sortie directe pour l'agent un lien entre lui et l'une des sorties
si c'est le cas on coupe ce lien sinon on coupe un lien quelconque*/
    for(var i = 0 ; i < exits.length ; i++)
    {
        indice_sortie = links.indexOf(exits[i]+' '+SI); // pour avoir l'indice d'un lien de sortie directe s'il existe
        if(indice_sortie  > -1)
            {break;} // sortir de la boucle si ce lien existe sachant que s'il existe il ne peut pas y avoir un autre 
    }
    
    if (indice_sortie > -1)
    {
        print(links[indice_sortie]);
        links.splice(indice_sortie, 1);
    }
    else
    {
        print(links[0]);
        links.splice(0,1);
    }
}
