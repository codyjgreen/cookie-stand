'use strict';
//create an array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//First and Pike Location
var firstAndPike = {
  name: 'First and Pike',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    //DOM manipulation irl!!!
    //create a vairable to abe able to append an item to our list
    //create a new h3 element
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      //stepping through our hours array
      var liEl = document.createElement('li');
      //creating li elemnts with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    }
  }

};
firstAndPike.render();

var seatacairport = {
  name: 'SeaTac Airport',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var l = 0; l < hours.length; l++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[l]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var m = 0; m < hours.length; m++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[m]));
      console.log(this.cookiesSoldByHour[m]);
    }
  },
  render: function() {
    var airport = document.getElementById('airport');
    var seatac = document.getElementById('seatac');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');

    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for(var n = 0; n < hours.length; n++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[n] + ': ' + this.cookiesSoldByHour[n] + ' cookies';
      console.log(liEl);
      airport.appendChild(liEl);
    }
  }
};

seatacairport.render();

var seattlecenter = {
  name: 'Seattle Center',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var o = 0; o < hours.length; o++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[o]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var p = 0; p < hours.length; p++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[p]));
      console.log(this.cookiesSoldByHour[p]);
    }
  },
  render: function() {
    var centerli = document.getElementById('centerli');
    var seaCenter = document.getElementById('seaCenter');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');

    h3El.textContent = this.name;
    seaCenter.appendChild(h3El);
    for(var q = 0; q < hours.length; q++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[q] + ': ' + this.cookiesSoldByHour[q] + ' cookies';
      console.log(liEl);
      centerli.appendChild(liEl);
    }
  }
};

seattlecenter.render();

var capitolhill = {
  name: 'Capitol Hill',
  //creating my key value pairs inside of my object they are called properties
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for(var o = 0; o < hours.length; o++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[o]);

    }
  },
  //method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var p = 0; p < hours.length; p++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[p]));
      console.log(this.cookiesSoldByHour[p]);
    }
  },
  render: function() {
    var capli = document.getElementById('capli');
    var capHill = document.getElementById('capHill');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');

    h3El.textContent = this.name;
    capHill.appendChild(h3El);
    for(var q = 0; q < hours.length; q++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[q] + ': ' + this.cookiesSoldByHour[q] + ' cookies';
      console.log(liEl);
      capli.appendChild(liEl);
    }
  }
};

capitolhill.render();
