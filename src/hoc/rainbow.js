import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'green', 'orange', 'blue', 'yellow'];
    const randColor = colors[Math.floor(Math.random() * 5)];
    const className = randColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;