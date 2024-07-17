const newlyReleasedBook = {
  title: 'Onbi Cut The Rope',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  pages: 331,
  rating: 4.6,
  downloads: 160000,
  imgSrc: './assets/purpleheart.png',
};

const NewlyReleased = () => {
  return (
    <section className="mb-2">
      <h2 className="text-xl font-bold mb-3">Newly Released</h2>
      <div className="bg-white shadow rounded p-4">
      {/* <img
            className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="./assets/purpleheart.png"
            /> */}
        <img src={newlyReleasedBook.imgSrc}  className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover" />
       
        <h3 className="flex flex-row items-center justify-center py-2.5 px-0 relative font-semibold">{newlyReleasedBook.title}</h3>
        <p className="text-gray-600">{newlyReleasedBook.description}</p>
         
    

        {/* <p className="w-[29px] flex flex-col items-start justify-start">Pages: {newlyReleasedBook.pages}</p>
        <p className="w-[42px] flex flex-col items-start justify-start relative font-semibold inline-block min-w-[42px]">Rating: {newlyReleasedBook.rating}/5</p>
        <p className="text-gray-600">Downloads: {newlyReleasedBook.downloads}</p> */}



            <div className=" flex flex-row  justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start">
                    <div className="relative font-semibold inline-block">
                    331
                    </div>
                    <div className="relative text-5xs font-light">
                    Pages
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="relative font-semibold inline-block">
                    4.6/5
                    </div>
                    <div className="relative text-5xs font-light">
                    Rating
                    </div>
                </div>
                <div className="flex flex-col items-start justify-end">
                    <div className="relative font-semibold inline-block">
                    160k
                    </div>
                    <div className="relative text-5xs font-light inline-block">
                    Downloads
                    </div>
                </div>
                </div>




        <div className="flex justify-center mt-4">
          <button className="bg-green-500 text-black px-4 py-2 rounded align-middle">Buy now</button>
        </div>
      </div>
    </section>
  );
};

export default NewlyReleased;
