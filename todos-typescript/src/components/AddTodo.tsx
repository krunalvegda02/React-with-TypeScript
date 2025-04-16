import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AddTodo = () => {
  return (
    <form className="flex items-center gap-5">
      <Input type="text" placeholder="Enter Your Tasks.." className="w-fit"></Input>
      <Button>Add todo</Button>
    </form>
  );
};

export default AddTodo;
