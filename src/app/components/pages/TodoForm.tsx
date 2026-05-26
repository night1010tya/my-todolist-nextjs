"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../button/Button";
import { Status, Todo, TodoFormData } from "@/types/todo";
import { supabase } from "@/lib/supabase";
import { off } from "process";
import { useRouter } from "next/navigation";
import { isStatus } from "./TodoList";


type TodoFormProps = {
    mode: "create" | "edit";
    todo?:Todo;
  };


  // export const TodoForm =()=>{
  //   const [formDate,setFormDate]=useState<TodoFormData>({
  //     title:"",
  //     startDate: "",
  //     limitDate: "",
  //     status: "todo",
  //     content: "",
  //   })

  //   const handleChange = (
  //     e:ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>
  //   )=>{
  //     const {name,value} =e.target
  //     setFormDate((prev)=>({...prev,[name]:value}))
  //   }

  //   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  
  //     console.log(formDate);
  // }

  export const TodoForm = ({mode,todo}:TodoFormProps) => {
    const [title,setTitle] =useState(todo?.title ?? "")
    const [startDate,setStartDate] =useState(todo?.startDate ??"")
    const [dueDate,setDueDate] =useState(todo?.dueDate ??"")
    const [status,setStatus] =useState<Status>(todo?.status ??"todo")
    const [content,setContent] =useState(todo?.content ?? "")

    const router = useRouter();
    
    const handleSubmit = async(e:React.SubmitEvent<HTMLFormElement>)=>{
      e.preventDefault()

      const {error} = await supabase 
      .from("todos")
      .insert({
        title,
        content:content||null,
        status,
        startDate:startDate||null,
        dueDate:dueDate||null,
      });

      if (error) {
        console.log("Supabase error:", error);
        alert(error.message);
        return;
      }
      setTitle("");
      setStartDate("");
      setDueDate("");
      setStatus("todo");
      setContent("");

      router.push("/");
      router.refresh();
      }

    return (
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 mt-10">
        <div className="flex items-center gap-4">
          <label className="w-24 text-right">title</label>
          <input
            type="text"
            placeholder="TODOを入力"
            className="w-80 border p-3"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
  
        <div className="flex items-center gap-4">
          <label className="w-24 text-right">start date</label>
          <input type="date" className="w-80 border p-3" 
          value={startDate}
          onChange={(e)=>setStartDate(e.target.value)}
          />
        </div>
  
        <div className="flex items-center gap-4">
          <label className="w-24 text-right">due date</label>
          <input type="date" className="w-80 border p-3"
          value={dueDate}
          onChange={(e)=>setDueDate(e.target.value)}
          />
        </div>
  
        <div className="flex items-center gap-4">
          <label className="w-24 text-right">status</label>
          <select
            className="w-80 border p-3"
            value={status}
            onChange={(e) => {
              const value = e.target.value;

              if (isStatus(value)) {
                setStatus(value);
    }
  }}
>
            <option value="todo">未着手</option>
            <option value="doing">着手</option>
            <option value="done">完了</option>
          </select>
        </div>
  
        <div className="flex items-start gap-4">
          <label className="w-24 text-right m-auto">memo</label>
          <textarea
            placeholder="詳細メモ（任意）"
            rows={3}
            className="w-80 border p-3"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />
        </div>
  
        <div className="w-[416px] flex justify-end">
          <Button type="submit">保存</Button>
        </div>
      </form>
    );
  };