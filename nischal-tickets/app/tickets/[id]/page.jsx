export const dynamicParams=true;
import { notFound } from "next/navigation";


export async function generateStaticParams(){
    const res = await fetch("http://localhost:4000/tickets/")
        const tickets = await res.json()
        return tickets.map((i)=>({
                id:i.id
            }))

}


async function getTicketDetail(id){

    await new Promise(resolve => setTimeout((resolve),3000))
    const res = await fetch("http://localhost:4000/tickets/"+id,{
        next:{
            revalidate:60
        }
    })

    if (!res.ok) {
        notFound();
    }

    return res.json()
}

const  TicketDetails = async ({params}) => {
    const ticket = await getTicketDetail(params.id)
  return (
   <main>
    <nav>Ticket Details</nav>
    <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by : {ticket.email}</small>
        <p>{ticket.body.slice(0,200)}...</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority}
            </div>
    </div>
   </main>
  )
}

export default TicketDetails
