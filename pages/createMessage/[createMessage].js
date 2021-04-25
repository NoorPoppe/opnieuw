import { useRouter } from 'next/router'
//import Form from '../../components/form'
//import { fetchEntries } from '../../utils/contentfulCats'

function parseImage(items) {
    let item = items[Math.floor(Math.random() * items.length)]
    return {
        url: item.fields.image.fields.file.url,
        alt: item.fields.image.fields.title,
        //size: item.fields.file.details.image,
    }
}
export default function CreateMessages({ to, from }) {
    const router = useRouter()
   //let img = parseImage(content?image)
    return (
        <div >
            {/*<img src={img.url} alt={img.alt} width={img.size.width} height={img.size.height} />*/}
            <div >
                <div>To: {to}</div>
                <div>From: {from}</div>
            </div>
        </div>
    )
}

/*
export async function getStaticPaths() {
    const res = await fetchEntries()
    const slug = await res.map((p) => {
        return `/createMessage/` //mama / noor dit gaan we weghalen: ${p.fields.slug}
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