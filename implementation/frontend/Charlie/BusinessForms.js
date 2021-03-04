import react from 'react'

function BusinessForms() {
    return(
        <div>
            <form>
                Email Address:
                <input type="email"/>
            </form>

            <form>
                Username:
                <input type="text"/>
            </form>

            <form>
                Password:
                <input type="password"/>
            </form>

            <form>
                Confirm Password:
                <input type="password"/>
            </form>

            <form>
                Your name:
                <input type="text"/>
            </form>

            <form>
                Name of business:
                <input type="text"/>
            </form>

            <form>
                Business address
                <input type="text"/>
            </form>

            <p>
                <button type = "submit"> Create account </button>
            </p>
        </div>
    )
}

export default UserForms
