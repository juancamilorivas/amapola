import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    unsetTasks: (state) => {
      state.tasks = [];
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
  },
});

export const { setTask, unsetTasks, updateTask } = taskSlice.actions;

export const tasks = (state) => state.task.tasks;

export default taskSlice.reducer;
