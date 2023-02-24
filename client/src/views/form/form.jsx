import AddActivity from "../../components/addActivity/addActivity";
import Style from "./form.module.css"

const Form = () => {

    return (
        <div className={Style.container}>
            <div>
                <AddActivity></AddActivity>
            </div>
        </div>
    )
};

export default Form;