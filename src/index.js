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
import {Note, Project} from "./modules/factories"


let overlay = document.querySelector('.overlay')
let addNoteInputContainer = document.querySelector('.add-note-input-container')

let addNoteBtn = document.querySelector('.add-note-btn')
let addProjectBtn = document.querySelector('.add-project-btn')

// Inputs for new note 
let noteTitleInput = document.querySelector('#noteTitle')
let noteDescInput = document.querySelector('#noteDesc')
let dueDateInput = document.querySelector('#due-date')
let priorityButtons = document.querySelectorAll('input[name=priority]')
let submitNoteBtn = document.querySelector('.submit-note-btn')

let projectsContainer = document.querySelector('.projects-container')
let projectsList = document.querySelector('.projects-list')

projectsContainer.addEventListener('click', handleProjectNameClick)

addNoteBtn.addEventListener('click', handleAddNoteBtn)

submitNoteBtn.addEventListener('click', createNoteFromInput)

addProjectBtn.addEventListener('click', handleAddProjectBtn)

function handleAddProjectBtn(e){

}


function handleProjectNameClick(e){
    if(e.target.tagName !== "LI")return
    console.log(e.target.textContent);
    listClient.setProject(e.target.textContent)
}
function handleAddNoteBtn(e){
    console.log('add note btn');
    addNoteInputContainer.classList.remove('visibility-hidden')
    overlay.classList.remove('visibility-hidden')

}

// let project1 = new Project('test project')

// let note1 = new Note('creative title','creative desc','Jan 1','10','tools in hidden cart','creative checklist')

// console.log({project1, note1});
// console.log(note1.title);

// function ClientController(){
//     let currentProject = ''
//     let projects = []
//     let defaultProject = new Project('Default Todo')
//     projects.push(defaultProject)


// }

// function setProject(projectName){
//     currentProject = projectName
// }

/*
find current project's reference
CP.addNote(newNote)
*/
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


}

// class ProjectManager{

// }

// let client = ClientController()
let listClient = new Client()

console.log(listClient);
listClient.addProject('ass')
listClient.setProject('ass')
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
    // static createProjectLI(projectName){
    //     let newEleLI = document.createElement('li') 
    //     let newElEP = document.createElement('p')

    //     newElEP.textContent = projectName
    //     newEleLI.appendChild(newElEP)
    //     projectsList.appendChild(newEleLI)

    // }
}
RenderDom.renderProjects(listClient.projects)
// On "form" submit
function createNoteFromInput(e){
    // if(noteDescInput.value ===)
    console.log({noteTitleInput,noteDescInput,dueDateInput,priorityButtons});

    let selectedBtn;
    priorityButtons.forEach((btn)=>{
        if(btn.checked === true){
            selectedBtn = btn
        }
    })
    selectedBtn = selectedBtn || priorityButtons[0]
    // console.log(selectedBtn.value);

    let newNote = new Note(
        noteTitleInput.value,
        noteDescInput.value,
        dueDateInput.value,
        selectedBtn.value
        )

    //Push note to current project
    console.log(newNote);

}