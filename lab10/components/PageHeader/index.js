import Link from 'next/link';
import styles from '../pageCSS/pageCSS.module.css'

function PageHeader() {
    return (
        <div className={styles.header}>
            <Link href="/SearchName">
                <a className={styles.headera}>Search by Name</a>
            </Link>
            <Link href="/SearchID">
                <a className={styles.headera}>Search by ID</a>
            </Link>
            <Link href="/SearchType">
                <a className={styles.headera}>Search by Type</a>
            </Link>
        </div>
    );
}

export default PageHeader;