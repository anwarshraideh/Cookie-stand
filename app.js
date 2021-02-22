'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

const parentElement = document.getElementById( 'Sales Data' );
const articleElement = document.createElement( 'article' );
parentElement.appendChild( articleElement );
const tableElement = document.createElement ( 'table' );
articleElement.appendChild( tableElement );


function Locations( location ,minNumberOfCustomer ,maxNumberOfCustomer,averageNumberOfCookiespurchased ) {
  this.location=location ;
  this.minNumberOfCustomer = minNumberOfCustomer;
  this.maxNumberOfCustomer = maxNumberOfCustomer;
  this.averageNumberOfCookiespurchased = averageNumberOfCookiespurchased;
  this.customerPerHour = [];
  this.Sales = [];
  this.total= 0;

}

Locations.prototype.getCookiesSales =function () {
  for ( let index = 0; index < hours.length; index++ ) {
    // eslint-disable-next-line no-undef
    let cookies =Math.ceil( generateRandomNumber ( this.minNumberOfCustomer, this.maxNumberOfCustomer ) * this.averageNumberOfCookiespurchased );
    this.Sales.push( cookies );
    this.total +=cookies;
    console.log( cookies );
  }
};

Locations.prototype.getcustomer = function () {
  for ( let index = 0; index < hours.length; index++ ) {
    let customer= generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer );
    this.customerPerHour.push( customer );
    console.log( customer );
  }
};

function header () {

  const firstRowElement = document.createElement ( 'tr' );
  tableElement.appendChild ( firstRowElement );

  const th1Element = document.createElement( 'th' );
  firstRowElement.appendChild( th1Element );
  th1Element.textContent = 'location';

  for ( let index = 0; index < hours.length; index++ ) {
    const thElement = document.createElement( 'th' );
    firstRowElement.appendChild( thElement );
    thElement.textContent = hours[index] ;
  }

  const finalthElement = document.createElement( 'th' );
  firstRowElement.appendChild( finalthElement );
  finalthElement.textContent = 'Daily location total';

}


Locations.prototype.render = function() {


  const tr2Element = document.createElement ( 'tr' );
  tableElement.appendChild( tr2Element );

  const tdElement = document.createElement( 'td' );
  tr2Element.appendChild( tdElement );
  tdElement.textContent = this.location ;

  for ( let index = 0; index < hours.length; index++ ) {
    const tdElement = document.createElement( 'td' );
    tr2Element.appendChild( tdElement );
    tdElement.textContent = this.Sales[index];
  }
  const finaltdElement  = document.createElement( 'td' );
  tr2Element.appendChild( finaltdElement );
  finaltdElement.textContent = this.total;

};

function footer () {
  let locationArr = [Seattle,Tokyo,Dubai,Paris,Lima];
  let totalOfHour = 0;
  let totalOftotal=0;


  const tr3Element = document.createElement( 'tr' );
  tableElement.appendChild( tr3Element );

  const th3Element = document.createElement( 'th' );
  tr3Element.appendChild( th3Element );
  th3Element.textContent = 'Total';

  for ( let i = 0; i < hours.length; i++ )
  {

    const th4Element = document.createElement( 'th' );
    tr3Element.appendChild( th4Element );

    for ( let z = 0 ;z < locationArr.length;z++ ) {

      totalOfHour = totalOfHour + locationArr[z].Sales[i];
    }

    th4Element.textContent = totalOfHour;

  }


  const th5Element = document.createElement( 'th' );
  tr3Element.appendChild( th5Element );
  for ( let index = 0; index < locationArr.length; index++ ) {

    totalOftotal = totalOftotal + locationArr[index].total;
  }

  th5Element.textContent = totalOftotal;


}



function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

header();
const Seattle = new Locations( 'Seattle',23,65,6.3 );
Seattle.getCookiesSales();
Seattle.getcustomer();
Seattle.render();

const Tokyo = new Locations ( 'Tokyo',3,24 ,1.2 );
Tokyo.getCookiesSales();
Tokyo.getcustomer();
Tokyo.render();

const Dubai = new Locations ( 'Dubai', 11 ,38 ,3.7 );
Dubai.getCookiesSales();
Dubai.getcustomer();
Dubai.render();

const Paris =  new Locations ( 'Paris', 20 , 38 , 2.3 );
Paris.getCookiesSales();
Paris.getcustomer();
Paris.render();

const Lima = new Locations ( 'Lima' ,2,16, 4.6 );
Lima.getCookiesSales();
Lima.getcustomer();
Lima.render();
footer();
