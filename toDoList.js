let toDoList = [];

// Check if there's any saved to-do list in local storage
const savedToDoList = JSON.parse(localStorage.getItem('toDoList'));

// Check if savedToDoList is not null or undefined, then assign it to toDoList
if (savedToDoList !== null && savedToDoList !== undefined) {
  toDoList = savedToDoList;
}

dispItems();

function addToDo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let toDoInputValue = inputElement.value;
  let toDoDateValue = dateElement.value;
  if (toDoInputValue.trim() !== '' && toDoDateValue.trim() !== '') {
  toDoList.push({item:toDoInputValue,dueDate:toDoDateValue});
  localStorage.setItem('toDoList',JSON.stringify(toDoList));
  inputElement.value='';
  dateElement.value='';
  dispItems();
}
}

function dispItems(){
  

  let containerElement = document.querySelector('.to-do-container');
  containerElement.innerText='';

  let newHtml ='';

  for(let i=0; i<toDoList.length;i++){
    // let toDoItem = toDoList[i].item;
    // let toDoDueDate = toDoList[i].dueDate;
    let {item,dueDate} = toDoList[i];
    newHtml +=`
    
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="toDoList.splice(${i},1);
      localStorage.setItem('toDoList',JSON.stringify(toDoList)); dispItems();">Delete</button> 
    
    `
  }
  containerElement.innerHTML=newHtml;
}
