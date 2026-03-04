const taskInput = document.querySelector(".taskInput");
const descriptionInput = document.querySelector(".taskDetails");
const submitBtn = document.querySelector(".submit");
const container = document.querySelector(".recntlyCreated");
const showDiv = document.querySelector(".showDiv")
const editMenu = document.querySelector(".editMenu")
const newTtl = document.querySelector(".editTitle")
const editDesc = document.querySelector("#editDesc")
const editButton = document.querySelector(".edit")







let storedTask = JSON.parse(localStorage.getItem("TaskArray"))

let taskArray
if (storedTask.length > 0 && Array.isArray(storedTask)) {
    console.log(storedTask.length)

    taskArray = storedTask
}
else if (storedTask) {
    taskArray = []
    console.log(storedTask.length)
}


console.log(taskArray)
let id = 0


function addTask() {
    if (taskInput.value.trim() === "") return;

    const task = {

        title: taskInput.value,
        description: descriptionInput.value
    };


    taskArray.push(task);

    localStorage.setItem("TaskArray", JSON.stringify(taskArray))

    taskInput.value = "";
    descriptionInput.value = "";

    renderTask(taskArray);
    console.log(taskArray)
}
submitBtn.addEventListener("click", addTask)

function renderTask(tasks) {
    const allTaskRendered = tasks.map((task, id) => {
        return (
            ` <div class="hold">
                <div class="task" id="${id}">
                    <div id="dot">
                    </div>
                    <div class="icons">
                        <p onclick = "view(event)">👁️</p>
                        <p onclick = "edit(event)">📝</p>
                        <p onclick = "deleteTask(event)">🗑️</p>
                    </div>
                    <p>${task.title}</p>
                </div>
                <div class="Box">
                    <h1>${task.title}</h1>
                    <p>${task.description}</p>
                </div>
            </div>`
        )
    })

    showDiv.innerHTML = allTaskRendered

}

renderTask(taskArray)


function view(e) {
    const task = e.target.parentElement.parentElement.parentElement
    task.querySelector(".Box")
    const box = task.querySelector(".Box")
    box.classList.toggle("desShow")
    console.log()
}
function edit(e) {
    const taskId = e.target.parentElement.parentElement.id
    editMenu.classList.toggle("display")
    const task = taskArray[taskId]

    newTtl.value = task.title
    editDesc.value = task.description
    editButton.addEventListener("click", function done() {
        taskArray[taskId] = {
            title: newTtl.value,
            description: editDesc.value
            
        }
        console.log(taskId)
        renderTask(taskArray)
    })
}


function deleteTask(e) {
    const taskId = e.target.parentElement.parentElement.id
    taskArray.splice(taskId, 1)
    localStorage.setItem("TaskArray", JSON.stringify(taskArray))
    renderTask(taskArray)


}