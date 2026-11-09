export default function Register() {
    return (
        <main>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="computergeek101"></input>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="password123"></input>

                <label htmlFor="passConfirm">Confirm Password:</label>
                <input type="password" id="passConfirm" name="passConfirm"></input>

                <br></br>
                <button type="submit">Register</button>
            </form>
        </main>
    )
}