"use client";
import { useRouter } from "next/navigation";
import { UploadButton } from "utils/uploadthing";
export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => {
          router.refresh();
        }}
      />
    </nav>
  );
}
