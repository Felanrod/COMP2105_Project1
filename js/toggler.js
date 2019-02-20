const body = document.querySelector('body');
const lightSwitch = document.querySelector('#lightSwitch');
const plunger = document.querySelector('#plunger');
const exit = document.querySelector('#doorway');
let lightInitialized = false;
let plungerInitialized = false;
let end = false;

lightSwitch.addEventListener('click', () => {
    if (lightInitialized) {
        body.classList.toggle('lightSwitchOff');
    }
    if(!lightInitialized) {
        lightInitialized = true;
    }
    body.classList.toggle('lightSwitchOn');
});

plunger.addEventListener('click', () => {
    if (body.classList.contains('lightSwitchOn')) {
        if (!plungerInitialized) {
            body.classList.add('plunged');
        }
        body.classList.toggle('plungerDown');
    }
});

exit.addEventListener('click', () => {
    if (body.classList.contains('plunged')) {
        body.classList.toggle('ended');
    }
});