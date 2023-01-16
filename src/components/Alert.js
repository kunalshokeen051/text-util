import React from 'react'

const mystyle ={
  height:'50px'
}

export default function Alert(props) {
  return (
    <div style={mystyle}>
  {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>}
    </div>
    
  )
}
