import React, { Component } from 'react';
import ComicService from "../../services/ComicService"
import ComicsList from "../../components/ComicsList/ComicsList"
import "./CharacterDetailsPage.css"

export default class CharacterDetailsPage extends Component {
    state = {
        character: null,
        comics: null
    }

    async componentWillMount() {
        const {id} = this.props
        const char = await ComicService.getCharacterById(id)
        this.setState({ character: char.data.results[0] })
    }

    async componentDidMount() {
        const {id} = this.props
        const comics = await ComicService.getCharacterComics(id)
        this.setState({ comics: comics.data.results })
    }

    render() {
        const {character} = this.state
        return (
            character && <section className="details-container flex column">
                <section className="head-container grid-container">
                        <img src={character.thumbnail.path + "." + character.thumbnail.extension} alt="character"/>
                        
                        <div className="body-container flex column space-around">
                            <div>
                                <h3>{character.name}</h3>
                                <p>
                                    {
                                        (character.description) ? character.description : "No available background"
                                    }
                                </p>
                            </div>
                          
                            <p>Comics: {character.comics.available} | Series: {character.series.available} | Stories: {character.stories.available}</p>
                            <ul className="links-list"> Links:
                                {
                                    (character.urls.length) ? character.urls.map((url, i) => <li key={i}><a href={url.url}>{url.type}</a></li>) :
                                    <p>No available links</p>
                                }
                            </ul>
                        </div>

                </section>
                <h1>Related comics:</h1>
                <ComicsList comics={this.state.comics}></ComicsList>
            </section>
        )
    }
}