import React, { Component } from 'react';
import ComicPreview from "../ComicPreview/ComicPreview"
import "./ComicsList.css"


export default class ComicsList extends Component {


    render() {
        return ( 
            <section className="comics-list-container flex wrap center">
                    {
                        (this.props.comics) ? 
                        this.props.comics.map(comic => <ComicPreview key={comic.id} comic={comic}></ComicPreview>) :
                        <h1>No comics to display</h1>
                    }
            </section>
        )
    }
}

