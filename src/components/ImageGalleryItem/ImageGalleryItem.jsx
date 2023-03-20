import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    targetImgUrl: '',
  };

  onImgClick = e => {
    console.dir(e.target.currentSrc);
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      targetImgUrl: e.target.currentSrc,
    });
  };

  render() {
    return this.props.items.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li className={css.ImageGalleryItem} key={id}>
        <img
          onClick={this.onImgClick}
          srcSet={largeImageURL}
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
        />
        {this.state.isModalOpen && (
          <Modal largeImageURL={this.state.targetImgUrl} tags={tags} />
        )}
      </li>
    ));
  }
}
