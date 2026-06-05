const fs = require('fs');
const path = require('path');

const root = path.resolve('src');
const allFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else allFiles.push(p);
  }
}
walk(root);

function toPascal(name) {
  return name
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

const renames = [];
for (const f of allFiles.filter(f => f.endsWith('.tsx'))) {
  const dir = path.dirname(f);
  const base = path.basename(f, '.tsx');
  const targetBase = toPascal(base);
  if (base !== targetBase) {
    renames.push({
      oldPath: f,
      newPath: path.join(dir, targetBase + '.tsx'),
      oldBase: base,
      newBase: targetBase,
    });
  }
}

if (!renames.length) {
  console.log('No TSX files needed renaming.');
  process.exit(0);
}

for (const r of renames) {
  const tmp = r.oldPath + '.__tmp__';
  fs.renameSync(r.oldPath, tmp);
  fs.renameSync(tmp, r.newPath);
}

const codeFiles = allFiles.filter(f => /\.(ts|tsx)$/.test(f));
for (const file of codeFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const r of renames) {
    const oldEsc = r.oldBase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const reg = new RegExp(`((?:from\\s+|import\\(\\s*|export\\s+\\*\\s+from\\s+|export\\s+\\{[^}]*\\}\\s+from\\s+)['\"][^'\"]*?)${oldEsc}((?:['\"]))`, 'g');
    const next = content.replace(reg, `$1${r.newBase}$2`);
    if (next !== content) {
      content = next;
      changed = true;
    }
  }

  if (changed) fs.writeFileSync(file, content, 'utf8');
}

console.log(`Renamed ${renames.length} files.`);
for (const r of renames) {
  console.log(path.relative(process.cwd(), r.oldPath) + ' -> ' + path.relative(process.cwd(), r.newPath));
}
