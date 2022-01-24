import React from 'react';
import PropTypes from 'prop-types';

function Post({ id, title, removePost }) {
    return (
        <div className="Post">
            <button className='Post__delete' onClick={() => removePost(id)}>X</button>
            <div className="Post__title">{title}</div>
        </div>
    );
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    removePost: PropTypes.func.isRequired
}

export default Post;
