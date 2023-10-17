import { getProjects } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extra-bold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Robera
        </span>
      </h1>

      <div className="mt-20 text-3xl font-bold text-gray-700">My Projects</div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/project/${project._id}`}
            className="border-2 border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500 transition"
            key={project._id}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500 h-52"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
