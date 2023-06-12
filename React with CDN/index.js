function Title() 
{
  return (
  <div>
    <h1>ToDo List!</h1>
  </div>
  );
}

function InputContainer()
{
  return (
    <div>
    <div className="input-group mb-3 add-task">
      <input type="text" className="form-control" placeholder="Enter the Task"/>
      <button className="btn btn-outline-secondary" onClick={taskAdded} type="button" id="button-addon2">Add Task</button>
    </div>
    </div>
  )
}

function taskAdded()
{
  console.log('button is clicked');
}

function checkBox()
{
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
        Default checkbox
      </label>
    </div>
  )
}

function ToDoContainer()
{
  return (
    <div style={{width: '45%', float: 'left'}}>
      <div>
        <center><h3>ToDo Tasks</h3></center>
      </div>
      <div className="todo-tasks">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </div>
    </div>
  )
}

function CompletedContainer()
{
  return (
    <div style={{width: '45%', float: 'right'}}>
      <div>
        <center><h3>Completed Tasks</h3></center>
      </div>
      <div className="todo-tasks">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </div>
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render([
<Title/>,
<InputContainer/>,
(<div><ToDoContainer/><CompletedContainer/></div>)
]);