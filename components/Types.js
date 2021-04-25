import Link from 'next/link'
import Image from 'next/image'

export default function Types({ cat }) {
    console.log(cat)
    const { title, image } = cat.fields

    return (
        <div className="card">
            <div className="featured">
                <Image
                    src={'https:' + types.fields.image.fields.file.url}
                    width={types.fields.image[0].fields.file.details.image.width}
                    height={types.fields.image[0].fields.file.details.image.height}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}