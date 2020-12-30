import React, { useState } from "react"
import styled from "styled-components"
import RightNav from "./RightNav"

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <div>
        <div />
        <div />
        <div />
      </div>
      <RightNav open={open} />
    </React.Fragment>
  )
}

export default Burger
