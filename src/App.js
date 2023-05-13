import React from 'react'
import Display from './components/mainDisplay/Display';
import './App.css'

const App = () => {
  return (
    <>
      <div class="ripple-background">
        <div class="circle xxlarge shade1"></div>
        <div class="circle xlarge shade2"></div>
        <div class="circle large shade3"></div>
        <div class="circle mediun shade4"></div>
        <div class="circle small shade5"></div>
      </div>
      <div className='App'>
        <Display />
      </div>
    </>
  )
}

export default App