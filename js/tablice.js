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






















