import React from 'react';
import './AddCard.css';

const AddCard = ( {toggleClick, toggleState, addClick, robotName, robotEmail} ) => {
    return (
        <div className={"addCardPanel mt-3 "}>
            <button type="button" className="d-block bg-white rounded" onClick={toggleClick}>{(toggleState ? '^' : '+')}</button>         
            <div className="addInput">
                <input type="text" placeholder="Robot name" name="newRobotName" onChange={robotName}/>
                <input type="text" placeholder="Robot email" name="newRobotEmail" onChange={robotEmail}/>
                <button type="button" className="bg-white rounded" onClick={addClick}>Add</button>
            </div>
        </div>
    );
}

export default AddCard