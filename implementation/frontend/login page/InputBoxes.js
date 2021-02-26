import React from 'react'

function InputBoxes () {
    return(
        <div>
            <p>
                Username:
                <input type="text" />
            </p>
            <p>
                Password:
                <input type="text" />
            </p>
            <p>
                <button type ="primary"> Log in </button>
            </p>
        </div>
    )

}

export default InputBoxes