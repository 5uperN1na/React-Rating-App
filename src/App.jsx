import React from 'react'
import Rating from './components/Rating'


const App = () => {
  return (
    <>
       <Rating heading="Do you like React JS?" feedbackMessage={[
        'Hate it',
        'Dislike it',
        'Meh',
        'Not bad',
        'Love it'
       ]} />
    </>

 
    
  )
}

export default App