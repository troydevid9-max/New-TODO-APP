const  taskInput = document.querySelector(".taskInput")
const description = document.querySelector(".taskDetails")
const submitBtn = document.querySelector(".submit")
// const task = document.querySelector("task")


function newTask(){
    
   const task = document.createElement("div") 
   const dot = document.createElement("div")
   const text = document.createElement("p")
   const recent = document.querySelector(".recntlyCreated")
   const info =document.querySelector(".info")
   
   task.classList.add("task")
   dot.id ="dot"
   text.textContent = taskInput.value

   info.classList.add("notShowing")
   recent.appendChild(task)
   task.appendChild(dot)
   task.appendChild(text)
   taskInput.value =""

   console.log(task)



     console.log("done")
}


submitBtn.addEventListener("click", newTask)


taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()  // Prevents form from submitting if inside a form
        newTask()                  // Calls the same function as clicking submit
    }
})