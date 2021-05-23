// import logo from './logo.svg';
import React, { Component } from 'react'
import AddAlbum from './Components/AddAlbum'
// import Album from './Components/Album'
import Albums from './Components/Albums';
import './App.css';
import Navigation from './Components/Navigation';
import {Route , Switch , BrowserRouter} from "react-router-dom";
import Album from './Components/Album';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      albums: [
        {id: 1, artist: "Vijay T", album_title: "Master", album_cover: "Music Anirudh R", songs: "Sound Track1"},
        {id: 2, artist: "Naveen Polishetty", album_title: "Jathirathnalu", album_cover: "Music Radhan", songs: "Sound Track2"},
        {id: 3, artist: "Suriya", album_title: "Aakasam Nee Haddura", album_cover: "Music G. V. Prakash", songs: "Sound Track3"},
      ],
      errorMsg: ''
    }
    this.receiver = this.receiver.bind(this)
    this.delete = this.delete.bind(this)
  }
  
  receiver = () => {
    let { albums, obj } = this.state;
    albums.push(obj);
    console.log('Hi from receiver method = pushed new album');
  }
  delete(){
    let { albums, obj } = this.state;
    albums.pop(obj);
    console.log('Hi from receiver method = pushed new album');
    console.log('Hi from delete method');
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
      <BrowserRouter>
        <div >
 <Navigation />
            <Switch>

             <Route path="/" component={Album} exact/>
             <Route path="/Albums" component={Albums}/>
              
           </Switch>
    {/* <Album artist={this.state.artist} album_title={this.state.album_title} album_cover={this.state.album_cover}/> */}
    <Albums albums={this.state.albums} deleteFunc={this.delete}/> 
        </div> 
      </BrowserRouter> 

    )
  
    
  
  }
}

export default App
