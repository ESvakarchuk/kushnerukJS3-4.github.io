console.log('Let`s do some code!');

var PageCreator = {
  wrapper: document.createElement('div'),
  h1: document.createElement('h1'),
  h2: document.createElement('h2'),
  form: document.createElement('form'),
  insertElements: function () {
      // Добавляем wrapper, h1, h2, form. Присваиваем id...
      document.body.appendChild(this.wrapper);
      this.wrapper.id = 'wrapper';
      wrapper.appendChild(this.h1);
      wrapper.appendChild(this.form);
      this.form.id = 'form_holder';
      form_holder.method = 'get';
      form_holder.appendChild(this.h2);
      // Цикл создающий и добавляющий label>input(radio) в form. Присваиваем id для label...
      for (var i = 1; i < 10; i++) {
        var label = document.createElement('label');
        label.id = 'label_' + i;
        form_holder.appendChild(label);
        var labelId = document.getElementById('label_' + i);
        var input = document.createElement('input');
        input.type = 'radio';
        labelId.appendChild(input);
        // Добавляем к input(radio) name и value...
        if (i <= 3) {
          input.name = 'question_1';
        } else if (i <= 6) {
          input.name = 'question_2';
        } else input.name = 'question_3';

        var inputArr = document.querySelectorAll('input');
        var newInputValue = 1;

        for (var k = 0; k < inputArr.length; k++) {
          inputArr[k].value = newInputValue;
          if (newInputValue < 3) {
            newInputValue++;
          } else if (newInputValue === 3) {
            newInputValue = 1;
          }
        }
        // Добавляем последние два h2...
        if (i === 3 || i === 6) {
          var headerInsert = document.createElement('h2');
          form_holder.appendChild(headerInsert);
        }
        // Присваиваем циклом id для всех h2...
        var headersId = document.getElementsByTagName('h2');
        for (var j = 0; j < headersId.length; j++) {
          headersId[j].id = 'question_' + j;
        }
      }
      // Создаем submit button и присваиваем id, type и value...
      var submitButton = document.createElement('input');
      submitButton.id = 'submit_button';
      submitButton.type = 'submit';
      submitButton.value = 'Проверить мои результаты';
      form_holder.appendChild(submitButton);
  },
  insertContent: function() {
    // Заполняем h1, h2, label текстом...
    this.h1.innerHTML = 'Тест по программированию';
    question_0.innerHTML = '1. Вопрос №1';
    question_1.innerHTML = '2. Вопрос №2';
    question_2.innerHTML = '3. Вопрос №3';
    label_1.innerHTML += 'Вариант ответа №1';
    label_2.innerHTML += 'Вариант ответа №2';
    label_3.innerHTML += 'Вариант ответа №3';
    label_4.innerHTML += 'Вариант ответа №1';
    label_5.innerHTML += 'Вариант ответа №2';
    label_6.innerHTML += 'Вариант ответа №3';
    label_7.innerHTML += 'Вариант ответа №1';
    label_8.innerHTML += 'Вариант ответа №2';
    label_9.innerHTML += 'Вариант ответа №3';
  }
};
// Вызываем методы объекта (создаем страницу)
PageCreator.insertElements();
PageCreator.insertContent();
