import React, { Component } from 'react'
import Album from './Album';
import {FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import Glyphicon from './Glyphicon';

import '../App.css';

export class Albums extends Component {
    constructor(props) {
		super(props)
    }

    search(query){
        const BASE_URL = "https://api.spotify.com/v1/search?";
        let FETCH_URL = `${BASE_URL}q=${!query ? this.state.query: query}&type=artist&limit=1`;
        const ALBUM_URL = `https://api.spotify.com/v1/artists/`;
        fetch(FETCH_URL, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
          const artist = json.artists.items[0];
          this.setState({artist})
          FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
          fetch(FETCH_URL, {
            method: 'GET'
          })
          .then(response => response.json())
          .then(json => {
            const {tracks} = json;
            this.setState({tracks});
          })
        })
      }
    render() {
        return (
            <div className = "three-cards">
                <div className="app-title">Music Search </div>
                <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist"
              value = {this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if(event.key === "Enter"){
                  this.getArtist();
                  this.search();
                }
              }}
            />
            <InputGroup.Addon
              onClick={
                ()=>{
                  this.search();
                  this.getArtist();
                }
              }
              >
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
                {/* pass array directly from app */}
                {this.props.albums.map(album => {
                return (<ul>
                    <img alt="example" src="https://th.bing.com/th/id/OIP.Vc4v4W7cf2dHfFzbKr1tFgHaKs?w=128&h=186&c=7&o=5&dpr=1.5&pid=1.7" width="300" height="380" />
                    <li>{album.id}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_title}</li>
                    <li>{album.album_cover}</li>


                    </ul>)
            })}

                {/* <Album artist= "Vijay T" album_title= "Master" album_cover= "Music Anirudh R" songs= "Sound Track1"/>
                <Album artist= "Naveen Polishetty" album_title= "Jathirathnalu" album_cover="Music Radhan" songs= "Sound Track2"/>
                <Album artist= "Suriya" album_title= "Aakasam Nee Haddura" album_cover= "Music G. V. Prakash" songs= "Sound Track3"/> */}
            </div>
        )
    }
}

export default Albums