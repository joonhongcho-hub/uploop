import EntryItem from "./EntryItem";

function EntryList({ entries, onDelete }) {
  return (
    <ul>
      {entries.map((entry) => (
        <EntryItem key={entry.id} entry={entry} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default EntryList;
