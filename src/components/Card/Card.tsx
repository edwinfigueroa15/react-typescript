import { HTMLAttributes } from "react"
import { merge } from "../../utils"

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  color: string
}

const Card = ({ color, className, ...props}: CardProps) => {
  return <div style={{ ...props.style, backgroundColor: color}} className={merge('rounded', className)} {...props}/>
}

export default Card