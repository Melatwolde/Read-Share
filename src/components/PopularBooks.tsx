import purpleHeartImage from '../assets/purpleheart.png';
const books = [
  {
    title: 'They Both Die At The End',
    author: 'Adam Silvera',
    pages: 245,
    rating: 4.5,
    imgSrc: '/path/to/image2.jpg', // Corrected to reference the imported image variable
  },
  {
    title: 'The Ninth Life',
    author: 'Adam Silvera',
    pages: 245,
    rating: 4.5,
    imgSrc: '/path/to/image2.jpg',
  },
  {
    title: 'There\'s A Life',
    author: 'Adam Silvera',
    pages: 245,
    rating: 4.5,
    imgSrc: '/path/to/image3.jpg',
  },
];

const PopularBooks = () => {
  return (
    <section className="mb-1">
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '20px', marginBottom: '16px', gap: "700px" }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Popular</h2>
          <button style={{ color: '#3b82f6' }}>View all</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2px' }}> {/* Corrected and uncommented */}
        {books.map((book, index) => (

          <div key={index} className="flex flex-col justify-center items-center bg-white shadow rounded p-4 m-4" style={{ width: '250px', height: '250px' }}>
            <img src={book.imgSrc} alt={book.title} style={{ width: '269px', height: '269px', position: 'relative', borderRadius: 'var(--br-8xs) var(--br-8xs) var(--br-11xl) var(--br-11xl)', objectFit: 'cover', zIndex: 1 }} />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-gray-600">{book.pages} Pages</p>
            <p className="text-yellow-500">Rating: {book.rating}</p>
            <div className="rating">
              <span className="ratingStars">
                <p className="text-yellow-500">Rating: {book.rating}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;