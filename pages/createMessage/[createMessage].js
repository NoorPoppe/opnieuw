import { useRouter } from 'next/router'
import { fetchEntries } from '@utils/contentfulPosts'
import CreateMessage from '../../components/CreateMessage'


export default function CreateMessages() {
    const router = useRouter()

    return (
        <>
            <div>
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

export async function getStaticProps() {
    const res = await fetchEntries()
    const content = await res
        .map((p) => {
            return p.fields
        })
    return {
        props: {
            content: content[0],
        },
    }
}
