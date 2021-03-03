let settingsButton = document.getElementById('settings-button');
let settingsIcon = document.getElementsByClassName('settings-icon')[0];
let settingsSection = document.getElementsByClassName('settings-section')[0];

import { currentState , previousStateText , updateStateInfo } from '../js/statemachine.js';

let activateSettings = settingsButton.addEventListener('click',function() {
  if (currentState.textContent === "settings") {
    settingsIcon.classList.add('settings-inactive');
    settingsIcon.classList.remove('settings-active');
    settingsIcon.addEventListener('animationend',() => {
      settingsIcon.classList.remove('settings-inactive');
    });
    currentState.textContent = previousStateText;
    updateStateInfo(currentState.textContent);
    updateState(currentState.textContent); // for array
    showPreviousElement();
  }
  else {
    settingsIcon.classList.add('settings-active');
    currentState.textContent = "settings";
    updateStateInfo(currentState.textContent);
    updateState(currentState.textContent); // for array
    settingsSection.classList.remove('section-hide');
    hideAllElements();
  }
});

// toggle functions

let toggleAnimation = document.getElementById('toggle-animation');
let toggleButtonAnimation = document.getElementById('toggle-button-animation');
let toggleTheme = document.getElementById('toggle-theme');
let toggleButtonTheme = document.getElementById('toggle-button-theme')

let activateAnimation = toggleAnimation.addEventListener('click',function() {
  if (toggleButtonAnimation.classList.contains('toggle-active')) {
    // console.log('toggle already active');
    toggleButtonAnimation.classList.remove('toggle-active');
  }
  else {
    toggleButtonAnimation.classList.add('toggle-active');
  }
});

let activateTheme = toggleTheme.addEventListener('click',function() {
  if (toggleButtonTheme.classList.contains('toggle-active')) {
    //console.log('toggle already active');
    toggleButtonTheme.classList.remove('toggle-active');
  }
  else {
    toggleButtonTheme.classList.add('toggle-active');
  }
});

// may want to make one function to handle both hide and show elements

function hideAllElements() {
  document.getElementsByClassName('brain')[0].classList.add('section-hide');
  //console.log('hide all non settings elements');
}

function showPreviousElement() {
  document.getElementsByClassName('brain')[0].classList.remove('section-hide');
  settingsSection.classList.add('section-hide');
}


export { activateSettings };
