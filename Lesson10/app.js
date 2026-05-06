// localStorage.setItem('theme', 'dark');

let input = document.getElementById('input')
const list = document.getElementById('list')

let tasks = []

function addItem(){
    let text = input.value.trim()

    if (text === ""){
        return
    }

    tasks.push({
        text: text,
        completed: false
    })

    input.value = ""
    render()
    saveData()
}

function render(){
    list.innerHTML = ""

    for (let i = 0; i < tasks.length; i++){
        let li = document.createElement("li")

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = tasks[i].completed

        checkbox.onclick = function(){
            toggleTask(i)
        }

        let spanText = document.createElement("span")
        spanText.textContent = tasks[i].text
        spanText.style.marginLeft = "10px"

        if (tasks[i].completed){
            spanText.style.textDecoration = "line-through"
            spanText.style.color = "#888"
        }

        let deleteBtn = document.createElement("span")
        deleteBtn.style.marginLeft = "20px"
        deleteBtn.style.cursor = "pointer"
        deleteBtn.textContent = "❌"

        deleteBtn.onclick = function(){
            tasks.splice(i, 1)
            render()
            saveData()
        }

        li.appendChild(checkbox)
        li.appendChild(spanText)
        li.appendChild(deleteBtn)

        list.appendChild(li)
    }
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed
    render()
    saveData()
}

function saveData(){
    localStorage.setItem('myTasks', JSON.stringify(tasks))
}

function loadData(){
    let loadTasks = localStorage.getItem('myTasks')

    if (loadTasks != null){
        tasks = JSON.parse(loadTasks)
        render()
    }
}

loadData()