let petSalon = {
    name:"The Fashion pet",
    phone:"555-555-5555", 
    hours:{
        open:"9:00 am",
        close:"8:00 pm",
    },
    pets:[]
}

// constructor
function Pet(name, age, gender, breed, service) {
    // properties = parameter
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
// ----------------------------------------------------------------------------------------------------------

function isValid (aPet) {
    let validation =true;

    if(aPet.name==""){
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");
    }

    if(aPet.service==""){
        validation=false;
        document.getElementById("txtService").classList.add("alert-error");
    }

    // validate the service
    return validation;
    
}

//creating the obj
function register() {
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;

    let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService);
    if(isValid(newPet)){// is Valid?
    petSalon.pets.push(newPet);//adding the pet to the array
    // displayCards();
    displayRows();
    displayTotalPets();
    displayServiceCount();
    
    }
}
// ----------------------------------------------------------------------------------------------------------
function init() {
    let pet1 = new Pet("Scooby", 9,"Male", "Labrador", "Grooming");//this line is declaring an obj
    let pet2 = new Pet("Scrappy", 9,"Male", "Labrador", "Grooming");//this line is declaring an obj
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    // console.log(pet1);
    // displayCards();
    displayRows();
    displayTotalPets();
    displayServiceCount();
    // console.table(petSalon.pets);
}

window.onload=init;//waiting to render the HTML