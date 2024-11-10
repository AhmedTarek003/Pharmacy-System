const SearchItems = ({ medicines }) => {
  return (
    <div className="absolute bg-white border shadow-md min-w-full overflow-auto h-[300px] rounded-md z-40 top-10">
      {medicines?.map((medicine) => (
        <div
          key={medicine?._id}
          className="flex items-center justify-between border-b px-3 py-2 cursor-pointer hover:bg-gray-100"
        >
          <div>
            <img
              src={medicine?.medicineImage?.url}
              alt="medincien image"
              width={80}
            />
          </div>
          <div>{medicine?.medicineName}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchItems;
