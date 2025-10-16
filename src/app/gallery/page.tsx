import fs from "node:fs";
import path from "node:path";

export const metadata = { title: "Gallery | HQ Kitchen" };

function getLocalPhotos() {
  // Resolve the public/images/gallery directory relative to the Next project root
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery");
  try {
    const files = fs.readdirSync(galleryDir);
    const images = files.filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
    const basePath = process.env.BASE_PATH || '';
    return images.map((file) => ({
      src: `${basePath}/images/gallery/${file}`,
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
            <img 
              src={p.src} 
              alt={p.alt} 
              style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }} 
            />
            <p style={{ marginTop: 8 }}>{p.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
