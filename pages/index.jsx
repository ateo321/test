import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div>
            <h1>CRUD</h1>
            <p>Update </p>
            <p><Link href="/users">&gt;&gt; Manage Users</Link></p>
        </div>
    );
}
