function saveItem(item) {
    let items = readItems();
    items.push(item);//push the new item into the items ARRAY
    let val = JSON.stringify(items);//parse the ARRAY into JSON string
    console.log(val);//Displays the string
    localStorage.setItem("services",val);//sent the val to the LS. Saves the JSON string to the local storage under the key "services".

}

function readItems(){
    let data = localStorage.getItem("services");//getting the values from the LS

    if(!data){
        return [];
    }else{
        let list = JSON.parse(data);
        return list;
    }

}