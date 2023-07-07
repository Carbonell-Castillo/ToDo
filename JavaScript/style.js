function hideElement(id) {
    document.getElementById(id).style.opacity = "0";
    setTimeout(function() {
        document.getElementById(id).style.display = "none";
    }, 200);
}

//this open the modal
function showElement(id) {
    document.getElementById(id).style.display = "initial";
    setTimeout(function() {
        document.getElementById(id).style.opacity = "1";
    }, 100);
}

let step = 1;

function nextStep() {
    let validationStep = false;
    if (step == 1) {
        if (validation('name') && validation('email')) {
            validationStep = true;
        }
    } else if (step == 2) {
        if (validation('nickname') && validation('pass')) {
            validationStep = true;
        }
    }
    if (validationStep) {
        let element = "part" + step;

        transitionElement(element, '0.5s');
        hideElement(element);
        hideElement('login');

        step = step + 1;
        element = "part" + step;
        setTimeout(function() {
            showElement('after');
            showElement(element);
        }, 200);
        if (step == 3) {
            hideElement('step');
            setTimeout(function() {
                showElement('newCount');
            }, 200);
        }
    }
}

function afterStep() {
    hideElement('newCount');
    setTimeout(function() {
        showElement('step');
    }, 200);
    let element = "part" + step;
    transitionElement(element, '0.5s');
    hideElement(element);
    hideElement('login');

    step = step - 1;
    element = "part" + step;
    setTimeout(function() {
        showElement('after');
        showElement(element);
    }, 200);

    if (step == 1) {
        hideElement('after');
        setTimeout(function() {
            showElement('login');
        }, 200);
    }
}

function transitionElement(id, time) {
    document.getElementById(id).style.transition = time;
}

//Code about alert


function validationEmail(valor) {
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    if (!re.exec(valor)) {
        generateMessage("warning", "Direccion de correo electronico invalida");
    } else return true;
}

//Funcion para para validar que el input este lleno y no tengo datos vacios
function validation(id) {
    let input = document.getElementById(id).value;
    let validation;
    if (id === "email") {
        validation = validationEmail(input);

    } else {
        if (input === "" || input === 0) {
            generateMessage("warning", "Complete el campo antes de continuar");
            validation = false;
        } else {
            validation = true;
        }

    }

    return validation;
}

//Alerts
const notification = document.querySelector('.notification');

// Funcion que quita la alerta
function dismissMessage() {
    notification.classList.remove('received');
}

//Funcion que muestra el mesaje
function showMessage() {
    notification.classList.add('received');
    const button = document.querySelector('.notification__message button');
    button.addEventListener('click', dismissMessage, { once: true });
}


//Funcio que generae el mensaje
function generateMessage(name, content) {
    const timeoutID = setTimeout(() => {
        const title = name;
        const text = content;

        const message = document.querySelector('.notification__message');
        message.querySelector('h1').textContent = title;
        message.querySelector('p').textContent = text;
        message.className = `notification__message message--${title}`;

        // lllamamos a la funcion mostrar mensaje
        showMessage();
        clearTimeout(timeoutID);
    }, 1000);
    setTimeout(function() {
        dismissMessage();
    }, 4000);
}