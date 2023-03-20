import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const portal = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  closeModal = e => {
    console.log(e.currentTarget);
  };
  render() {
    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>,
      portal
    );
  }
}
