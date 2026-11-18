import { getDuration, formatDuration } from "../utils/time";

function EntryItem({ entry, onDelete }) {
  const duration = getDuration(entry.start, entry.end);
  function handleDelete() {
    const isOk = window.confirm(
      `${entry.category} (${entry.start} ~ ${entry.end})를 삭제하시겠습니까?`,
    );
    if (!isOk) return;
    onDelete(entry.id);
  }

  return (
    <li className="entry">
      <div className="entry-head">
        <span className="entry-category">{entry.category}</span>
        <span className="entry-time">
          {entry.start} ~ {entry.end} ({formatDuration(duration)})
        </span>
      </div>
      <p className="entry-memo">{entry.memo}</p>
      <button onClick={handleDelete} style={{ marginBottom: "3rem" }}>
        삭제
      </button>
    </li>
  );
}

export default EntryItem;
