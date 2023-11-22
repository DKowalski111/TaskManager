import Task from "../../models/Task";

export const GroupListElement: React.FC<{ task: Task }> = (props) => {

  const handleDeleteButtonClick = async () => {
    const url = `${process.env.REACT_APP_API}/tasks/delete?taskId=${props.task.id}`;
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
  }

  return (
    <div>
      <li key={props.task.id} className="list-group-item shadow-sm list-group rounded" style={{ width: 'auto' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start content">
              <p className="lead text-break">{props.task.task}</p>
            </div>
            <div className="col-md-6 text-end div-action">
              <button className="btn btn-danger" type="button" onClick={handleDeleteButtonClick}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}