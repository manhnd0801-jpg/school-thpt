# Frontend Structure

Project da duoc to chuc lai thanh mot app Vite duy nhat tai thu muc `frontend`, voi cau truc `public` + `src` theo huong domain va route.

## Run

```bash
cd frontend
npm install
npm run dev
```

Build:

```bash
npm run build
```

Type-check:

```bash
npm run lint
```

## Notes

- Entry point: `src/main.tsx`
- Main app: `src/App.tsx`
- Route definitions: `src/routes`
- Public assets: `public/`
- Legacy code da duoc move vao cau truc `src/pages`, `src/layouts`, `src/components`; thu muc `src/legacy` da duoc loai bo.
