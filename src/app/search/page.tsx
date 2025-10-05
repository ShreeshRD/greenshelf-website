import { Suspense } from 'react';
import SearchResults from './SearchResults';

const SearchPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
};

export default SearchPage;
