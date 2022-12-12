export function deClone(obj) {
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = deClone(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
