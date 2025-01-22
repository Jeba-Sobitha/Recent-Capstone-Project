import React from 'react';
import './CustomersSayStyles.css';
import john from '../assets/john.jpg';
import jane from '../assets/jane.jpg';
import alex from '../assets/alex.jpg';

export default function CustomersSay() {
  const CustomersData = [
    {
        id: 1,
        name: 'John',
        image: john,
        testimonial: 'The food was amazing.',
        rating: 5
    },
    {
        id: 2,
        name: 'Jane',
        image: jane,
        testimonial: 'The food was amazing.',
        rating: 3
    },
    {
        id: 3,
        name: 'Alex',
        image: alex,
        testimonial: 'The food was amazing.',
        rating: 4
    }
]
  return (
    <div className='customers-container'>
      <h2 className='customers-heading'>What people say about us!!!</h2>
      <div className='image-lists'>
            {CustomersData.map((customer) => (
                <div>
                    <img src={customer.image} alt='customer 1' className='image'/>
                    <h2 className='customers-list'>{customer.name}</h2>
                    <p className='customers-list'>{customer.testimonial}</p>
                    <div>
                        {'⭐'.repeat(customer.rating)}
                        {'☆'.repeat(5-customer.rating)}
                        </div>
                </div>
            ))}
        </div>
    </div>
  )
}
