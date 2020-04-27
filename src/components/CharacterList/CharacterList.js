import React, { Component } from 'react';
import CharacterPreview from "../CharacterPreview/CharacterPreview"

export default class CharacterList extends Component {

    render() {
        return(
            <section className="list-container flex wrap center max-width">
                {
                    (this.props.chars) ? 
                    this.props.chars.results.map(char => <CharacterPreview key={char.id} char={char}></CharacterPreview>) :
                    <h1>No characters to display</h1>
                }
            </section>
        )
    }
} 