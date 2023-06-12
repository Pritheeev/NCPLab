function MyApp(props) 
{
  return (
  <div>
    <h1>ToDo List!</h1>
  </div>
  );
}

function MyList(props) 
{
  const listItems = []
  for (var i=0; i < props.listItems.length; i++) 
  {
    listItems.push(
    <div key={i}>
      <input className="form-check-input" onChange={handleClick(i)} type="checkbox" value={props.listItems[i]} checked={props.status[i]}/>
      <label className="form-check-label">{props.listItems[i]}</label>
    </div>
    )
  }

  return (
  <div>
    <h2>
      {listItems}
    </h2>
  </div>
  );
}

function handleClick(i)
{
  alert(i);
}

var listItems = ['Do the Assignment', 'Finish the Homework', 'Complete the Certifications'];
var status = ['false', 'false', 'false'];

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render([<MyApp name="Rajasekar M" />,
<MyList status={status} listItems={listItems} />]);