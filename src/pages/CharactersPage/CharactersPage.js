import React, { Component } from 'react';
import ComicService from "../../services/ComicService"
import CharacterList from "../../components/CharacterList/CharacterList"
import "./CharactersPage.css"


export default class CharactersPage extends Component {
    state = {
        characters: null,
        offset: 0,
        letters: ["#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    }
    async componentWillMount() {
        let chars = await ComicService.getAllCharacters(this.state.offset)
        this.setState({ characters: chars, offest: this.state.offset + 50 })
    }

    async getMoreCharacters() {
        let moreChars = await ComicService.getAllCharacters(this.state.offset)
        this.setState({ characters: moreChars, offest: this.state.offset + 50 })
    }

    async getCharacterByLetter(index) {
        const charactersByLetter = await ComicService.getCharactersByLetter(this.state.letters[index])
        this.setState({ characters: charactersByLetter})
    }
    render() {
        const {characters} = this.state
        return (
            characters && <section className="characters-page-container flex column center">
                <div  className="letters-container flex wrap">{this.state.letters.map((letter, i) => <button key={i} onClick={ () => this.getCharacterByLetter(i)} >{letter}</button>)}</div>
                <CharacterList chars={this.state.characters.data} getChars={this.getMoreCharacters.bind(this)}></CharacterList>
            </section>
        )
    }
} 

