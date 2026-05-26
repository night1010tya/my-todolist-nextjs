
import { Todo, TodoListItem } from "@/types/todo";
import { TodoList } from "./components/pages/TodoList";
import { supabase } from "@/lib/supabase";


export default async function TodosPage(){
  const {data,error} = await supabase
  .from("todos")
  .select("id,title,status,dueDate")
  .order("id",{ascending:true})
  if(error){
    console.log(error)
  }

  const todos:TodoListItem[]=data??[]

    return (
      <>
        <h1 className="text-3xl text-center p-[25px]">TodoList</h1>
        <div className="border border-solid flex justify-center min-h-[200px] mx-[50px] rounded-lg p-[30px]">
           <TodoList todos={todos} />
        </div>
      </>
    );
  }