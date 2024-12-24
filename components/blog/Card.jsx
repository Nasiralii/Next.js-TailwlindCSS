const Card = ({ title, imageSrc, excerpt, date }) => {
  return (
    <div className="bg-[#F8F8F9] p-[3px] rounded-[24px] overflow-hidden flex flex-col">
      <div className="rounded-[24px] flex flex-col h-full">
        {imageSrc && (
          <div className="w-full h-[300px] rounded-t-[24px]">
            <img
              src={imageSrc}
              alt={title}
              className="w-full md:object-cover object-contain h-full "
            />
          </div>
        )}
        <div className="px-4 py-5 space-y-3  flex-grow">
          <p className="text-gray-500">{date}</p>
          <h3 className="text-[24px] text-[#212121] font-bold playfair-font">
            {title}
          </h3>
          {/* <div className="text-sm text-gray-700">{excerpt}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
