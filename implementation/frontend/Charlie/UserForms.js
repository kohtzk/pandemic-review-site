import react from 'react'

function UserForms() {
    return(
        <div>
            <main className="forms">
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

                <p>
                    <button type = "submit"> Create account </button>
                </p>
            </main>
        </div>
    )
}

export default UserForms