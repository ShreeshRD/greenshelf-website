import { Suspense } from 'react';
import SearchResults from './SearchResults';

const SearchPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>} className="flex-grow-1 d-flex flex-column">
      <SearchResults />
    </Suspense>
  );
};

export default SearchPage;
