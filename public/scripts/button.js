function classJSToggle() {
    document.getElementById("JSList").classList.toggle('displayList');
    document.getElementById("JSList").classList.toggle('hideList');
}
document.querySelector('#learningJS').addEventListener('click', classJSToggle);

function classDBToggle() {
    document.getElementById("DBList").classList.toggle('displayList');
    document.getElementById("DBList").classList.toggle('hideList');
}
document.querySelector('#learningDB').addEventListener('click', classDBToggle);

function classHTTPToggle() {
    document.getElementById("HTTPList").classList.toggle('displayList');
    document.getElementById("HTTPList").classList.toggle('hideList');
}
document.querySelector('#learningHTTP').addEventListener('click', classHTTPToggle);

function classWebToggle() {
    document.getElementById("WebList").classList.toggle('displayList');
    document.getElementById("WebList").classList.toggle('hideList');
}
document.querySelector('#learningWeb').addEventListener('click', classWebToggle);

//document.querySelector('#learningGoals').addEventListener('click', classToggle);

// function closeNav() {
//     document.getElementById("learningList").style.display = "none";
// }