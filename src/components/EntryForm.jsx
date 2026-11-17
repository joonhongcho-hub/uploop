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
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label>
        시작
        <input
          id="start"
          type="time"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        />
      </label>
      <label>
        종료
        <input
          id="end"
          type="time"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />
      </label>
      <label>
        카테고리
        <input
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <label>
        메모
        <input
          id="memo"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onAdd({ id: Date.now(), date, start, end, category, memo });
        }}
      >
        추가
      </button>
    </form>
  );
}

export default EntryForm;
