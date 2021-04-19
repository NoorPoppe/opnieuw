import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
    let [title, setTitle] = useState('')

    return (
        <div className="container">
            <main>
                <div className="description">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    {title.length > 0 && (
                        <div>
                            Send this URL to your friends! <br />
                            <Link href={`/news/${title.toLowerCase().split(' ').join('-')}`}>
                                <a>chicag0tribune.netlify.app/news/{title.toLowerCase().split(' ').join('-')}</a>
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
