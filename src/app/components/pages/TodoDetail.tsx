import { Todo } from "@/types/todo";
import { Button } from "../button/Button";
import Link from "next/link";

type TodoDetailProps = {
  todo: Todo;
};

const statusLabel = {
  todo: "未着手",
  doing: "着手",
  done: "完了",
};

export const TodoDetail = (props: TodoDetailProps) => {
  const { todo } = props;

  return (
    <div className="max-w-4xl w-full mx-auto mt-10 border rounded-lg p-12 shadow-sm">
      <h1 className="text-3xl font-bold mb-10 text-center">
        {todo.title}
      </h1>

      <div className="flex flex-col items-center gap-6 text-lg">
        {todo.startDate && (
          <div className="grid grid-cols-[160px_1fr] w-full max-w-2xl gap-10">
            <span className="font-bold">Start date</span>
            <span>{todo.startDate}</span>
          </div>
        )}

        {todo.dueDate && (
          <div className="grid grid-cols-[160px_1fr] w-full max-w-2xl gap-10">
            <span className="font-bold">Due date</span>
            <span>{todo.dueDate}</span>
          </div>
        )}

        <div className="grid grid-cols-[160px_1fr] w-full max-w-2xl gap-10">
          <span className="font-bold">Status</span>
          <span>{statusLabel[todo.status]}</span>
        </div>

        <div className="w-full max-w-2xl">
          <span className="font-bold">Memo</span>

          <div className="border rounded p-4 min-h-[120px] mt-3">
            {todo.content || "メモなし"}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-10">
      <Link
            href={`/todos/${todo.id}/edit`}
            className="
                bg-gray-700
                text-white
                px-4
                py-2
                rounded-[50%]
                hover:bg-gray-500
            ">
            編集
       </Link>
      </div>
    </div>
  );
};