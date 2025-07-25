export default function generateStylesheetsObject(stylesheets) {
  return stylesheets.map((stylesheet) => ({
    rel: 'stylesheet',
    url: stylesheet,
    precedence: 'default',
  }));
}
