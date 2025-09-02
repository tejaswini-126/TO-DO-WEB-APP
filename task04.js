function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDateTime = document.getElementById("taskDateTime");
  const priority = document.getElementById("priority");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;
  const taskPriority = priority.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add(`priority-${taskPriority}`);

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText + (taskTime ? ` (⏰ ${taskTime})` : "");

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.classList.add("done");
  doneBtn.onclick = () => taskContent.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.classList.add("edit");
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) taskContent.textContent = newTask + (taskTime ? ` (⏰ ${taskTime})` : "");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.add("delete");
  deleteBtn.onclick = () => {
    li.style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => li.remove(), 500);
  };

  actions.appendChild(doneBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(actions);
  taskList.appendChild(li);

  // Reset inputs
  taskInput.value = "";
  taskDateTime.value = "";
  priority.value = "low";
}
