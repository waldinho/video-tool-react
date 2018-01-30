import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const API_KEY = 'AIzaSyCksyb1zfYmQHK-Zb69o1Hw0YWbKpPHXbU';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos : [],
            selectedVideo : null
        }; 

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) =>  {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    };

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 5 00)

        return ( 
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
                videos={this.state.videos} />
            </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector('.container'))