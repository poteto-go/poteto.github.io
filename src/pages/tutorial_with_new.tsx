"use client";
import { CodeBlock } from "react-code-block";
import { POTETOCLI_CODE_EXAMPLE } from "../code/tutorial/install_potetocli";

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
        <CodeBlock code={POTETOCLI_CODE_EXAMPLE} language="bash">
          <CodeBlock.Code className="code-block">
            <CodeBlock.LineContent>
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </CodeBlock.Code>
        </CodeBlock>
      </main>
    </>
  );
};

export default GettingStartWithNew;
