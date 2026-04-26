"use client"
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
export default function InputInline({ loading, setLoading, todo, setTodo, todos, setTodos }) {
  return (
    <Field orientation="horizontal" className="w-full max-w-3xl px-4 mb-8 h-auto sm:h-10 z-10 flex-col sm:flex-row items-stretch sm:items-center">
      <Input 
        required={true} 
        suppressHydrationWarning 
        type="text" 
        placeholder="Todo title..." 
        className="h-10 sm:h-full w-full sm:w-56" 
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <Input 
        suppressHydrationWarning 
        type="text" 
        placeholder="Todo description..." 
        className="h-10 sm:h-full w-full" 
        value={todo.desp}
        onChange={(e) => setTodo({ ...todo, desp: e.target.value })}
      />
      <Button suppressHydrationWarning onClick={() => {
        if (todo.title.trim() !== "" && todo.desp.trim() !== "") {
          setTodos((prevTodos) => {
            if(todo.id === null) {
              return [...prevTodos, { ...todo, done: false, id: Date.now() }];
            } else {
              return prevTodos.map((t) => t.id === todo.id ? { ...todo, title: todo.title, desp: todo.desp } : t);
            }
          });
          setTodo({ title: "", desp: "", done: false, id: null });
        }
      }} className="h-10 sm:h-full w-full sm:w-auto px-6 rounded-xl text-white font-medium border border-green-300/20 bg-green-500/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(34,197,94,0.25)] hover:bg-green-500/20 hover:scale-105 transition-all duration-300">
        {todo.id === null ? "Add" : "Update"}
      </Button>
    </Field>
  );
}
