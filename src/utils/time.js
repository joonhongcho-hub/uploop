export function toMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

// 시작/종료 시각으로 걸린 시간(분) 계산
export function getDuration(start, end) {
  return toMinutes(end) - toMinutes(start);
}

// 90 -> "1시간 30분", 50 -> "50분", 120 -> "2시간"
export function formatDuration(totalMinutes) {
  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  if (hour === 0) return `${minute}분`;
  if (minute === 0) return `${hour}시간`;
  return `${hour}시간 ${minute}분`;
}
