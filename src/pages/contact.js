import React, { useState } from 'react';

import Rainbow from '../hoc/rainbow';

const Contact = (props) => {

    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);

    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Etiam faucibus mi non lectus aliquam, in sollicitudin massa ultrices. Curabitur ac ultrices est. Nullam rutrum commodo leo quis ultrices. Maecenas dui turpis, varius vitae metus sed, laoreet eleifend felis.</p>
        </div>
    )
}

export default Rainbow(Contact);