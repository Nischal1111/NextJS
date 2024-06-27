import React from 'react'
import TicketList from './TicketList'

const page = () => {
  return (
    <main>
        <nav>
            <h2>
                Tickets
            </h2>
                <p><small>Currently open tickets</small></p>
        </nav>
        <TicketList/>
    </main>
  )
}

export default page
