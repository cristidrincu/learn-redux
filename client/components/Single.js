import React from 'react';
import Photo from './Photo';
//import comments - component not built yet

const Single = React.createClass({
    render() {
        {/*we need the index of the post and the post itself*/}
        {/*the params property comes from the router and exposes all parameters found in the url*/}
        const postIndex = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        const post = this.props.posts[postIndex];
        console.log(post);

        return (
            <div className="single-photo">
                <Photo postIndex={postIndex} post={post} {...this.props}/>
            </div>
        )
    }
});

export default Single;