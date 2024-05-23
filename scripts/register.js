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



function quantity() {
let sum = 0;

for (let i = 0; i < petWorld.pets.length; i++) {
        sum += 1;
        let petQuantity = document.getElementById(`quantity`)
    }

console.log("Sum", sum);
}

quantity();

function  petNames() {
    
}

// let names = document.getElementById(`client-list`);