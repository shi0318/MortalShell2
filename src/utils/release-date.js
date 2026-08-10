function parseReleaseDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) throw new TypeError(`Expected an ISO calendar date, received: ${value}`);
  return match.slice(1).map(Number);
}

export function getReleaseState(releaseDate, now = new Date()) {
  const [year, month, day] = parseReleaseDate(releaseDate);
  const target = Date.UTC(year, month - 1, day);
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.round((target - today) / 86400000);

  if (days < 0) return { kind: 'released', days };
  if (days === 0) return { kind: 'today', days };
  return { kind: 'upcoming', days };
}

export function formatReleaseDate(releaseDate) {
  const [year, month, day] = parseReleaseDate(releaseDate);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
