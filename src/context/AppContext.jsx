import React, { createContext, useEffect, useReducer, useState } from "react";
import { getTasks } from "../api/taskApi";

export const appContext = createContext();

const initialValue = {
  taskData: [],
};

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_TASKS":
      return {
        ...state,
        taskData: payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        taskData: [...state.taskData, payload],
      };
    default:
      return state;
  }
};
const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialValue);
  const fetchTasks = async () => {
    try {
      const tasks = await getTasks();
      dispatch({ type: "GET_TASKS", payload: tasks });
    } catch (error) {
      console.log(error);
    }
  };
  const createTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <appContext.Provider
      value={{
        taskData: state.taskData,
        createTask,
        fetchTasks,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};
export default AppContextProvider;
