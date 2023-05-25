"use strict";
const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

//define variables

const radiobuttonsection = document.getElementById("radioButtonRow");
const locationRadioButton = document.getElementById("locationRadio");
const parkTypeRadioButton = document.getElementById("parkTypeRadio");


const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");

const infoDisplayArea =  document.getElementById("parkInfoDisplayRow");

// const parkName = document.getElementById("parkName");
// const parkID = document.getElementById ("parkID");
// const parkAddress = document.getElementById("address");
// const parkCity = document.getElementById("city");
// const parkState = document.getElementById("state");
// const parkZip = document.getElementById("zip");
// const parkPhone = document.getElementById("phone");
// const parkFax = document.getElementById("fax")
// const parkLat = document.getElementById("latitude");
// const parkLong = document.getElementById("longitude");

//Wireup onload functions 

window.onload = () => {
    console.log(`parkSearch.js initiated`);

    populateLocationDropdown();
    hideInfoDisplayArea();
    hideLocationDropdown();
    hideParkTypeDropdown();

    locationRadioButton.onchange = onLocationRadioButtonClicked;
    parkTypeRadioButton.onchange = onParkTypeRadioButtonClicked;

    locationDropdown.onchange = onLocationDropdownChange;
    

}

// populate dropdown with States when location is clcicked
function onLocationRadioButtonClicked (){
    //here we want to hide or show the right regions...

    if(locationRadioButton.checked){
        showLocationDropdown();
        showInfoDisplayArea();
        hideParkTypeDropdown();
    }
    else{
        hideLocationDropdown(); //How to get it to disappear once unchecked?
    }
   
     
}

function onParkTypeRadioButtonClicked(){

    hideInfoDisplayArea();

    if(parkTypeRadioButton.checked){
    hideLocationDropdown();
    showParkTypeDropdown();
}
else{
    hideParkTypeDropdown();
}
 
}

// Loops through the parks to add all the states to the location dropdown
function populateLocationDropdown(){
    let initialOption = new Option("Select a State/Territory", "");
    locationDropdown.appendChild(initialOption);
    
    for (let location of locationsArray){
        let newOption = new Option (location);
        locationDropdown.appendChild(newOption);
        
    }
}

//Does the Math to match the selected state to the state property of the park and sends the info to the createInfoCard function
function onLocationDropdownChange(){

    let selectedState = locationDropdown.value;
      console.log(selectedState)
    const parksFilter = nationalParksArray.filter(park => park.State == selectedState); 
    
    
     infoDisplayArea.innerHTML= "";
    
    if(parksFilter.length > 0){
     for (let park of parksFilter){
        createInfoCard(park)
     }
    }
    
    
}

//programmatically create cards
function createInfoCard(park){

    // for (let prop in park) {               // trying to change the display for parks without phone numbers to be NA instead of 0
    //     if (park.hasOwnProperty(prop)) {
    //       let value = park.prop;
    //       if (value == 0 || value === undefined) {
    //         value = "NA";
    //       }
    //     }
    // }
    let divCol = document.createElement("div");
    divCol.className = "col-4 mx-2 my-3 row";
    infoDisplayArea.appendChild(divCol);

    let divCard = document.createElement("div");
    divCard.className = "card";
    divCol.appendChild(divCard);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body";
    divCard.appendChild(divCardBody);

    let h5Name = document.createElement("h4"); 
    h5Name.className = "card-title";
    h5Name.innerHTML = park.LocationName;
    divCardBody.appendChild(h5Name);

    let detailList = document.createElement("ul");
    divCardBody.appendChild(detailList);

    let liId = document.createElement("li"); //Park ID
    liId.innerHTML = "ID: " + park.LocationID.toUpperCase();
    detailList.appendChild(liId);
    
    let liAddress = document.createElement("li"); // Park Address
    liAddress.innerHTML = "Address: " + park.Address;
    detailList.appendChild(liAddress);

    let liCity = document.createElement("li"); // Park City
    liCity.innerHTML = "City: " + park.City;
    detailList.appendChild(liCity);
   
    let liState = document.createElement("li"); // State
    liState.innerHTML ="State: " + park.State;
    detailList.appendChild(liState);
   
    let liZip = document.createElement("li"); // Zip
    liZip.innerHTML ="Zip: "+ park.ZipCode;
    detailList.appendChild(liZip);
   
    let liPhone = document.createElement("li"); // Phone
    liPhone.innerHTML ="Phone:" + park.Phone;
    detailList.appendChild(liPhone);
   
    let liFax = document.createElement("li"); // Fax
    liFax.innerHTML = "Fax: "+ park.Fax;
    detailList.appendChild(liFax);
   
    let liLat = document.createElement("li"); // Lat
    liLat.innerHTML ="Latitude: "+ park.Lat;
    detailList.appendChild(liLat);
   
    let liLong = document.createElement("li"); // Long
    liLong.innerHTML ="Longitude: "+ park.Long;
    detailList.appendChild(liLong);


}
 

















function hideInfoDisplayArea(){
    infoDisplayArea.style.display = "none";
}
function showInfoDisplayArea(){
    infoDisplayArea.style.display = "flex"
}
function showLocationDropdown(){
    locationDropdown.style.display = "inline"
}
function hideLocationDropdown(){
    locationDropdown.style.display = "none"
}
function showParkTypeDropdown(){
    parkTypeDropdown.style.display = "inline"
}
function hideParkTypeDropdown(){
    parkTypeDropdown.style.display = "none"
}