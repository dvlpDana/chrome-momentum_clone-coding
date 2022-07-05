const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");


const TODOS_KEY = "todos"

let todos = []; 


function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  // JSON.stringify() : 자바스크립트 값이나 객체를 JSON 문자열로 변환함
}

function deleteTodo(event){
  const deleteLi = event.target.parentElement;
  deleteLi.remove();

  todos = todos.filter((todo) => todo.id !== parseInt(deleteLi.id));
  //filter : 배열의 요소를 하나씩 살펴보면서 콜백함수가 리턴하는 조건과 일치하는 요소만 모아서 새로운 배열을 리턴하는 메소드임(*리턴값이 항상 배열임)

  saveTodos();
}

function visibleTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    text : newTodo,
    id : Date.now()
  };
  todos.push(newTodoObject);
  visibleTodo(newTodoObject);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(visibleTodo);

  // JSON.parse() : JSON 문자열의 구문을 분석하고 그 결과에서 자바스크립트 값이나 객체를 생성함
  // forEach : 배열의 요소를 하나씩 살펴보면서 반복작업하는 메소드
}