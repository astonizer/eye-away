let period = document.getElementById("period");
let periodInfo = document.getElementById("period_info");
let state = document.getElementById("state");

// Sending message based on on/off state
function handleState() {
    if(state.checked) {
        browser.runtime.sendMessage({
            command: "on",
        });
    } else {
        browser.runtime.sendMessage({
            command: "off",
        });
    }
}

// Sending message based on set state
function handleSet() {
    browser.runtime.sendMessage({
        command: "set",
        period: period.value,
    });
}

// Sending message based on reset state
function handleReset() {
    browser.runtime.sendMessage({
        command: "reset",
    });
}

// Display initial value of range
periodInfo.innerHTML = period.value;

// Update the display each time the user updates the input range
period.oninput = () => {
    periodInfo.innerHTML = period.value;
}

state.addEventListener("CheckboxStateChange", handleState)
document.getElementById("reset").addEventListener('click', handleReset);
document.getElementById("set").addEventListener('click', handleSet);