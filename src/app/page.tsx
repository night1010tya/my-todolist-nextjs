
import { Todo } from "@/types/todo";
import { TodoList } from "./components/pages/TodoList";

const todos:Todo[] = [
  {
    id: 1,
    title: "買い物",
    content: "牛乳を買う",
    status: "todo",
    startDate: "2026-05-24",
    limitDate: "2026-05-31",
  },
];

export default function TodosPage() {
    return (
      <>
        <h1 className="text-3xl text-center p-[25px]">TodoList</h1>
        <div className="border border-solid flex justify-center min-h-[200px] mx-[50px] rounded-lg p-[30px]">
           <TodoList todos={todos} />
        </div>
      </>
    );
  }