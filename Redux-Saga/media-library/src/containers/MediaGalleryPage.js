import React, { Component } from 'react';
import { flickerImages, shutterStockVideos } from '../Api/api';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {

    componentDidMount() {
        flickerImages("rain").then(images => console.log(images, "Images"));
        shutterStockVideos("rain").then(videos => console.log(videos, "Videos"));
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default MediaGalleryPage;