"use client";
import MyCodeBlock from "../components/code_block";
import { LEAF_CODE_EXAMPLE, NOT_LEAF_CODE_EXAMPLE } from "../code/router/leaf";
import {
  JUST_ROUTER_CODE_EXAMPLE,
  ROUTER_CODE_EXAMPLE,
} from "../code/router/router";
import { FAST_ROUTING_CODE } from "../code/router/optimize";

const AboutRouter = () => {
  return (
    <>
      <main className="content">
        <h1>Poteto Router</h1>

        <h2> Router: simple router </h2>
        <p>
          Poteto provides a simple API. You can use "GET", "POST", "PUT",
          "DELETE", "PATCH", "OPTIONS", "HEAD", "CONNECT", "TRACE" methods.
        </p>
        <MyCodeBlock code={ROUTER_CODE_EXAMPLE} language="go" />

        <p>You can use just Router with the same interface.</p>
        <MyCodeBlock code={JUST_ROUTER_CODE_EXAMPLE} language="go" />

        <h2> Leaf: highly readable router </h2>
        <p>
          {" "}
          Router with Leaf has excellent readability.This represent the leaves
          produced on a Trie-tree as a grouping of several routes.{" "}
        </p>
        <a href="https://zenn.dev/poteto0/articles/aae407f0d21f0f">
          Japanese Article on Leaf
        </a>
        <h3>How to use</h3>
        <p>You can leaf with middleware you like.</p>
        <MyCodeBlock code={LEAF_CODE_EXAMPLE} language="go" />

        <p>The above code would be the same as the following code.</p>
        <MyCodeBlock code={NOT_LEAF_CODE_EXAMPLE} language="go" />

        <h2> Algorithm: Radix-Tree </h2>
        <p>
          Fast routing using radix trees. Radix-Tree is a data structure that
          represents a "/" splitted Trie-Tree.
        </p>
        <p>
          For example, Given `/users/name` as input, bind the `name` node with
          `users` as the upper node. In many cases in WebAPI, a number of paths
          share the same namespace (`users`). This allows for faster routing in
          these cases.
        </p>

        <h2> Optimize: golang optimize </h2>
        <p>
          Poteto devises a node decomposition of the url for faster routing. In
          Golang's Strings.Split, a loop process runs internally, and by
          omitting it, the routing is twice as fast.
        </p>
        <MyCodeBlock code={FAST_ROUTING_CODE} language="go" />
      </main>
    </>
  );
};

export default AboutRouter;
