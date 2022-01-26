"use strict";


function employee(id, fullName, department, level, ImageURL, salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.ImageURL = `./images/${this.id}.PNG`;
    this.salary = this.calcSalary(this.level);
  }



employee.prototype.calcSalary = function (lvl) {
    let max;
    let min;
    let tax = sal * 0.75;
  
    if (lvl == "junior") {
      min = 500;
      max = 1000;
    }
  
    if (lvl == "senior") {
      min = 1500;
      max = 2000;
    }
  
    if (lvl == "Mid-Senior") {
      min = 1000;
      max = 1500;
    }
  
    let sal = Math.floor(Math.random() * (max - min + 1) + min) - tax;
  
    return sal;
  };

  function store(){ //stores items in the localStorage
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value; //gets the key from the user

    const car = {
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key,JSON.stringify(car));  
    //converting object to string
}