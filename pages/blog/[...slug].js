import { useRouter } from "next/router"
// catch all route
export default function BlogPostsPage() {
    const router = useRouter();

    // Array of query parameters
    console.log(router.query);

    return (
        <div>
            <h1>BlogPostsPage</h1>
        </div>
    )
}