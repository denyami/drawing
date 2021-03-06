import React from "react"
import styled from 'styled-components'

const ColorButton = (props) =>{
  return (
      <Button onClick={() => props.onClick(props.color)} color={props.color}></Button>
  )
}

const Button = styled.button.attrs(props => ({
  color:props.color
}))`
  background:${props => props.color};
  height:2em;
  width:2em;
  border-radius:50%;
`

export default ColorButton
