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
    constructor(name){
        this.name = name
        this.notes = []
    }

    addNote(newNote){
        this.notes.push(newNote)
    }
}

export {Note, Project}