import React from 'React';
import { Link } from 'react-router';

const Photo = React.createClass({
    render() {
        const {post, index, comments} = this.props;
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption}/>
                    </Link>
                </div>
            </figure>
        );
    }
});

export default Photo;