import books from "@/data/books";
import BookShelf from "@/components/BookShelf";

export default function Home() {

  return (
    <main>
      <h1>📚 나의 책장</h1>
      <BookShelf books={books} />
    </main>
  );
}
