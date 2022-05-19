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
	if((element.offsetLeft + (element.clientWidth/2)) < (window.innerWidth / 2)){
		const middle = (window.innerWidth / 2) - (element.offsetLeft + (100 + 30));
		element.style.transform = `translateX(${middle}px)`;
		element.style.zIndex="3";
		element.style.position ="fixed";
		element.style.top = `calc((100vh / 2) - ${(element.clientHeight) / 2}px)`;
		setTimeout(()=>{
			const ndScreenX = window.innerWidth / 2;
			const ndScreenY = window.innerHeight / 2;
			element.style.width = `${ndScreenX}px`;
			element.style.height = `${ndScreenY}px`;

			element.style.transform= `translateX(${middle - ((ndScreenX - element.clientWidth) / 2)}px)`;
			element.style.top = `calc((100vh / 2) - ${((element.clientHeight) / 2) + (ndScreenY - element.clientHeight)}px)`;

			//console.log(element.children[0]);
			//details container
			var carouselItemContainer = element.children[0].children[1];
			carouselItemContainer.style.display = "flex";
			carouselItemContainer.style.height = "30%";
			carouselItemContainer.style.paddingTop = "3px";
                    
			//name label container
			var lblName = element.children[0].children[1].children[0];
			lblName.style.textAlign = "start";

			//info container inside details item
			var itemDetailsInfo = element.children[0].children[1].children[1];
			itemDetailsInfo.style.display = "flex";

			var btnClose = element.children[0].children[0];
			btnClose.style.display = "block";
			btnClose.onclick = ()=>{
				btnClose.style.display = "none";
				element.style.position = `initial`;
				element.style.transform= `translateX(0px)`;
				element.style.transform= `translateX(0px)`;
				element.style.transform= `translateY(0px)`;
				element.style.width = `200px`;
				element.style.height = `250px`;
				element.style.zIndex="2";

				//reseting details container
				carouselItemContainer.style.height = "20%";
				carouselItemContainer.style.alignItems = "center";

				//reseting lblName
				lblName.style.textAlign = "center";

				//reseting details info container
				itemDetailsInfo.style.display = "none";

			}

		},400);

	}else{

		const middle = (window.innerWidth / 2) - (element.offsetLeft + (100 + 30));
		element.style.transform = `translateX(-${(element.offsetLeft - window.innerWidth / 2) + (100 + 30)}px)`;
		element.style.zIndex="3";
		element.style.position ="fixed";
		element.style.top = `calc((100vh / 2) - ${(element.clientHeight) / 2}px)`;

		setTimeout(()=>{
			const ndScreenX = window.innerWidth / 2;
			const ndScreenY = window.innerHeight / 2;
			element.style.width = `${ndScreenX}px`;
			element.style.height = `${ndScreenY}px`;

			element.style.transform= `translateX(${middle - ((ndScreenX - element.clientWidth) / 2)}px)`;
			element.style.top = `calc((100vh / 2) - ${((element.clientHeight) / 2) + (ndScreenY - element.clientHeight)}px)`;

			//console.log(element.children[0]);
			//details container
			var carouselItemContainer = element.children[0].children[1];
			carouselItemContainer.style.display = "flex";
			carouselItemContainer.style.height = "30%";
			carouselItemContainer.style.paddingTop = "3px";
                    
			//name label container
			var lblName = element.children[0].children[1].children[0];
			lblName.style.textAlign = "start";

			//info container inside details item
			var itemDetailsInfo = element.children[0].children[1].children[1];
			itemDetailsInfo.style.display = "flex";

			var btnClose = element.children[0].children[0];
			btnClose.style.display = "block";
			btnClose.onclick = ()=>{
				btnClose.style.display = "none";
				element.style.transform= `translateX(0px)`;
				element.style.transform= `translateX(0px)`;
				element.style.transform= `translateY(0px)`;
				element.style.width = `200px`;
				element.style.height = `250px`;
				element.style.position = "initial";
				element.style.zIndex="3";

				//reseting details container
				carouselItemContainer.style.height = "20%";
				carouselItemContainer.style.alignItems = "center";

				//reseting lblName
				lblName.style.textAlign = "center";

				//reseting details info container
				itemDetailsInfo.style.display = "none";
			}
		},400);
	}
}

