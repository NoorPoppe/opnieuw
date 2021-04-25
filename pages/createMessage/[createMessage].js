import { useRouter } from 'next/router'
import { fetchEntries } from '../../utils/contentfulCats'
import CreateMessage from '../../components/CreateMessage'

export default function CreateMessages({ content }) {
    console.log(content)
    const router = useRouter()
    return (
        <>
            <div className="container">
                <title>{content.to}</title>
                <CreateMessage to={router.query.to} from={router.query.from} />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetchEntries()
    const cornucopia = await res.map((p) => {
        return `/createMessage/${p.fields.slug}`
    })

    return { paths: cornucopia, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetchEntries()
    const content = await res
        .map((p) => {
            return p.fields
        })
        .filter((thing) => {
            return thing.slug === params.createMessage
        })

    return {
        props: {
            content: content[0],
        },
    }
}