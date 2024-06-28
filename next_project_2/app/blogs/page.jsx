import BlogList from "./BlogList"
import Loading from "../loading"
import { Suspense } from "react"

const page = () => {
  return (
   <>
    <Suspense fallback={<Loading/>}>
      <BlogList/>
    </Suspense>
   </>
  )
}

export default page
