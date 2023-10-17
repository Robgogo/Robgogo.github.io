import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "4qgogyuu",
  dataset: "production",
  title: "My Personal Site",
  apiVersion: "2023-10-15",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
