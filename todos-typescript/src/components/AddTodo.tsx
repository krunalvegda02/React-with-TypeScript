import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (task: string) => void;
};
const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [task, setTask] = useState<string>("");

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    onAddTodo(task);
    setTask("");
  };

  return (
    <form className="flex items-center gap-5" onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="Enter Your Tasks.."
        onChange={changeEventHandler}
        value={task}
        className="w-fit"
      ></Input>
      <Button type="submit">Add todo</Button>
    </form>
  );
};

export default AddTodo;
