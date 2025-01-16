"use client";
import MyCodeBlock from "../components/code_block";
import {
  POTETOCLI_CODE_EXAMPLE,
  POTETOCLI_NEW_CODE_EXAMPLE,
  POTETOCLI_NEW_RESULT,
  POTETOCLI_RUN_CODE_EXAMPLE,
} from "../code/tutorial/potetocli";
import clinewresult from "../assets/clinewresult.png";
import clirunresult from "../assets/clirunresult.png";
import { CURL_CODE_EXAMPLE } from "../code/tutorial/curl";

const GettingStartWithNew = () => {
  return (
    <>
      <main className="content">
        <h1> Getting Start Poteto </h1>
        <h2> Welcome to Poteto !! </h2>
        <p> Poteto provides poteto-cli (tool supports cli tool). </p>
        <a href="https://github.com/poteto-go/poteto-cli">
          {" "}
          https://github.com/poteto-go/poteto-cli{" "}
        </a>

        <h3> Install </h3>
        <MyCodeBlock code={POTETOCLI_CODE_EXAMPLE} language="bash" />

        <h3> Create New Project </h3>
        <p> Create new project with poteto-cli. </p>
        <MyCodeBlock code={POTETOCLI_NEW_CODE_EXAMPLE} language="bash" />

        <p> Result as below </p>
        <center>
          <img src={clinewresult} width={"400px"} />
        </center>
        <MyCodeBlock code={POTETOCLI_NEW_RESULT} language="bash" />

        <h3> Run Poteto App</h3>
        <p> poteto-cli provide run with hot-reload. </p>
        <MyCodeBlock code={POTETOCLI_RUN_CODE_EXAMPLE} language="bash" />

        <p> Result as below </p>
        <center>
          <img src={clirunresult} width={"400px"} />
        </center>
        <MyCodeBlock code={CURL_CODE_EXAMPLE} language="bash" />
      </main>
    </>
  );
};

export default GettingStartWithNew;
