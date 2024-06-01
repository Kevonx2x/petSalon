//JS vs jQuery Selectors

//document.getElementById("txtName").style.display = "none"; This is how you hide an element by ID.
// $("#txtName").hide();

let div = document.getElementsByTagName("div");
for (let i = 0; i < div.length; i++) {
    div[i].style.display = "none";
}

$("div p").hide(); 
// This is how you hide all the divs.

//$("a:First").text("Google"); This is how you change the text of an anchor tag.

//$("#txtInput").val("Hello"); This is how you get the input from an input