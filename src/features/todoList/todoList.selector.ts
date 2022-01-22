import { RootState } from "../../app/store";

export const selectValue = (state: RootState) => state.todoList.value;
