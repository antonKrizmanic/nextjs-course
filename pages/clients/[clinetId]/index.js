import { useRouter } from 'next/router'


function ClienProjectsPage() {
    const router = useRouter();

    function loadProjectHandler() {
        // can be used with object as parameter
        router.push('/clients/max/projectA');
    }

    return (
        <div>
            <h1>ClienProjectsPage</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}
export default ClienProjectsPage;