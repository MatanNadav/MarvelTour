import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "./CharacterPreview.css"

export default class CharacterPreview extends Component {
    state = {
        char: this.props.char
    }

    render() {
        const {char} = this.state
        return (
            char && <NavLink className="preview-container" to={`/character/${this.props.char.id}`}>
                <div className="img-wrap">
                    <img src={char.thumbnail.path +"."+char.thumbnail.extension} alt="character"/>
                    <p className="char-name">{char.name}</p>
                </div>
            </NavLink>
        )
    }
}