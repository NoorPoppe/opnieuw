//import { HexColorPicker} from "react-color";
import styles from "../styles/Home.module.css";

const Form = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            content: e.target.content.value,
        };
        e.target.reset();
        onSubmit(data);
    };

    return (
        <section>
            <h3>Form Titel nog kiezen</h3>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <div>Color1</div>
                    <div>Color2</div>
                    <div>Color3</div>
                    <div>Color4</div>
                    <div>Color5</div>
                </div>
                <div>
                    <label>Size</label>
                    <input type="range" min="1" max="4"  />

                </div>
                <div>
                    <label>
                        From:
                    <input type="text" name="name" required />
                    </label>
                    <label>
                        <label>
                            To:
                    <input type="text" name="name" required />
                        </label>
                    Your lie:
                    <textarea name="content" required maxLength="500"></textarea>
                    </label>
                    <input type="submit" value="Send your lie" />
                </div>

            </form>
        </section>
    );
};

export default Form;