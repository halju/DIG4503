import Head from 'next/head';
import styles from '../components/pageCSS/pageCSS.module.css';
import PageHeader from '../components/PageHeader/index.js'
import "./api/pokemon/type/[type].js";
import TypeSearch from "../components/TypeSearch/index.js";
import RanSprite from '../components/RanSprite/index.js';

const SearchType = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Hal's Pokemon Database</title>
      </Head>
      <div className={styles.container}>
      <PageHeader />
        <h1 className={styles.head}>Hal's Pokemon Database</h1>
        <div className={styles.align}><RanSprite /></div>
        <p><TypeSearch /></p>
      </div>
    </div>
  );
}

export default SearchType;
