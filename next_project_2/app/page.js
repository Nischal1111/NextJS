import Image from "next/image";
import blog from "../public/blog.avif";

export default function Home() {
  return (
    <main className="pt-20">
      <div className="text-center flex items-center flex-col">
        <h1 className="mb-[1.2rem] text-5xl text-purple-400">Welcome to my blogs page.</h1>
        <div className="relative w-[700px] h-[300px] mb-4">
          <Image 
            src={blog} 
            alt="blog" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-md mt-2" 
          />
        </div>
        <p className="text-[1.2rem] leading-8 w-1/2 text-purple-700 text-justify mt-2">
          Explore a diverse collection of articles, insights, and stories on various topics. Our blogs page is your go-to destination for thought-provoking content, expert opinions, and engaging discussions. Whether you're looking for the latest trends, in-depth analysis, or simply some inspiration, you'll find it all here.
        </p>
      </div>
    </main>
  );
}
