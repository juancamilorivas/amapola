import { configureStore } from '@reduxjs/toolkit'

//USER REDUCERS
import taskReducer from './features/taskSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      task: taskReducer,
    },
  })
}