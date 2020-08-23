import * as React from "react"

export default React.memo((props: {children: any})=> {
  return (
    <div>
      {
        props.children
      }
    </div>
  )
})
