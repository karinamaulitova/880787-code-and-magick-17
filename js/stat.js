'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_OFFSET = 10;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_COLOR = 'white';

var BARS_OFFSET = 55;
var GAP = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var YOUR_NAME = 'Вы';
var YOUR_NAME_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var BAR_COLOR_TEMPLATE = 'rgba(0, 0, 255, {opacity}';

var FONT_STYLE = 'PT Mono';
var FONT_GAP = 5;
var FONT_SIZE = 16;
var LINE_HEIGHT = 20;
var BOTTOM_GAP = 20;
var TEXT_X = 150;
var TEXT_Y = 30;
var TEXT_COLOR = 'black';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  var lines = text.split('\n');

  for (var i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x, y + LINE_HEIGHT * i);
  }
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = FONT_SIZE + 'px' + FONT_STYLE;

  // ctx.fillText('Ура вы победили!', 150, 30);
  // ctx.fillText('Список результатов:', 150, 50);

  renderText(ctx, 'Ура вы победили!\nСписок результатов:', TEXT_X, TEXT_Y);

  var maxTime = getMaxElement(times);


  for (var i = 0; i < names.length; i++) {
    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;


    if (names[i] === YOUR_NAME) {
      ctx.fillStyle = YOUR_NAME_BAR_COLOR;
    } else {
      var opacity = Math.random() * 0.9 + 0.1; // чтобы не было белого цвета, потому что он сливается с фоном
      var barColor = BAR_COLOR_TEMPLATE.replace('{opacity}', opacity.toString());
      ctx.fillStyle = barColor;
    }

    ctx.fillRect(CLOUD_X + BARS_OFFSET + (BAR_WIDTH + GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - (BOTTOM_GAP + FONT_SIZE + FONT_GAP + barHeight),
        BAR_WIDTH,
        barHeight);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + BARS_OFFSET + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BOTTOM_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BARS_OFFSET + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - (BOTTOM_GAP + FONT_SIZE + FONT_GAP + barHeight + FONT_GAP));
  }
};


