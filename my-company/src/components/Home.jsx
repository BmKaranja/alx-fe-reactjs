import { Link } from "react"

function Home() {
    return (
    <div style={{ padding: '20px' }}>
        <nav>
            <ul>
                <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
            </ul>
        </nav>
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
    </div>
    );
}

export default Home;