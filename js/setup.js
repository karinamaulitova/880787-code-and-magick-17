'use strict';

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomIndex = function (arrayLength) {
  return Math.round(Math.random() * (arrayLength - 1));
};

var getRandomName = function () {
  if (Math.random() > 0.5) {
    return wizardNames[getRandomIndex(wizardNames.length)]
      + ' '
      + wizardSurnames[getRandomIndex(wizardSurnames.length)];
  } else {
    return wizardSurnames[getRandomIndex(wizardSurnames.length)]
      + ' '
      + wizardNames[getRandomIndex(wizardNames.length)];
  }
};

var getRandomCoatColor = function () {
  return wizardCoatColors[getRandomIndex(wizardCoatColors.length)];
};

var getRandomEyesColor = function () {
  return wizardEyesColors[getRandomIndex(wizardEyesColors.length)];
};

var getRandomFireballColor = function () {
  return wizardFireballColors[getRandomIndex(wizardFireballColors.length)];
};

var getRandomWizard = function () {
  return {
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  };
};

var wizards = [
  getRandomWizard(),
  getRandomWizard(),
  getRandomWizard(),
  getRandomWizard()
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupPopup = document.querySelector('.setup');
var setupOpenBlock = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var setupUsernameInput = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setupPopup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupPopup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpenBlock.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

setupOpenBlock.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupUsernameInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

var wizardCoat = document.querySelector('.wizard-coat');
var wizardCoatInput = document.querySelector('input[name=coat-color]');
wizardCoat.addEventListener('click', function () {
  var newCoatColor = getRandomCoatColor();
  wizardCoat.style.fill = newCoatColor;
  wizardCoatInput.value = newCoatColor;
});

var wizardEyes = document.querySelector('.wizard-eyes');
var wizardEyesInput = document.querySelector('input[name=eyes-color]');
wizardEyes.addEventListener('click', function () {
  var newEyesColor = getRandomEyesColor();
  wizardEyes.style.fill = newEyesColor;
  wizardEyesInput.value = newEyesColor;
});

var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardFireballInput = document.querySelector('input[name=fireball-color]');
wizardFireball.addEventListener('click', function () {
  var newFireballColor = getRandomFireballColor();
  wizardFireball.style.background = newFireballColor;
  wizardFireballInput.value = newFireballColor;
});
