import styles from './style.module.scss';
import { CgChevronDown } from "react-icons/cg";

const Input = () => {
    return(
        <div className={styles.wrapper}>
            <input 
                placeholder='Using your normal language describe your project'
                autoFocus
                className={styles.input}
            />
            <button className={styles.btn}><CgChevronDown /></button>
        </div>
    )
}

export default Input;