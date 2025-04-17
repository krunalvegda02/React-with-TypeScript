import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Delete } from "lucide-react";

type TodoListprops = {
  items: { id: number; task: string }[];
  onRemoveTodo: (todoId: number) => void;
};

const TodoList: React.FC<TodoListprops> = (props) => {
  return (
    <div className="my-2.5 grid grid-cols-5 gap-2 ">
      {/* List of my Todos */}
      {props.items?.map((todo) => (
        <Card key={todo?.id} className="bg-slate-100 py-1">
          <CardHeader className="flex flex-row justify-between items-center ">
            <CardTitle>{todo?.task}</CardTitle>
            <Button
              onClick={() => props.onRemoveTodo(todo.id)}
              variant={"destructive"}
              size={"icon"}
              className="py-1"
            >
              <Delete />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
