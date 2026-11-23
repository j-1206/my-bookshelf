import "./globals.css";

export const metadata = {
  title: "나의 책장",
  description: "개별 프로젝트 과제",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
