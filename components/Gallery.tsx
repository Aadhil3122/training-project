export default function Gallery() {
  return (
    <div id="gallery" className="py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Gallery</h2>

      <div className="grid grid-cols-3 gap-4 px-10">
        <img src="/images/gallery/1.jpg" />
        <img src="/images/gallery/2.jpg" />
        <img src="/images/gallery/3.jpg" />
      </div>
    </div>
  );
}
