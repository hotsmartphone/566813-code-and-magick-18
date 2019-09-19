'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;

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
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP + GAP, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP + GAP, CLOUD_Y + FONT_GAP * 2 + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2 - FONT_GAP - (MAX_BAR_HEIGHT * times[i] / maxTime));
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(245, 100%, 42%, ' + (Math.random() + 0.1) + ')'; // к рандомному значению добавляю 0.1 во избежание белых столбцов
    }
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - (MAX_BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, MAX_BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
  }
};
