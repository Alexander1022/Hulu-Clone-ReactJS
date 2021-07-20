import Head from 'next/head'
import Image from 'next/image'
import { func } from 'prop-types'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import reqs from '../utils/reqs'

export default function Home({ results }) {
  return (
    <div>

      <Head>
        <title>
          Hulu Clone using ReactJS
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <Nav />

      <Results results={results}/>
    
    </div>
  );
}

export async function getServerSideProps(context)
{
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      reqs[genre]?.url || reqs.fetchTrending.url
    }`
    ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    }
  };
}
