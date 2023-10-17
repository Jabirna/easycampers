import { createSlice } from "@reduxjs/toolkit";
import slideImg from "../image";

const initialState=[{img:slideImg[0].img,head:"Tent Stay",desc:`best camp experience at Kolukkumai Munnar. it includes both sunrise and sunset trekking.
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

export const servicesSlice=createSlice({
    name:'serviceSlice',
    initialState,
    reducers:{
        addNewService:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})

export const {addNewService}=servicesSlice.actions
export default servicesSlice.reducer