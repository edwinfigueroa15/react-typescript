import { PropsWithChildren } from "react"

const PublicLayout = ({ children }: PropsWithChildren) => {
  return <div className="">
    {children}
  </div>
}

export default PublicLayout