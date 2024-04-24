import { headers } from "next/headers";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // Add this to force dynamic behaviour (more convenient than headers())

async function Images() {
  headers();
  const images = await db.query.images.findMany({});
  console.log(images);
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  // headers(); // Add this to force the page to not be chached

  // const imgs = await db
  //   .select()
  //   .from(schema.images)
  //   .orderBy(desc(schema.images.id));
  // console.log(imgs);

  return (
    <main>
      <Images />
    </main>
  );
}
