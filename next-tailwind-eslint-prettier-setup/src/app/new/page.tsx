import Link from 'next/link'
import { prisma } from '../db'
import { redirect } from 'next/navigation'

async function createTodo(data: FormData) {
  'use server'
  const title = data.get('title')?.valueOf() as string
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('title is not a string')
  }
  await prisma.todo.create({ data: { title: title, complete: false } })
  redirect('/')
}

const Page = () => {
  return (
    <div className="bg-slate-800 min-h-screen w-screen flex justify-center items-center">
      <div className="min-w-[20rem] bg-white rounded-md max-w-[1920px] h-1/2 min-h-[30rem] w-3/4">
        <h1 className="text-2xl">New page</h1>
        <form action={createTodo}>
          <input
            type="text"
            name="title"
            className="ring-2 ring-black min-w-[10rem] rounded-md"
          />
          <div>
            <Link href="..">Back</Link>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Page
