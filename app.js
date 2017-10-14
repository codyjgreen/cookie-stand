'use strict';
// store hours

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  },

  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },

  calcTotalCookies: function(){
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total ' + sum);
  },

  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total cookies: ' + this.totalCookies[0];
    firstandpike.appendChild(total);
  }

};
firstAndPike.render();

var seatacairport = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
  calcRandCustByHour: function() {
    for(var l = 0; l < hours.length; l++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[l]);

    }
  },
  calcCookiesSoldByHour: function() {
    for(var m = 0; m < hours.length; m++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookieSoldPerHour * this.randCustByHour[m]));
      console.log(this.cookiesSoldByHour[m]);
    }
  },
  calcTotalCookies: function(){
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total ' + sum);
  },

  render: function() {
    var airport = document.getElementById('airport');
    var seatac = document.getElementById('seatac');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');

    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for(var n = 0; n < hours.length; n++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[n] + ': ' + this.cookiesSoldByHour[n] + ' cookies';
      console.log(liEl);
      airport.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total cookies: ' + this.totalCookies[0];
    airport.appendChild(total);
  }
};

seatacairport.render();

var seattlecenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
  calcRandCustByHour: function() {
    for(var o = 0; o < hours.length; o++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[o]);

    }
  },
  calcCookiesSoldByHour: function() {
    for(var p = 0; p < hours.length; p++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookieSoldPerHour * this.randCustByHour[p]));
      console.log(this.cookiesSoldByHour[p]);
    }
  },
  calcTotalCookies: function(){
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total ' + sum);
  },

  render: function() {
    var centerli = document.getElementById('centerli');
    var seaCenter = document.getElementById('seaCenter');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');

    h3El.textContent = this.name;
    seaCenter.appendChild(h3El);
    for(var q = 0; q < hours.length; q++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[q] + ': ' + this.cookiesSoldByHour[q] + ' cookies';
      console.log(liEl);
      centerli.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total cookies: ' + this.totalCookies[0];
    centerli.appendChild(total);
  }
};

seattlecenter.render();

var capitolhill = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
  calcRandCustByHour: function() {
    for(var o = 0; o < hours.length; o++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[o]);

    }
  },
  calcCookiesSoldByHour: function() {
    for(var p = 0; p < hours.length; p++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookieSoldPerHour * this.randCustByHour[p]));
      console.log(this.cookiesSoldByHour[p]);
    }
  },
  calcTotalCookies: function(){
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total ' + sum);
  },

  render: function() {
    var capli = document.getElementById('capli');
    var capHill = document.getElementById('capHill');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');

    h3El.textContent = this.name;
    capHill.appendChild(h3El);
    for(var q = 0; q < hours.length; q++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[q] + ': ' + this.cookiesSoldByHour[q] + ' cookies';
      console.log(liEl);
      capli.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total cookies: ' + this.totalCookies[0];
    capli.appendChild(total);
  }
};

capitolhill.render();

var alki = {
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSoldPerHour: 4.6,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: [],
  calcRandCustByHour: function() {
    for(var o = 0; o < hours.length; o++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[o]);

    }
  },
  calcCookiesSoldByHour: function() {
    for(var p = 0; p < hours.length; p++) {
      this.cookiesSoldByHour.push(Math.floor(this.avgCookieSoldPerHour * this.randCustByHour[p]));
      console.log(this.cookiesSoldByHour[p]);
    }
  },
  calcTotalCookies: function(){
    var sum = 0;
    for(var l = 0; l < hours.length; l++) {
      sum += (this.randCustByHour[l] + this.cookiesSoldByHour[l]);
    }
    this.totalCookies.push(sum);
    console.log('Total ' + sum);
  },

  render: function() {
    var alkili = document.getElementById('alkili');
    var alki = document.getElementById('alki');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    var h3El = document.createElement('h3');

    h3El.textContent = this.name;
    alki.appendChild(h3El);
    for(var q = 0; q < hours.length; q++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[q] + ': ' + this.cookiesSoldByHour[q] + ' cookies';
      console.log(liEl);
      alkili.appendChild(liEl);
    }
    var total = document.createElement('li');
    total.textContent = 'Total cookies: ' + this.totalCookies[0];
    alkili.appendChild(total);
  }
};

alki.render();
