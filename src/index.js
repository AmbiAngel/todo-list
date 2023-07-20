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
import {Note, Project, Containers} from "./modules/factories"

//Note Input
let overlay = document.querySelector('.overlay')
let addNoteInputForm = document.querySelector('.add-note-input-container')

// Add Buttons
let addNoteBtn = document.querySelector('.add-note-btn')
let addProjectBtn = document.querySelector('.add-project-btn')

// Inputs for new note 
let noteTitleInput = document.querySelector('#noteTitle')
let noteDescInput = document.querySelector('#noteDesc')
let dueDateInput = document.querySelector('#due-date')
// let priorityButtons = document.querySelectorAll('input[name=priority]')
let prioritySelection = document.querySelector('#select-priority')
let submitNoteBtn = document.querySelector('.submit-note-btn')

//Projects
let projectsContainer = document.querySelector('.projects-container')
let projectsList = document.querySelector('.projects-list')

//Containers
let notesContainer = document.querySelector('.notes-container')


//Event listeners
projectsContainer.addEventListener('click', handleProjectNameClick)

addNoteBtn.addEventListener('click', handleAddNoteBtn)

addNoteInputForm.addEventListener('submit', createNoteFromInput)

addProjectBtn.addEventListener('click', handleAddProjectBtn)

overlay.addEventListener('click', hideInput)

function hideInput(e){
    console.log('overlay click');
    addNoteInputForm.classList.add('visibility-hidden')
    overlay.classList.add('visibility-hidden')
}

function handleAddProjectBtn(e){

}

// Event Listener Callbacks
function handleProjectNameClick(e){
    if(e.target.tagName !== "LI")return
    console.log(e.target.textContent);
    listClient.setProject(e.target.textContent)
    RenderDom.renderNotes()

}

function handleAddNoteBtn(e){
    addNoteInputForm.classList.remove('visibility-hidden')
    overlay.classList.remove('visibility-hidden')

}

function createNoteFromInput(e){
    // No backend so prevent submit behavior for now
    e.preventDefault()
    
    console.log({noteTitleInput,noteDescInput,dueDateInput,prioritySelection});

    let newNote = new Note(
        noteTitleInput.value,
        noteDescInput.value,
        dueDateInput.value,
        prioritySelection.value
        )

    //Push note to current project
    console.log(newNote);
    // TODO: Look for More optimal way to find current project than below?
    let project = listClient.reportCurrentProjectIndex()
    listClient.projects[project].addNote(newNote)

    console.log(listClient.projects[project]);

    RenderDom.renderNotes()
}
// find current project's reference
// CP.addNote(newNote)

class Client{
    constructor(){
        this.currentProject = ''
        this.projects = []
        this.addProject('Default Todo')
        this.setProject('Default Todo')
    }

    setProject(targetProjectName){
        this.currentProject = targetProjectName
        // let actualProject = this.projects.find(proj => proj.name === targetProjectName)
        
        // console.log(actualProject);
    }

    addProject(newProjectName){
        // TODO: First validate no other project has this name
        this.projects.push(new Project(newProjectName))
        // TODO: Rerender DOM 
    }

    reportCurrentProjectIndex(){
        let project = listClient.projects.findIndex(proj =>{return proj.name === listClient.currentProject})
        return project
    }


}

// class ProjectManager{

// }

// let client = ClientController()
let listClient = new Client()

console.log(listClient);
listClient.addProject('test1')
listClient.setProject('test1')
console.log(listClient);



class RenderDom{
    static renderProjects(projects){
        projects.forEach(proj =>{
            let newEleLI = document.createElement('li') 
            
            console.log(proj.name);
            newEleLI.textContent = proj.name
            projectsList.appendChild(newEleLI)
        })
    }
    static renderNotes(){
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }

        removeAllChildNodes(notesContainer)

        let projectIndex = listClient.reportCurrentProjectIndex()
        listClient.projects[projectIndex].notes.forEach(note =>{
            let noteContainer = Containers.noteContainer(
                note.title,
                note.desc,
                note.dueDate,
                note.priority)
            notesContainer.appendChild(noteContainer)
        })
        
    }
}
RenderDom.renderProjects(listClient.projects)
// On "form" submit
