class Note{
    constructor(title, desc, dueDate, priority, notes, checkList){
        this.title = title
        this.desc = desc
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.checkList = checkList
    }
}

class Project{
    constructor(name){
        this.name = name
        this.notes = []
    }

    addNote(newNote){
        this.notes.push(newNote)
    }
}

class Containers{
    static noteContainer(title, desc, dueDate, priority){
        let noteContainer = document.createElement('div')

        let titleEle = document.createElement('p')
        titleEle.textContent = title
        noteContainer.appendChild(titleEle)

        let descEle = document.createElement('p')
        descEle.textContent = desc
        noteContainer.appendChild(descEle)

        let dueDateEle = document.createElement('p')
        dueDateEle.textContent = dueDate
        noteContainer.appendChild(dueDateEle)

        let priorityEle = document.createElement('p')
        priorityEle.textContent = priority
        noteContainer.appendChild(priorityEle)

        return noteContainer

    }
}

export {Note, Project, Containers}