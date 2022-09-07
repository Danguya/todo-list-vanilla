var tarefas = []
var id = 0;

var tasksElem = document.getElementsByClassName("tasks")[0];
var buttonAdd = document.getElementById("btn-add");
var textInput = document.getElementById("input");


buttonAdd.addEventListener("click",()=>{
    addTask(textInput.value);
    updateTasks();
})

const saveLocal = (name, objecto) => {
    var formatoJSON = JSON.stringify(objecto); // convertemos um objecto JS para JSON
    localStorage.setItem(name,formatoJSON); //armazenamos tarefas no localstorage
}

const removeTask = (id) => {
    var taskItem = tarefas.find((tarefa)=> tarefa.id == id)
    var index = tarefas.indexOf(taskItem)
    tarefas.splice(index,1);
    saveLocal("tarefas",tarefas);

}

const addTask = (title) => {
    
    if(title !== ""){
        tarefas.push(
            {
                id: id,
                title: title,
                status: false
            }
        )
        textInput.classList.remove("input-error");
        id++;
        saveLocal("tarefas",tarefas);


    }else{
        textInput.placeholder = "Informe o titulo da tarefa";
        textInput.classList.add("input-error");
    }
    textInput.value = '';
}
const listTasks = () => {
    var tarefasLocal = localStorage.getItem("tarefas");
    var JSONParaobjecto = JSON.parse(tarefasLocal); // convertemos um objecto JS para JSON
    console.log(JSONParaobjecto)

    JSONParaobjecto.forEach(tarefa =>{
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
    removeTask(id);
    updateTasks();
}