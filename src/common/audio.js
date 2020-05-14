import React from "react"

const Audio = props => {
  return (
    <>
      <audio controls>
        <source src={props.src} />
      </audio>
    </>
  )
}

export default Audio
