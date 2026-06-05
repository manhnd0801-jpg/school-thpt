const fs = require('fs');
const path = require('path');

const root = path.resolve('src');
const symbols = ['Button', 'Input', 'Select', 'Textarea', 'Table'];

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    if (entry.isFile() && full.endsWith('.tsx')) out.push(full);
  }
}

function findInsertIndex(content) {
  let i = 0;
  while (i < content.length) {
    while (i < content.length && /\s/.test(content[i])) i++;
    if (!content.startsWith('import ', i)) break;
    const semicolon = content.indexOf(';', i);
    if (semicolon === -1) break;
    i = semicolon + 1;
  }
  return i;
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

const files = [];
walk(root, files);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  const importsToAdd = [];

  for (const symbol of symbols) {
    const uses = new RegExp(`<${symbol}(\\s|>)`).test(content);
    const hasImport = new RegExp(`import\\s+${symbol}\\s+from\\s+['\"][^'\"]*components/ui/${symbol}['\"]`).test(content);
    if (uses && !hasImport) {
      const rel = toPosix(path.relative(path.dirname(file), path.resolve(root, 'components', 'ui', symbol)));
      const relImport = rel.startsWith('.') ? rel : `./${rel}`;
      importsToAdd.push(`import ${symbol} from '${relImport}';`);
    }
  }

  if (importsToAdd.length > 0) {
    const idx = findInsertIndex(content);
    const prefix = content.slice(0, idx);
    const suffix = content.slice(idx);
    const block = `\n${importsToAdd.join('\n')}`;
    content = `${prefix}${block}${suffix}`;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('updated', toPosix(path.relative(process.cwd(), file)));
  }
}
