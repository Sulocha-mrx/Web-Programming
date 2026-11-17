// Task 3: A simple ToDo list. Data is stored only in this page's memory.

const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");
const message = document.getElementById("message");
const taskCount = document.getElementById("taskCount");

const tasks = [];

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    if (taskName === "") {
        message.textContent = "Please enter a task before adding it.";
        taskInput.focus();
        return;
    }

    tasks.push({ text: taskName, completed: false });
    taskInput.value = "";
    message.textContent = "";
    renderTasks();
    taskInput.focus();
});

function renderTasks() {
    todoList.innerHTML = "";

    if (tasks.length === 0) {
        todoList.innerHTML = '<li class="empty">Your list is empty. Add your first task above.</li>';
    }

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        if (task.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Mark " + task.text + " as completed");
        checkbox.addEventListener("change", function () {
            tasks[index].completed = checkbox.checked;
            renderTasks();
        });

        const text = document.createElement("span");
        text.className = "task-text";
        text.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("aria-label", "Delete " + task.text);
        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.append(checkbox, text, deleteButton);
        todoList.appendChild(li);
    });

    const remaining = tasks.filter(function (task) {
        return !task.completed;
    }).length;
    taskCount.textContent = tasks.length + " tasks · " + remaining + " remaining";
}
