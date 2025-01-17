import Input from '~/components/Input';
import Report from '~/components/Report';
import Table from '~/components/Table';
import styles from '~/styles/main.module.scss'

const DATA = [
    {task: 'Task i'},
    {task: 'Define something'},
    {task: 'Table'},
    {task: 'Make something great'},
]

const MainPage = (): React.JSX.Element => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.left}>
                <Input />
                <Table data={DATA}/>
            </div>
            <div className={styles.right}>
                <Report />
            </div>
        </section>
    )
};

export default MainPage
