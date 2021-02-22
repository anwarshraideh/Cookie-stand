'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let total = 0 ;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  
const Seattle =  {

    location:'Seattle',
    minNumberOfCustomer : 23 ,
    maxNumberOfCustomer : 65 ,
    averageNumberOfCookiespurchased : 6.3,
    customerPerHour :[] ,
    Sales :[] ,

    getCookiesSales : function () {
        for (let index = 0; index < hours.length; index++) {
            let cookies =Math.ceil(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased);
            this.Sales.push(cookies);
            total +=cookies;
            console.log(cookies);
        }
    },

    getcustomer : function () {
        for (let index = 0; index < hours.length; index++) {
            let customer= generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer);
            this.customerPerHour.push(customer);
            console.log(customer);
        }
    },

    render: function() {
        const parentElement = document.getElementById('Sales Data');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

       const h2Element = document.createElement('h2');
       articleElement.appendChild(h2Element);
       h2Element.textContent = this.location;

       const ulElement = document.createElement('ul');
       articleElement.appendChild(ulElement);

       for(let i = 0; i < hours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total : ${total}`;

      }


};

Seattle.getCookiesSales();
Seattle.getcustomer();
Seattle.render();
console.log(Seattle);

const Tokyo =  {

    location:'Tokyo',
    minNumberOfCustomer : 3 ,
    maxNumberOfCustomer : 24 ,
    averageNumberOfCookiespurchased : 1.2,
    customerPerHour :[] ,
    Sales :[] ,

    getCookiesSales : function () {
        for (let index = 0; index < hours.length; index++) {
            let cookies =Math.ceil(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased);
            this.Sales.push(cookies);
            total +=cookies;
            console.log(cookies);
        }
    },

    getcustomer : function () {
        for (let index = 0; index < hours.length; index++) {
            let customer= generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer);
            this.customerPerHour.push(customer);
            console.log(customer);
        }
    },

    render: function() {
        const parentElement = document.getElementById('Sales Data');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

       const h2Element = document.createElement('h2');
       articleElement.appendChild(h2Element);
       h2Element.textContent = this.location;

       const ulElement = document.createElement('ul');
       articleElement.appendChild(ulElement);

       for(let i = 0; i < hours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total : ${total}`;

      }


};

Tokyo.getCookiesSales();
Tokyo.getcustomer();
Tokyo.render();
console.log(Tokyo);

const Dubai =  {

    location:'Dubai',
    minNumberOfCustomer : 11 ,
    maxNumberOfCustomer : 38 ,
    averageNumberOfCookiespurchased : 3.7,
    customerPerHour :[] ,
    Sales :[] ,

    getCookiesSales : function () {
        for (let index = 0; index < hours.length; index++) {
            let cookies =Math.ceil(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased);
            this.Sales.push(cookies);
            total +=cookies;
            console.log(cookies);
        }
    },

    getcustomer : function () {
        for (let index = 0; index < hours.length; index++) {
            let customer= generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer);
            this.customerPerHour.push(customer);
            console.log(customer);
        }
    },

    render: function() {
        const parentElement = document.getElementById('Sales Data');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

       const h2Element = document.createElement('h2');
       articleElement.appendChild(h2Element);
       h2Element.textContent = this.location;

       const ulElement = document.createElement('ul');
       articleElement.appendChild(ulElement);

       for(let i = 0; i < hours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total : ${total}`;

      }


};

Dubai.getCookiesSales();
Dubai.getcustomer();
Dubai.render();
console.log(Dubai);

const Paris =  {

    location:'Paris',
    minNumberOfCustomer : 20 ,
    maxNumberOfCustomer : 38 ,
    averageNumberOfCookiespurchased : 2.3,
    customerPerHour :[] ,
    Sales :[] ,

    getCookiesSales : function () {
        for (let index = 0; index < hours.length; index++) {
            let cookies =Math.ceil(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased);
            this.Sales.push(cookies);
            total +=cookies;
            console.log(cookies);
        }
    },

    getcustomer : function () {
        for (let index = 0; index < hours.length; index++) {
            let customer= generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer);
            this.customerPerHour.push(customer);
            console.log(customer);
        }
    },

    render: function() {
        const parentElement = document.getElementById('Sales Data');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

       const h2Element = document.createElement('h2');
       articleElement.appendChild(h2Element);
       h2Element.textContent = this.location;

       const ulElement = document.createElement('ul');
       articleElement.appendChild(ulElement);

       for(let i = 0; i < hours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total : ${total}`;

      }


};

Paris.getCookiesSales();
Paris.getcustomer();
Paris.render();
console.log(Paris);

const Lima =  {

    location:'Lima',
    minNumberOfCustomer : 2 ,
    maxNumberOfCustomer : 16 ,
    averageNumberOfCookiespurchased : 4.6,
    customerPerHour :[] ,
    Sales :[] ,

    getCookiesSales : function () {
        for (let index = 0; index < hours.length; index++) {
            let cookies =Math.ceil(generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased);
            this.Sales.push(cookies);
            total +=cookies;
            console.log(cookies);
        }
    },

    getcustomer : function () {
        for (let index = 0; index < hours.length; index++) {
            let customer= generateRandomNumber(this.minNumberOfCustomer, this.maxNumberOfCustomer);
            this.customerPerHour.push(customer);
            console.log(customer);
        }
    },

    render: function() {
        const parentElement = document.getElementById('Sales Data');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

       const h2Element = document.createElement('h2');
       articleElement.appendChild(h2Element);
       h2Element.textContent = this.location;

       const ulElement = document.createElement('ul');
       articleElement.appendChild(ulElement);

       for(let i = 0; i < hours.length; i++) {
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${hours[i]} : ${this.Sales[i]} cookies `;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total : ${total}`;

      }


};

Lima.getCookiesSales();
Lima.getcustomer();
Lima.render();
console.log(Lima);


