const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
  const value = input.value.trim();

  if (value === "") {
    alert("Your data is empty!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = value;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.addEventListener("click", function() {
    const newText = prompt("Ubah kegiatan:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText;
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });

  const div = document.createElement("div");
  div.append(editBtn, deleteBtn);

  li.append(span, div);

  li.addEventListener("click", function(e) {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completed");
    }
  });

  list.append(li);

  input.value = "";
});
