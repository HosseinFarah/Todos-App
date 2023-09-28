import propTypes from 'prop-types'
import React from 'react';
 const Todo = (props) => {
  const { id, title, deadline, status,getTitle,getDeadline,getStatus,deleteTodo} = props;
  return (
    <div className="col">
      <div className="card" style={{borderLeft: status === "Done" ? "17px solid green" : status === "In Progress" ?"17px solid orange" :"17px solid red"}}>
        <div className="card-body">
        <label htmlFor="title">Title: </label>
          <input className="form-control my-1" id="title" type="text" placeholder="Title" value={title} onChange={getTitle} />
          <label htmlFor="deadline">Deadline: </label>
          <select className="form-control my-1" id="deadline" value={deadline} onChange={getDeadline}>
            <option value="Today Morning">Today Morning</option>
            <option value="Today Noon">Today Noon</option>
            <option value="Today Noon">Today Noon</option>
            <option value="Tonight">Tonight</option>
          </select>

          <label htmlFor="status">Status: </label>
          <select className="form-control my-1" id="status" value={status} onChange={getStatus}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button className="btn btn-danger " onClick={deleteTodo}>Delete This Item</button>
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  title:propTypes.string.isRequired,
  deadline:propTypes.string.isRequired,
  status:propTypes.string.isRequired,
  getTitle:propTypes.func.isRequired,
  getDeadline:propTypes.func.isRequired,
  getStatus:propTypes.func.isRequired,
  deleteTodo:propTypes.func.isRequired
}
export default React.memo(Todo);