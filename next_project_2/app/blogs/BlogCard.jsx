"use client"
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";


async function fetchPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=8");
  return res.json()
}


function BlogCard() {

  const {data,error,isLoading}=useQuery({
    queryFn:()=>fetchPosts(),
    queryKey:["posts"],
  })

  if(isLoading){
    return <div>Loading...</div>
  }
   if (error) {
    return <div>Error loading posts.</div>;
  }

return (
    <div className="flex gap-[2rem] flex-wrap items-center justify-center">
      {data.posts.map((post) => (
        <Link href={`/blogs/${post.id}`} key={post.id}>
          <Card
            sx={{
              width: 400,
              marginBottom: 2,
              height: 300,
              padding: "1rem",
              backgroundColor: "rgb(243 232 255)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              justifyContent: "space-between"
            }}
            className="hover:bg-purple-200 duration-500 transition-all relative"
          >
            <CardContent sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                component="div"
                className="text-purple-700"
                sx={{ marginBottom: ".7rem" }}
              >
                {post.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ flexGrow: 1 }}
              >
                {post.body.slice(0, 300)}...
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: "600", color: "rgb(239 68 68)", position: "absolute", bottom: ".7rem", left: ".6rem" }}
              >
                Tags: #{post.tags.join(" #")}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;
