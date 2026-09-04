export default function PhotoCard({ photo }) {
  return (
    <article className="photo-card">
      <img src={photo.download_url} alt={photo.author} loading="lazy" />
      <div className="photo-card__body">
        <h2>{photo.author}</h2>
        <p>
          {photo.width} x {photo.height}
        </p>
      </div>
    </article>
  );
}
