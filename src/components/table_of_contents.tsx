import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
};

const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // ページ内のすべての<h2>タグを取得
    const h2Elements = Array.from(document.querySelectorAll("h2"));
    const headingList = h2Elements.map((h2) => {
      const id =
        h2.id || h2.textContent?.replace(/\s+/g, "-").toLowerCase() || "";
      if (!h2.id) h2.id = id; // IDを付与（なければ）
      return { id, text: h2.textContent || "" };
    });
    setHeadings(headingList);
  }, []);

  return (
    <div>
      <h3>目次</h3>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
