import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import {IoIosPaper} from 'react-icons/io';

export default function Home() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    setResult();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ params: topic }),
    });
    const data = await response.json();
    console.log(data.result)
    setResult(data.result);
    setTopic("");
  }

  return (
    <div>
      <Head>
        <title>How To</title>
        <link rel="icon" href="/newspaper-outline.svg"/>
      </Head>

      <main className={styles.main}>
        <IoIosPaper size={50}/>
        <h1>How To</h1>
        <h4>Returns a detailed list on how to do ANYTHING</h4>
        {/* <p>thats rated PG-13</p> */}
        <form onSubmit={onSubmit}>
            <input
              type="text"
              name="topic"
              placeholder="Solve a quadratic equation"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          <input type="submit" value="Generate Answer" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
