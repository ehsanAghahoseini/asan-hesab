import React, { useEffect, useState } from 'react'


export default function Drower(props:any) {


  const handelClose=()=>{
    const drower = document.getElementById(`dr-${props.uId}`);
    const contDrower = document.getElementById(`dr-cont-${props.uId}`);
    window.addEventListener('click', function (e:any) {
        if (drower?.contains(e.target)){
            if (!contDrower?.contains(e.target)) {
                props.setVisible(false)
            }
        }
    });
}


useEffect(() => {
    handelClose()
}, [])

  return (
    <>
    <div className={`bg-drower ${props.visible && 'bg-drower-active'}`}></div>
    <div id={`dr-${props.uId}`} className={` drower max-w-screen-sm m-auto ${props.visible == true && 'drower-active'}`}>
      <div id={`dr-cont-${props.uId}`} className="drower-cont">
        <div className='drower-cont-head'>{props.name}</div>
        <div className='drower-cont-inner pt-4 min-h-[50vh]'>
          {props.children}
        </div>
      </div>
    </div>
    </>
  )
}