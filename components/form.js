import { useState } from 'react'
import Link from 'next/link'
//import { Listbox, ListboxOption } from '@reach/listbox'
//import '@reach/listbox/styles.css'

const Form = ({ onSubmit, messages }) => {
    let [to, setTo] = useState('')
    let [from, setFrom] = useState('')
    //let [selectedSlug, setSelectedSlug] = useState('test')

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            to: e.target.to.value,
            from: e.target.from.value,
            lie: e.target.lie.value,
        };
        e.target.reset();
        onSubmit(data);
    };

    return (
        <section>
            <h3>Message</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    From:
                    <input
                        type="text"
                        name="from"     
                        required />
                </label>
                <label>
                    To:
                    <input
                        type="text"
                        name="to"

                        required />
                </label>
                <label>
                    Lie:
                    <textarea name="lie" required maxLength="500"></textarea>
                </label>
                <input type="submit" value="Send" />
            </form>

            
        </section>
    );
};

export default Form;