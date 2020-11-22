document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", function(event) { 
    const task = document.getElementById("new-task-description").value;

    let ul = document.getElementById("tasks");
    let li = document.createElement("li");

    ul.append(task, li);

    event.target.removeEventListener;
    event.preventDefault();
  }, false);
  

});
