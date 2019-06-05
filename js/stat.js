'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_OFFSET = 10;

var BARS_OFFSET = 55;
var GAP = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var YOUR_NAME_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var FONT_GAP = 5;
var FONT_SIZE = 16;
var BOTTOM_GAP = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
  renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = FONT_SIZE + 'px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:', 150, 50);

  var maxTime = getMaxElement(times);


  for (var i = 0; i < names.length; i++) {
    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;


    if (names[i] === 'Вы') {
      ctx.fillStyle = YOUR_NAME_BAR_COLOR;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }

    ctx.fillRect(CLOUD_X + BARS_OFFSET + (BAR_WIDTH + GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - (BOTTOM_GAP + FONT_SIZE + FONT_GAP + barHeight),
        BAR_WIDTH,
        barHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + BARS_OFFSET + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - BOTTOM_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BARS_OFFSET + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - (BOTTOM_GAP + FONT_SIZE + FONT_GAP + barHeight + FONT_GAP));
  }
};


