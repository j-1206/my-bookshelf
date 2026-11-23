'use client'

export default function ReadButton({ isRead, onToggle }) {
  return (
    <button className="process-btn" onClick={onToggle}>
      {isRead ? '✅ 다 읽음' : '📖 읽는 중'}
    </button>
  );
}