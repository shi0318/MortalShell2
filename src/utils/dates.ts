/**
 * Normalize content dates so YAML Date objects never render as
 * "Fri Jul 24 2026 08:00:00 GMT+0800 (...)".
 * Always display as YYYY-MM-DD for UI + schema consistency.
 */
export function toDateString(value: string | Date | null | undefined): string {
  if (value == null || value === '') return '';

  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return '';
    return value.toISOString().slice(0, 10);
  }

  const raw = String(value).trim();
  const ymd = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (ymd) return ymd[1];

  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return raw;
}

/** Visible date label — keep simple and locale-stable. */
export function formatDate(value: string | Date | null | undefined): string {
  return toDateString(value);
}
