function getUserList() {
    var userList = [];
    var storagerList = localStorage.getItem('localUserList');
    if (storagerList == null) {
        userList = [];
    }
    else {
        userList = JSON.parse(storagerList);
    }
    return userList;
}
function localStorageUserList(list) {
    localStorage.setItem('localUserList', JSON.stringify(list));
}