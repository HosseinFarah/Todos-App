import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Notfound } from "./Components/Notfound";
import { Footer } from "./Components/Footer";
import  Todos  from "./Components/Todo/Todos";
import { useRef, useState } from "react";
import  AddNewTodo  from "./Components/Todo/AddNewTodo";
import './App.css'
const App = () => {
  /* Define Todo Items */
  const [todoList, setTodoList] = useState([
    /*     { id: 0, title: "test0", deadline: "Tonight", status: "Not Started" },
    { id: 1, title: "test1", deadline: "Today Noon", status: "In Progress" },
    { id: 2, title: "test2", deadline: "Today Morning", status: "Done" }, */
  ]);

  const getTitleHandler = (event, id) => {
    const todoIndex = todoList.findIndex((todo) => {
      return todo.id === id;
    });
    const todo = { ...todoList[todoIndex] };
    todo.title = event.target.value;
    const newTodoList = [...todoList];
    newTodoList[todoIndex] = todo;
    setTodoList(newTodoList);
  };

  const getDeadlineHandler = (event, id) => {
    const todoIndex = todoList.findIndex((todo) => {
      return todo.id === id;
    });
    const todo = { ...todoList[todoIndex] };
    todo.deadline = event.target.value;
    const newTodoList = [...todoList];
    newTodoList[todoIndex] = todo;
    setTodoList(newTodoList);
  };
  const getStatusHandler = (event, id) => {
    const todoIndex = todoList.findIndex((todo) => {
      return todo.id === id;
    });
    const todo = { ...todoList[todoIndex] };
    todo.status = event.target.value;
    const newTodoList = [...todoList];
    newTodoList[todoIndex] = todo;
    setTodoList(newTodoList);
  };

  /* Delete Item */
  const deleteTodoHandler = (itemId) => {
    setTodoList(todoList.filter((todo) => todo.id !== itemId));
  };
  /* Hide Or Show Todo Component */
  const [toggle, setToggle] = useState(false);
  const toggleChk = () => {
    setToggle(!toggle);
  };

  /* add New Todo */

  const [newTitle, setNewTitle] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const newDeadlineHandler = (event) => {
    setNewDeadline(event.target.value);
  };
  const newStatusHandler = (event) => {
    setNewStatus(event.target.value);
  };

  /* Add New Todo Button Handler */

  let msg = document.querySelector("#msg")
  const createNewTodoHandler = () => {
    const newTodoList = [...todoList];
     if(newTitle !== "" && newDeadline !== "" && newStatus !== ""){
      newTodoList.push({
        id:
          newTodoList.length === 0
            ? 1
            : newTodoList[newTodoList.length - 1].id + 1,
        title: newTitle,
        deadline: newDeadline,
        status: newStatus,
      })
     }
     else {
      msg.innerHTML = "Please Fill out All Fields!";
      msg.classList.add("alert");
      setTimeout(()=>{
        msg.innerHTML = "";
        msg.classList.remove("alert")
      },3000)
      }


    setTodoList(newTodoList);
    setNewTitle("");
    setNewDeadline("");
    setNewStatus("");
  };
/* scrol to Top-Page */
const toggleRef = useRef();
const scrollTopPage = ()=>{
  window.scroll(0,toggleRef)
}
  return (
    <BrowserRouter>
      <Navbar/>
      <button className="btn btn-success mx-5 my-2" onClick={toggleChk} ref={toggleRef} >
        {toggle ? "Hide Todo" : "Show Todo"}
      </button>
      <h5 id="msg"></h5>
      {toggle && (
        <AddNewTodo
          newTitle={newTitle}
          newDeadline={newDeadline}
          newStatus={newStatus}
          newTitleHandler={newTitleHandler}
          newDeadlineHandler={newDeadlineHandler}
          newStatusHandler={newStatusHandler}
          createNewTodo={createNewTodoHandler}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            toggle && (
              <Todos
                todoList={todoList}
                getTitle={getTitleHandler}
                getDeadline={getDeadlineHandler}
                getStatus={getStatusHandler}
                deleteTodo={deleteTodoHandler}
              />
            )
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <button className="btn btn-dark float-end" onClick={scrollTopPage}>To Top Page</button>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
