import { useContext } from "react";
import { appContext } from "../context/AppContext";
import { deleteTask } from "../api/taskApi";

function TaskList() {
  const { taskData, fetchTasks } = useContext(appContext);
  const deleteHandler = async (e) => {
    await deleteTask(e.target.getAttribute("data-id"));
    fetchTasks();
  };
  return (
    <div>
      <table className="table" border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Modified</th>
            <th>Expire date</th>
            <th>Completed</th>
            <th>Star</th>
          </tr>
        </thead>
        <tbody>
          {taskData
            ? taskData?.map((task) => {
                return (
                  <tr>
                    <td>{task.name}</td>
                    <td>{task.dateModified}</td>
                    <td>{task.dateExpired}</td>
                    <td>{task.complete.toString()}</td>
                    <td>{task.star.toString()}</td>
                    <td>Edit</td>
                    <td onClick={deleteHandler} data-id={task._id}>
                      Delete
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
