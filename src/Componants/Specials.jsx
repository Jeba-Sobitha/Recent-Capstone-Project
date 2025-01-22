import React from 'react';
import './SpecialsStyles.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

export default function Specials() {
  const specialsData = [
    {
        id: 1,
        title: 'Veg Salad',
        description: 'Cabbage, Carrot, Beetroot',
        price: '$12.99',
        image: img1,
    },
    {
        id: 2,
        title: 'Greek Salad',
        description: 'Paneer, Tomato, Cucumber',
        price: '$13.99',
        image: img2,
    },
    {
        id: 3,
        title: 'Lemon Dessert',
        description: 'Cake made up of lemon',
        price: '$11.99',
        image: img3,
    }
]
  return (
    <div className='specials-container'>
      <section className='specials-heading'>
        <h1>This week Specials!</h1>
        <button>Online Menu</button>
      </section>
      <section className='specials-list'>
      {specialsData.map((Special)=> (
                <article key={Special.id} className='article'>
                <img className='specials-image' src={Special.image} alt={Special.title}/>
                <h3>{Special.title}</h3>
                <p>{Special.description}</p>
                <p style={{color:"red"}}>{Special.price}</p>
                </article>
            ))}
      </section>
    </div>
  )
}
