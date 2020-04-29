//Funciones que insertan productos aleatorios a un GenericArrayList

import Product from "./Product";

let comida = ["Dorayaki", "Sushi", "Curry", "Yakisoba", "Cerdo dulce", "Ramen", "Soba fideos", "Satay", "Nieve mango",
    "Ddeokbokki", "Takoyakis", "Tofu frito", "Yakitori", "Peking duck", "Pez globo", "Teokbokki", "Genmaicha",
    "Japchae", "Okonomiyaki", "Laksa", "Kui dar dar"];

/*
var bebida = ["Jugo de Mango agua", "Jugo de Durazno agua", "Jugo de Melocoton agua", "Jugo de Mora agua", "Jugo de Fresa agua", "Jugo de Frijoa agua", "Jugo de Maracuya agua",
    "Jugo de Papaya agua", "Jugo de Piña agua", "Jugo de Arandanos agua", "Jugo de Mango leche", "Jugo de Durazno leche", "Jugo de Melocoton leche", "Jugo de Mora leche",
    "Jugo de Fresa leche", "Jugo de Frijoa leche", "Jugo de Maracuya leche", "Jugo de Papaya leche", "Jugo de Piña leche", "Jugo de Arandanos leche"];

var postres = ["Patbingsu", "Dragon b", "Mochi", "Khanom", "Thungtag", "Taitaki", "Ube", "Hayala", "Lai wong", "Khao",
    "Niao", "Mamuang", "Banh", "Chuoi", "Faloodeh", "A", "B", "C", "D", "E"];

var empaque = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R"];
*/

let precio = [46600,39600,42500,48900,41000,40000,51600,38600,43800,51300,46700,47000,46500,45600,46000,43600,46100,39600,46500,40600,36700];

let imagen = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg","img/21.jpg"]

function make_attribute() {
    let N = Math.floor((Math.random() * 100000) + 1);
    let D = N % 19;
    let c0 = ((N + (19 - D)) / 19);
    let C = (c0 % 20);
    let b0 = ((c0 + (20 - C)) / 20);
    let B = (b0 % 20);
    let A = ((b0 + (20 - B)) / 20) % 21;
    let prod = new Product(comida[A], N,precio[A], imagen[A]);
    return prod;
}

export default make_attribute;