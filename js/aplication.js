document.querySelector('#guardar').addEventListener('click', validateInputsRegistro);
document.querySelector('#eliminar').addEventListener('click', deleteUser);


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

function addUserToSystem(nombre, apellidos, telefono, usuario, password) {
    var userList = [];
    var newUser = {
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
        usuario: usuario,
        password: password
    };
    userList = getUserList();
    userList.push(newUser);
    localStorageUserList(userList);
}

function deleteUser(){
    var userList = getUserList();
    var position = userList.length -1;
    userList.pop();
    localStorageUserList(userList);
}
