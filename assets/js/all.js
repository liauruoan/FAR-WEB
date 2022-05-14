"use strict";

$(document).ready(function () {
  $('.showMenu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('showMenu-list-show');
  });
});
$(document).ready(function () {
  $('.indexMenu').click(function () {
    $('body').toggleClass('open');
  });
});
$(function () {
  $('.modal').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
  });
});
$(document).ready(function () {
  $('.language').click(function () {
    $('.language_menu').slideToggle();
  });
});
$(document).ready(function () {
  $('#putinCart').click(function () {
    $('#putinCart').css({
      'background-color': '#2d2d2d'
    });
    document.querySelector('#putinCart').textContent = '已加入購物車';
  });
});
//# sourceMappingURL=all.js.map
