import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Pencil, Check, X, Trash2  } from "lucide-react";

function todoList({ todos, setTodos, todo, setTodo }) {
  return (
    <div className="w-full max-w-3xl mx-auto gap-3 flex flex-col px-4">
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <Card
            className={` text-white relative rounded-2xl overflow-hidden border backdrop-blur-2xl transition-all duration-300 ${
              todo.done
                ? "bg-gradient-to-br from-blue-400/20 via-white/5 to-cyan-300/10 border-blue-200/20 hover:from-blue-400/25 hover:to-cyan-300/15"
                : "bg-gradient-to-br from-yellow-300/20 via-white/5 to-amber-400/10 border-yellow-200/30 hover:from-yellow-300/25 hover:to-amber-400/15"
            }`}
          >
            <CardContent>
              <Collapsible className="rounded-md data-[state=open]:bg-transparent flex flex-col gap-2">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className={`group w-full min-h-8 h-auto justify-start text-left whitespace-normal break-words ${todo.done ? 'line-through' : ''}`}>
                    <span className="min-w-0 flex-1 break-words">{todo.title}</span>
                    <ChevronDownIcon className="ml-auto shrink-0 group-data-[state=open]:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2  pt-0 text-sm">
                  <div className="w-full break-words text-white/85">{todo.desp}</div>
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => {
                      setTodo(todo);
                    }} size="xs" className="cursor-pointer bg-transparent border border-white/30 hover:bg-white/10">
                      <Pencil size={14} />
                    </Button>
                    <Button onClick={() => {
                      todo.done = !todo.done;
                      setTodos([...todos.slice(0, index), todo, ...todos.slice(index + 1)]);
                      console.log(todo);
                    }} size="xs" className="cursor-pointer bg-transparent border border-white/30 hover:bg-white/10">
                      {todo.done ? <X size={14} /> : <Check size={14} />}
                    </Button>
                    <Button onClick={() => {
                      const newTodos = todos.filter((_, i) => i !== index);
                      setTodos(newTodos);
                    }} size="xs" className="cursor-pointer bg-transparent border border-white/30 hover:bg-white/10">
                      <Trash2  size={14} />
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default todoList;
