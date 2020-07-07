import { Car } from "./models/car";

function description() {
    let fullDescription = document.querySelector('#fullDescription');
    let car = new Car('Gol', 4, 'Volks');
    let text = car.fullDescription();
    (<HTMLInputElement>fullDescription).value = text;
}

let btn = document.querySelector('#btnDescription');
btn.addEventListener("click", description);;