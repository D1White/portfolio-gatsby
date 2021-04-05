import React, { useEffect, useRef, useState } from 'react'
import './grid.scss'

const Grid = ({ mousePos }) => {
  const gridRef = useRef()
  const [icons, setIcons] = useState(null)

  useEffect(() => {
    setIcons(gridRef.current.children)
  }, [])

  useEffect(() => {
    if (icons && mousePos.x && mousePos.y) {
      for (const key of icons) {
        const speed = key.getAttribute('data-speed');
        const x = (window.innerWidth - mousePos.x * speed)/100;
        const y = (window.innerHeight - mousePos.y * speed)/100;
        const rot = (window.innerWidth - mousePos.x * speed)/300
        key.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rot}deg)`;
      }
    }
  }, [mousePos]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="grid" ref={gridRef}>
      <div className="grid__item pos-1" data-speed="-5">
        <div className="grid__item-img img-1"></div>
      </div>
      <div className="grid__item pos-2" data-speed="8">
        <div className="grid__item-img img-2"></div>
      </div>
      <div className="grid__item pos-3" data-speed="-8">
        <div className="grid__item-img img-3"></div>
      </div>
      <div className="grid__item pos-4" data-speed="5">
        <div className="grid__item-img img-4"></div>
      </div>
      <div className="grid__item pos-5" data-speed="-6">
        <div className="grid__item-img img-5"></div>
      </div>
      <div className="grid__item pos-6" data-speed="4">
        <div className="grid__item-img img-6"></div>
      </div>
      <div className="grid__item pos-7" data-speed="10">
        <div className="grid__item-img img-7"></div>
      </div>
      <div className="grid__item pos-8" data-speed="6">
        <div className="grid__item-img img-8"></div>
      </div>
      <div className="grid__item pos-9" data-speed="-1">
        <div className="grid__item-img img-9"></div>
      </div>
      <div className="grid__item pos-10" data-speed="4">
        <div className="grid__item-img img-10"></div>
      </div>
      <div className="grid__item pos-11" data-speed="-5">
        <div className="grid__item-img img-11"></div>
      </div>
      <div className="grid__item pos-12" data-speed="3">
        <div className="grid__item-img img-12"></div>
      </div>
      <div className="grid__item pos-13" data-speed="-1">
        <div className="grid__item-img img-13"></div>
      </div>
      <div className="grid__item pos-14" data-speed="1">
        <div className="grid__item-img img-14"></div>
      </div>
      <div className="grid__item pos-15" data-speed="-4">
        <div className="grid__item-img img-15"></div>
      </div>
      <div className="grid__item pos-16" data-speed="2">
        <div className="grid__item-img img-16"></div>
      </div>
      <div className="grid__item pos-17" data-speed="2">
        <div className="grid__item-img img-17"></div>
      </div>
      <div className="grid__item pos-18" data-speed="-3">
        <div className="grid__item-img img-18"></div>
      </div>
      <div className="grid__item pos-19" data-speed="4">
        <div className="grid__item-img img-19"></div>
      </div>
      <div className="grid__item pos-20" data-speed="8">
        <div className="grid__item-img img-20"></div>
      </div>
      <div className="grid__item pos-21" data-speed="-3">
        <div className="grid__item-img img-21"></div>
      </div>
      <div className="grid__item pos-22" data-speed="-6">
        <div className="grid__item-img img-22"></div>
      </div>
      <div className="grid__item pos-23" data-speed="-3">
        <div className="grid__item-img img-23"></div>
      </div>
    </div>
  )
}

export default Grid
