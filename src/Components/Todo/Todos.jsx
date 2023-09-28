import { useSearchParams } from "react-router-dom";
import  Todo  from "./Todo";
import propTypes from 'prop-types'
import React, { useEffect, useRef } from "react";
const Todos = (props) => {
  const { todoList, getTitle, getDeadline, getStatus, deleteTodo } = props;
  const [search, setSearch] = useSearchParams([]);
  const searchRef= useRef()

  useEffect(()=>{
    searchRef.current.focus();
  },[])

  return (
    <>
      <div className="container my-3 justify-content-center">
        <div className="row">
          <div className="col">
            <input
            ref={searchRef}
              className="form-control col-sm-6" 
              placeholder="Search By status"
              type="text"
              value={search.get("filter") || ""}
              onChange={(e) => {
                let filter = e.target.value;
                if (filter) return setSearch({ filter: filter });
                else return setSearch({});
              }}
            />
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 my-3 m-xl-5">
        {todoList
          .filter((todo) => {
            let filter = search.get("filter");
            if (!filter) return true;
            let statusChk = todo.status.toLowerCase();
            return statusChk.includes(filter.toLowerCase());
          })
          .map((todo, index) => (
            <Todo
              key={index}
              id={todo.id}
              title={todo.title}
              deadline={todo.deadline}
              status={todo.status}
              getTitle={(event) => getTitle(event, todo.id)}
              getDeadline={(event) => getDeadline(event, todo.id)}
              getStatus={(event) => getStatus(event, todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          ))}
      </div>
    </>
  );
};

Todo.propTypes={
  todoList:propTypes.array.isRequired,
  getTitle:propTypes.func.isRequired,
  getDeadline:propTypes.func.isRequired,
  getStatus:propTypes.func.isRequired,
  deleteTodo:propTypes.func.isRequired
  }
  export default React.memo(Todos);