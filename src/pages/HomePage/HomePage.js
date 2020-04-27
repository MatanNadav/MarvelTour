import React, { Component } from 'react';
import ComicService from "../../services/ComicService"
import CharacterFilter from "../../components/CharacterFilter/CharacterFilter"

import "./HomePage.css"

export default class HomePage extends Component {
    state = {
        comic: null,
    }

    // async getCharacter(ev) {
    //     if (ev.key === "Enter") {
    //         let comic = await ComicService.getCharacterByName(ev.target.value)
    //         console.log("inside getChar", comic);
    //         this.setState({ comic: comic })
            
    //     }
    // }

    render() {
        const {comic} = this.state
        return (
            comic && <section className="home-container flex">
                {/* <CharacterFilter search={this.getCharacter.bind(this)}></CharacterFilter> */}
                <div className="background"></div>
            </section>
        )
    }
}