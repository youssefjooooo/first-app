import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.app}>
      <h2>
        This is the index content, which appears by default once the app loads
      </h2>
    </div>
  );
}
