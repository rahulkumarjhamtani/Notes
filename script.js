const addbtn = document.getElementById("add");

addbtn.addEventListener('click', () => {
    addnewnote();
});

function addnewnote() {
    var notes = document.createElement('div');
    notes.classList.add('notes');

    notes.innerHTML = 
    `<div class="notes">
        <div class="tools" id="tool">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
            <button class="color"><i class="fas fa-palette"></i></button>
        </div>
        <div class="main hidden">
        </div>
        <textarea></textarea>
    </div>`;

    var editbtn = notes.querySelector(".edit");
    var deletebtn = notes.querySelector(".delete");
    var colorbtn = notes.querySelector(".color");

    var main = notes.querySelector(".main");
    var text = notes.querySelector("textarea");

    editbtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        text.classList.toggle('hidden');
    });

    deletebtn.addEventListener('click', () => {
        notes.remove();
    });

    colorbtn.addEventListener('click', () => {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("tool").style.backgroundColor = "#" + randomColor;
    });


    text.addEventListener('input', (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);

        main.style.color = '#bdfcf9';
        main.style.fontSize = '35px';
        main.style.padding = '15px';
        main.style.fontFamily = 'Patrick Hand, cursive';
        main.style.letterSpacing = '2px';

        updateLS();
    });
    
    

    document.body.appendChild(notes);
}

updateLS() {
    var content = document.querySelectorAll("textarea");

    var cont = [];

    content.forEach(notes => {
        cont.push(notes.value);
    });

}



