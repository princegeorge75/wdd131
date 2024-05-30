const textCount = document.getElementById("count");

let countLocalStorage = Number(window.localStorage.getItem("countingForm")) || 0;



function sumLocalStorage(){
    countLocalStorage ++;
    window.localStorage.setItem("countingForm", countLocalStorage);
    textCount.textContent = `You have submitted a feedback ${countLocalStorage} time(s)`;
}

const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('modified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

sumLocalStorage();