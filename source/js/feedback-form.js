const formFeedback = document.querySelector('.form-feedback');

const handlerQuantityFilesUsers = function() {
    const inputFilesElement = formFeedback.querySelector('input[type="file"');
  
    inputFilesElement.addEventListener('change', function() {
      const customButton = this.previousElementSibling;
  
      if(this.files && this.files.length >= 1) {
        const quantityFile = this.files.length;
        customButton.textContent = `Выбрано файлов: ${quantityFile}`;
      }
    });
}

const handlerCounterSymbol = function() {
    const textArea = formFeedback.querySelector('textArea');
    const counterSpan = textArea.nextElementSibling;
    const counter = counterSpan.querySelector('span');

    textArea.addEventListener('input', onInput);

    function onInput(e) {
        if(e.target.value.length === 500) {
            counterSpan.style.color = "tomato";
        } else {
            counterSpan.style.color = "#57d6ff";
        }
        const length = e.target.value.length
        counter.textContent = length
    };
}

const handlerSubmitForm = function() {
    
    formFeedback.addEventListener('submit', function(e) {
        e.preventDefault();
        let userName = formFeedback.querySelector('input[name="userName"');
        userName = userName.value;
        formFeedback.innerHTML = "";
        const message = document.createElement('p');
        message.innerHTML = `${userName}, форма успешно отправлена. Ответ будет направлен на вашу электронную почту. `

        formFeedback.append(message);
    })
}

export {handlerQuantityFilesUsers, handlerCounterSymbol, handlerSubmitForm};