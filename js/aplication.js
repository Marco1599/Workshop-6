document.querySelector('#guardar').addEventListener('click', validateInputsRegistro);

function validateInputsRegistro() {
    var nombre = document.querySelector('#inputName').value;
    var apellidos = document.querySelector('#inputFirsName').value;
    var telefono = document.querySelector('#inputPhone').value;
    if (nombre == "" || apellidos == "" || telefono == "") {
        alert("Ingrese todos los datos");
    } else {
        saveUser();
    }
}


function saveUser() {
    var nombre = document.querySelector('#inputName').value,
        apellidos = document.querySelector('#inputFirsName').value,
        telefono = document.querySelector('#inputPhone').value

    addUserToSystem(nombre, apellidos, telefono);
}