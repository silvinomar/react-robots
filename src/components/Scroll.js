import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ 'overflowY': 'scroll', 'margin': 'auto', 'height': 'calc(100vh - 178px)', 'width': '100%'}}>
            {props.children}
        </div>
    )
}

export default Scroll;