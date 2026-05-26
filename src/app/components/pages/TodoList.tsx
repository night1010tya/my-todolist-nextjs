"use client";

import { Button } from "../button/Button"
import type { Status, Todo, TodoListItem } from "@/types/todo";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";


export const isStatus = (value:string):value is Status =>{
  return (
    value === "todo"||
    value==="doing"||
    value==="done"
  );
}

export const TodoList = ({todos}:{todos:TodoListItem[]})=>{

  const router = useRouter();
 
    // statusの更新
    const handleStatusChange = async (id: number, status: Status) => {
        const { error } = await supabase
          .from("todos")
          .update({ status })
          .eq("id", id);
      
        if (error) {
          console.log(error);
          alert("ステータス更新に失敗しました");
          return;
        }
      
        router.refresh()
      };

    return(
        <>
          <ul>
            {todos.map((todo)=>(
                <li key={todo.id} className="flex items-center gap-1">
                    <p className="text-2xl font-bold p-[10px]">{todo.title}</p>
                    <select 
                    className="border m-[10px]"
                    value={todo.status}
                    onChange={(e) => {
                      const value=e.target.value;
                      if(isStatus(value)) {
                        handleStatusChange(todo.id,value)
                      }
                    }}
                      >
                        <option value="todo">
                            未着手
                        </option>
                        <option value="doing">
                            着手
                        </option>
                        <option value="done">
                            完了
                        </option>
                    </select>
                    <span className="text-gray-500 m-[5px]">
                      {todo.dueDate? `Due data${todo.dueDate}`: "期限なし"}
                    </span>
                    <Link 
                    className="
                    bg-gray-700
                    text-white
                    px-4
                    py-2
                    rounded-[50%]
                    hover:bg-gray-500
                  "
                    href={`/todos/${todo.id}`}>詳細</Link>
                    <Button>削除</Button>
                </li>
            ))}
          </ul>
        </>
    )
}