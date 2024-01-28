let inBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
function addTask() {
    if (inBox.value === '') {
        alert("Add something !");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inBox.value = '';
    saveData();
}
document.addEventListener("keydown",(e)=>{
    if (e.key === "Enter") {
        addTask();
    }
});
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
