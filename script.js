// Ensure the script runs only after the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Attach event listener to the button
    document.getElementById("addTaskButton").addEventListener("click", addTask);
    
    // Allow "Enter" key to add a task
    document.getElementById("taskInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    console.log("Button Clicked! Task Input Value:", taskInput.value); // Debugging

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;

        // Add delete button for each task
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        
        console.log("Task added:", li.textContent); // Debugging
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

