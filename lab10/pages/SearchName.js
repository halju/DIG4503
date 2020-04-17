import Head from 'next/head';
import styles from '../components/pageCSS/pageCSS.module.css';
import PageHeader from '../components/PageHeader/index.js'
import "./api/pokemon/name/[name].js";
import NameSearch from "../components/NameSearch/index.js";
import RanSprite from '../components/RanSprite/index.js';

const SearchName = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Hal's Pokemon Database</title>
      </Head>
      <div className={styles.container}>
      <PageHeader />
        <h1 className={styles.head}>Hal's Pokemon Database</h1>
        <div className={styles.align}><RanSprite /></div>
        <p><NameSearch /></p>
      </div>
    </div>
  );
}

export default SearchName;
