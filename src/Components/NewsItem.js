// import React, { Component } from 'react'
import React from 'react'
// changed class based into function based


// export default class NewsItem extends Component {
    export default function NewsItem (props){
    // render() {
        // let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'

                    }}>
                        <span className=" badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://pragativadi.com/wp-content/uploads/2021/10/stsci-01fhref5sgr4pfn9cytcvkt8gq.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    // }
}

