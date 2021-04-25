import { useState } from "react";
import { uuid } from "uuidv4";
import { createClient } from "contentful-management";

const AddComment = ({ cat }) => {

    // newdata geen vaste naam
    const [newData, setNewData] = useState({
        name: "",
        comment: "",
    });
    // const data = getValue().list;
    const updateDataValue = async (e) => {
        e.preventDefault();
        console.log(process.env.CONTENTFUL_ACCES_KEY)
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCES_KEY,
        })
        // Create entry
        client
            .getSpace("7h21otlgi1p3")
            .then((space) => space.getEnvironment("master"))
            .then((environment) =>
                environment.createEntryWithId("comment", uuid(), {
                    fields: {
                        comment: {
                            "en-US": newData.to,
                        },
                        name: {
                            "en-US": newData.from,
                        },
                    },
                })
            )
            .then((entry) => {
                // tis gelukt
            })
            .catch((err) => {
                //niet gelukt
            });
    };
    return (
        <>
            <h3>add comment</h3>
            <form>
                <label>
                    {" "}
          name:
          <input
                        type="text"
                        name="name"
                        required
                        value={newData.name}
                        onChange={(e) =>
                            setNewData({ ...newData, name: e.target.value })
                        }
                    />{" "}
                </label>
                <label>
                    {" "}
          Commment:
          <textarea
                        name="comment"
                        required
                        maxLength="500"
                        value={newData.comment}
                        onChange={(e) =>
                            setNewData({ ...newData, comment: e.target.value })
                        }
                    ></textarea>{" "}
                </label>

                <input type="submit" value="Save" onClick={updateDataValue} />
            </form>
        </>
    );
};
export default AddComment;

