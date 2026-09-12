function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = function () {
        span.classList.toggle("concluida");
    };

    const button = document.createElement("button");
    button.textContent = "Excluir";

    button.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(button);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
