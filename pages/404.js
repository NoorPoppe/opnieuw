import Link from 'next/link'
import { useEffect } from 'react'
// for redirect the user 
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    },[])
    return ( <div>
        <h1>oops</h1>
        <h2>That page can not be found</h2>
        <p>Go back to the <Link href="/"><a>Home</a></Link></p>
    </div> );
}
 
export default NotFound;