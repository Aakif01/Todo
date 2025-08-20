let task = document.querySelector("#input");
let btn = document.querySelector("#add");
let list = document.querySelector(".list");
let bin = document.querySelector(".remove");
let container = document.querySelector(".container");

btn.addEventListener("click", function(){
    let div = document.querySelector(".task");
    let new_task = div.cloneNode(false);
    let icons = document.querySelector(".icon");
    let newIcon = icons.cloneNode(true);
    if(task.value != ""){
    createElement(new_task);
    new_task.appendChild(newIcon);
    list.appendChild(new_task);
    } else{
        alert("Please enter a task to add")
    }
    task.value = "";
});

container.addEventListener("click", function(event){
    if(event.target.tagName == "I"){
        let trash = event.target.parentElement;
        let box = trash.parentElement;
        box.remove();
    }
});

function createElement(new_task){
    let newDiv =document.createElement("div");
    let input = document.createElement("input");
    let span = document.createElement("span");
    input.setAttribute("type", "checkbox")
    span.innerText = task.value;
    newDiv.appendChild(input);
    newDiv.appendChild(span);
    newDiv.classList.add("progress");
    new_task.appendChild(newDiv);
    
    
}