import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    value: '',
  };
  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.props.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
