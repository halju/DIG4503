import Head from 'next/head';
import styles from '../components/pageCSS/pageCSS.module.css';
import PageHeader from '../components/PageHeader/index.js';
import RanSprite from '../components/RanSprite/index.js';

const Home = () => {
  return (
      <div className={styles.body}>
        <Head>
          <title>Hal's Pokemon Database</title>
        </Head>
        <div className={styles.container}>
        <PageHeader />
          <h1 className={styles.head}>Hal's Pokemon Database</h1>
          <div className={styles.align}><RanSprite /></div>
          <p className={styles.align}>Hello, welcome to my Pokemon database website! Feel free to browse the links at the top of the page and search for some Pokemon.</p>
        </div>
      </div>
    );
  }

export default Home;
