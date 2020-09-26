const name = "eye-break";
let delayInMinutes = 0.1;
let periodInMinutes = delayInMinutes;

// Alarm checker function
function processAlarm(alarm) {
    if(alarm) {
        eyeBreak();
    } else {
        console.log("No alarm detected")
    }
}

// Instructing user to take break
function eyeBreak() {
    // Open image of nature
    // Close the new tab
}

// Incoming handler function 
function handleIncomingMessages(message) {
    if(message.command === "on") {
        console.log("on state");
    } else if(message.command === "off") {
        console.log("off state");
    } else if(message.command === "reset") {
        console.log("reset state");
    } else if(message.command === "set") {
        console.log("set state as", message.period, "mins");
    }
}

// Creating alarm on starting the browser
browser.alarms.create(name, {
    delayInMinutes,
    periodInMinutes
});

// Handling case when the alarm goes off
browser.alarms.onAlarm.addListener((alarm) => {
    processAlarm(alarm);
});

// Listening to messages
browser.runtime.onMessage.addListener(handleIncomingMessages)