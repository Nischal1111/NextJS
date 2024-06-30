import NotFound from "./not-found"

export default async function page({params}) {
  async function getBlogDetail(id){
    const res = await fetch('https://dummyjson.com/posts/'+id)

      return res.json()

  }

  const Blog = await getBlogDetail(params.id)

  return (
    <div className="pt-20 text-center flex items-center flex-col">
      <h1 className="text-6xl text-purple-600">Blog Details</h1>
      <h2 className="mt-5 text-3xl  text-purple-400">{Blog.title}</h2>
      <p className="w-6/12 mt-3 text-xl text-justify" >{Blog.body}</p>
      <p style={{fontWeight:"600",color:"rgb(239 68 68)",marginTop:"2rem"
      }}>Tags: #{Blog.tags.join(" #")}</p>
    </div>
  )
}
