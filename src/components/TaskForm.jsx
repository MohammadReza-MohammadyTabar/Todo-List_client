import { useContext, useState } from "react";
import { appContext } from "../context/AppContext";
import { addTask } from "../api/taskApi";

function TaskForm() {
  const [formData, setFormData] = useState({
    name: "",
    dateExpired: "",
    complete: false,
    star: false,
  });
  const { createTask } = useContext(appContext);
  const { name, dateExpired, complete, star } = formData;
  const handleInputChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((name, dateExpired, complete, star)) {
      const data = await addTask({ name, dateExpired, complete, star });
      console.log(data);
      createTask(data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter task Name"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Expire date
        <input
          type="date"
          value={dateExpired}
          placeholder="2025-0-01-23-59-59"
          name="dateExpired"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Complete
        <input
          type="checkbox"
          value={complete}
          name="complete"
          onChange={handleInputChange}
        />
      </label>
      <label>
        Star
        <input
          type="checkbox"
          value={star}
          name="star"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className="btn">
        Create task
      </button>
    </form>
  );
}
export default TaskForm;
