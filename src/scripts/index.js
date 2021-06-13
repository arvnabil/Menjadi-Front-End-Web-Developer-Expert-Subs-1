import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

console.log('Hello Coders! :)');

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

const foodElement = document.querySelector('food-list');
foodElement.setAttribute("class", "foods");

function limitStrLength (text, max_length){
    if(text.length > max_length - 3){
        return text.substring(0, max_length).trimEnd() + "..."
    }
    else{
        return text
    }
}

data.restaurants.forEach(item => {
    var desc = limitStrLength(item.description, 200)
    const food = document.createElement('food');
    food.setAttribute("class", "food-item");
    food.innerHTML = `
    <img class="food-item_thumbnail"
         src="${item.pictureId}"
         alt="${item.name}">
    <div class="food-item_content">
        <h1 class="food-item_title"><a href="#">${item.name}</a></h1>
        <p>City : ${item.city}</p>
        <p>Rating : ${item.rating}</p>
        <p class="food-item_description">${desc}</p>
    </div>
    `;
    foodElement.appendChild(food);
})
