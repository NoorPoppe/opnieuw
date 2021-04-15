//import { HexColorPicker} from "react-color";
import styles from "../styles/Home.module.css";
import Image from 'next/image'

const Form = ({ onSubmit }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            content: e.target.content.value,
            headers: { 'Content-Type': 'cat'}
        };
        e.target.reset();
        onSubmit(data);
    };

    return (
        <section>
            <h3>Form Titel nog kiezen</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="size" >Size</label>
                    <input type="range" name="range" min="1" max="4" />
                </div>
                <div>
                    <p>Toy</p>
                    <div>
                        <label htmlFor="bal"> <Image src="/bal.svg" width={293} height={282} alt="bal-toy"  />Bal</label>
                        <input type="radio" id="bal" value="bal" name="toy" />
                    </div>
                    <div>
                        <label htmlFor="muis"> <Image src="/muis.svg" width={364} height={307} alt="muis-toy" />Muis</label>
                        <input type="radio" id="muis" value="muis" name="toy" />
                    </div>
                    <div>
                        <label htmlFor="vis"> <Image src="/vis.svg" width={480} height={285} alt="vis-toy" />Vis</label>
                        <input type="radio" id="vis" value="vis" name="toy" />
                    </div>
                </div>

                <div>
                    <label htmlFor="name"> From: </label>
                    <input type="text" name="from" required />
                
                    <label htmlFor="name" > To: </label>
                    <input type="text" name="to" required />
                    
                    <label htmlFor="message">Your lie:</label>
                    <textarea name="content" name="lie" required maxLength="500"></textarea>

                    <input type="submit" value="Send your lie" />
                </div>
                <p>color</p>
                <p>type</p>
                <p>toy</p>
            </form>
            <p>image cat</p>
        </section>
    );
};

export default Form;