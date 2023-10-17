import { Project } from "@/types/Project.type";
import { createClient, groq } from "next-sanity";

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: "4qgogyuu",
    dataset: "production",
    apiVersion: "2023-10-15",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        url,
        "image": image.asset->url,
        "alt": image.alt,
        content
    }
    `
  );
};
