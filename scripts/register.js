let petSalon = {//Create our object
    name:"The Fashion pet",
    phone:"555-555-5555", 
    hours:{
        open:"9:00 am",
        close:"8:00 pm",
    },
    pets:[]
}

function Pet(name, age, gender, breed, service) {
    this.name = name;       // Assign the name parameter to the name property
    this.age = age;         // Assign the age parameter to the age property
    this.gender = gender;   // Assign the gender parameter to the gender property
    this.breed = breed;     // Assign the breed parameter to the breed property
    this.service = service; // Assign the service parameter to the service property
}
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
//creating the obj v
        
        function register() {
        let inputName = document.getElementById("txtName").value;
        let inputAge = document.getElementById("txtAge").value;
        let inputGender = document.getElementById("txtGender").value;
        let inputBreed = document.getElementById("txtBreed").value;
        let inputService = document.getElementById("txtService").value;

        let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService);
        if (isValid(newPet)) {
            petSalon.pets.push(newPet);
            displayRows();
            displayTotalPets();
            displayPetCounts();
            getServices();
        }
    }
        function getServices(){
        //read the LS to get the services
        let serviceList = readItems();
        let option = "";
        // travel the array of services
        for(let i=0;i<serviceList.length;i++){
            //create the <option> on the HTML
            option=`<option> value="${serviceList[i].description}"> ${serviceList[i].description} </option>`;
            
            $("#txtService").append(option);
        }   
    }
    

        
        function init() {
        let pet1 = new Pet("Scooby", 9,"Male", "Labrador", "Grooming");//this line is declaring an obj
        let pet2 = new Pet("Scrappy", 9,"Male", "Labrador", "Grooming");//this line is declaring an obj
        petSalon.pets.push(pet1);
        petSalon.pets.push(pet2);
        displayRows();
        displayTotalPets();
        displayPetCounts();
        getServices();
        
    }
    


function deletePet(index) {
    console.log("Deleting pet at index:", index);
    petSalon.pets.splice(index, 1);
    console.log("Pets after deletion:", petSalon.pets);
    displayRows(); // Refresh the displayed rows after deletion
    displayTotalPets();
    displayPetCounts();
    getServices();
}

// ----------------------------------------------------------------------------------------------------------

window.onload=init;//waiting to render the HTML