const friends = [
  { name: "Alex Chen", status: "Active now" },
  { name: "Maria Silva", status: "2 min ago" },
  { name: "Sam Johnson", status: "1 hour ago" },
  { name: "Emma Wilson", status: "Active now" },
  { name: "David Kim", status: "3 hours ago" }
];

export default function FriendsList() {
  return (
    <div className="card friends-list">
      <h2>Friends <span style={{ color: "#777", fontSize: "13px" }}>(3 online)</span></h2>
      <ul>
        {friends.map((f, i) => (
          <li key={i}>
            <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt={f.name} />
            <div>
              <p><strong>{f.name}</strong></p>
              <p className="status">{f.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
