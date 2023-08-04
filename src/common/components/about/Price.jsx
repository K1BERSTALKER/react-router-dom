import React from 'react'
import {BiLockOpen} from 'react-icons/bi'
export default function Price({items, Heading}) {
  return (
    <>
      <div className="about__price">
        <Heading title='Fair Price' />
        <div className="about__price__content">
          {items.price.map((val) =>(
            <div className="cards">
              <i>{val.icon}</i>
              <h3>{val.title}</h3>
              <p>{val.desc} </p>
              <h1>${val.pri} </h1>
              <p>per price</p>
              <button className='button'>
                <BiLockOpen className='icons' />
                <span>LET'S START</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
