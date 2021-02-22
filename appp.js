/*'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//let locationArr = ['Seattle','Tokyo','Dubai','Paris','Lima'];

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
  const parentElement = document.getElementById( 'Sales Data' );
  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );

  const tableElement = document.createElement ( 'table' );
  articleElement.appendChild( tableElement );

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
  const parentElement = document.getElementById( 'Sales Data' );
  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );

  const tableElement = document.createElement ( 'table' );
  articleElement.appendChild( tableElement );
  //const parentElement = document.getElementById( 'table' );

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

  const parentElement = document.getElementById( 'Sales Data' );
  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );

  //const parentElement = document.getElementById( 'table' );
  const tableElement = document.createElement ( 'table' );
  articleElement.appendChild( tableElement );

  const tr1Element = document.createElement( 'tr' );
  tableElement.appendChild( tr1Element );

  const tdElement = document.createElement( 'th' );
  tr1Element.appendChild( tdElement );
  tdElement.textContent = 'Total';

}




function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

 
  
const Seattle =  {

header();
const Seattle = new Locations( 'Seattle',23,65,6.3 );
Seattle.getCookiesSales();
//Seattle.getcustomer();
Seattle.render();

const Tokyo = new Locations ( 'Tokyo',3,24 ,1.2 );
Tokyo.getCookiesSales();
//Tokyo.getcustomer();
Tokyo.render();

const Dubai = new Locations ( 'Dubai', 11 ,38 ,3.7 );
Dubai.getCookiesSales();
//Dubai.getcustomer();
Dubai.render();

const Paris =  new Locations ( 'Paris', 20 , 38 , 2.3 );
Paris.getCookiesSales();
//Paris.getcustomer();
Paris.render();

const Lima = new Locations ( 'Lima' ,2,16, 4.6 );
Lima.getCookiesSales();
//Lima.getcustomer();
Lima.render();
footer();



/*const Seattle =  {


  location:'Seattle',
  minNumberOfCustomer : 23 ,
  maxNumberOfCustomer : 65 ,
  averageNumberOfCookiespurchased : 6.3,
  customerPerHour :[] ,
  Sales :[] ,
  total : 0 ,

  getCookiesSales : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let cookies =Math.ceil( generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer ) * this.averageNumberOfCookiespurchased );
      this.Sales.push( cookies );
      this.total +=cookies;
      console.log( cookies );
    }
  },

  getcustomer : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let customer= generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer );
      this.customerPerHour.push( customer );
      console.log( customer );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Sales Data' );
    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < hours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total}`;

  }


};

Seattle.getCookiesSales();
Seattle.getcustomer();
Seattle.render();
console.log( Seattle );

const Tokyo =  {

  location:'Tokyo',
  minNumberOfCustomer : 3 ,
  maxNumberOfCustomer : 24 ,
  averageNumberOfCookiespurchased : 1.2,
  customerPerHour :[] ,
  Sales :[] ,
  total : 0 ,


  getCookiesSales : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let cookies =Math.ceil( generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer ) * this.averageNumberOfCookiespurchased );
      this.Sales.push( cookies );
      this.total +=cookies;
      console.log( cookies );
    }
  },

  getcustomer : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let customer= generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer );
      this.customerPerHour.push( customer );
      console.log( customer );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Sales Data' );
    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < hours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total}`;

  }


};

Tokyo.getCookiesSales();
Tokyo.getcustomer();
Tokyo.render();
console.log( Tokyo );

const Dubai =  {

  location:'Dubai',
  minNumberOfCustomer : 11 ,
  maxNumberOfCustomer : 38 ,
  averageNumberOfCookiespurchased : 3.7,
  customerPerHour :[] ,
  Sales :[] ,
  total : 0 ,


  getCookiesSales : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let cookies =Math.ceil( generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer ) * this.averageNumberOfCookiespurchased );
      this.Sales.push( cookies );
      this.total +=cookies;
      console.log( cookies );
    }
  },

  getcustomer : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let customer= generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer );
      this.customerPerHour.push( customer );
      console.log( customer );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Sales Data' );
    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < hours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total}`;

  }


};

Dubai.getCookiesSales();
Dubai.getcustomer();
Dubai.render();
console.log( Dubai );

const Paris =  {

  location:'Paris',
  minNumberOfCustomer : 20 ,
  maxNumberOfCustomer : 38 ,
  averageNumberOfCookiespurchased : 2.3,
  customerPerHour :[] ,
  Sales :[] ,
  total : 0 ,


  getCookiesSales : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let cookies =Math.ceil( generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer ) * this.averageNumberOfCookiespurchased );
      this.Sales.push( cookies );
      this.total +=cookies;
      console.log( cookies );
    }
  },

  getcustomer : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let customer= generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer );
      this.customerPerHour.push( customer );
      console.log( customer );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Sales Data' );
    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < hours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total}`;

  }


};

Paris.getCookiesSales();
Paris.getcustomer();
Paris.render();
console.log( Paris );

const Lima =  {

  location:'Lima',
  minNumberOfCustomer : 2 ,
  maxNumberOfCustomer : 16 ,
  averageNumberOfCookiespurchased : 4.6,
  customerPerHour :[] ,
  Sales :[] ,
  total : 0 ,


  getCookiesSales : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let cookies =Math.ceil( generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer ) * this.averageNumberOfCookiespurchased );
      this.Sales.push( cookies );
      this.total +=cookies;
      console.log( cookies );
    }
  },

  getcustomer : function () {
    for ( let index = 0; index < hours.length; index++ ) {
      let customer= generateRandomNumber( this.minNumberOfCustomer, this.maxNumberOfCustomer );
      this.customerPerHour.push( customer );
      console.log( customer );
    }
  },

  render: function() {
    const parentElement = document.getElementById( 'Sales Data' );
    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.location;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < hours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total}`;

  }


};

Lima.getCookiesSales();
Lima.getcustomer();
Lima.render();
console.log( Lima );
*/

*/
