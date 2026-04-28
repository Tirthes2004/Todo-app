"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading.jsx";
import Header from "@/components/header.jsx";
import TodoInput from "@/components/todoInput.jsx";
import TodoList from "@/components/todoList.jsx";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

function Page() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: null, title: "", desp: "", done: false, createdAt: null, completionDate: null });

  const [date, setDate] = useState(() => new Date())

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodos(
        JSON.parse(stored).map((todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          completionDate: new Date(todo.completionDate),
        }))
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start pb-8">
      {/* <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="blue"
      /> */}
    
      <Header date={date} setDate={setDate} />
      <TodoInput date={date} setDate={setDate} loading={loading} setLoading={setLoading} todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      {loading ? <Loading /> : <TodoList todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} setDate={setDate} />}

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default Page;
