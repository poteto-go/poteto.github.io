"use client";
import MyCodeBlock from "../components/code_block";
import { BEST_PRACTICE_LEAF } from "../code/best_practice/leaf";

const BestPractice = () => {
  return (
    <>
      <main className="content">
        <h1>Best Practice Poteto</h1>
        <h2>Routing</h2>
        <p>
          Poteto has multi-type router(<a href="#/about_router">link</a>). Best
          practice is using Leaf.{" "}
        </p>
        <p>
          In many web apps, the controller layer is defined outside the router,
          but closely related to the endpoints based on the functionality each
          provides. Using Leaf provides a comfortable controller layer and
          router mapping.
        </p>
        <MyCodeBlock code={BEST_PRACTICE_LEAF} language="go" />
      </main>
    </>
  );
};

export default BestPractice;
