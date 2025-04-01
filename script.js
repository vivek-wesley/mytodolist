document.addEventListener("DOMContentLoaded", function () {
    loadTasks(); // Load tasks from localStorage

    let addTaskButton = document.getElementById("addTaskButton");
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function (task) {
            addTaskToDOM(task);
        });
    }

    function addTask() {
        let taskInput = document.getElementById("taskInput");
        if (taskInput.value.trim() !== "") {
            addTaskToDOM(taskInput.value);
            saveTaskToLocalStorage(taskInput.value);
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    }

    function addTaskToDOM(task) {
        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");
        li.textContent = task;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromLocalStorage(task); // Remove from localStorage
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    function saveTaskToLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function removeTaskFromLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
