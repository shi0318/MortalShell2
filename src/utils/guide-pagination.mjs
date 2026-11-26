export function guidePageSize(guideCount) {
  // Legacy page numbers starting at four permanently redirect to the guide hub.
  return Math.max(9, Math.ceil(guideCount / 3));
}
