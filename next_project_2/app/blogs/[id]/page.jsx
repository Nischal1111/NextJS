"use client"
import { useQuery } from "@tanstack/react-query"

export default function Page({ params }) {
  async function getBlogDetail(id) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    return res.json()
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["SingleBlog", params.id],
    queryFn: () => getBlogDetail(params.id)
  })

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  if (error) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    )
  }

  return (
    <div className="pt-20 text-center flex items-center flex-col">
      <h1 className="text-6xl text-purple-600">Blog Details</h1>
      <h2 className="mt-5 text-3xl text-purple-400">{data.title}</h2>
      <p className="w-6/12 mt-3 text-xl text-justify">{data.body}</p>
      <p style={{ fontWeight: "600", color: "rgb(239 68 68)", marginTop: "2rem" }}>
        Tags: #{data.tags.join(" #")}
      </p>
    </div>
  )
}
