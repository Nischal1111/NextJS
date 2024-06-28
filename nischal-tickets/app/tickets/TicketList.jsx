import Link from "next/link"


async function getTickets(){
    await new Promise(resolve => setTimeout((resolve),3000))
    const res = await fetch('http://localhost:4000/tickets',{
            next:{
                revalidate:0
            }
        }
    )
    return res.json()
}

export default async function TicketList() {

    await new Promise(resolve => setTimeout((resolve),3000))

    const tickets = await getTickets()
    console.log("This is",tickets)
  return (
    <>
    {tickets.map((ticket)=>(
        <Link href={`/tickets/${ticket.id}`}>
        <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0,200)}...</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority}
            </div>
        </div>
        </Link>
    ))}
    {(tickets.length===0) && <div>
        <p className="text-center">No tickets to display</p>
        </div>}
    </>
  )
}
