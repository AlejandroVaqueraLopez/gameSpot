/////////////////Padre ////////////////////////////////
class Videogame{
	constructor(name,esrb){
		this.name = name;
		this.esrb = esrb;
	}
	getName(){
		console.log("Name of game: ",this.name);
	}
	getEsrb(){
		console.log("Esrb of game: ",this.esrb);
	}
}

//printing Videogame class data
const newGame = new Videogame("God of war", "mature");
console.group("Videogame data");
newGame.getName();
newGame.getEsrb();
console.groupEnd();
/////////////////Hijo 1////////////////////////////////////
class Shooter extends Videogame{
	constructor(name,esrb,noGuns){
		super(name,esrb);//pasar los parametros a padre
		this.noGuns = noGuns;
	}
	shot(){
		console.log("Piummm");
	}
	getNoGuns(){
		console.log("Current number of different guns: ",this.noGuns);
	}
	setNoGuns(newNumber){
		this.noGuns = newNumber;
		console.log("New number of guns setted: ",this.noGuns);
	}
}
//printing Videogame class data
const warzone = new Shooter("warzone","Mature",1200);
console.group("warzone data");
warzone.getName();
warzone.getEsrb();
warzone.getNoGuns();
warzone.setNoGuns(5000);
warzone.getNoGuns();
warzone.shot();
console.groupEnd();

//////////////Hijo 2//////////////////////////////////
class Skateboarding extends Videogame{
	constructor(name,esrb,deck){
		super(name,esrb);//pasar los parametros a padre
		this.deck = deck;
	}
	getDeck(){
		console.log("Current deck brand: ",this.deck)
	}
	setNewDeck(newDeck){
		this.deck = newDeck;
		console.log("You change your deck to : ",this.deck)
	}
	kickFlip(){
		console.log("*does a kickFlip*")
	}
}
const proSkater10 = new Skateboarding("pro skater 10","Teen","Santa Cruz");
console.group("Skateboarding data");
proSkater10.getDeck();
proSkater10.setNewDeck("Quest boards");
proSkater10.getDeck();
proSkater10.kickFlip();
console.groupEnd();

