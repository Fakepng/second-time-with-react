import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ addPost }) => {
    const [input, setInput] = useState('');

    function onChange(event) {
        setInput(event.target.value);
    }

    function onKeyDown(event) {
        const title = event.target.value;

        if (event.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }

    return (
        <div className="Input">
            <div className="Input__header">Create Post</div>
            <input className="Input__field" type="text" valuse={input} onChange={onChange} onKeyDown={onKeyDown} placeholder='What on your mind?' />
        </div>
    );
};

Input.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default Input;
