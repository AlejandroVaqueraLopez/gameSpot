import {nonFilteredList} from "./template.js";
const carouselList = document.querySelector(".carousel-container__list");

carouselList.addEventListener("click",(e)=>{
	if(e.target.className == "carousel-item__container hover"){
		var listItem = e.target.parentElement;
	}else if(e.target.className == "carousel-item__details"){
		var listItem = e.target.parentElement.parentElement;
	}else if(e.target.className == "carousel-item__name"){
		var listItem = e.target.parentElement.parentElement.parentElement;
	}else{
		return 
	}
	//console.log(listItem);
	expand(listItem);
});

const expand = (element) => {

	let currentObject = {};

	nonFilteredList.forEach((item) => {
		if(item.id == element.id){
			currentObject = item;
		}
	})

	//console.log(element);
	console.log(currentObject);

	//main container
	const modalContent = document.createElement("div");
	modalContent.classList.add("modalContent");
	modalContent.id = `${currentObject.id}`;

	//image container
	const modalContentImage = document.createElement("div");
	modalContentImage.classList.add("modalContentImage");
	modalContentImage.style.backgroundImage =`url(${currentObject.image})`;

	//footer container
	const modalContentFooter = document.createElement("div");
	modalContentFooter.classList.add("modalContentFooter");

	//first footer section
	const stModalContentFooterSection = document.createElement("div");
	stModalContentFooterSection.classList.add("modalContentFooterSection");

		//title container
		const lblTitle = document.createElement("label");
		lblTitle.classList.add("lblTitle");
		lblTitle.textContent = `${currentObject.name}`;

	//second footer section
	const ndModalContentFooterSection = document.createElement("div");
	ndModalContentFooterSection.classList.add("modalContentFooterSection");

		//release container
		const dataContainerOne = document.createElement("div");
		dataContainerOne.classList.add("dataContainer");

			const lblRelease= document.createElement("label");
			lblRelease.classList.add("lblRelease");
			lblRelease.textContent = "Release";
			const txtRelease= document.createElement("h4");
			txtRelease.classList.add("txtRelease");
			txtRelease.textContent = `${currentObject.released}`

		//platform container
		const dataContainerTwo = document.createElement("div");
		dataContainerTwo.classList.add("dataContainer");

			const lblPlatform = document.createElement("label");
			lblPlatform.classList.add("lblPlatform");
			lblPlatform.textContent = "Platform";
			const txtPlatform= document.createElement("h4");
			txtPlatform.classList.add("txtPlatform");
			txtPlatform.textContent = `${currentObject.platforms[0].platform.name}`

		//Genre container
		const dataContainerThree = document.createElement("div");
		dataContainerThree.classList.add("dataContainer");

			const lblGenre = document.createElement("label");
			lblGenre.classList.add("lblGenre");
			lblGenre.textContent = "Genre";
			const txtGenre = document.createElement("h4");
			txtGenre.classList.add("txtGenre");
			txtGenre.textContent = `${currentObject.genres[0].name}`

		//Esrb container
		const dataContainerFour = document.createElement("div");
		dataContainerFour.classList.add("dataContainer");

			const lblEsrb = document.createElement("label");
			lblEsrb.classList.add("lblEsrb");
			lblEsrb.textContent = "ESRB";
			const txtEsrb = document.createElement("h4");
			txtEsrb.classList.add("txtEsrb");
			txtEsrb.textContent = `${currentObject.esrb}`

	//appending
	
	stModalContentFooterSection.appendChild(lblTitle);

	dataContainerOne.appendChild(lblRelease);
	dataContainerOne.appendChild(txtRelease);

	dataContainerTwo.appendChild(lblPlatform);
	dataContainerTwo.appendChild(txtPlatform);

	dataContainerThree.appendChild(lblGenre);
	dataContainerThree.appendChild(txtGenre);

	dataContainerFour.appendChild(lblEsrb);
	dataContainerFour.appendChild(txtEsrb);

	ndModalContentFooterSection.appendChild(dataContainerOne);
	ndModalContentFooterSection.appendChild(dataContainerTwo);
	ndModalContentFooterSection.appendChild(dataContainerThree);
	ndModalContentFooterSection.appendChild(dataContainerFour);

	modalContentFooter.appendChild(stModalContentFooterSection);
	modalContentFooter.appendChild(ndModalContentFooterSection);
	
	modalContent.appendChild(modalContentImage);
	modalContent.appendChild(modalContentFooter);

	`
		<div class="modalContent">
			<div class="modalContentImage"></div>

			<div class="modalContentFooter">
				<div class="modalContentFooterSection">
					<label class="lblTitle">GameName</label>
				</div>

				<div class="modalContentFooterSection">
					<div class="dataContainer">
						<label class="lblRelease">Release</label>
						<h4 class="txtRelease">2011-04-18</h4>
					</div>
					<div class="dataContainer">
						<label class="lblPlatform">Platform</label>
						<h4 class="txtPlatform">Xbox 360</h4>
					</div>
					<div class="dataContainer">
						<label class="lblGenres">Genres</label>
						<h4 class="txtGenres">Shooter</h4>
					</div>
					<div class="dataContainer">
						<label class="lblEsrb">ESRB</label>
						<h4 class="txtEsrb">Mature</h4>
					</div>
				</div>
			</div>

		</div>
	`
	
	swal({
		content: modalContent,
		button:"Close",
	})
	.then((value) => {

	});

}

