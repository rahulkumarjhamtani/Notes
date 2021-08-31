var note = document.querySelector(".notes");

var edit = document.querySelector(".edit");
var delete = document.querySelector(".delete");
var color = document.querySelector(".color");

var main = document.querySelector(".main");
var text = document.querySelector("textarea");

edit.addEventListener('click', () => {
    main.classList.toggle('hidden');
    text.classList.toggle('hidden');
});