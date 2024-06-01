// function displayCards(){
//     //declare the variables
//     let card="";
//     const petDiv=document.getElementById("petDiv");
//     // travel the array of pets
//     for(let i = 0;i < petSalon.pets.length; i++){
//         let pet = petSalon.pets[i];
//         //create the HTML template
//         card += `
//         <div class="petCard">
//             <h4>${pet.name}</h4>
//             <p>${pet.age}</p>
//             <p>${pet.gender}</p>
//             <p>${pet.breed}</p>
//             <p>${pet.service}</p>
//         </div>
//         `;
//     }
//     //insert the tmp into the HTMLs
//     petDiv.innerHTML = card;

// }

function displayRows() {
    let rows ="";
    const petTable=document.getElementById("petTable");
    petTable.innerHTML="";

    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];

        rows += `
            <tr class="table-light">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td><button  class="custom-gradient-btn" onclick="deletePet(${i})">Delete</button></td>
            </tr>
        `;
    }

    petTable.innerHTML += rows;
}


function displayTotalPets(){
    document.getElementById("total").innerHTML=petSalon.pets.length;
}

function displayServiceCount(){
    let grooming = 0;
    for(let i=0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.service === "Grooming") {
            grooming++;
        }
    }
    document.getElementById("totalGroomings").innerHTML=grooming;
    
    let vaccine = 0;
    for(let i=0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.service === "Vaccine") {
            vaccine++;
        }
    }
    document.getElementById("totalVaccine").innerHTML=vaccine;
}

    function displayPetCounts() {
        let dogCount = 0;
        let catCount = 0;
        let mouseCount = 0;
    
        for (let i = 0; i < petSalon.pets.length; i++) {
            let pet = petSalon.pets[i];
            if (pet.breed === "Dog") {
                dogCount++;
            } else if (pet.breed === "Cat") {
                catCount++;
            } else if (pet.breed === "Mouse") {
                mouseCount++;
            }
        }
    
        document.getElementById("totalDogs").innerHTML = dogCount;
        document.getElementById("totalCats").innerHTML = catCount;
        document.getElementById("totalMice").innerHTML = mouseCount;
    }

//NOTE: Please add this display.js file into the register.html