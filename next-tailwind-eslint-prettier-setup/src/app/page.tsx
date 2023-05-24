import Image from 'next/image'
import { prisma } from './db'
import TodoItem from '../components/TodoItem'
import Link from 'next/link'

const getTodos = async () => {
  return await prisma.todo.findMany()
}
async function toggleTodo(id: string, complete: boolean) {
  'use server'
  await prisma.todo.update({ where: { id: id }, data: { complete: complete } })
}

const Home = async () => {
  const todos = await getTodos()

  return (
    <div className="bg-slate-800 min-h-screen w-screen flex justify-center items-center">
      <div className="min-w-[20rem] bg-white rounded-md max-w-[1920px] h-1/2 min-h-[30rem] w-3/4">
        <h1 className="text-2xl">Todos</h1>
        <Link href="/new">To new</Link>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              id={todo.id}
              title={todo.title}
              complete={todo.complete}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
