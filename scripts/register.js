// let petSALON = {
//     name:"The Fashion pet",
//     phone:"555-555-5555", 
//     hours:{
//         open:"9:00 am",
//         close:"8:00 pm",
//     },
//     pets:[]
// }

let petWorld = {
    pets:[
        {
        name: "Tom",
        age: 6,
        gender: "Male",
        service: "Grooming",
        breed: "Cat",
        },

        {
        name: "Jerry",
        age: 8,
        gender: "Male",
        service: "Grooming",
        breed: "Mouse",
        },

        {
        name: "Spike",
        age: 10,
        gender: "Male",
        service: "Grooming",
        breed: "Dog",
        }
    ]
}

function displayNames() {
    let names= "";

    for (let i = 0; i <3; i++) {
        names+=`<p> ${petWorld.pets[i].name}</p>`;
        console.log(names);
    }

    document.getElementById("petNames").innerHTML=names;

}

displayNames();

function quantity() {
let sum = 0;

for (let i = 0; i <petWorld.pets.length; i++) {
        sum = i + 1;
        // document.getElementById("quantity").innerHTML;
        console.log("Pet Number: ", sum);
        // console.log("i", i);
}
    }

quantity();


