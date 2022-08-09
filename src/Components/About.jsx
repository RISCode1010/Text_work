import React from 'react'
import img from './a1.jpg';

export default function About() {
  return (
    <div>
        <div className="about">
        <div className="box">
            <div className="image">
                <img src={img} alt="Not Found !!"/>
            </div>
            <div className="info">
                <h1>Rishabh Raghav</h1>
                <h3>Web Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore facilis, asperiores explicabo officiis enim architecto facere accusamus laborum nesciunt ipsum doloremque rem repudiandae modi blanditiis sapiente delectus aut. Itaque ad iusto commodi inventore id facilis assumenda architecto ipsum culpa quidem totam atque ipsam exercitationem saepe perspiciatis, enim eaque tenetur, odit in? Incidunt dolorum inventore error adipisci, dolor at itaque accusantium pariatur aut excepturi laborum.</p>
            </div>
        </div>
    </div>
    </div>
  )
}
