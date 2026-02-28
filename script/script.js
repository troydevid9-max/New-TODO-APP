const taskInput = document.querySelector(".taskInput")
const description = document.querySelector(".taskDetails")
const submitBtn = document.querySelector(".submit")

//VIEW DESC
let holder
let taskBox
let descBox

// const task = document.querySelector("task")
let id = 0

function newTask() {

    const describe = document.querySelector(".taskDetails")
    const task = document.createElement("div")
    const dot = document.createElement("div")
    const text = document.createElement("p")
    const recent = document.querySelector(".recntlyCreated")
    const info = document.querySelector(".info")
    const icons = document.createElement("div")
    const viewBtn = document.createElement("p")
    const editBtn = document.createElement("p")
    const deleteBtn = document.createElement("p")

    const hold = document.createElement("div")
    hold.classList.add("hold")

    holder = hold

    //DESCRIPTION BOX IN TASK
    const taskDescription = document.createElement("div")
    const taskDescriptionH1 = document.createElement("h1")
    taskDescriptionH1.textContent = taskInput.value

    const taskDescriptionP = document.createElement("p")
    taskDescriptionP.textContent = describe.value
    describe.value = ""

    //ADD THE CLASS NAME
    taskDescription.classList.add("Box")
    descBox = taskDescription

    //APPEND TO THE DESCRIPTION BOX
    taskDescription.appendChild(taskDescriptionH1)
    taskDescription.appendChild(taskDescriptionP)





    task.classList.add("task")
    icons.classList.add("icons")


    viewBtn.textContent = "👁️"
    editBtn.textContent = "📝"
    deleteBtn.textContent = "🗑️"



    task.id = id + 1
    dot.id = "dot"
    text.textContent = taskInput.value

    info.classList.add("notShowing")

    recent.appendChild(hold)
    task.appendChild(dot)
    task.appendChild(icons)
    task.appendChild(text)
    icons.appendChild(viewBtn)
    icons.appendChild(editBtn)
    icons.appendChild(deleteBtn)
    hold.appendChild(task)
    hold.appendChild(descBox)

    taskBox = task

    viewBtn.addEventListener("click", view)
    editBtn.addEventListener("click", edit)
    deleteBtn.addEventListener("click", deleteTask)
    taskInput.value = ""

    id = id + 1

    console.log("done")

}

function view(e) {
    const taskId = (e.target.parentElement.parentElement.id)

    const selectedTask = document.getElementById(taskId).parentElement
    const descriptionBox = selectedTask.querySelector(".Box")
    console.log(descriptionBox)
    console.log(selectedTask)

    descriptionBox.classList.toggle("desShow")

}

function edit(e) {

    const taskId = (e.target.parentElement.parentElement.id)
    console.log(taskId)
}

function deleteTask(e) {
    const taskId = (e.target.parentElement.parentElement.id)
    console.log(taskId)
}



submitBtn.addEventListener("click", newTask)
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        newTask()
    }
})


