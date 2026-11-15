import { useState } from "react";

function EntryForm({ onAdd }) {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [category, setCategory] = useState("");
  const [memo, setMemo] = useState("");

  return (
    <form className="entry-form">
      <label>
        날짜
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        시작
        <input
          type="time"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        />
      </label>
      <label>
        종료
        <input
          type="time"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />
      </label>
      <label>
        카테고리
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <label>
        메모
        <input value={memo} onChange={(e) => setMemo(e.target.value)} />
      </label>
      <button
        type="submit"
        onClick={(e) => {
          onAdd({ date, start, end, category, memo });
          e.preventDefault();
        }}
      >
        추가
      </button>
    </form>
  );
}

export default EntryForm;
