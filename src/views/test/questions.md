1. ¿Cuál lenguaje y que tipos de diagramas se utilizan para diseñar clases?
	 Lenguaje UML (Lenguaje Unificado de Modelado), los diagramas que se utilizan para diseñar clases son los diagramas siguientes:
	 1. Diagrama de clases
	 2. Diagrama de objetos
2. Haga una parafrasis de la definición de una clase, objeto o instancia, atributo, metodo. Incluir un ejemplo.

		* Una clase es una agrupacion de elementos de diversos tipos en un lenguaje de programacion, permite mantener un estandar de desarrollo en un proyecto entero gracias a la monotonia e iteracion de creacion de estos elementos (me refiero a los metodos).
			<script>
				class Videogame{
					constructor(param1,param2){
						this.param1 = param1;
						this.param2 = param2;
					}
					//methods
				}
			</script>
		
		* Un objeto es un elemento que almacena una collecion de valores, estos puedes ser de distintos tipos y pueden cambiar dinamicamente, los objetos pueden ser de distintos tipos, pueden ser *literales*, o creados a partir de la clase *Object*), los objetos tienen 2 principales componentes internos, los atributos *keys* y los valores *values*.
			<script>
				//ejemplo de objeto literal
				const myObj = {
					property:value,
				}

				//ejemplo de objeto instanciado
				const myObj = new Object();
				myObj.name = "Alex";
			</script>

		* Una *instancia* es la creacion de un nuevo elemento a partir de una clase padre.
			<script>
				//ejemplo de objeto literal
				const myObj = {
					property:value,
				}

				//ejemplo de objeto instanciado
				const myObj = new Object();
				myObj.name = "Alex";
			</script>

		* Un atributo es una propiedad adjudicada a una entidad, en este caso un *objeto*, cuyo valor puede cambiar dinamicamente.
			<script>
				//ejemplo de objeto literal
				const myObj = {
					property:value,
				}

				//ejemplo de objeto instanciado
				const myObj = new Object();
				myObj.name = "Alex";
			</script>
		 
		* Un metodo es una funcion anidada en una clase, puede ser accedida por medio de una instancia a la clase en donde se aloja, *su acceso va a depender del tipo de metodo*, ademas de que estas funciones pueden recibir parametros y retornar valores o no.
				<script>
					class Videogame{
						constructor(param1,param2){
							this.param1 = param1;
							this.param2 = param2;
						}
						getName(){//este es el metodo que obtiene el nombre pasado como parametro
							console.log(this.param1);
						}
					}
				</script>

3. Codificar con la sintaxis que desee una herencia de 3 clases (1 padre y dos hijas).

		Ver archivos ./runner.html ./class.js

4. Explicar la diferencia entre prototipos y clases.
		
		La sentencia *prototype* en Javascript refiere a una propiedad que todos los objetos en el lenguaje tienen, esta ayudaba a crear metodos y clases en la sintaxis anterior a ECMAScript, a partir de esto, se añadio la *sugar sintax* para hacer mas facil la creacion de clases y objetos, un ejemplo de hacer 1 sola cosa con 2 formas distintas es:
		<script>
				class Videogame{//sugar syntax
					constructor(param1,param2){
						this.param1 = param1;
						this.param2 = param2;
					}
					getName(){//este es el metodo que obtiene el nombre pasado como parametro
						console.log(this.param1);
					}
				}

				function Videogame(param1,param2){//tradicional
					this.param1 = param1;
					this.param2 = param2;
				}
				Videogame.prototype.getName = function(){//metodo con prototype
						console.log(this.param1);
				}
		</script>
