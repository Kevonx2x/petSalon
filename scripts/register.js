let petSALON = {
    name:"The Fashion pet",
    phone:"555-555-5555", 
    hours:{
        open:"9:00 am",
        close:"8:00 pm",
    },
    pets:[]
}

// constructor
function Pet(name, age, gender, breed, service){
    // properties = parameter
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;

    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService);
    petSALON.pets.push(newPet);
    console.log(petSALON.pets);
}

function init(){
    let pet1 = new Pet("Scooby", 79,"Male","Grooming");//this line is declaring an obj
    let pet2 = new Pet("Scrappy", 79,"Male","Grooming");//this line is declaring an obj
    petSALON.pets.push(pet1);
    petSALON.pets.push(pet2);
    console.log(pet1);
    console.table(petSALON.pets);
}

window.onload=init;//waiting to render the HTML