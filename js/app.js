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
    makeCar('mercedes', 'german', 'images/car-german-4.jpg', false);
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
      true,
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

// Immediately invoked function expression (IIFE)
const DisplaySpecialCars = (CreateCars => {
  const specialCars = CreateCars.specialCars;
  // console.log(specialCars);

  const info = document.querySelector('.featured-info');

  // Document Loaded Event
  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = '';

    let data = '';

    specialCars.forEach(car => {
      data += `<div class="featured-item my-3 d-flex p-2 text-capitalized align-items-baseline flex-wrap">
      <span data-img="${car.img}" class="featured-icon mr-2">
        <i class="fas fa-car"></i>
      </span>
      <h5 class="font-weight-bold mx-1">${car.make}</h5>
      <h5 class="mx-1">${car.model}</h5>
    </div>`;
    });
    info.innerHTML = data;
  });

  // Change image
  info.addEventListener('click', event => {
    if (event.target.parentElement.classList.contains('featured-icon')) {
      const img = event.target.parentElement.dataset.img;
      document.querySelector('.featured-photo').src = img;
    }
  });
})(CreateCars);

// Immediately invoked function expression (IIFE)
const DisplayAllCars = (CreateCars => {
  const cars = CreateCars.cars;
  const inventory = document.querySelector('.inventory-container');

  // Content loaded event listener
  document.addEventListener('DOMContentLoaded', () => {
    inventory.innerHTML = '';

    let output = '';
    cars.forEach(car => {
      output += `<!-- SINGLE CAR CARD -->
      <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${
        car.country
      }">
        <div class="card car-card">
          <!-- CARD IMAGE -->
          <img
            src="${car.img}"
            class="card-img-top car-img"
            alt=""
          />
          <!-- CARD BODY -->
          <div class="card-body">
            <!-- PARENT DIV SET UP AS FLEX CONTAINER -->
            <div class="car-info d-flex justify-content-between">
              <!-- FIRST FLEX CHILD -->
              <div class="car-text text-uppercase">
                <h6 class="font-weight-bold">${car.make}</h6>
                <h6>${car.model}</h6>
              </div>
              <!-- SECOND FLEX CHILD -->
              <h5 class="car-value align-self-center py-2 px-3">
                $
                <span class="car-price">${car.price}</span>
              </h5>
            </div>
          </div>
          <!-- SET UP THE CARD FOOTER -->
          <div
            class="card-footer text-capitalize d-flex justify-content-between"
          >
            <p>
              <span><i class="fas fa-car"></i></span> ${car.type}
            </p>
            <p>
              <span><i class="fas fa-cogs"></i></span> ${car.transmission}
            </p>
            <p>
              <span><i class="fas fa-gas-pump"></i></span> ${car.gas}
            </p>
          </div>
        </div>
      </div>`;
    });

    inventory.innerHTML = output;
  });
})(CreateCars);

// Immediately invoked function
const FilterCars = (() => {
  const filter = document.querySelectorAll('.filter-btn');

  filter.forEach(btn => {
    btn.addEventListener('click', event => {
      const value = event.target.dataset.filter;
      const singleCar = document.querySelectorAll('.single-car');

      singleCar.forEach(car => {
        if (value === 'all') {
          car.style.display = 'block';
        } else {
          !car.classList.contains(value)
            ? (car.style.display = 'none')
            : (car.style.display = 'block');
        }
      });
    });
  });
})();
