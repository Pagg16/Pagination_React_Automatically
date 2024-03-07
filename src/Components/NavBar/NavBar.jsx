import style from "./navbar.module.css";
import cn from "classnames";

export default function NavBar({
  visibleElements,
  setPages,
  pagesLength,
  pages,
}) {
  const maxPages = Math.floor(pagesLength / visibleElements);

  function createNodeElements() {
    const maxElem =
      visibleElements + pages > maxPages ? maxPages : visibleElements + pages;

    const nodeElem = [];

    for (let i = pages; i < maxElem; i++) {
      nodeElem.push(node(i));
    }
    return nodeElem;
  }

  function node(i) {
    return (
      <div
        key={i}
        className={cn(style.num, pages === i && style.numActive)}
        onClick={() => setPages(i)}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div className={style.navBar}>
      {!!pages && (
        <div
          className={style.back}
          onClick={() =>
            setPages(pages >= visibleElements ? pages - visibleElements : 0)
          }
        >
          &lt;&lt;
        </div>
      )}
      {maxPages !== pages && createNodeElements().map((elem) => elem)}
      {maxPages - pages > visibleElements && "...."}
      {node(maxPages)}
    </div>
  );
}
