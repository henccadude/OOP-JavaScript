'use strict';

console.log('------------------challenge 1 --------------------')
 const Car = function(make, speed) {
      this.make = make;
      this.speed = speed;
  };

  Car.prototype.accelerate = function() {
      this.speed += 10;     
      console.log(this.speed);
 };
  Car.prototype.brake = function() {
      this.speed -= 5;
     console.log(this.speed);
 };

 const car5 = new Car('BMW', 120);
 const car2 = new Car('Mercedes', 95);

 console.log(car5, car2);
 car5.accelerate();
 car5.accelerate();
 car5.accelerate();
 car5.brake();
 car5.brake();
 car5.brake();
 car2.accelerate();
 car2.accelerate();
 car2.accelerate();

console.log('--------------------- challenge 2----------------------')
class Car3{
  constructor(car, speed){
    this.car = car;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
};

const car1 = new Car3('Ford', 120);
car1.accelerate();
car1.brake();
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1);

//Create your own drumset
class Drumkit{
  constructor(symbal1, symbal2, tom){
    this.symbal1 = symbal1;
    this.symbal2 = symbal2;
    this.tom = tom;
  }

  playS1(){
    console.log(`${this.symbal1} was hitted`)
  }

  playS2(){
    console.log(`${this.symbal2} was hitted`)
  }

  tom1(){
    console.log(`${this.tom} was hitted`)
  }

  get tom() {
    return this._tom;
  }

  set tom(tom) {
    this._tom = tom;
  }
};

const drumkit1 = new Drumkit('Paiste', 'Zildjiang', 'Evans');

drumkit1.playS1();
drumkit1.playS2();
drumkit1.tom1();
console.log(drumkit1.tom)
drumkit1.tom = 'Remo'
console.log(drumkit1.tom)

console.log('--------------------- challenge 3----------------------')

const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo){
  this.charge = chargeTo;
};

EV.prototype.accelerate = function(){
  this.charge -= 1;
  this.speed += 20;
  console.log(`${this.make} is going ${this.speed} and charge is ${this.charge}`);
};

const carEV = new EV('Tesla', 120, 23);
console.log(carEV);

carEV.accelerate();
carEV.brake();
carEV.accelerate();
carEV.accelerate();
carEV.chargeBattery(90);
console.log(carEV);