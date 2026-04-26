"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading.jsx";
import Header from "@/components/header.jsx";
import TodoInput from "@/components/todoInput.jsx";
import TodoList from "@/components/todoList.jsx";
import {NewSpotlight} from "@/components/ui/spotlight-new";

function Page() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ title: "", desp: "", done: false, id: null });

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodos(JSON.parse(stored));
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
      <NewSpotlight />
      <Header />
      <TodoInput loading={loading} setLoading={setLoading} todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      {loading ? <Loading /> : <TodoList todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />}
    </div>
  );
}

export default Page;
