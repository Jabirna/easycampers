import React from 'react'
import slideImg from '../image'
import {BsArrowRightShort} from 'react-icons/bs'

const Services = () => {
    const services=[{img:slideImg[0].img,head:"Tent Stay",desc:`best camp experience at Kolukkumai Munnar. it includes both sunrise and sunset trekking.
                    Includes Breakfast and Dinner
                    Welcome to Easy Campers - Your Gateway to Munnar's Natural Beauty`},
                    {img:slideImg[1].img,head:"Off Road Jeep Safari",
                    desc:`Explore the most exquisite and thrilling Kolukkumalai Jeep Safari is an adventurous trip in Munnar. Kolukkumalai, known as the second-highest peak(8000ft)
                    you can have some excellent views of the far off plains in the bordering State of Tamil Nadu.
                    4 Wheel drive Jeep pickup from Munnar Town. From Munnar town 35kms Journey. 10Kms Journey is Off-road(rugged road) journey via tea plantations and forest area`},
                    {img:slideImg[2].img,head:`Campfire`,desc:`Campfire and DJ: Unwind in the evening with a cozy campfire, where stories are shared, laughter fills the air, and memories are made. Our DJ will keep the party going, ensuring a night to remember.`},
                    {img:slideImg[3].img,head:`Sunset treking`,desc:`Campfire and DJ: Unwind in the evening with a cozy campfire, where stories are shared, laughter fills the air, and memories are made. Our DJ will keep the party going, ensuring a night to remember.`},
                    {img:slideImg[5].img,head:`sunrise of the day`,desc:`Campfire and DJ: Unwind in the evening with a cozy campfire, where stories are shared, laughter fills the air, and memories are made. Our DJ will keep the party going, ensuring a night to remember.`},
                    {img:slideImg[6].img,head:`Dj music`,desc:`Campfire and DJ: Unwind in the evening with a cozy campfire, where stories are shared, laughter fills the air, and memories are made. Our DJ will keep the party going, ensuring a night to remember.`},
                    {img:slideImg[7].img,head:`dinner`,desc:`Campfire and DJ: Unwind in the evening with a cozy campfire, where stories are shared, laughter fills the air, and memories are made. Our DJ will keep the party going, ensuring a night to remember.`},
                    {img:slideImg[8].img,head:`bbq`,desc:`Campfire and DJ: Unwind in the evening with a cozy campfire, where stories are shared, laughter fills the air, and memories are made. Our DJ will keep the party going, ensuring a night to remember.`}
                ]
  return (
    <div>
        <div className='p-3 flex flex-wrap justify-center'>
            {services.map((item)=>{
                return(
                    <div className='max-sm:w-full w-[300px] h-[420px] hover:p-0 p-1 border-1 border-gray-400 shadow-2xl rounded-lg mt-2 mr-2 cursor-pointer duration-500'>
                        <div className='w-full h-[260px] bg-cover bg-center rounded-lg' style={{backgroundImage:`url(${item.img})`}}></div>
                        <h3 className='text-lg font-mono uppercase font-medium font-bold pt-2 pl-2 pr-2 '>{item.head}</h3>
                        <div className='h-[80px]'>
                            <p className='text-sm text-gray-500 font-mono font-light pt-1 px-2'>{item.desc.slice(0,110)}  ...</p>
                        </div>
                        <button className='hover:ring-1 shadow-xl text-white font-semibold hover:ring-gray-400 mt-1 p-1  w-full  flex justify-center bg-green-400'>know more <BsArrowRightShort className='mt-[4px]'/></button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services