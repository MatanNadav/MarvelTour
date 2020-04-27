import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import {getCharacterByLetter} from "../../pages/CharactersPage/CharactersPage"
import "./CharacterFilter.css"

class CharacterFilter extends Component {

    render() {
        return (
            <section className="filter-container flex ">
                <div className="box-container flex column align-center space-around">
                    <h1>Marvel characters search:</h1>
                    <input className="charSearch" placeholder="e.g: Hulk"></input>
                    <button className="btn-char-search">Search</button>

                </div>
            </section>
        )
    }
}

export default withRouter(CharacterFilter)