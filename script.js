let user1 = {
    name : "Shreyash",
    age : 20,
    city : "Pune",
    email : "bytesizedshrey@gmail.com"
}
let user2 = {
    name : "Gautami",
    age : 19,
    city : "Delhi",
    email : "gautami@gmail.com"
}
console.log(`the name of user 1 is ${user1.name} and the name of user 2 is ${user2.name}`);

//classes -> blueprint for creating objects
//Constructor function -> function that is used to create objects

class dyson{
    constructor(product, price, color){
        this.name = product;
        this.price = price;
        this.color = color;
    }
    powerOn(){
        console.log(`${this.name} is now ON`);
    }
    powerOff(){
        console.log(`${this.name} is now OFF`);
    }
}
//creating an object of the class dyson
let myDyson = new dyson("Dyson V11", 50000, "Purple");
myDyson.powerOn();

let herDyson = new dyson("Dyson V10", 40000, "Red");
herDyson.powerOff();

//prototypes -> a prototype is an object that is associated with every functions and objects in JavaScript. It allows us to add properties and methods to objects and functions. It is used for inheritance and code reuse. it is a shared memory space that is used to store properties and methods that are shared by all instances of a class or function