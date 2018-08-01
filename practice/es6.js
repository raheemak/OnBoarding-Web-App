const square = function(x){
	const b="hoo"
	console.log ("hoo")
	console.log (this.b)
	return x*x;
}

console.log (square(8));


const add = function (a,b){

	return a+b;
}


const somename = (comoestas) => (comoestas.length>3) ? "hi" : "bye";

console.log (somename ("hey"));
