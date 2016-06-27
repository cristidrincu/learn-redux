import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {/**Pass the properties of this component to its children(or child)*/}
                { React.cloneElement(this.props.children, this.props) }
            </div>
        )
    }
});

export default Main;