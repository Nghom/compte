function dizaine2 (ab1,ab2) {
    var answ = "", un = dizaine1(ab2), deux = unite(ab2);

    if (ab1 == 2 && ab2 == 0) {
        answ = "vingt " ;
    } else if (ab1 == 2 && ab2 != 0) {
        answ = "vingt-" + deux;
    } else if (ab1 == 3 && ab2 == 0) {
        answ = "Trente " ;
    } else if (ab1 == 3 && ab2 != 0) {
        answ = "Trente-" + deux;
    } else if (ab1 == 4 && ab2 == 0) {
        answ = "Quarante " ;
    } else if (ab1 == 4 && ab2 != 0) {
        answ = "Quarante-" + deux;
    } else if (ab1 == 5 && ab2 == 0) {
        answ = "Cinquante " ;
    } else if (ab1 == 5 && ab2 != 0) {
        answ = "Cinquante-" + deux;
    } else if (ab1 == 6 && ab2 == 0) {
        answ = "Soixante " ;
    } else if (ab1 == 6 && ab2 != 0) {
        answ = "Soixante-" + deux;
    } else if (ab1 == 7 && ab2 == 0) {
        answ = "Soixante-dix " ;
    } else if (ab1 == 7 && ab2 != 0) {
        answ = "Soixante-" + un;
    } 
         answ = answ.replace("-Un","-et-un");
         answ = answ.replace("-onze","-et-onze"); 
     
     if (ab1 == 8 && ab2 == 0) {
        answ = "Quatre-vingts " ;
    } else if (ab1 == 8 && ab2 != 0) {
        answ = "Quatre-vingt-" + deux;
    } else if (ab1 == 9 && ab2 == 0) {
        answ = "Quatre-vingt-dix " ;
    } else if (ab1 == 9 && ab2 != 0) {
        answ = "Quatre-vingt-" + un;
    }

    return answ;
}
