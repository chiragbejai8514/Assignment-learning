var todoLists = ["List1", "List2", "List3", "List4"];
function myFunction() {

    let template = getTemplate();
    // document.body.innerHTML += template;

    document.getElementById("addMore").innerHTML += template;
}


function getTemplate() {
    return `
    <div class="addToDo">   <form action="#" id="form">
    <input placeholder="Enter new TODO here" type="text" id="input"  />    
    <input  type="submit" onclick="addToArray()"/>
    <input  type="reset" />
  </form></div>`;
}
function arrayLoad() {
    // // fruits.push("Kiwi");
    document.getElementById("demo").innerHTML = '';
    todoLists.forEach((todoList, i) => {
        document.getElementById("demo").innerHTML += `<div class="to-do__info">${i + 1}:${todoList}
    </div>`;

    })

}
function addToArray() {
    var x = document.getElementById("form").elements[0].value;
    if (x !== '') {
        document.getElementById("input").value = "";
        todoLists.push(x);
        arrayLoad();
    }
    else window.alert("Please enter a proper value");

}