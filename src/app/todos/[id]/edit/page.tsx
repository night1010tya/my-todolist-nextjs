import { supabase } from "@/lib/supabase";
import type { Todo } from "@/types/todo";
import { TodoForm } from "@/app/components/pages/TodoForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTodoPage({ params }: Props) {
  const { id } = await params;

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !data) {
    return <p>TODOが見つかりませんでした</p>;
  }

  const todo: Todo = data;

  return <TodoForm mode="edit" todo={todo} />;
}