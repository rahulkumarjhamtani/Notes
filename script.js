var note = document.querySelector(".notes");

var editbtn = document.querySelector(".edit");
var deletebtn = document.querySelector(".delete");
var colorbtn = document.querySelector(".color");

var main = document.querySelector(".main");
var text = document.querySelector("textarea");

editbtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    text.classList.toggle('hidden');
});

text.addEventListener('input', (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    main.style.color = '#bdfcf9';
    main.style.fontSize = '35px';
    main.style.padding = '15px';
    main.style.fontFamily = 'Patrick Hand, cursive';
    main.style.letterSpacing = '2px';
});