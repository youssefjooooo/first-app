import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <p>
        2024&copy; CopyWrites - This Is My First NextJs App -{" "}
        <span style={{ textDecoration: "underline" }}>
          Terms And Conditions Apply
        </span>
      </p>
    </div>
  );
}

export default Footer;
