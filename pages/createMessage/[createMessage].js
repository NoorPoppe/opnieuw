import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CreateMessages({ to, from }) {
    const router = useRouter()
    return (
        <div >
            <div >
                <div>To: {/*to => undefined*/}</div>
                <div>From: {/*from => undefined*/}</div>
                <Link href={`/createMessage/${to}`}>
                    <a>{`/createMessage/${to}`}</a>
                </Link>
            </div>
        </div>
    )
}

/*
export async function getStaticPaths() {
    const res = await fetchEntries()
    const slug = await res.map((p) => {
        return `/createMessage/` 
    })

    return { paths: slug, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetchEntries()
    const content = await res
        .map((p) => {
            return p.fields
        })
        .filter((thing) => {
            return thing.slug === params.CreateMessage
        })

    return {
        props: {
            content: content[0],
        },
    }
}
*/