import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/2153dd31-cb00-4bac-b845-213715c3a3f3-3bb0vq.jpeg",
  "https://utfs.io/f/8fd182b8-ddc4-4e03-9233-983159bb43f8-1puqa0.jpeg",
  "https://utfs.io/f/62c78405-bb48-48a3-b499-bd07fb2263ae-5dib22.jpeg",
  "https://utfs.io/f/a4f270b4-cd11-467b-aabc-3fca94b89a5c-n1dtj0.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  headers(); // Add this to force the page to not be chached
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "_" + index} className="w-48">
            <img src={image.url} alt="image" className="h-44" />
          </div>
        ))}
      </div>
    </main>
  );
}
