import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface TodoListState {
  value: string[];
}

const initialState: TodoListState = {
  value: [""],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    // delTodo: (state, action: PayloadAction<string>) => {
    //     state.value=
    // }
  },
});

export const { addTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
