import './styles.css';
import { createMainDiv } from './home';
import { createMenu } from './menu';
import { createAboutDiv } from './about';
const container = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
home.addEventListener('click', function(){
container.innerHTML="";
container.appendChild(createMainDiv());
});
menu.addEventListener('click', function(){
container.innerHTML="";
container.appendChild(createMenu());
});
about.addEventListener('click', function(){
container.innerHTML="";
container.appendChild(createAboutDiv());
});
container.appendChild(createMainDiv());
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();