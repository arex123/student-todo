import React from 'react'

const Card = (props) => {
  return (
    <div className={'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.26)] rounded-[10px] '+ props.className}>
        {props.children}
    </div>
  )
}

export default Card