import React from 'react'

export default function Services({items, Heading}) {
  return (
    <>
        <div className="about__services">
            <Heading title='What I Do?' />
            <div className="about__services__boxes">
                {
                    items.serives.map((item)=>(
                        <div className="card">
                            <div className="icon">
                                <span>
                                    {item.icon}
                                </span>
                            </div>
                            <div className="text">
                                <h3>
                                    {item.title}
                                </h3>
                                <label htmlFor="">
                                    {item.text}
                                </label>
                                <p>
                                    {item.decs}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}
