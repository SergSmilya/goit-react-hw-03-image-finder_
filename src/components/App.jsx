import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Api from '../Api';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchingWord: '',
    items: [],
  };
  componentDidUpdate(_, prevState) {
    if (prevState.searchingWord !== this.state.searchingWord) {
      Api(this.state.searchingWord).then(
        ({ data }) => this.setState({ items: data.hits })
        // console.log(data.hits)
      );
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const searchingWord = e.target[1].value;
    this.setState({ searchingWord });
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
      </div>
    );
  }
}
