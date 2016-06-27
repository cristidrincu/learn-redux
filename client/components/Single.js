import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const { postId } = this.props.params;
        {/*we need the index of the post and the post itself*/}
        {/*the params property comes from the router and exposes all parameters found in the url*/}
        const postIndex = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[postIndex];
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo postIndex={postIndex} post={post} {...this.props}/>
                <Comments postComments={postComments}></Comments>
            </div>
        )
    }
});

export default Single;