const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const refreshBtn = document.getElementById("refreshButton");
const copyBtn = document.getElementById("copyButton");

/* FETCH QUOTE */

async function getQuote(){

try{

const response = await fetch("https://dummyjson.com/quotes/random");

const data = await response.json();

quoteText.innerText = `"${data.quote}"`;
authorText.innerText = `- ${data.author}`;

}

catch(error){

quoteText.innerText = "Failed to fetch quote.";
authorText.innerText = "";

console.log(error);

}

}

/* NEW QUOTE BUTTON */

refreshBtn.addEventListener("click", getQuote);

/* COPY QUOTE */

copyBtn.addEventListener("click", ()=>{

const text = quoteText.innerText + " " + authorText.innerText;

navigator.clipboard.writeText(text);

copyBtn.innerText = "Copied!";

setTimeout(()=>{
copyBtn.innerText = "Copy Quote";
},1500);

});

/* THEME SWITCH */

function setTheme(mode){

if(mode === "dark"){

document.body.classList.add("dark");
localStorage.setItem("theme","dark");

}

else if(mode === "light"){

document.body.classList.remove("dark");
localStorage.setItem("theme","light");

}

else{

localStorage.removeItem("theme");

if(window.matchMedia("(prefers-color-scheme: dark)").matches){
document.body.classList.add("dark");
}
else{
document.body.classList.remove("dark");
}

}

}

/* LOAD SAVED THEME */

function loadTheme(){

const saved = localStorage.getItem("theme");

if(saved === "dark"){
document.body.classList.add("dark");
}

}

loadTheme();

/* LOAD QUOTE WHEN PAGE OPENS */

getQuote();