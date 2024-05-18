//Variables

const hamButton = document.querySelector("#menu"); //Ham button propertie
const navigation = document.querySelector('nav'); //Nav tab
const currentYear = document.getElementById('currentyear'); //Footer
const lastModified = document.getElementById('modified'); //Footer

const albumContainer = document.querySelector(".album");
const oldMenu = document.getElementById("old")
const home_ = document.getElementById("home");
const newt = document.getElementById("new");
const large = document.getElementById("large");
const small = document.getElementById("small");
const titlePage = document.getElementById("titlePage");

//Hambutton
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Footer
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

//modifications:
//Temples collections:
const temples = [
{
	templeName: "Aba Nigeria",
	location: "Aba, Nigeria",
	dedicated: "2005, August, 7",
	area: 11500,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
	templeName: "Manti Utah",
	location: "Manti, Utah, United States",
	dedicated: "1888, May, 21",
	area: 74792,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/800x500/manti-temple-768192-wallpaper.jpg"
},
{
	templeName: "Payson Utah",
	location: "Payson, Utah, United States",
	dedicated: "2015, June, 7",
	area: 96630,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
	templeName: "Yigo Guam",
	location: "Yigo, Guam",
	dedicated: "2020, May, 2",
	area: 6861,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
	templeName: "Washington D.C.",
	location: "Kensington, Maryland, United States",
	dedicated: "1974, November, 19",
	area: 156558,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
	templeName: "Lima Perú",
	location: "Lima, Perú",
	dedicated: "1986, January, 10",
	area: 9600,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
	templeName: "Mexico City Mexico",
	location: "Mexico City, Mexico",
	dedicated: "1983, December, 2",
	area: 116642,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
	templeName: "Templo de Quetzaltenango",
	location: "Quetzaltenango, Guatemala",
	dedicated: "2011, December, 11",
	area: 8692,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/800x500/quetzaltenango-guatemala-temple-lds-893073-wallpaper.jpg"
},
{
	templeName: "Templo de San Jose",
	location: "Heredia, Costa Rica",
	dedicated: "2000, June, 4",
	area: 995,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-jose-costa-rica/800x500/san-jose-costa-rica-temple-1162688-wallpaper.jpg"
},
{
	templeName: "Salt Lake",
	location: "Salt Lake City, Utah, USA",
	dedicated: "1853, April, 6",
	area: 23505,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
}
];

function displayTemplesAlbum(templeObject) {
	// albumContainer.innerHTML = "";
	templeObject.forEach(index => {

		//Here we are creating the all parts per image.
		const slot = document.createElement("section");
		slot.setAttribute("class", "slots");

		const nameTemple = document.createElement("h3");
		nameTemple.setAttribute("class", "titleTemple");
		nameTemple.textContent = `${index.templeName}`;

		const locationTemple = document.createElement("p");
		locationTemple.textContent = `Location: ${index.location}`;

		const dedicatedDate = document.createElement("p");
		dedicatedDate.textContent = `Dedicated: ${index.dedicated}`;

		const sizeTemple = document.createElement("p");
		sizeTemple.textContent = `Size: ${index.area}`;
		
		const imgTemple = document.createElement("img");
		imgTemple.setAttribute("src", index.imageUrl);
		imgTemple.setAttribute("alt", `temple ${index.nameTemple}`);
		imgTemple.setAttribute("loading", "lazy");
		// imgTemple.setAttribute("width", 1000);
		// imgTemple.setAttribute("height", 350);

		slot.appendChild(nameTemple);
		slot.appendChild(locationTemple);
		slot.appendChild(dedicatedDate);
		slot.appendChild(sizeTemple);
		slot.appendChild(imgTemple);
		
		albumContainer.append(slot);

	});

}



displayTemplesAlbum(temples); //Displaying the temples.;

//Home Button
function hom(){
	albumContainer.innerHTML = "";
	displayTemplesAlbum(temples);
	titlePage.textContent = "Home";
}

//New Button
function newf(){
	albumContainer.innerHTML = "";
	const newTEmples = temples.filter(temple => Number(temple.dedicated.substring(0,4)) > 2000);
	displayTemplesAlbum(newTEmples);
	titlePage.textContent = "New";
}

//Oldest Temples.
function oldest(){
	const oldTEmples = temples.filter(temple => Number(temple.dedicated.substring(0,4)) < 1900);
	albumContainer.innerHTML = "";
	displayTemplesAlbum(oldTEmples);
	titlePage.textContent = "Old";
}

//Large Temples.
function largert(){
	const largTEmples = temples.filter(temple => temple.area > 90000);
	albumContainer.innerHTML = "";
	displayTemplesAlbum(largTEmples);
	titlePage.textContent = "Large";
}

//Small Temples.
function smallt(){
	const smallTEmples = temples.filter(temples => temples.area < 10000);
	albumContainer.innerHTML = "";
	displayTemplesAlbum(smallTEmples);
	titlePage.textContent = "Small";
}


oldMenu.addEventListener("click", oldest);
home_.addEventListener("click", hom);
newt.addEventListener("click", newf);
large.addEventListener("click", largert);
small.addEventListener("click", smallt);