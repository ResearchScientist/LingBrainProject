let currentState = document.getElementById('current-state');
let settingsButton = document.getElementById('settings-button');
let settingsIcon = document.getElementsByClassName('settings-icon')[0];

let activateSettings = settingsButton.addEventListener('click',function() {
  if (currentState.textContent === "settings") {
    settingsIcon.classList.remove('settings-active');
    console.log('settings already active');
  }
  else {
    //console.log('clicked settings');
    settingsIcon.classList.add('settings-active');
    currentState.textContent = "settings";
    console.log('settings active');
    hideAllElements();
  }
});

// change function to add class hide-element to all elements that are not settings
// so far it only targets the given element

function hideAllElements() {
  document.getElementsByClassName('brain')[0].classList.add('section-hide');
  console.log('hide all non settings elements');
}

export { activateSettings };
