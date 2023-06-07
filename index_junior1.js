// Problema: Cofla, Roberto y Pedro tiene una cierta cantidad de dinero y necesitan comprar el helado más caro que puedan. 
// Además, Cofla necesita saber cuánta plata le sobraría.


let dineroCofla = prompt("¿Cuánto dinero tiene Cofla?");
let dineroRoberto = prompt("¿Cuánto dinero tiene Roberto?");
let dineroPedro = prompt("¿Cuánto dinero tiene Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comparte el helado de agua");
    alert("Cofla te sobran: " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comparte el helado de crema");
    alert("Cofla te sobran: " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, comparte el helado de heladix");
    alert("Cofla te sobran: " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, comparte el helado de heladovich");
    alert("Cofla te sobran: " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, comparte el helado de helardo");
    alert("Cofla te sobran: " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("Cofla, comparte el helado con confites o el 1/4 kg");
    alert("Cofla te sobran: " + (dineroCofla - 2.9));
} else {
    alert("Cofla, no te alcanza para ninguno");
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, comparte el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comparte el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, comparte el helado de heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, comparte el helado de heladovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, comparte el helado de helardo");
}

else if (dineroCdineroRobertoofla >= 2.9) {
    alert("Roberto, comparte el helado con confites o el 1/4 kg");
} else {
    alert("Roberto, no te alcanza para ninguno");
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comparte el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comparte el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comparte el helado de heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, comparte el helado de heladovich");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comparte el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, comparte el helado con confites o el 1/4 kg");
} else{
    alert("Pedro, no te alcanza para ninguno");
}