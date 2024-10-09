import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/Main.css'

export default function Main() {
  const inputRef = useRef(null);

  return (
    <div className="container">
      <h1 className="title text-light">日本語 N5の クイズ テスト</h1>

      <ol>
        <li>Siz N5 darajadagi 30ta savolga javob topishingiz kerak!</li>
        <li>10 ta savol readin!</li>
        <li>10 ta savol listening!</li>
        <li>10 ta savol kanji!</li>
      </ol>
      <form id="form">
        <input className="userid" ref={inputRef} placeholder="ismingiz*" type="text" />
      </form>
<div className="start">
<Link className="btn" to={'quiz'}>Quiz ni boshlash</Link>
</div>

    </div>
  );
}
