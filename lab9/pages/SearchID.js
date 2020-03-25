import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/pageCSS/pageCSS.module.css';
import "./api/pokemon/id/[id].js";
import IdSearch from "../components/IdSearch/index.js";

const SearchID = () => {
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
          <p><IdSearch /></p>
          <p><Link href="SearchName">
            <a className={styles.a}>Search by Name</a>
          </Link></p>
          <p><Link href="/TypeSearch">
            <a className={styles.a}>Search by Type</a>
          </Link></p>
        </div>
      </div>
    );
  }

export default SearchID;
