let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";
    displayTasks(tasks);
}

function displayTasks(taskArray) {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    taskArray.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span onclick="toggleTask(${index})">
                ${task.text}
            </span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks(tasks);
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks(tasks);
}

function showAll() {
    displayTasks(tasks);
}

function showPending() {
    displayTasks(tasks.filter(task => !task.completed));
}

function showCompleted() {
    displayTasks(tasks.filter(task => task.completed));
}
