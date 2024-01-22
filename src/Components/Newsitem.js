import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgurl,newsurl}=this.props
    return (
      <div className='my-3'>
        
        <div className="card" style={{width: "18rem"}}>
        <img src={!imgurl?"https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsurl} target='blank' className="btn btn-sm btn-warning">Read full article</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
