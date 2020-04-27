import React, { Component } from 'react';
import "./ComicPreview.css"


export default class ComicPreview extends Component {
    
    render() {
        const {comic} = this.props
        return (
            comic && 
            <section className="comic-preview-container flex column">
                <div className="comic-img-container">
                    <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="comic"/>
                </div>
                <div className="comic-info-container flex column">
                    <h3>{comic.title}</h3>
                    <p className="comic-description">{(comic.description) ? comic.description : "No available description"}</p>
                    <a href={(comic.urls.length) ? comic.urls[0].url : "#"}>Visit at Marvel</a>
                </div>
                
                <span className="copyright">Copyright @ 2020 Marvel</span>
            </section>        
        )
    }
}