import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
export default function ImageGallery({ items }) {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem items={items} />
    </ul>
  );
}
