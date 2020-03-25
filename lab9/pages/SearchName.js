import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/pageCSS/pageCSS.module.css';
import "./api/pokemon/name/[name].js";
import NameSearch from "../components/NameSearch/index.js";

const SearchName = () => {
  return (
      <div className={styles.body}>
        <Head>
          <title>Pokemon Database</title>
        </Head>
        <div>
          <h1 className={styles.head}>Pokemon Database</h1>
          <p>
            Search for a pokemon by name
          </p>
          <p><NameSearch /></p>
          <p><Link href="/SearchID">
            <a className={styles.a}>Search by ID</a>
          </Link></p>
          <p><Link href="/SearchType">
            <a className={styles.a}>Search by Type</a>
          </Link></p>
        </div>
      </div>
    );
  }

export default SearchName;
