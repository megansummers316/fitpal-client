export default function Login() {
    return (
        <main>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="computergeek101"></input>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="password123"></input>

                <br></br>
                <button type="submit">Login</button>
            </form>
        </main>
    )
}