//logic about notes

//Code about edit modal

//this close the modal
function getValue(id) {
    return document.getElementById(id).value;
}

function hideElement(id) {
    document.getElementById(id).style.opacity = "0";
    setTimeout(function() {
        document.getElementById(id).style.display = "none";
    }, 1000);
}

//this open the modal
function showElement(id) {
    document.getElementById(id).style.display = "block";
    setTimeout(function() {
        document.getElementById(id).style.opacity = "1";
    }, 400);
}

//This the fucntion about, where we decided the type of modal
function closeModal(n) {
    if (n == 1) {
        transitionElement('edit-modal', '0.3s');
        hideElement('edit-modal');
    } else if (n == 2) {
        transitionElement('delete-modal', '0.3s');
        hideElement('delete-modal');
    } else {
        transitionElement('profile-modal', '0.3s');
        hideElement('profile-modal');
    }

}

//This we set the data of the function
function setData(id, data) {
    document.getElementById(id).value = data;
}

//this the same, but now we set the type of the select
function setType(id, type) {
    document.getElementById(id).selectedIndex = type;
}

//This we show the modal
function showModal(nNote, title, type, note) {
    let newType = parseInt(type) - 1;
    showElement('edit-modal');
    setData('nNote', nNote);
    setData('title', title);
    setType('type', newType);
    setData('note', note);
}


//We show the delete modal
function showModalDelete(nNote) {
    showElement('delete-modal');
    setData('nNoteDelete', nNote);
}


//We set the transtiion about the modal
function transitionElement(id, time) {
    document.getElementById(id).style.transition = time;
}


//This code is about copy the element
function copy(title, note) {
    let text = "Titulo: " + title + "\n" + note;

    var message = document.getElementById("noteCopy");
    message.value = text;
    message.select();
    document.execCommand('copy');
    generateMessage('Success', 'Dato copiado');
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


//Codigo para cambiar el avatar
function showModalProfile() {
    showElement('profile-modal');
}
let avatar;

function avatarProfile(newAvatar) {
    avatar = newAvatar;

}

function changeAvatar() {

    let image = 'images/home/' + avatar + ".jpg";
    document.getElementById('profile').src = image;
    closeModal(3);
}