import React from 'react'
import { cardData } from '../../data'
import Card from './Card';

export default function Home() {
  return (
    <section id='home'>
        <div className='container'>
            <div className='home-header'>
                <span>Join Us</span>
                <h1>Best learning Opportunities</h1>
                <p>We Know how large objects will act, but things on a small scale just do not act that way. </p>
                <a href="#" className='btn btn-red'>Get Quote Now </a>
                <a href="#" className='btn btn-transparent'>Learn More </a>
            </div>
            <div className='card-container'>
             {cardData.map(card => {
            const {id, img  ,  title  , description , color , bgColor } = card;
            return <Card key={id} img = {img} title = {title} description ={description} color ={color} bgColor = {bgColor} />
            })}
            </div>
        </div>

    </section>
  )
}
