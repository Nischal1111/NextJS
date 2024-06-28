import Link from "next/link"

export default function NotFound() {
  return (
   <main>
    <h2>Not Found Sorry !!!</h2>
    <p>Go back to <Link href="/">Dashboard</Link></p>
   </main>
  )
}
