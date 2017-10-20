'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

var locations = [];

var cookiesSoldByHour = [];
console.log(cookiesSoldByHour);
var cookiesByHourTotal = [];
console.log(cookiesByHourTotal);

var netTotal = 0;

makeHeaderRow();
new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
makeTotalsRow();

function Store(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour){
  var sumByLocation = 0;
  var sumByHour = 0;
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];

  this.totalCookiesByLocation = [];
  this.totalCookiesByHour = [];
  locations.push(this.name);
  cookiesSoldByHour.push(this.cookiesSoldByHour);
  for(var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
  }

  for(var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
    sumByLocation += (this.cookiesSoldByHour[j]);
  }
  this.totalCookiesByLocation.push(sumByLocation);
  var cookiestands = document.getElementById('cookiestands');
  var box = document.createElement('tr');

  box.textContent = this.name;
  for(var i = 0; i <= hours.length; i++){
    var data = document.createElement('td');
    data.textContent = this.cookiesSoldByHour[i];
    box.appendChild(data);
  }
  data.textContent = this.totalCookiesByLocation;
  cookiestands.appendChild(box);
}

function makeHeaderRow(){
  var cookiestands = document.getElementById('cookiestands');
  var box = document.createElement('tr');
  box.textContent = ' Locations ';
  for(var i = 0; i <= hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    box.appendChild(thEl);
  }
  thEl.textContent = 'Total';
  cookiestands.appendChild(box);
}

function makeTotalsRow() {
  cookiesByHourTotal.length = 0;
  var cookiestands = document.getElementById('cookiestands');
  var box = document.createElement('tr');
  box.setAttribute('id','total');
  box.textContent = 'Total';
  var total = 0;
  for(var j = 0; j < hours.length; j++){
    var byHour = 0;
    var data = document.createElement('td');
    for(var p = 0; p < locations.length; p++){
      byHour += (cookiesSoldByHour[p][j]);
    }
    cookiesByHourTotal.push(byHour);
    data.textContent = (cookiesByHourTotal[j]);
    box.appendChild(data);
    cookiestands.appendChild(box);
  }
  cookiestands.appendChild(box);
  for(var i = 0; i < hours.length; i++) {
    total += (cookiesByHourTotal[i]);
  }
  var data = document.createElement('td');
  data.textContent = (total);
  box.appendChild(data);
  cookiestands.appendChild(box);
  console.log('total: ' + total);
}

document.getElementById('newLocation').addEventListener('click', function() {
  var element = document.getElementById('total');
  element.parentElement.removeChild(element);

  var storeName = document.getElementById('storename').value;
  var storeMin = document.getElementById('mincust').value;
  var storeMax = document.getElementById('maxcust').value;
  var storeAvg = document.getElementById('avgcookies').value;

  event.preventDefault();
  new Store(storeName, storeMin, storeMax, storeAvg);

  event.preventDefault();
  makeTotalsRow();
});
