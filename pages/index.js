import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import {IoIosPaper} from 'react-icons/io';

export default function Home() {
  const [topic, setTopic] = useState("");
  const [objective, setObjective] = useState("");
  const [wordCount, setWordCount] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [isAcademic, setIsAcademic] = useState(false);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    // const response = await fetch("/api/generate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ params: animalInput }),
    // });
    // const data = await response.json();
    setResult("");
    setTopic("");
  }

  return (
    <div>
      <Head>
        <title>Auto Essay</title>
        <link rel="icon" href="/newspaper-outline.svg"/>
      </Head>

      <main className={styles.main}>
        <IoIosPaper size={100}/>
        <h3>Essay Generator</h3>
        <form onSubmit={onSubmit}>
          {/* <label>
            Formal paper
            <input 
              type="checkbox"
              name="isAcademic"
              value={isAcademic}
              onClick={(e)=>setIsAcademic(!e.target.value)}
            />
          </label> */}
          <input
            type="text"
            name="topic"
            placeholder="Enter Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <input
            type="text"
            name="objective"
            placeholder="Enter Objective of Paper"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
          <input
            type="text"
            name="pages"
            placeholder="Number of Pages"
            value={pageCount}
            onChange={(e) => setPageCount(e.target.value)}
          />

          <input type="submit" value="Generate Essay" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
