"use client"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

async function getTickets() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0
        }
    })
    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    return res.json()
}

export default function TicketList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["tickets"],
        queryFn: getTickets
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
            {data.map((ticket) => (
                <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
                    <div className="card my-5">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority}
                        </div>
                    </div>
                </Link>
            ))}
            {data.length === 0 && (
                <div>
                    <p className="text-center">No tickets to display</p>
                </div>
            )}
        </>
    )
}
