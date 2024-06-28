
export default async function page({params}) {
  async function getBlogDetail(id){
    const res = await fetch('https://dummyjson.com/posts/'+id)

    return res.json()
  }
  const Blog = await getBlogDetail(params.id)

  return (
    <div className="pt-20 text-center">
      <h1 className="text-6xl text-purple-400">Blog Details</h1>
      {Blog.body}
    </div>
  )
}
