const fs = require('fs');
let c = fs.readFileSync('src/js/world.js', 'utf8');
if (c.startsWith('import')) {
  c = c.substring(c.indexOf('\n') + 1); // skip first line
}
fs.writeFileSync('src/js/world.js', 'import jsVectorMap from "jsvectormap";\n' + c);
