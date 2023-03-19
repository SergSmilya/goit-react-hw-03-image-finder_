import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Api from '../Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

const apiSearch = new Api();
export class App extends Component {
  state = {
    searchingWord: '',
    items: [],
  };
  componentDidUpdate(_, prevState) {
    if (prevState.searchingWord !== this.state.searchingWord) {
      apiSearch.word = this.state.searchingWord;
      apiSearch
        .searchPhoto()
        .then(({ data }) => this.setState({ items: data.hits }));
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const searchingWord = e.target[1].value;
    this.setState({ searchingWord });
    apiSearch.resetPage();
  };

  onLoadMore = e => {
    apiSearch.incrementPage();
    apiSearch.searchPhoto().then(({ data }) =>
      this.setState(prevState => ({
        items: [...prevState.items, ...data.hits],
      }))
    );
  };

  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery items={this.state.items} />
        <Button onLoadMore={this.onLoadMore} />
      </div>
    );
  }
}
