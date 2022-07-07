import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Store All rights reserverd CrisGC</p>
      <p className='icons'>
        <a><AiFillInstagram /></a>
        <a><AiOutlineTwitter /></a>
      </p>
    </div>
  )
}

export default Footer