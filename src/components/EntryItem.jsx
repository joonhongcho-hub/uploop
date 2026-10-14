import { getDuration, formatDuration } from "../utils/time";

function EntryItem({ entry }) {
  const duration = getDuration(entry.start, entry.end);

  return (
    <li className="entry">
      <div className="entry-head">
        <span className="entry-category">{entry.category}</span>
        <span className="entry-time">
          {entry.start} ~ {entry.end} ({formatDuration(duration)})
        </span>
      </div>
      <p className="entry-memo">{entry.memo}</p>
    </li>
  );
}

export default EntryItem;
