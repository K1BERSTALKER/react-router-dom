import React from 'react'

export default function Bio({items,Heading}) {
  return (
    <>
        <Heading title='Short Bio' />
        <div className="about_details_bio">
            {items.bio.map((val) =>(
                <>
                    <div className="about__details__bio__box">
                        <div className="about__details__bio__box__item">
                            <p>
                                {val.para1}
                            </p>
                        </div>
                        <div className="about__details__bio__box__item">
                            <p>
                                {val.para2}
                            </p>
                        </div>
                        <div className="about__details__bio__box__item">
                            <p>
                                {val.para3}
                            </p>
                        </div>
                        <div className="about__details__bio__box__item">
                            <img src={val.images} alt="Images Content" />
                        </div>
                    </div>
                </>
            ))}
        </div>
    </>
  )
}
