import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {/* If we need the index of the photo, we must explicitly expose it. We cannot use key={index}. If we do not use key={index}, React will complain */}
                {this.props.posts.map((post, index) => <Photo {...this.props} key={index} photoIndex={index} post={post}/>)}
            </div>
        )
    }
});

export default PhotoGrid;