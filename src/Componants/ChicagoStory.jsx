import React from 'react';
import './ChicagoStoryStyles.css';
import chef1 from '../assets/chef1.jpg';
import chef2 from '../assets/chef2.jpg';


export default function ChicagoStory() {
  return (
    <div className='chicago-container'>
      <section className='left-content'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt deserunt corporis accusamus! Accusantium voluptate assumenda itaque minus. Maxime, deserunt beatae accusantium enim fuga neque facere aperiam reiciendis praesentium ab! Deserunt voluptatem a illo, repellendus veniam eum asperiores laborum? Ipsum officia consectetur optio omnis, magnam delectus velit tempore eum earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt deserunt corporis accusamus! Accusantium voluptate assumenda itaque minus. Maxime, deserunt beatae accusantium enim fuga neque facere aperiam reiciendis praesentium ab! Deserunt voluptatem a illo, repellendus veniam eum asperiores laborum? Ipsum officia consectetur optio omnis, magnam delectus velit tempore eum earum. </p>
      </section>
      <section className='story-images'>
        <img src={chef1} alt="Our Chef image1" />
        <img src={chef2} alt="Our Chef image2" />
      </section>
    </div>
  )
}
