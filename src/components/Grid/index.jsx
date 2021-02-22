import React, { useEffect, useRef, useState } from 'react'
import './grid.scss'
import { move } from '../../utils/utils'

const Grid = ({ mousePos }) => {
  const gridRef = useRef()
  const [icons, setIcons] = useState(null)

  useEffect(() => {
    setIcons(gridRef.current.children)
  }, [])

  useEffect(() => {
    if (icons && mousePos.x && mousePos.y) {
      for (const key of icons) {
        const movePos = move(mousePos, key);
        key.style.transform = `rotate(${movePos.r}deg) translateX(${movePos.tx}%) translateY(${movePos.ty}%)`
      }
    }
  }, [mousePos]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="grid" ref={gridRef}>
      <div className="grid__item pos-1">
        <div className="grid__item-img img-1"></div>
      </div>
      <div className="grid__item pos-2">
        <div className="grid__item-img img-2"></div>
      </div>
      <div className="grid__item pos-3">
        <div className="grid__item-img img-3"></div>
      </div>
      <div className="grid__item pos-4">
        <div className="grid__item-img img-4"></div>
      </div>
      <div className="grid__item pos-5">
        <div className="grid__item-img img-5"></div>
      </div>
      <div className="grid__item pos-6">
        <div className="grid__item-img img-6"></div>
      </div>
      <div className="grid__item pos-7">
        <div className="grid__item-img img-7"></div>
      </div>
      <div className="grid__item pos-8">
        <div className="grid__item-img img-8"></div>
      </div>
      <div className="grid__item pos-9">
        <div className="grid__item-img img-9"></div>
      </div>
      <div className="grid__item pos-10">
        <div className="grid__item-img img-10"></div>
      </div>
      <div className="grid__item pos-11">
        <div className="grid__item-img img-11"></div>
      </div>
      <div className="grid__item pos-12">
        <div className="grid__item-img img-12"></div>
      </div>
      <div className="grid__item pos-13">
        <div className="grid__item-img img-13"></div>
      </div>
      <div className="grid__item pos-14">
        <div className="grid__item-img img-14"></div>
      </div>
      <div className="grid__item pos-15">
        <div className="grid__item-img img-15"></div>
      </div>
      <div className="grid__item pos-16">
        <div className="grid__item-img img-16"></div>
      </div>
      <div className="grid__item pos-17">
        <div className="grid__item-img img-17"></div>
      </div>
      <div className="grid__item pos-18">
        <div className="grid__item-img img-18"></div>
      </div>
      <div className="grid__item pos-19">
        <div className="grid__item-img img-19"></div>
      </div>
      <div className="grid__item pos-20">
        <div className="grid__item-img img-20"></div>
      </div>
      <div className="grid__item pos-21">
        <div className="grid__item-img img-21"></div>
      </div>
      <div className="grid__item pos-22">
        <div className="grid__item-img img-22"></div>
      </div>
      <div className="grid__item pos-23">
        <div className="grid__item-img img-23"></div>
      </div>
    </div>
  )
}

export default Grid
