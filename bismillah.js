const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("taskList");


form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const value = input.value.trim();

  if (value === "") {
    errorMessage.textContent = "Your data is empty!";
    input.classList.remove("valid");
    input.classList.add("invalid");
    return;
  }

  errorMessage.textContent = "";
  input.classList.remove("invalid");
  input.classList.add("valid");

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
  input.classList.remove("valid");
});
