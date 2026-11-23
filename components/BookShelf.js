'use client'
import { useState } from "react";
import BookCard from "@/components/BookCard";

const categories = [
  { key: "all", label: "전체" },
  { key: "소설", label: "소설" },
  { key: "에세이", label: "에세이" },
  { key: "IT", label: "IT" },
  { key: "시", label: "시" },
];

export default function BookShelf({ books }) {
  const [bookList, setBookList] = useState(books);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");

  function handleToggleRead(id) {
    setBookList(
      bookList.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  }

  const readBooks = bookList.filter((book) => book.isRead);
  const percentRead = Math.round((readBooks.length / bookList.length) * 100);

  const filtered = bookList
    .filter((book) => category === "all" || book.category === category)
    .filter((book) => book.name.includes(keyword.trim()));

  return (
    <>
      <div className="stats">
        <div className="stat">전체 <b>{bookList.length}</b>권</div>
        <div className="stat">읽은 책 <b>{readBooks.length}</b>권</div>
        <div className="stat">독서 진행률 <b>{percentRead}</b>%</div>
      </div>
      <div className="bar">
        <div style={{ width: `${percentRead}%` }} />
      </div>

      <input
        className="search"
        type="text"
        placeholder="책 제목을 입력하세요."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={category === cat.key ? "tab active" : "tab"}
            onClick={() => setCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p>검색 결과 <b>{filtered.length}</b>권</p>

      {filtered.length === 0 ? (
        <p className="notice">
          {keyword.trim()
            ? `'${keyword}'에 해당하는 책이 없습니다.`
            : "해당 장르의 책이 없습니다."}
        </p>
      ) : (
        <div className="menu-grid">
          {filtered.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              onToggle={() => handleToggleRead(book.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}