'use strict';
/*
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let total ;
const Seattle ={

   location:'Seattle',
   minNumberOfCustomer : 23 ,
   maxNumberOfCustomer : 65 ,
   averageNumberOfCookiespurchased : 6.3,
   
   NumberOfCookiesPurchased :[],


     getNumberOfCookiesPurchased: function() {

        total=0;

      for (let index = 0; index < hours.length; index++) {
        this.NumberOfCookiesPurchased.push(Math.ceil( getRandomInt(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased));
        console.log(this.NumberOfCookiesPurchased);
        total = total + this.NumberOfCookiesPurchased[index];
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
        liElement.textContent = `${hours[i]} : ${this.NumberOfCookiesPurchased[i]} cookies `;
      }
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `Total : ${total}`;

      }
    
}; 

Seattle.getNumberOfCookiesPurchased();
Seattle.render();


const Tokyo ={

    location:'Tokyo',
    minNumberOfCustomer : 3 ,
    maxNumberOfCustomer : 24 ,
    averageNumberOfCookiespurchased : 1.2,
    
    NumberOfCookiesPurchased :[],
 
 
      getNumberOfCookiesPurchased: function() {
 
         total=0;
 
       for (let index = 0; index < hours.length; index++) {
         this.NumberOfCookiesPurchased.push(Math.ceil( getRandomInt(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased));
         console.log(this.NumberOfCookiesPurchased);
         total = total + this.NumberOfCookiesPurchased[index];
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
         liElement.textContent = `${hours[i]} : ${this.NumberOfCookiesPurchased[i]} cookies `;
       }
       const liElement = document.createElement('li');
       ulElement.appendChild(liElement);
       liElement.textContent = `Total : ${total}`;
 
       }
     
 }; 
 Tokyo.getNumberOfCookiesPurchased();
 Tokyo.render();

 const Dubai ={

    location:'Dubai',
    minNumberOfCustomer : 11 ,
    maxNumberOfCustomer : 38 ,
    averageNumberOfCookiespurchased : 3.7,
    
    NumberOfCookiesPurchased :[],
 
 
      getNumberOfCookiesPurchased: function() {
 
         total=0;
 
       for (let index = 0; index < hours.length; index++) {
         this.NumberOfCookiesPurchased.push(Math.ceil( getRandomInt(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased));
         console.log(this.NumberOfCookiesPurchased);
         total = total + this.NumberOfCookiesPurchased[index];
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
         liElement.textContent = `${hours[i]} : ${this.NumberOfCookiesPurchased[i]} cookies `;
       }
       const liElement = document.createElement('li');
       ulElement.appendChild(liElement);
       liElement.textContent = `Total : ${total}`;
 
       }
     
 }; 
 Dubai.getNumberOfCookiesPurchased();
 Dubai.render();

 const Paris ={ 
     
location:'Paris',
 minNumberOfCustomer : 20 ,
 maxNumberOfCustomer : 38 ,
 averageNumberOfCookiespurchased : 2.3,
 
 NumberOfCookiesPurchased :[],


   getNumberOfCookiesPurchased: function() {

      total=0;

    for (let index = 0; index < hours.length; index++) {
      this.NumberOfCookiesPurchased.push(Math.ceil( getRandomInt(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased));
      console.log(this.NumberOfCookiesPurchased);
      total = total + this.NumberOfCookiesPurchased[index];
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
      liElement.textContent = `${hours[i]} : ${this.NumberOfCookiesPurchased[i]} cookies `;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${total}`;





    }
     
 }; 
 Paris.getNumberOfCookiesPurchased();
 Paris.render();

 const Lima ={

    location:'Lima',
    minNumberOfCustomer : 2 ,
    maxNumberOfCustomer : 16	 ,
    averageNumberOfCookiespurchased : 4.6,
    
    NumberOfCookiesPurchased :[],
 
 
      getNumberOfCookiesPurchased: function() {
 
         total=0;
 
       for (let index = 0; index < hours.length; index++) {
         this.NumberOfCookiesPurchased.push(Math.ceil( getRandomInt(this.minNumberOfCustomer, this.maxNumberOfCustomer) * this.averageNumberOfCookiespurchased));
         console.log(this.NumberOfCookiesPurchased);
         total = total + this.NumberOfCookiesPurchased[index];
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
         liElement.textContent = `${hours[i]} : ${this.NumberOfCookiesPurchased[i]} cookies `;
       }
       const liElement = document.createElement('li');
       ulElement.appendChild(liElement);
       liElement.textContent = `Total : ${total}`;
 
       }
     
 }; 

 Lima.getNumberOfCookiesPurchased();
Lima.render();


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
*/