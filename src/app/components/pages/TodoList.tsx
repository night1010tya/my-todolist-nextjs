import { Todo } from "@/types/todo"
import { Button } from "../buttom/Button"


export const TodoList = ({todos}:{todos:Todo[]})=>{
    return(
        <>
          <ul>
            {todos.map((todo)=>(
                <li key={todo.id} className="flex items-center gap-1">
                    <p className="text-2xl font-bold p-[10px]">{todo.title}</p>
                    <select value={todo.status} className="border m-[10px]">
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
                    <Button>詳細</Button>
                    <Button>削除</Button>
                </li>
            ))}
          </ul>
        </>
    )
}