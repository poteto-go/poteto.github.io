import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";

const MyCodeBlock = (props: { code: string; language: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(props.code);
  };

  return (
    <CodeBlock code={props.code} language={props.language}>
      <div className="relative">
        <CodeBlock.Code className="code-block">
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>

        <button
          className="bg-white rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
          onClick={copyCode}
        >
          {state.value ? "Copied!" : "Copy code"}
        </button>
      </div>
    </CodeBlock>
  );
};

export default MyCodeBlock;
