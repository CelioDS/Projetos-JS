// elementos

const notesContainer = document.getElementById("notes-container")

const noteInput = document.getElementById("note-content")
const addNoteBtn = document.getElementById("add-note")



//funcoes
function showNotes() {

    clearNotes()

    getNotes().forEach((note) => {
        const createElement = createNote(note.id, note.content, note.fixed)
        notesContainer.appendChild(createElement)
    })
}


function clearNotes() {
    notesContainer.replaceChildren([])
}


function addNote() {
    const notes = getNotes()


    const noteObj = {
        id: generateId(),
        content: noteInput.value,
        fixed: false
    }
    const noteElement = createNote(noteObj.id, noteObj.content)

    notesContainer.appendChild(noteElement)

    notes.push(noteObj)

    saveNotes(notes)

    noteInput.value = ''
}

function deleteNote(id, element) {
    const notas = getNotes().filter((note) => note.id !== id)
    saveNotes(notas)
    notesContainer.removeChild(element)

}

function copyNotes(id) {
    const notes = getNotes()

    const targetNote = notes.filter((note) => note.id === id)[0]

    const noteObject = {
        id: generateId(),
        content: targetNote.content,
        fixed: false
    }


    const noteElement = createNote(
        noteObject.id,
        noteObject.content,
        noteObject.fixed
    )

    notesContainer.appendChild(noteElement)

    notes.push(noteObject)
    saveNotes(notes)
}

//local storage
function getNotes() {
    const notas = JSON.parse(localStorage.getItem("notas") || '[]')

    const orderNotes = notas.sort((a, b) => (a.fixed > b.fixed ? -1 : 1))

    return orderNotes
}

function saveNotes(notas) {
    localStorage.setItem("notas", JSON.stringify(notas))
}

function createNote(id, content, fixed) {
    const element = document.createElement("div")
    const textarea = document.createElement("textarea")
    const fixado = document.createElement("i")
    const excluir = document.createElement("i")
    const copiar = document.createElement("i")


    element.classList.add("notes")
    textarea.value = content
    textarea.placeholder = 'Adicione algum texto...'
    fixado.classList = 'bi bi-pin'
    excluir.classList = "bi bi-x-lg"
    copiar.classList = "bi bi-file-earmark-plus"


    element.appendChild(textarea)
    element.appendChild(fixado)
    element.appendChild(copiar)
    element.appendChild(excluir)

    if (fixed) {
        element.classList.add("fixed")
    }


    // eventos de elemento
    element.querySelector(".bi-pin").addEventListener("click", () => {
        toggleFixedNote(id)
    })

    const deletar = element.querySelector(".bi-x-lg")
    deletar.addEventListener("click", () => {
        deleteNote(id, element)
    })

    const copia = element.querySelector('.bi-file-earmark-plus')
    copia.addEventListener("click", () => {
         copyNotes(id)
    })




    return element
}

function toggleFixedNote(id) {
    const notes = getNotes()

    const targetNote = notes.filter((note) => note.id === id)[0]

    targetNote.fixed = !targetNote.fixed
    saveNotes(notes)
    showNotes()

}


function generateId() {
    return Math.floor(Math.random() * 5000)
}

//Eventos

addNoteBtn.addEventListener("click", () => addNote())

//Start
showNotes()