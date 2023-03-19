import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ items }) {
  return items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li className={css.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  ));
}
