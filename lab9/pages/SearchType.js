import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/pageCSS/pageCSS.module.css';
import "./api/pokemon/type/[type].js";
import TypeSearch from "../components/TypeSearch/index.js";

const SearchType = () => {
  return (
      <div className={styles.body}>
        <Head>
          <title>Pokemon Database</title>
        </Head>
        <div>
          <h1 className={styles.head}>Pokemon Database</h1>
          <p>
            Search for a pokemon by type
          </p>
          <p><TypeSearch /></p>
          <p><Link href="SearchName">
            <a className={styles.a}>Search by Name</a>
          </Link></p>
          <p><Link href="/SearchID">
            <a className={styles.a}>Search by ID</a>
          </Link></p>
        </div>
      </div>
    );
  }

export default SearchType;
