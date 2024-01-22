import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
     constructor(){
        super();
        this.state={
          articles:[],
          loading:false,
          page:1
        }
      }

      async componentDidMount(){
        let url="https://newsapi.org/v2/everything?q=tesla&from=2023-12-22&sortBy=publishedAt&apiKey=c6f9a396ff68457cae73e9ab37d00347&page=1&pageSize=32"
        let data= await fetch(url);
        let parsedData=await data.json()
        this.setState({articles: parsedData.articles})
      }

      handleprevclick = async()=>{
        let url=`https://newsapi.org/v2/everything?q=tesla&from=2023-12-22&sortBy=publishedAt&apiKey=c6f9a396ff68457cae73e9ab37d00347&page=${this.state.page-1}&pageSize=32`;
        let data= await fetch(url);
        let parsedData=await data.json()
        this.setState({page: this.state.page-1,
          articles: parsedData.articles})
      }

      handlenextclick = async()=>{
        let url=`https://newsapi.org/v2/everything?q=tesla&from=2023-12-22&sortBy=publishedAt&apiKey=c6f9a396ff68457cae73e9ab37d00347&page=${this.state.page+1}&pageSize=32`;
        let data= await fetch(url);
        let parsedData=await data.json()
        this.setState({page: this.state.page+1,
          articles: parsedData.articles})

      }

  render() {
    return (
      <div className='container my-3'>
        <h2>SnapNews - Headlines</h2>

        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url} >
        <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,60):""} imgurl={element.urlToImage} newsurl={element.url} />
        </div>

          })}
          
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handleprevclick}>&larr; Previous</button>
        <button type="button" className="btn btn-warning"onClick={this.handlenextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
