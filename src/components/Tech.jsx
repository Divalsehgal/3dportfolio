import React from 'react'
import { technologies } from '../constant'
import { SectionWrapper } from './hoc'
import {BallCanvas} from "./canvas"
const Tech = () => {
  return (
    <div className='flex justify-center gap-10 flex-wrap flex-row'>{
      technologies.map((tech,index)=>{
        return <div className='w-28 h-28'  key={tech?.name}>
        <BallCanvas icon={tech?.icon}></BallCanvas>
        </div>
      })
      }</div>
  )
}

export default  SectionWrapper(Tech,"tech")