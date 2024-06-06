//use Jquery

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
}
