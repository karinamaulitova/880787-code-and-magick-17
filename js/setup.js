'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

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
