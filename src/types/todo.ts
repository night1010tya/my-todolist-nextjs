export type Status = "todo" | "doing" | "done";

// 全部
export type Todo = {
  id: number;
  title: string;
  content: string;
  status: Status;

  startDate: string;
  dueDate: string;
};

// フォーム用
export type TodoFormData = {
  title: string;
  content: string;
  status: Status;

  startDate: string;
  dueDate: string;
};

// 一覧表示用
export type TodoListItem={
   id:number;
   title:string;
   status:Status;
   dueDate:string|null;
}

