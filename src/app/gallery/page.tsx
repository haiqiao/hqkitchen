import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

export const metadata = { title: "Gallery | HQ Kitchen" };

function getLocalPhotos() {
  // Resolve the public/images/gallery directory relative to the Next project root
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery");
  try {
    const files = fs.readdirSync(galleryDir);
    const images = files.filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
    return images.map((file) => ({
      src: `/images/gallery/${file}`,
      alt: file.replace(/[-_]/g, " ").replace(/\.[^.]+$/, ""),
    }));
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const photos = getLocalPhotos();

  return (
    <section>
      <h1>Gallery</h1>
      <div className="grid">
        {photos.map((p, i) => (
          <div className="card" key={i}>
            <Image 
              src={p.src} 
              alt={p.alt} 
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }} 
            />
            <p style={{ marginTop: 8 }}>{p.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
