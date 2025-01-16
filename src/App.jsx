import React, { useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { SiShopee } from 'react-icons/si';

function App() {
  const flutes = [
    {
      name: 'Traditional Palendag1',
      description: 'The sacred bamboo flute of Mindanao',
      price: '₱2,500',
      shopeeLink: 'https://shopee.ph/product/1',
      lazadaLink: 'https://lazada.com.ph/product/1',
      images: [
        'https://example.com/palendag1.jpg',
        'https://example.com/palendag2.jpg',
        'https://example.com/palendag3.jpg',
        'https://example.com/palendag4.jpg',
        'https://example.com/palendag5.jpg',
      ],
      details: {
        origin: 'Mindanao, Philippines',
        length: '80-100cm',
        material: 'Bamboo (Kawayan)',
        tuning: 'Traditional pentatonic scale',
        playingStyle: 'Side-blown',
        history:
          'The Palendag is a sacred instrument traditionally played by the Manobo people of Mindanao. It is known for its deep, resonant tones and is often used in ritual ceremonies and cultural celebrations.',
      },
    },
    {
      name: 'Traditional Palendag2',
      description: 'The sacred bamboo flute of Mindanao',
      price: '₱2,500',
      shopeeLink: 'https://shopee.ph/product/1',
      lazadaLink: 'https://lazada.com.ph/product/1',
      images: [
        'https://example.com/palendag1.jpg',
        'https://example.com/palendag2.jpg',
        'https://example.com/palendag3.jpg',
        'https://example.com/palendag4.jpg',
        'https://example.com/palendag5.jpg',
      ],
      details: {
        origin: 'Mindanao, Philippines',
        length: '80-100cm',
        material: 'Bamboo (Kawayan)',
        tuning: 'Traditional pentatonic scale',
        playingStyle: 'Side-blown',
        history:
          'The Palendag is a sacred instrument traditionally played by the Manobo people of Mindanao. It is known for its deep, resonant tones and is often used in ritual ceremonies and cultural celebrations.',
      },
    },
    {
      name: 'Tungkaling3',
      description: 'Traditional nose flute of the Cordilleras',
      price: '₱1,800',
      shopeeLink: 'https://shopee.ph/product/2',
      lazadaLink: 'https://lazada.com.ph/product/2',
      images: [
        'https://example.com/tungkaling1.jpg',
        'https://example.com/tungkaling2.jpg',
        'https://example.com/tungkaling3.jpg',
        'https://example.com/tungkaling4.jpg',
        'https://example.com/tungkaling5.jpg',
      ],
      details: {
        origin: 'Cordillera Region, Philippines',
        length: '30-40cm',
        material: 'Mountain Bamboo',
        tuning: 'Traditional scale',
        playingStyle: 'Nose-blown',
        history:
          'The Tungkaling is a traditional nose flute played by indigenous peoples in the Cordillera region. It is known for its gentle, ethereal sound and is often played during courtship rituals.',
      },
    },
    {
      name: 'Lantoy4',
      description: 'Visayan bamboo flute',
      price: '₱1,500',
      shopeeLink: 'https://shopee.ph/product/3',
      lazadaLink: 'https://lazada.com.ph/product/3',
      images: [
        'https://example.com/lantoy1.jpg',
        'https://example.com/lantoy2.jpg',
        'https://example.com/lantoy3.jpg',
        'https://example.com/lantoy4.jpg',
        'https://example.com/lantoy5.jpg',
      ],
      details: {
        origin: 'Visayas, Philippines',
        length: '40-50cm',
        material: 'Local Bamboo',
        tuning: 'Diatonic scale',
        playingStyle: 'Side-blown',
        history:
          'The Lantoy is a beloved instrument in Visayan culture, known for its sweet, melodious tone. It has been used for generations in folk music and traditional celebrations.',
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const totalItems = flutes.length;

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < totalItems ? prevIndex + 1 : prevIndex
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const visibleFlutes = flutes.slice(currentIndex, currentIndex + itemsPerPage);

  // dialog

  const [selectedFlute, setSelectedFlute] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openDialog = (flute) => {
    setSelectedFlute(flute);
    setCurrentImageIndex(0);
  };

  const closeDialog = () => {
    setSelectedFlute(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev + 1 >= selectedFlute.images.length ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev - 1 < 0 ? selectedFlute.images.length - 1 : prev - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header Section */}
      <section className="bg-white shadow py-3">
        <div className="text-center">
          {/* Logo */}
          <img
            src="public/logo2.png"
            alt="Queenflute Philippines Logo"
            className="mx-auto mb-0"
            style={{ width: '15rem' }}
          />

          {/* Title */}
          <h1
            className="text-3xl font-light tracking-wide"
            style={{ marginTop: '-15px' }}
          >
            Queenflute Philippines
          </h1>

          {/* Navigation Links */}
          <nav className="mt-2 space-x-9">
            <a
              href="#products"
              className="text-lg font-medium text-stone-700 hover:text-orange-500 transition"
            >
              PRODUCTS
            </a>
            <a
              href="#about"
              className="text-lg font-medium text-stone-700 hover:text-orange-500 transition"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-stone-700 hover:text-orange-500 transition"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 text-white"
        style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl mb-4 font-serif">
              Welcome to Queenflute Philippines
            </h1>
            <p className="text-lg font-light">
              Discover the enchanting sounds of traditional Filipino bamboo
              flutes.
            </p>

            <div className="pt-4">
              <a
                href="#producs-grid"
                className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-600"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow transition"
            aria-label="Previous"
          >
            <IoChevronBackOutline size={40} />
          </button>
        )}

        {/* Flute Grid */}
        <div
          id="products-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleFlutes.map((flute, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-[4/3] bg-stone-200 relative">
                {/* Replace with actual image */}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-light mb-2">{flute.name}</h2>
                <p className="text-stone-600 mb-4">{flute.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">{flute.price}</p>
                  <button
                    onClick={() => openDialog(flute)}
                    className="text-stone-600 hover:text-stone-800 transition"
                  >
                    View details
                  </button>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={flute.shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-sm flex-1 justify-center"
                  >
                    Shopee
                  </a>
                  <a
                    href={flute.lazadaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-100 transition-colors text-sm flex-1 text-center"
                  >
                    Lazada
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        {currentIndex + itemsPerPage < totalItems && (
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow transition"
            aria-label="Next"
          >
            <IoChevronForwardOutline size={40} />
          </button>
        )}
      </main>

      {/* Details Dialog */}
      {selectedFlute && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-light tracking-wide">
                  {selectedFlute.name}
                </h2>
                <button
                  onClick={closeDialog}
                  className="text-stone-400 hover:text-stone-600 transition"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Image Gallery */}
                <div className="relative">
                  {/* Main Image */}
                  <div className="aspect-[3/4] bg-stone-200 w-full mb-4 relative">
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition z-10"
                      aria-label="Previous image"
                    >
                      <IoChevronBackOutline size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition z-10"
                      aria-label="Next image"
                    >
                      <IoChevronForwardOutline size={20} />
                    </button>
                    <div className="absolute inset-0 bg-stone-200">
                      {/* Replace with actual image */}
                      {/* <img 
                        src={selectedFlute.images[currentImageIndex]} 
                        alt={`${selectedFlute.name} view ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <button
                        key={index}
                        onClick={() => selectImage(index)}
                        className={`flex-shrink-0 w-20 h-20 bg-stone-200 rounded-sm transition ${
                          currentImageIndex === index
                            ? 'ring-2 ring-stone-800'
                            : 'hover:opacity-80'
                        }`}
                      >
                        {/* Replace with actual thumbnail */}
                        {/* <img 
                          src={selectedFlute.images[index]} 
                          alt={`${selectedFlute.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        /> */}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h3 className="font-medium mb-2">Specifications</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-stone-500">Origin</dt>
                        <dd>{selectedFlute.details.origin}</dd>
                      </div>
                      <div>
                        <dt className="text-stone-500">Length</dt>
                        <dd>{selectedFlute.details.length}</dd>
                      </div>
                      <div>
                        <dt className="text-stone-500">Material</dt>
                        <dd>{selectedFlute.details.material}</dd>
                      </div>
                      <div>
                        <dt className="text-stone-500">Tuning</dt>
                        <dd>{selectedFlute.details.tuning}</dd>
                      </div>
                      <div>
                        <dt className="text-stone-500">Playing Style</dt>
                        <dd>{selectedFlute.details.playingStyle}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">History</h3>
                    <p className="text-stone-600 leading-relaxed">
                      {selectedFlute.details.history}
                    </p>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium">
                        {selectedFlute.price}
                      </p>
                      <p className="text-sm text-stone-500">
                        Free shipping within Philippines
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={selectedFlute.shopeeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-sm"
                      >
                        <SiShopee className="mr-2" /> Buy on Shopee
                      </a>
                      <a
                        href={selectedFlute.lazadaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-stone-300 rounded hover:bg-stone-100 transition-colors text-sm"
                      >
                        Lazada
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
