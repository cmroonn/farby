"use strict";

$(document).ready(function () {
  function validate(form) {
    var fields;
    try {
      fields = form.querySelectorAll(".required-field");
    } catch (e) {
      console.log('err');
      return true;
    }
    var arr = [];
    console.log(fields);
    fields.forEach(function (field) {
      if (!field.value || field.value === "") {
        field.classList.add("error");
        arr.push(false);
        return;
      }
      field.classList.remove("error");
      arr.push(true);
    });
    if (arr.find(function (el) {
      return el === false;
    }) === false) return false;
    console.log('ookkk');
    return true;
  }
  $("#form-1").submit(function (e) {
    e.preventDefault();
    var form = document.getElementById('form-1');
    if (validate(form)) {
      sendAjaxForm('result_form', 'form-1', '../mail/sender.php');
    }
  });
  $("#form-2").submit(function (e) {
    e.preventDefault();
    var form = document.getElementById('form-2');
    if (validate(form)) {
      sendAjaxForm('result_form', 'form-2', '../mail/sender.php');
    }
  });
  $("#form-3").submit(function (e) {
    e.preventDefault();
    var form = document.getElementById('form-3');
    if (validate(form)) {
      sendAjaxForm('result_form', 'form-3', '../mail/sender.php');
    }
  });
  $("#form-4").submit(function (e) {
    e.preventDefault();
    var form = document.getElementById('form-4');
    if (validate(form)) {
      sendAjaxForm('result_form', 'form-4', '../mail/sender.php');
    }
  });
  $("#form-5").submit(function (e) {
    e.preventDefault();
    var form = document.getElementById('form-5');
    if (validate(form)) {
      sendAjaxForm('result_form', 'form-5', '../mail/sender.php');
    }
  });
  function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
      url: url,
      //url страницы
      type: "POST",
      //метод отправки
      dataType: "html",
      //формат данных
      data: $("#" + ajax_form).serialize(),
      // Сеарилизуем объект
      success: function success(response) {
        //Данные отправлены успешно
        document.getElementById(ajax_form).closest('.popup').classList.remove("active");
        document.getElementById('thankyou').classList.add("active");
      },
      error: function error(response) {
        // Данные не отправлены
        alert('Ошибка. Данные не отправлены.');
      }
    });
  }
  ;
});