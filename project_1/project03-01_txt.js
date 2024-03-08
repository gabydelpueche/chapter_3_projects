/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Gabriella Delpueche
      Date:   3/4/24

      Filename: project03-01.js
*/
const menuItems = document.getElementsByClassName('menuItem');

let orderTotal = 0;

document.getElementById('form').addEventListener('change', (e) => {
      console.log(e.target);
      let cost = e.target.value;
      console.log(cost);
      if (e.target.checked) {
            orderTotal += Number(cost);
      } else {
            orderTotal -= Number(cost);
      };
      formatCurrency(orderTotal);
});

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
      return document.getElementById('billTotal').innerHTML = "$" + value.toFixed(2);
 };