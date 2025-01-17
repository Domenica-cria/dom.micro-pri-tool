import HeatMap from '../HeatMap';
import styles from './style.module.scss';

const data = [
    { x: 'a', y: 'A', value: 1 },
    { x: 'b', y: 'A', value: 2 },
    { x: 'c', y: 'A', value: 3 },
    { x: 'd', y: 'A', value: 4 },
    { x: 'e', y: 'A', value: 5 },
    { x: 'f', y: 'A', value: 6 },
    { x: 'g', y: 'A', value: 7 },
    { x: 'h', y: 'A', value: 8 },
    { x: 'i', y: 'A', value: 9 },
    { x: 'j', y: 'A', value: 10 },
    { x: 'k', y: 'A', value: 1 },
    { x: 'l', y: 'A', value: 2 },
    { x: 'c', y: 'E', value: 3 },
    { x: 'a', y: 'D', value: 4 },
    { x: 'b', y: 'C', value: 5 },
    { x: 'a', y: 'B', value: 5 },
];

const Report = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>header</div>
            <div>
                <HeatMap width={700} height={400} data={data} />
            </div>
        </div>
    )
}

export default Report;