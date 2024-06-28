import Link from "next/link"

export default function NotFound() {
  return (
   <main>
    <h2>Not Found Ticket !!!</h2>
    <p>Go back to <Link href="/tickets">Tickets</Link></p>
   </main>
  )
}
