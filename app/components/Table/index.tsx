import styles from './style.module.scss';
import taskStyle from './tableitem.module.scss';
import { CgChevronRight } from "react-icons/cg";

const TableItem = ({task}) => {
    console.log(task)
    return (
        <div className={taskStyle.wrapper}>
            <div className={taskStyle.container_name}>
                <p>{task.task}</p>
            </div>
            <div className={taskStyle.list_inputs}>
                <div className={taskStyle.container_input}>
                    <label>Impact</label>
                    <input type='number'/>
                </div>
                <div className={taskStyle.container_input}>
                    <label>Confidence</label>
                    <input type='number'/>
                </div>
                <div className={taskStyle.container_input}>
                    <label>Effort</label>
                    <input type='number'/>
                </div>
            </div>
        </div>
    )
}

type TableProps = {
    data: { task: string, id?: string | null }[];
};

const Table = ({data}: TableProps) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.table}>
                {data.map((d) => {
                    return <TableItem task={d} />
                })}
            </div>
            <div className={styles.container_btn}>
                <button className={styles.btn}><CgChevronRight /></button>
            </div>
        </div>
    )
}

export default Table;