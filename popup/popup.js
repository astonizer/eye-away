let period = document.getElementById("period");
let periodInfo = document.getElementById("period_info") 

//Display initial value of range
periodInfo.innerHTML = period.value;

//Update the display each time the user updates the input range
period.oninput = () => {
    periodInfo.innerHTML = period.value;
}

document.getElementById('submit').addEventListener('click', handleClick);


function handleClick() {
    console.log("submit")
}