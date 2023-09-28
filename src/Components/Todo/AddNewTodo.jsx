import propTypes from 'prop-types'
import React from 'react';
const AddNewTodo = (props) => {
  const {
    newTitle,
    newDeadline,
    newStatus,
    newTitleHandler,
    newDeadlineHandler,
    newStatusHandler,
    createNewTodo,
  } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="text-info">Add New Todo</h5>
              <label htmlFor="title">Title: </label>
              <input
                className="form-control my-1"
                type="text"
                placeholder="Title"
                id="title"
                value={newTitle}
                onChange={newTitleHandler}
              />
              <label htmlFor="deadline">Deadline: </label>
              <select
                className="form-control my-1"
                id="deadline"
                value={newDeadline}
                onChange={newDeadlineHandler}
              >
              <option selected disabled></option>
                <option value="Today Morning">Today Morning</option>
                <option value="Today Noon">Today Noon</option>
                <option value="Today Noon">Today Noon</option>
                <option value="Tonight">Tonight</option>
              </select>
              <label htmlFor="status">Status:</label>

              <select
                className="form-control my-1"
                id="status"
                value={newStatus}
                onChange={newStatusHandler}
              >
              <option selected disabled></option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
              <button
                className="btn btn-info float-md-end"
                onClick={createNewTodo}
              >
                Add New Todo
              </button>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

AddNewTodo.propTypes = {
  newTitle:propTypes.string.isRequired,
  newDeadline:propTypes.string.isRequired,
  newStatus:propTypes.string.isRequired,
  newTitleHandler:propTypes.func.isRequired,
  newDeadlineHandler:propTypes.func.isRequired,
  newStatusHandler:propTypes.func.isRequired,
  createNewTodo:propTypes.func.isRequired
}
export default React.memo(AddNewTodo);