import Link from "next/link"

const Nav = () => {
  return (
    <div className="h-[4rem] bg-purple-300 w-full flex items-center justify-between fixed z-20">
      <h1 className="ml-10 text-2xl">LOGO</h1>
      <div className="mr-10 text-[1.2rem] flex items-center gap-5">
        <Link href="/"><p className="hover:scale-[1.04] cursor-pointer transition-all duration-300">Home</p></Link>
        <Link href="/blogs"><p className="hover:scale-[1.04] cursor-pointer transition-all duration-300">Blogs</p></Link>
      </div>
    </div>
  )
}

export default Nav
