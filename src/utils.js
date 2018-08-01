
console.log ("utils is running")

const square = (x)=> x*x;

//default export 
//named exports 

//this is not an object definition, you place references to what you would like to export
export {
    square as default
};
