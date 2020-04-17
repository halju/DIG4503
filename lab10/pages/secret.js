import Head from 'next/head';
import styles from '../components/pageCSS/pageCSS.module.css';
import PageHeader from '../components/PageHeader/index.js';

const Home = () => {
  return (
      <div className={styles.body}>
        <Head>
          <title>Hal's Pokemon Database</title>
        </Head>
        <div className={styles.container}>
        <PageHeader />
          <h1 className={styles.head}>Hal's Pokemon Database</h1>
          <p className={styles.align}><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" /></p>
          </div>
      </div>
    );
  }

export default Home;
