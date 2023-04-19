import React from 'react';

const InputGroup = ({ label, id }) => {
    return (
        <div className="input-group">
            <div className="input-group">
                <label htmlFor={id}>{label}</label>
            </div>
            <input type="text" id={id} name={id}/>
        </div>
    );
};

export default InputGroup;