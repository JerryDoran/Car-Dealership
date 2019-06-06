/***** HIDE THE PRELOADER *****/
window.addEventListener('load', () =>
  document.querySelector('.preloader').classList.add('hide-preloader')
);

/* This function will automatically get invoked when page loads */
const CreateCars = (() => {
  const cars = [];

  // CAR CLASS
  class Car {
    constructor(
      make,
      country,
      img,
      special,
      model,
      price,
      type,
      transmission,
      gas
    ) {
      this.make = make;
      this.country = country;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.transmission = transmission;
      this.gas = gas;
    }
  }

  // CAR CREATION FACTORY
  function makeCar(
    // Set default values to some of the parameters
    make,
    country,
    img = '/images/banner.jpg',
    special = true,
    model = 'new model',
    price = 10000,
    type = 'sedan',
    transmission = 'automatic',
    gas = '50'
  ) {
    const car = new Car(
      make,
      country,
      img,
      special,
      model,
      price,
      type,
      transmission,
      gas
    );
    cars.push(car);
  }

  // Produce the cars in the factory
  function produceCars() {
    makeCar('mercedes', 'german', 'images/car-german-3.jpg', true);
    makeCar('mercedes', 'german', 'images/car-german-4.jpg', true);
    makeCar('bmw', 'german', 'images/car-german-1.jpg', true, 'some model');
    makeCar('bmw', 'german', 'images/car-german-2.jpg', false, 'some model');
    makeCar(
      'mercedes',
      'german',
      'images/car-german-5.jpg',
      false,
      'other model'
    );
    makeCar(
      'camero',
      'american',
      'images/car-american-1.jpg',
      true,
      'some model'
    );
    makeCar(
      'chevy',
      'american',
      'images/car-american-2.jpg',
      false,
      'some model'
    );
    makeCar(
      'corevette',
      'american',
      'images/car-american-3.jpg',
      false,
      'some model'
    );
    makeCar(
      'mustang',
      'american',
      'images/car-american-4.jpg',
      true,
      'some model'
    );
    makeCar(
      'corvette',
      'american',
      'images/car-american-5.jpg',
      false,
      'some model'
    );
  }

  produceCars();
  // console.log(cars);

  // Special cars
  const specialCars = cars.filter(car => car.special === true);
  // console.log(specialCars);

  return {
    cars,
    specialCars
  };
})();

// console.log(CreateCars.cars);
// console.log(CreateCars.specialCars);

const DisplaySpecialCars = (CreateCars => {
  const specialCars = CreateCars.specialCars;
  // console.log(specialCars);

  const info = document.querySelector('.featured-info');

  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = '';

    let data = '';

    specialCars.forEach(car => {
      data += `<div
      class="featured-item my-3 d-flex p-2 text-capitalized align-items-baseline flex-wrap">
      <span class="featured-icon mr-2">
        <i class="fas fa-car"></i>
      </span>
      <h5 class="font-weight-bold mx-1">${car.make}</h5>
      <h5 class="mx-1">${car.model}</h5>
    </div>`;
    });
  });
})(CreateCars);
