'use strict';
//tablica- to samo co object tylko ma indexy

var imiona=[ 'Monika', 'krystian','łukasz' ]

console.log(imiona);

imiona[3]='tania';
imiona[2]='ela'


imiona.push('gerald'); //push-dodaje elemnty
console.log(imiona);

imiona.pop(); //pop- usuwa ostatni element
imiona.pop();

//console.log(imiona);

console.log(imiona.unshift('robert')); //unshift- dodaje element na początku i zwraca obecną ilość elemwntów//
console.log(imiona.shift());//shift-usuwa pierwszy element z tablicy

console.log(imiona);


console.log(imiona.length); //okresla długośc tablicy- podaje ilosc elementow


for (var i=0; i < imiona.length; i++) {
    console.log(imiona[i]);
}

//petla po tablicy, nie trzeba definiowac staru i konca, tylko przelatuje po wszystkich elemntach

imiona.forEach(function (element, i){
    console.log('element nr' + i + '=' + element);
} );

//join-pobiera wszytskie elelmty z tablicy i łaczy je

console.log( imiona.join('-'));

//sort-sortuje elemnty alfabetycznie

console.log( imiona.sort);

//reverse- odwraca znaki, napisze je od konca

imiona.reverse();
console.log(imiona);

//concat-łączy tablice

var imionaMeskie = ['robert', 'mariusz', 'olek'];

var zbiorImion = imionaMeskie.concat(imiona);

console.log(zbiorImion);

console.log(Array.isArray(zbiorImion));//sprawdza czy to jet tablica

console.log( zbiorImion.slice(2,5));

zbiorImion.splice(2,3, "Julek", "krzys");

console.log(zbiorImion);// startuje od 2, wycina 3 elementy i wstawai julka i krzysia

//to string - cala tablice zamieni na stringi, i wyswietli po przrecinku




















