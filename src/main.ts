function importDaily() {
  const fromRoot = import.meta.glob('/daily/**/*.{ts,js,tsx,jsx,mjs}', {
    eager: true,
  });
  const fromSrc = import.meta.glob('/src/daily/**/*.{ts,js,tsx,jsx,mjs}', {
    eager: true,
  });
  const modules = { ...fromRoot, ...fromSrc };
  const files = Object.keys(modules);
  return modules;
}

importDaily();
