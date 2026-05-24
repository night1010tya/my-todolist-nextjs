export type Status = "todo" | "doing" | "done";

export type Todo = {
  id: number;
  title: string;
  content: string;
  status: Status;

  startDate: string;
  limitDate: string;
};