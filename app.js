var tarefas = []

var tasksElem = document.getElementsByClassName("tasks")[0];
var buttonAdd = document.getElementById("btn-add");
var textInput = document.getElementById("input");


buttonAdd.addEventListener("click",()=>{
    addTask(textInput.value);
    updateTasks();
})

const removeTask = (id) => {
    var taskItem = tarefas.find((tarefa)=> tarefa.id == id)
    var index = tarefas.indexOf(taskItem)
    tarefas.splice(index,1);

}

const addTask = (title) => {
    if(title !== ""){
        tarefas.push(
            {
                title: title,
                status: false
            }
        )
        textInput.classList.remove("input-error");

    }else{
        textInput.placeholder = "Informe o titulo da tarefa";
        textInput.classList.add("input-error");
    }
    textInput.value = '';
}
const listTasks = () => {
    tarefas.forEach(tarefa =>{
        tasksElem.innerHTML += `<div indice=${tarefa.id} class='item'><input type='checkbox'><h3>${tarefa.title}</h3><button class='btn-delete' onclick='deleteItem(${tarefa.id})'>Delete</button></div>`
    })
}
const updateTasks = () => {
    tasksElem.innerHTML = '';
    listTasks();
}

updateTasks();
var buttonDelete = Array.from(document.getElementsByClassName("btn-delete"));

const deleteItem = (id) =>{
    removeTask(1);
    // updateTasks();
    updateTasks();
}