import react from 'react'

import InputBoxes from './InputBoxes'

function Content() {
    return (
        <div>
            <p> Account type: </p>
            <p> Business </p>
            <input type="radio" value="Business" name="accType" />
            <p> Personal </p>
            <input type="radio" value="Personal" name="accType" />
            
            <InputBoxes />

            <a href="https://reactjs.org/docs/hello-world.html" target="_blank">Forgot password?</a>

            <p>Don't have an account yet?</p>
            <a href="https://reactjs.org/docs/hello-world.html" target="_blank">Create account</a>
        </div>
    )
}

export default Content;