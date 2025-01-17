import { Outlet } from "@remix-run/react"
import styles from '~/styles/layout.module.scss'

export default function FrameLayout() {

    return (
        <section className={styles.wrapper}>
            <Outlet />
        </section>
    )
}