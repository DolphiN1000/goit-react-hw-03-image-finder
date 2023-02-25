import Searchbar from 'shared/components/Searchbar/Searchbar';
import ImageGallery from 'modules/ImageGallery/ImageGallery';
import Button from 'shared/components/Button/Button';
import { Component } from 'react';
import { searchImages } from './shared/services/gallery-api';
import { FidgetSpinner } from 'react-loader-spinner';
import Modal from 'shared/Modal/Modal';

import './shared/styles/styles.css';

export class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    page: 1,
    error: null,
    showModal: false,
  };

  // componentDidMount() {

  // }

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchImages(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  onSearchImages = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { items, loading, error } = this.state;
    const { onSearchImages, loadMore } = this;
    return (
      <>
        <Searchbar onSubmit={onSearchImages} />
        <ImageGallery items={items} />
        {error && <p className={StyleSheet.errorMessage}>{error}</p>}
        {loading && (
          <FidgetSpinner
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ff0000', '#00ff00', '#0000ff']}
            backgroundColor="#F4442E"
          />
        )}
        {Boolean(items.length) && <Button loadMore={loadMore}></Button>}
        <Modal></Modal>
      </>
    );
  }
}
