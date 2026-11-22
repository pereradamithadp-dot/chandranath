"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Chandranath & Company",
  // basePath comes from sanity.cli.ts (project.basePath); setting it here too doubles it.
  // The static Studio build only inlines SANITY_STUDIO_* env vars (set in the "build" script).
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || projectId || "unconfigured",
  dataset: process.env.SANITY_STUDIO_DATASET || dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
