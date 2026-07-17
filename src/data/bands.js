const modules = import.meta.glob(
  "../content/bands/*.json",
  { eager: true }
);

export const bands = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => a.name.localeCompare(b.name, "cs"));