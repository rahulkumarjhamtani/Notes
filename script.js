var addbtn = document.getElementById("add");

var note = JSON.parse(localStorage.getItem('note'));

if(note)
{
    note.forEach(notes => {
        addnewnote(notes);
    });
}

addbtn.addEventListener('click', () => {
    addnewnote();
});

function addnewnote(text = "") {
    var notes = document.createElement('div');
    notes.classList.add('notes');

    notes.innerHTML = 
    `<div class="notes">
        <div class="tools" id="tool">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
            <button class="color"><i class="fas fa-palette"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}">
        </div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    </div>`;

    var editbtn = notes.querySelector(".edit");
    var deletebtn = notes.querySelector(".delete");
    var colorbtn = notes.querySelector(".color");

    var changecolor = notes.querySelector(".tools");

    var main = notes.querySelector(".main");
    var textar = notes.querySelector("textarea");

    textar.value = text;
    
    main.innerHTML = marked(text);
    main.style.color = 'rgb(214, 211, 253)';
    main.style.fontSize = '35px';
    main.style.padding = '15px';
    main.style.fontFamily = 'Patrick Hand, cursive';
    main.style.letterSpacing = '2px';

    editbtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textar.classList.toggle('hidden');
    });

    deletebtn.addEventListener('click', () => {
        notes.remove();
        updateLS();
    });

    colorbtn.addEventListener('click', () => {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        // document.getElementById("tool").style.backgroundColor = "#" + randomColor;
        changecolor.style.backgroundColor = "#" + randomColor;
    });


    textar.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);
    
        updateLS();
    });

    document.body.appendChild(notes);
}

function updateLS() {
    var content = document.querySelectorAll('textarea');

    var note = [];

    content.forEach(notes => {
        note.push(notes.value);
    });

    localStorage.setItem('note', JSON.stringify(note));
}



