import Link from "next/link"

export default function NotFound() {
  return (
   <main className="text-center">
    <h2 className="text-4xl text-purple-300">Not Found Sorry !!!</h2>
    <p>Go back to <Link href="/blogs">Blogs</Link></p>
   </main>
  )
}
