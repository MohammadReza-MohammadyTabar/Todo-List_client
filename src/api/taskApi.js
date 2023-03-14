import axios from "axios";
const taskApi = axios.create({
  baseURL: "https://cloudy-newt-cape.cyclic.app/api/tasks",
});

export const getTasks = async () => {
  const res = await taskApi.get("/");
  return res.data;
};

export const addTask = async (newTask) => {
  const { name, complete, star, dateExpired } = newTask;
  const res = await taskApi.post(
    "/",
    { name, dateExpired, complete, star },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};
export const deleteTask = async (id) => {
  console.log(id);
  const res = await taskApi.delete(`/${id}`);
  return res.data;
};
