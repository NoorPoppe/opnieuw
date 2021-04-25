//import styles from "./Form.module.css";
//import Message from "../components/Message.js";
import { useState } from "react";
import { uuid } from "uuidv4";
import { createClient } from "contentful-management";

const Form = ({ cat }) => {
 
    // newdata geen vaste naam
    const [newData, setNewData] = useState({
        to: "",
        from: "",
        lie: "",
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
                environment.createEntryWithId("cat", uuid(), {
                    fields: {
                        to: {
                            "en-US": newData.to,
                        },
                        from: {
                            "en-US": newData.from,
                        },
                        lie: {
                            "en-US": newData.lie,
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
            <form>
                <label>
                    {" "}
          To:
          <input
                        type="text"
                        name="to"
                        required
                        value={newData.to}
                        onChange={(e) =>
                            setNewData({ ...newData, to: e.target.value })
                        }
                    />{" "}
                </label>
                <label>
                    {" "}
          from:
          <input
                        type="text"
                        name="from"
                        required
                        value={newData.from}
                        onChange={(e) => setNewData({ ...newData, from: e.target.value })}
                    />{" "}
                </label>
                <label>
                    {" "}
          lie:
          <textarea
                        name="lie"
                        required
                        maxLength="500"
                        value={newData.lie}
                        onChange={(e) =>
                            setNewData({ ...newData, lie: e.target.value })
                        }
                    ></textarea>{" "}
                </label>

                <input type="submit" value="Save" onClick={updateDataValue} />
            </form>
        </>
    );
};
export default Form;
