import Head from 'next/head';
import styles from '../components/pageCSS/pageCSS.module.css';
import PageHeader from '../components/PageHeader/index.js'

const Home = () => {
  return (
      <div className={styles.body}>
        <Head>
          <title>Hal's Pokemon Database</title>
        </Head>
        <PageHeader />
        <div className={styles.container}>
          <h1 className={styles.head}>Hal's Pokemon Database</h1>
        </div>
      </div>
    );
  }

export default Home;
