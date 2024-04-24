import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // Add this to force dynamic behaviour (more convenient than headers())

export default async function HomePage() {
  // headers(); // Add this to force the page to not be chached
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "_" + index} className="flex w-48 flex-col">
            <img src={image.url} alt="image" className="h-44" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
