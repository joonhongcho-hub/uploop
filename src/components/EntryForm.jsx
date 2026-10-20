import { useState } from "react";

function EntryForm() {
  const [memo, setMemo] = useState("");

  return (
    <form>
      <label>
        메모
        <input value={memo} onChange={(e) => setMemo(e.target.value)} />
      </label>
      <p>입력 중: {memo}</p>
    </form>
  );
}

export default EntryForm;
