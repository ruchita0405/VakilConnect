import React from 'react'

function Testimonies() {
  const reviews = [
    {
      name: "John Doe",
      role: "Client",
      rating: 5,
      comment: "Great legal service! The lawyer was professional and efficient.",
      date: "Oct 1, 2024",
    },
    {
      name: "Jane Smith",
      role: "Client",
      rating: 4,
      comment: "Good experience overall, but scheduling a meeting took longer than expected.",
      date: "Sep 27, 2024",
    },
    {
      name: "Michael Johnson",
      role: "Client",
      rating: 5,
      comment: "Excellent legal advice. Helped me win my case!",
      date: "Sep 20, 2024",
    },
  ];

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pb-7 '>
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="avatar">
                  <div className="w-12 rounded-full bg-gray-300 flex justify-center items-center">
                    <span className="text-lg font-bold text-black">{review.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <div className="mb-2">
                <div className="rating">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${index}`}
                      className="mask mask-star-2 bg-yellow-400"
                      readOnly
                      checked
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{review.comment}</p>
              <p className="text-sm text-right text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </>
  )
}

export default Testimonies
