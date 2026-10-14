import EntryItem from "./EntryItem";

function EntryList({ entries }) {
  return (
    <ul>
      {entries.map((entry) => (
        <EntryItem key={entry.id} entry={entry} />
      ))}
    </ul>
  );
}

export default EntryList;
