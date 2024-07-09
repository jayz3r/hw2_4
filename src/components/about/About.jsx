import React from 'react'

function About({info={title, body}}) {
  return (
    <div>
        <h2>{info.title}</h2>
        <p>{info.body}</p>
    </div>
  )
}

export default About