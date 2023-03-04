import React, { useState } from 'react';


function Search({ onSearch }) {
const [searchQuery, setSearchQuery] = useState('');
const handleSearch = () => {
const query = searchQuery.trim();
onSearch(query);
};
return (
<div>
<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search movies..." />
<button onClick={handleSearch}>Search</button>
</div>
);
}
export default Search;