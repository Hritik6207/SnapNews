import React, { Component } from 'react'
import loading from './Spin.gif'

export class Spinning extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Spinning
