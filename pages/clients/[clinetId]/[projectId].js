import { useRouter } from 'next/router';

export default function SelectedClientProjectPage() {
    const router = useRouter();
    return (
        <div>
            <h1>The Project page for selected client</h1>
            <p>{router.query.clinetId} {router.query.projectId}</p>
        </div>
    )
}