const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="px-2 py-[7px] md:w-[25%] max-md:w-[50%] rounded-md shadow-sm focus:outline-[#ddd]"
    />
  );
};

export default SearchInput;
