import React from 'react'
import SectionHeader from './SectionHeader'
import { coursesData } from '../../data'
import Course from './Course';

export default function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader title="Make Online education acessible"
         description="Education is the most powerfull tool to unlock potential,
         ignite curiosuty, and shape a brrighter future. At our platform, we 
         believe in making learning accessible, engagign, and transformative, 
         empowering students to achieve their dreams and build the skills they 
         need for success in an ever-Changing world."
         />
         <div className='courses-container'>
            {coursesData.map(course => {
                const {id , img , department , title , rating ,description, sales ,price ,discount ,duration,lessons} = course;
                return <Course key={id} img={img} department={department} title ={title} rating ={rating} description={description} sales ={sales}  price={price} discount={discount} duration={duration} lessons={lessons}  />
            })}
         </div>
      </div>
    </section>
  )
}
