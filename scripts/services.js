let petSalon={
    service:[ ],
}

//Create a constructor
function Service(descripton, price) {
    this.descripton = descripton;
    this.price = price;
}

function isValid(service) {
    let validation = true;

    if(service.descripton == "") {
        validation = false;
        $("#txtDescription").addClass("alert-error");
    }

    return validation;
}


function register() {
    console.log("Adding a new register");
    //getting the values 
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    //create the object
    let newService = new Service(inputDescription, inputPrice);
    //display it on the console
    if(isValid(newService)) {
        saveItem(newService);
        $("input").val("");
    }
    displayServices();
}

// Function to display services in a table
function displayServices() {
    const petService = $("#petService");
    petService.empty();
    for (let i = 0; i < petSalon.services.length; i++) {
        let service = petSalon.services[i];
        let row = `
            <tr>
                <td>${service.description}</td>
                <td>${service.price}</td>
                <td><button class="custom-gradient-btn" onclick="deleteService(${i})">Delete</button></td>
            </tr>
        `;
        petService.append(row);
    }
}

// Function to delete a service
function deleteService(index) {
    petSalon.services.splice(index, 1);
    displayServices();
}