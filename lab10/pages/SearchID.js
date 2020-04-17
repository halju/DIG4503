import Head from 'next/head';
import styles from '../components/pageCSS/pageCSS.module.css';
import PageHeader from '../components/PageHeader/index.js'
import "./api/pokemon/id/[id].js";
import IdSearch from "../components/IdSearch/index.js";
import RanSprite from '../components/RanSprite/index.js';

const SearchId = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Hal's Pokemon Database</title>
      </Head>
      <div className={styles.container}>
      <PageHeader />
        <h1 className={styles.head}>Hal's Pokemon Database</h1>
        <div className={styles.align}><RanSprite /></div>
        <p><IdSearch /></p>
      </div>
    </div>
  );
}

export default SearchId;
