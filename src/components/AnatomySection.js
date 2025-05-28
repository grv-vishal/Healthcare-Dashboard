import React from 'react'
import anatomy from '../assets/human.png'
import knee from '../assets/knee.png'
import heart from '../assets/heart.png'
import scan from '../assets/scan.png'
import '../App.css'
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { TbScan } from "react-icons/tb";

const AnatomySection = () => {
  return (
    <div className='anatomy-section'>

        <HiOutlineMagnifyingGlassPlus className='anatomy-plus'/>
        <div className='anatomy-container'>
           <img src={anatomy} alt="anatomy" className='anatomy' />

           <div className='heart-scan'>
             <TbScan className='body-scan' />
             <div className='heart-info'>
                <img src={heart} alt="heart" className='heart-img' />
                <span>Healthy Heart</span>
             </div>
           </div>

           <div className='leg-scan'>
             <div className='leg-info'>
                <img src={knee} alt="leg" className='leg-img' />
                <span>Healthy Leg</span>
             </div>
             <TbScan className='body-scan' />
           </div>
        </div>
        
    </div>
  )
}

export default AnatomySection
