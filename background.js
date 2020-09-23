const name = "eye-break";
const delayInMinutes = 0.1;
const periodInMinutes = delayInMinutes;

function processAlarm(alarm) {
    if(alarm) {
        console.log(alarm);
    }
}

browser.alarms.create(name, {
    delayInMinutes,
    periodInMinutes
});

browser.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm rang", alarm);
});