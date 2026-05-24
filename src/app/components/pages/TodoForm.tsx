"use client"
import { useState } from "react";
import { Button } from "../buttom/Button";


// type TodoFormProps = {
//     mode: "create" | "edit";
//   };

  export const TodoForm = () => {
    const [title,setTitle] =useState("")
    const [startDate,setStartDate] =useState("")
    const [endDate,setEndDate] =useState("")
    const [status,setStatus] =useState("todo")
    const [content,setcontent] =useState("")


    return (
      <form className="flex flex-col items-center gap-4 mt-10">
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
          <label className="w-24 text-right">end date</label>
          <input type="date" className="w-80 border p-3"
          value={endDate}
          onChange={(e)=>setEndDate(e.target.value)}
          />
        </div>
  
        <div className="flex items-center gap-4">
          <label className="w-24 text-right">status</label>
          <select className="w-80 border p-3"
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
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
            onChange={(e)=>setcontent(e.target.value)}
          />
        </div>
  
        <div className="w-[416px] flex justify-end">
          <Button type="submit">保存</Button>
        </div>
      </form>
    );
  };