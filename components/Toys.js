


import Link from 'next/link'
import Image from 'next/image'

export default function Toys({ toy }) {
    const { image, name  } = toy.fields

    return (
        <div className="card">
            <div className="featured">
                <Image
                    src={'https:' + toys[0].fields.image[0].fields.file.url}
                    height={toys[0].fields.image[0].fields.file.details.image.height}
                    width={toys[0].fields.image[0].fields.file.details.image.width}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    )
}