export const FAST_ROUTING_CODE = `
for {
  id := strings.Index(rightPath, "/")
  if id < 0 {
    param = rightPath
  } else {
    param = rightPath[:id]
    rightPath = rightPath[(id + 1):]
  }
  ...
}
`;
