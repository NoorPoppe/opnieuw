import { useState } from "react";
import { uuid } from "uuidv4";
import { createClient } from "contentful-management";

const AddComment = ({ comment }) => {

    const [form, setForm] = useState({
        name: "",
        comment: "",
    });
 
    const updateDataValue = async (e) => {
        e.preventDefault();
        console.log(process.env.CONTENTFUL_ACCES_KEY)
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCES_KEY,
        })

        client
            .getSpace("7h21otlgi1p3")
            .then((space) => space.getEnvironment("master"))
            .then((environment) =>
                environment.createEntryWithId("comment", uuid(), {
                    fields: {
                        comment: {
                            "en-US": form.comment,
                        },
                        name: {
                            "en-US": form.name,
                        },
                    },
                })
            )
            .then((entry) => {
            })
            .catch((err) => {
            });
    };
    return (
        <>
            <h3>add comment</h3>
            <form>
                <label> name: <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </label>
                <label> comment:
                        <textarea 
                        value={form.comment}
                        name="comment"
                        maxLength="500"
                        onChange={(e) => setForm({ ...form, comment: e.target.value })}></textarea>
                </label>
                <input  type="submit" value="send" onClick={updateDataValue} />
            </form>
        </>
    );
};
export default AddComment;

