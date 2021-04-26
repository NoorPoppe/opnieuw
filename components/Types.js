import Link from 'next/link'

export default function Types({ type }) {
    console.log(type)
    const { title } = type.fields

    return (
        <div className="card">
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}