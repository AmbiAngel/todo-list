// let i = document.createElement('h1')
// i.textContent = 'test4'
// document.querySelector('body').appendChild(i)

/*
Generate Note class
    Title
    Description
    Due Date
    Priority rating

Pack Note into html Class
    pack note into containes and display info

^For each item in array, run this 


Logic to add new Note to array
Logic to remove Note to array

*/
import './style.css'

let noteTitleInput = document.querySelector('#noteTitle')
let noteDescInput = document.querySelector('#noteDesc')
let dueDateInput = document.querySelector('#due-date')
let priorityButtons = document.querySelectorAll('input[name=priority]')
let addButton = document.querySelector('.add-button')


addButton.addEventListener('click', addNote)

class Note{
    constructor(title, desc, dueDate, prioNum, notes, checkList){
        this.title = title
        this.desc = desc
        this.dueDate = dueDate
        this.prioNum = prioNum
        this.notes = notes
        this.checkList = checkList
    }
}

class Project{
    constructor(projectName){
        this.projectName = projectName
    }
}

let project1 = new Project('test project')

let note1 = new Note('creative title','creative desc','Jan 1','10','tools in hidden cart','creative checklist')

console.log({project1, note1});
console.log(note1.title);

function ClientController(){
    let projects = []
    let defaultProject = new Project('Default Todo')
    projects.push(defaultProject)


}

let client = ClientController()

// On "form" submit
function addNote(e){
    console.log({noteTitleInput,noteDescInput,dueDateInput,priorityButtons});

    let selectedBtn;
    priorityButtons.forEach((btn)=>{
        if(btn.checked === true){
            selectedBtn = btn
        }
    })
    console.log(selectedBtn.value);

    let newNote = new Note(
        noteTitleInput.value,
        noteDescInput.value,
        dueDateInput.value,
        selectedBtn.value
        )

    console.log(newNote);
}