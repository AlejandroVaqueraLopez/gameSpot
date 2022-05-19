import fetchData from "./fetchData.js";
const carouselList = document.querySelector(".carousel-container__list");
const waitContainer = document.querySelector(".loading-container");
//filters
const txtFilter = document.getElementById("txt-filter");
const releaseFilter = document.getElementById("release-filter");
const platformFilter = document.getElementById("platform-filter");
const genreFilter =document.getElementById("genre-filter"); 
const esrbFilter =document.getElementById("esrb-filter"); 

var nonFilteredList = [];//global list of videogames (for filters);

const URL = "https://rawg-video-games-database.p.rapidapi.com/games";
const stHeader = "rawg-video-games-database.p.rapidapi.com";
const ndHeader = "d55168cc9emsh36195aa65f50021p1f0dd1jsnf009a3bfe6c0";
const key = "943487e69a61463cb66d922b3247e3f3";

const parseData = (data) => {
	let parsedData = [];
	data.forEach((item) => {
		const parsedObject = {
			name: item?.name || "No name",
			released: item?.released || "Not released data",
			image: item?.background_image || "../icons/empty-icon.png",
			platforms: item?.platforms || "No platform data",
			genres: item?.genres || "No genre data",
			esrb: item?.esrb_rating?.name || "No rating",
			screenshots: item?.short_screenshots || "No screenshots data"
		}
		parsedData.push(parsedObject);
	})
	return parsedData;
}

const render = (items) => {
	carouselList.innerHTML = "";
	items.forEach((item) => {
		carouselList.appendChild(listItemTemplate(item));
	})
}

const listItemTemplate = (item) => {
	//console.log(item.name)
	const carouselItem = document.createElement("li");
	carouselItem.setAttribute("class","carousel-item");

	const carouselItemContainer = document.createElement("div");
	carouselItemContainer.classList.add("carousel-item__container","hover");
	carouselItemContainer.style.backgroundImage = `url(${item.image})`

	const btnClose = document.createElement("button");
	btnClose.setAttribute("class","btn-close");

	const carouselItemDetails = document.createElement("div");
	carouselItemDetails.setAttribute("class","carousel-item__details");

	const carouselItemName = document.createElement("h4");
	carouselItemName.setAttribute("class","carousel-item__name");
	carouselItemName.textContent = `${item.name}`;

	const carouselItemDetailsInfo = document.createElement("div");
	carouselItemDetailsInfo.setAttribute("class","carousel-item__details-info");

	//released
	const carouselItemReleased = document.createElement("div");
	carouselItemReleased.setAttribute("class","carousel-item__released");
	const lblReleased = document.createElement("label");
	lblReleased.textContent = "Release";
	const h6Released = document.createElement("h6");
	h6Released.textContent = `${item.released}`;
	//platforms
	const carouselItemPlatforms = document.createElement("div");
	carouselItemPlatforms.setAttribute("class","carousel-item__platforms");
	const lblPlatform = document.createElement("label");
	lblPlatform.textContent = "Platform";
	const h6Platform = document.createElement("h6");
	h6Platform.textContent = `${item?.platforms[0]?.platform?.name || item.platforms}`;
	//genere
	const carouselItemGeneres = document.createElement("div");
	carouselItemGeneres.setAttribute("class","carousel-item__generes");
	const lblGeneres = document.createElement("label");
	lblGeneres.textContent = "Generes";
	const h6Generes = document.createElement("h6");
	h6Generes.textContent = `${item?.genres[0]?.name || item.genres}`;
	//esrb
	const carouselItemEsrb = document.createElement("div");
	carouselItemEsrb.setAttribute("class","carousel-item__esrb");
	const lblEsrb= document.createElement("label");
	lblEsrb.textContent = "ESRB";
	const h6Esrb = document.createElement("h6");
	h6Esrb.textContent = `${item.esrb}`;

	//appending released section
	carouselItemReleased.appendChild(lblReleased);
	carouselItemReleased.appendChild(h6Released);

	//appending platforms section
	carouselItemPlatforms.appendChild(lblPlatform);
	carouselItemPlatforms.appendChild(h6Platform);

	//appending generes section
	carouselItemGeneres.appendChild(lblGeneres);
	carouselItemGeneres.appendChild(h6Generes);

	//appending esrb section
	carouselItemEsrb.appendChild(lblEsrb);
	carouselItemEsrb.appendChild(h6Esrb);

	//appending details info section
	carouselItemDetailsInfo.appendChild(carouselItemReleased);
	carouselItemDetailsInfo.appendChild(carouselItemPlatforms);
	carouselItemDetailsInfo.appendChild(carouselItemGeneres);
	carouselItemDetailsInfo.appendChild(carouselItemEsrb);

	//appending details section
	carouselItemDetails.appendChild(carouselItemName);
	carouselItemDetails.appendChild(carouselItemDetailsInfo);

	//appending itemContainer section
	carouselItemContainer.appendChild(btnClose);
	carouselItemContainer.appendChild(carouselItemDetails);

	//appending item section
	carouselItem.appendChild(carouselItemContainer);

	`
			<li class="carousel-item">
					<div class="carousel-item__container hover">
							<button class="btn-close"></button>

							<div class="carousel-item__details">
									<h4 class="carousel-item__name">Resident evil 4</h4>

									<div class="carousel-item__details-info">
											<div class="carousel-item__released">
													<label>Release</label>
													<h6>2020-05-22</h6>
											</div>
											<div class="carousel-item__platforms">
													<label>Platform</label>
													<h6>Playstation 5</h6>
											</div>
											<div class="carousel-item__generes">
													<label>Genere</label>
													<h6>Action</h6>
											</div>
											<div class="carousel-item__esrb">
													<label>ESRB</label>
													<h6>Mature</h6>
											</div>
									</div>

							</div>
					</div>
			</li>
	`
	return carouselItem;
}

//main function
var resolver = async () => {
	let cont = 1;
	let videogameList = []

	//this checks the state of the request, render a wait animation, once is done, render the data;
	var state = setInterval(()=>{
		if(videogameList.length == 0){
			//console.log("no data yet");
		}else{
			waitContainer.style.display = "none";
			txtFilter.removeAttribute("readonly");
			clearInterval(state);
			render(parsedData);
		}
	},1000);

	let data1 = await fetchData(URL,key,1,stHeader,ndHeader);
	let data2 = await fetchData(URL,key,2,stHeader,ndHeader);
	let data3 = await fetchData(URL,key,3,stHeader,ndHeader);
	let data4 = await fetchData(URL,key,4,stHeader,ndHeader);
	let data5 = await fetchData(URL,key,5,stHeader,ndHeader);
	let data6 = await fetchData(URL,key,6,stHeader,ndHeader);
	let data7 = await fetchData(URL,key,7,stHeader,ndHeader);
	let data8 = await fetchData(URL,key,8,stHeader,ndHeader);

	videogameList.push(data1.results);
	videogameList.push(data2.results);
	videogameList.push(data3.results);
	videogameList.push(data4.results);
	videogameList.push(data5.results);
	videogameList.push(data6.results);
	videogameList.push(data7.results);
	videogameList.push(data8.results);
	videogameList = videogameList.flat();

	//console.log(videogameList.flat());
	var parsedData = parseData(videogameList);

	//auto-generating <option> </option> labels for selectors
	var releaseList = [];
	var platformList = [];
	var genreList = [];
	var esrbList = [];

	parsedData.forEach((item) => {
		//generating released option tags
		let currentRelease = item.released.substr(0,4);
		let currentPlatform = item.platforms[0].platform.name;
		let currentGenre = item.genres[0].name;
		let currentEsrb = item.esrb;

		if(!(releaseList.includes(currentRelease))){
			const newOption = `<option value="${currentRelease}">${currentRelease}</option>`;
			releaseFilter.innerHTML += newOption;
			releaseList.push(currentRelease);
		}
		//generating platform option tags
		if(!(platformList.includes(currentPlatform))){
			const newOption = `<option value="${currentPlatform}">${currentPlatform}</option>`;
			platformFilter.innerHTML += newOption;
			platformList.push(currentPlatform);
		}
		//generating genre option tags
		if(!(genreList.includes(currentGenre))){
			const newOption = `<option value="${currentGenre}">${currentGenre}</option>`;
			genreFilter.innerHTML += newOption;
			genreList.push(currentGenre);
		}
		//generating esrb option tags
		if(!(esrbList.includes(currentEsrb))){
			const newOption = `<option value="${currentEsrb}">${currentEsrb}</option>`;
			esrbFilter.innerHTML += newOption;
			esrbList.push(currentEsrb);
		}
	})

	//here i make "parsedData" global to use it with filters
	nonFilteredList = parsedData;
}

resolver();//first rendering

//filter by name
txtFilter.addEventListener("keyup",()=>{
	const word = txtFilter.value.toLowerCase();
	let filteredList = [];

	nonFilteredList.forEach((item) => {
		if((item.name.toLowerCase()).includes(word)){
			//console.group("match");
			//console.log(item);//matched games
			//console.groupEnd();
			filteredList.push(item);
		}
	})
	render(filteredList);//we render the filtered items
})

//filter by release year
releaseFilter.addEventListener("change",()=>{
	const release = releaseFilter.value;
	const platform = platformFilter.value;
	const genre = genreFilter.value;
	const esrb = esrbFilter.value;

	let filteredList = [];

	nonFilteredList.forEach((item) => {
		if(((item.released).includes(release)) && ((item.platforms[0].platform.name).includes(platform)) && (item.genres[0].name).includes(genre) && (item.esrb).includes(esrb) ){
			filteredList.push(item);
		}	
	})
	render(filteredList);//we render the filtered items
})

//filter by platform
platformFilter.addEventListener("change",()=>{
	const platform = platformFilter.value;
	const release = releaseFilter.value;
	const genre = genreFilter.value;
	const esrb = esrbFilter.value;

	let filteredList = [];
	nonFilteredList.forEach((item) => {
		if((item.platforms[0].platform.name).includes(platform) && ((item.released).includes(release)) && (item.genres[0].name).includes(genre) && (item.esrb).includes(esrb) ){
			filteredList.push(item);
		}	
	})
	render(filteredList);//we render the filtered items
})

//filter by Genre
genreFilter.addEventListener("change",()=>{
	const genre = genreFilter.value;
	const platform = platformFilter.value;
	const release = releaseFilter.value;
	const esrb = esrbFilter.value;

	let filteredList = [];
	nonFilteredList.forEach((item) => {
		if((item.genres[0].name).includes(genre) && (item.platforms[0].platform.name).includes(platform) && ((item.released).includes(release)) && (item.esrb).includes(esrb) ){
			filteredList.push(item);
		}	
	})
	render(filteredList);//we render the filtered items
})

//filter by esrb
esrbFilter.addEventListener("change",()=>{
	const esrb = esrbFilter.value;
	const genre = genreFilter.value;
	const platform = platformFilter.value;
	const release = releaseFilter.value;

	let filteredList = [];
	nonFilteredList.forEach((item) => {
		if((item.esrb).includes(esrb) && (item.genres[0].name).includes(genre) && (item.platforms[0].platform.name).includes(platform) && ((item.released).includes(release)) ){
			filteredList.push(item);
		}	
	})
	render(filteredList);//we render the filtered items
})
