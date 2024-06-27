async function getTicketDetail(id){
    const res = await fetch("http://localhost:4000/tickets/"+id,{
        next:{
            revalidate:0
        }
    })

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
