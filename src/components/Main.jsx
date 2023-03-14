import TaskList from "./TaskList";
import { useState } from "react";
import TaskForm from "./TaskForm";

function Main() {
  return (
    <main>
      <TaskForm />
      <TaskList />
    </main>
  );
}
export default Main;
