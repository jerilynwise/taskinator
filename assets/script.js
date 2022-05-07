var formE1 = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler= function(event) {
    
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //check if input values are empty string
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formE1.reset();

    //send it as an argument to createTaskE1
    createTaskE1(taskDataObj);
};

var createTaskE1 = function(taskDataObj) 
{
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

//create div to hold task info and to add to list item
    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info";

//add HTML content to div
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoE1);

//add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

}


formE1.addEventListener('submit',taskFormHandler);
