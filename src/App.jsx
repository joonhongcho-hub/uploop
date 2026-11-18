import { useState } from "react";
import EntryList from "./components/EntryList";
import { getDuration, formatDuration } from "./utils/time";
import EntryForm from "./components/EntryForm";

const dummyEntries = [
  {
    id: 1,
    date: "2026-10-12",
    start: "06:00",
    end: "06:50",
    category: "코딩",
    memo: "리액트 복습",
  },
  {
    id: 2,
    date: "2026-10-12",
    start: "09:00",
    end: "09:50",
    category: "취업 준비",
    memo: "물류관리 17장 정리",
  },
  {
    id: 3,
    date: "2026-10-12",
    start: "21:00",
    end: "22:00",
    category: "독서",
    memo: "소피의 세계 읽기",
  },
  {
    id: 4,
    date: "2026-10-13",
    start: "06:00",
    end: "06:30",
    category: "SNS",
    memo: "인스타 주제 정하기",
  },
];

function App() {
  const [entries, setEntries] = useState(dummyEntries);

  const totalMinutes = entries.reduce(
    (sum, entry) => sum + getDuration(entry.start, entry.end),
    0,
  );

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  const onDelete = (id) => {
    setEntries(entries.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1>Uploop</h1>
      <EntryForm onAdd={addEntry} />
      <p>
        기록 {entries.length}개 · 총 {formatDuration(totalMinutes)}
      </p>
      <EntryList entries={entries} onDelete={onDelete} />
    </>
  );
}

export default App;
