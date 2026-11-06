"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Chandranath & Company",
  basePath: "/studio",
  projectId: projectId || "unconfigured", // placeholder lets the build pass before setup
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
