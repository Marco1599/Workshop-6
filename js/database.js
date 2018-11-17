var userList = [];

function addUserToSystem(nombre, apellidos, telefono) {
    var newUser = {
        nombre: nombre,
        apellidos: apellidos,
        telefono: telefono,
    };
    console.log(newUser);
    userList.push(newUser);
    localStorageUserList(userList);
}

function getUserList(){
    var storagerList=localStorage.getItem('localUserList');
    if(storagerList==null){
        userList = [];
    }
    else{
        userList = JSON.parse(storagerList);
    }
    return userList;
}

function localStorageUserList(list) {
    localStorage.setItem('localUserList',JSON.stringify(list));
}