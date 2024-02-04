import React from 'react'
import BoxNoti from '../components/BoxNoti'

const Notifications = () => {
  return (
    <div className='content flex flex-col overscroll-none h-screen '>
      <div className="headtext">Notifications</div>
        <div className="height overflow-y-scroll">
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        <BoxNoti/>
        </div>
    </div>
  )
}

export default Notifications
