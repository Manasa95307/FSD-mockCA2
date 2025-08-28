import React from 'react'
import './App.css'

function App() {

  return (
    <div className='card'>
      <h1>Cook Book</h1>
      <img src="https://m.media-amazon.com/images/I/811go9afNjL.jpg" alt="cookbook" height="250px" width="300px"/>
      <p>This is a beginner friendly cook e-book, it has a lot of easy, quick recepies and also 3 course meal for special occasions in more than 10+ cuisines.</p>
      <div className='feature'>
        <p>Easy quick recepies</p>
        <p>Comes in handy</p>
      </div>
      <div className='contact'>
        <p>Contact us on:</p>
        <p>Email Id: cookbook.gmail.com</p>
        <p>Phone no: 9123456789</p>
      </div>

    </div>
  )
}

export default App
