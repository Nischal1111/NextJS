
import BlogCard from "./BlogCard";

export default async function BlogList() {
  return (
    <div className="pt-20 text-center">
        <h1 className="text-6xl text-purple-700 font-medium tracking-[3px] mb-[1rem]">All Blogs</h1>
            <BlogCard />
    </div>
  );
}
