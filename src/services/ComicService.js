import Axios from "axios";
import Config from "./Config"
import md5 from "md5"

const BASE_URL = "http://gateway.marvel.com/v1/public/characters"

export default {
    getCharacterById,
    getCharacterByName,
    getAllCharacters,
    getCharacterComics,
    getCharactersByLetter
}


async function getCharacterComics( id = "1017574") {
    let timestamp = Date.now()
    let data = md5(timestamp + Config.key + Config.hash)
    
    const res = await Axios({
        url: `${BASE_URL}/${id}/comics`,
        method: "GET",
        params: {
            "limit": "50",
            "apikey": `${Config.key}`,
            "hash":`${data}`
        }
    })
    console.log("comicssssssss",res.data);
    
    return res.data
}

async function getAllCharacters(offset = "0") {
    let timestamp = Date.now()
    let data = md5(timestamp + Config.key + Config.hash)
    
    const res = await Axios({
        url: `${BASE_URL}`,
        method: "GET",
        params: {
            "limit": "50",
            "offset":`${offset}`,
            "apikey": `${Config.key}`,
            "hash":`${data}`
        }
    })
    console.log(res.data);
    
    return res.data
}

async function getCharacterByName(name = "Hulk") {
    let timestamp = Date.now()
    let data = md5(timestamp + Config.key + Config.hash)
    
    const res = await Axios({
        url: `${BASE_URL}`,
        method: "GET",
        params: {
            "name": name,
            "apikey": `${Config.key}`,
            "hash":`${data}`
        }
    })
    return res.data
}

async function getCharacterById( id = "1009351") {
    let timestamp = Date.now()
    let data = md5(timestamp + Config.key + Config.hash)
    
    const res = await Axios({
        url: `${BASE_URL}/${id}`,
        method: "GET",
        params: {
            "apikey": `${Config.key}`,
            "hash":`${data}`
        }
    })
    console.log("in id res:", res.data);
    
    return res.data
}

async function getCharactersByLetter(letter = "A") {
    let timestamp = Date.now()
    let data = md5(timestamp + Config.key + Config.hash)
    
    const res = await Axios({
        url: `${BASE_URL}`,
        method: "GET",
        params: {
            "limit": "80",
            "nameStartsWith":`${letter}`,
            "apikey": `${Config.key}`,
            "hash":`${data}`
        }
    })
    console.log(res.data);
    
    return res.data
}
