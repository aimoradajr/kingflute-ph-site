import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { SiShopee } from "react-icons/si";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

function App() {
  const products = [
    {
      name: "Queenflute Bamboo Flute Key of C Natural (Brown)",
      description:
        "Soprano bamboo flute in C, handcrafted with rich sound, 2.5-octave range, and unique natural design.",
      price: "₱280.25",
      shopeeLink:
        "https://shopee.ph/Kingflute-Bamboo-flute-Key-of-C-natural-i.104261865.5934980900",
      lazadaLink:
        "https://www.lazada.com.ph/products/kingflute-bamboo-flute-key-of-c-natural-brown-i2054644-s2510262.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A2054644%253Bsrc%253AlazadaInShopSrp%253Brn%253A308ed28fcb34d40fba46e5eee07ae5f4%253Bregion%253Aph%253Bsku%253AKI120MEAA1LO0OANPH%253Bprice%253A280.25%253Bclient%253Adesktop%253Bsupplier_id%253A8826%253Bbiz_source%253Ah5_internal%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A9190%253Bitem_id%253A2054644%253Bsku_id%253A2510262%253Bshop_id%253A12412%253BtemplateInfo%253A107881_D_E%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Metro%20Manila~Makati&price=280.25&priceCompare=skuId%3A2510262%3Bsource%3Alazada-search-voucher-in-shop%3Bsn%3A308ed28fcb34d40fba46e5eee07ae5f4%3BoriginPrice%3A28025%3BdisplayPrice%3A28025%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1737066732435&ratingscore=4.830275229357798&request_id=308ed28fcb34d40fba46e5eee07ae5f4&review=218&sale=1303&search=1&spm=a2o4l.store_product.list.1&stock=1",
      images: [
        "/assets/products/plain1.png",
        "/assets/products/plain1-side.png",
        "/assets/products/plain1-nature.png",
        "/assets/products/plain1-girl.png",
      ],
      details: {
        origin: "Handcrafted, Philippines",
        length: "31.2 cm (12.3 inches)",
        diameter: "2.54 cm (1 inch)",
        material: "Bamboo and naturally dried Nito vine",
        tuning: "Key of C, covers 2.5 octaves starting from middle C",
        playingStyle: "Soprano bamboo flute",
        history:
          "This bamboo flute has been played in renowned venues like Carnegie Hall and Town Hall in NYC. Its rich, dynamic sound suits various music styles and is perfect for both beginners and professionals. Each flute is precisely hand-tuned and crafted from compostable materials, making it unique in shade and texture.",
        features: [
          "Easy to use",
          "Lightweight",
          "Suitable for all musicians",
          "Free manual and song sheet included",
          "Environmentally friendly",
        ],
      },
    },
    {
      name: "Queenflute Bamboo Flute Key of C Green Painted",
      description:
        "Soprano bamboo flute in C, beautifully painted green with a rich sound, 2.5-octave range, and unique natural design.",
      price: "₱299.99",
      shopeeLink:
        "https://shopee.ph/Kingflute-Bamboo-flute-Key-of-C-natural-i.104261865.5934980900",
      lazadaLink:
        "https://www.lazada.com.ph/products/kingflute-bamboo-flute-key-of-c-natural-brown-i2054644-s2510262.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A2054644%253Bsrc%253AlazadaInShopSrp%253Brn%253A308ed28fcb34d40fba46e5eee07ae5f4%253Bregion%253Aph%253Bsku%253AKI120MEAA1LO0OANPH%253Bprice%253A280.25%253Bclient%253Adesktop%253Bsupplier_id%253A8826%253Bbiz_source%253Ah5_internal%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A9190%253Bitem_id%253A2054644%253Bsku_id%253A2510262%253Bshop_id%253A12412%253BtemplateInfo%253A107881_D_E%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Metro%20Manila~Makati&price=280.25&priceCompare=skuId%3A2510262%3Bsource%3Alazada-search-voucher-in-shop%3Bsn%3A308ed28fcb34d40fba46e5eee07ae5f4%3BoriginPrice%3A28025%3BdisplayPrice%3A28025%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1737066732435&ratingscore=4.830275229357798&request_id=308ed28fcb34d40fba46e5eee07ae5f4&review=218&sale=1303&search=1&spm=a2o4l.store_product.list.1&stock=1",
      images: [
        "/assets/products/green1.png",
        "/assets/products/green1-side.png",
        "/assets/products/green1-nature.png",
        "/assets/products/green1-girl.png",
      ],
      details: {
        origin: "Handcrafted, Philippines",
        length: "31.2 cm (12.3 inches)",
        diameter: "2.54 cm (1 inch)",
        material: "Bamboo and naturally dried Nito vine",
        tuning: "Key of C, covers 2.5 octaves starting from middle C",
        playingStyle: "Soprano bamboo flute",
        history:
          "This green-painted bamboo flute offers a visually striking design while maintaining the rich, dynamic sound that Queenflute products are known for. Perfectly tuned and suitable for musicians of all levels, it is crafted from sustainable materials and stands out in any performance.",
        features: [
          "Beautiful green-painted finish",
          "Easy to use",
          "Lightweight",
          "Suitable for all musicians",
          "Free manual and song sheet included",
          "Environmentally friendly",
        ],
      },
    },
    {
      name: "Queenflute Bamboo Flute Key of C Blue Painted",
      description:
        "Soprano bamboo flute in C, painted with a vibrant blue finish. Offers a rich sound, 2.5-octave range, and sustainable craftsmanship.",
      price: "₱299.99",
      shopeeLink:
        "https://shopee.ph/Kingflute-Bamboo-flute-Key-of-C-natural-i.104261865.5934980900",
      lazadaLink:
        "https://www.lazada.com.ph/products/kingflute-bamboo-flute-key-of-c-natural-brown-i2054644-s2510262.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A2054644%253Bsrc%253AlazadaInShopSrp%253Brn%253A308ed28fcb34d40fba46e5eee07ae5f4%253Bregion%253Aph%253Bsku%253AKI120MEAA1LO0OANPH%253Bprice%253A280.25%253Bclient%253Adesktop%253Bsupplier_id%253A8826%253Bbiz_source%253Ah5_internal%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A9190%253Bitem_id%253A2054644%253Bsku_id%253A2510262%253Bshop_id%253A12412%253BtemplateInfo%253A107881_D_E%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Metro%20Manila~Makati&price=280.25&priceCompare=skuId%3A2510262%3Bsource%3Alazada-search-voucher-in-shop%3Bsn%3A308ed28fcb34d40fba46e5eee07ae5f4%3BoriginPrice%3A28025%3BdisplayPrice%3A28025%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1737066732435&ratingscore=4.830275229357798&request_id=308ed28fcb34d40fba46e5eee07ae5f4&review=218&sale=1303&search=1&spm=a2o4l.store_product.list.1&stock=1",
      images: [
        "/assets/products/blue1.png",
        "/assets/products/blue1-side.png",
        "/assets/products/blue1-nature.png",
        "/assets/products/blue1-girl.png",
      ],
      details: {
        origin: "Handcrafted, Philippines",
        length: "31.2 cm (12.3 inches)",
        diameter: "2.54 cm (1 inch)",
        material: "Bamboo and naturally dried Nito vine",
        tuning: "Key of C, covers 2.5 octaves starting from middle C",
        playingStyle: "Soprano bamboo flute",
        history:
          "The blue-painted bamboo flute combines elegance and functionality. Its vibrant design and excellent tuning make it ideal for both beginners and professionals.",
        features: [
          "Vibrant blue-painted finish",
          "Easy to use",
          "Lightweight",
          "Suitable for all musicians",
          "Free manual and song sheet included",
          "Environmentally friendly",
        ],
      },
    },
    {
      name: "Queenflute Micro Bamboo Flute Key of C",
      description:
        "Compact soprano bamboo flute in C, designed for portability and ease of play without compromising sound quality.",
      price: "₱199.99",
      shopeeLink:
        "https://shopee.ph/Kingflute-Bamboo-flute-Key-of-C-natural-i.104261865.5934980900",
      lazadaLink:
        "https://www.lazada.com.ph/products/kingflute-bamboo-flute-key-of-c-natural-brown-i2054644-s2510262.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A2054644%253Bsrc%253AlazadaInShopSrp%253Brn%253A308ed28fcb34d40fba46e5eee07ae5f4%253Bregion%253Aph%253Bsku%253AKI120MEAA1LO0OANPH%253Bprice%253A280.25%253Bclient%253Adesktop%253Bsupplier_id%253A8826%253Bbiz_source%253Ah5_internal%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A9190%253Bitem_id%253A2054644%253Bsku_id%253A2510262%253Bshop_id%253A12412%253BtemplateInfo%253A107881_D_E%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Metro%20Manila~Makati&price=280.25&priceCompare=skuId%3A2510262%3Bsource%3Alazada-search-voucher-in-shop%3Bsn%3A308ed28fcb34d40fba46e5eee07ae5f4%3BoriginPrice%3A28025%3BdisplayPrice%3A28025%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1737066732435&ratingscore=4.830275229357798&request_id=308ed28fcb34d40fba46e5eee07ae5f4&review=218&sale=1303&search=1&spm=a2o4l.store_product.list.1&stock=1",
      images: [
        "/assets/products/micro1.png",
        "/assets/products/micro1-side.png",
      ],
      details: {
        origin: "Handcrafted, Philippines",
        length: "20 cm (7.87 inches)",
        diameter: "1.5 cm (0.59 inches)",
        material: "Bamboo and naturally dried Nito vine",
        tuning: "Key of C, compact range with clear tones",
        playingStyle: "Soprano bamboo flute",
        history:
          "The micro bamboo flute is the ultimate portable option for flute enthusiasts. Despite its small size, it delivers clear, resonant tones.",
        features: [
          "Compact and portable",
          "Easy to use",
          "Lightweight",
          "Suitable for all musicians",
          "Free manual and song sheet included",
          "Environmentally friendly",
        ],
      },
    },
    {
      name: "Queenflute Bamboo Flute Key of C Red Painted",
      description:
        "Soprano bamboo flute in C, featuring a bold red-painted design. Delivers exceptional sound quality and eco-friendly craftsmanship.",
      price: "₱299.99",
      shopeeLink:
        "https://shopee.ph/Kingflute-Bamboo-flute-Key-of-C-natural-i.104261865.5934980900",
      lazadaLink:
        "https://www.lazada.com.ph/products/kingflute-bamboo-flute-key-of-c-natural-brown-i2054644-s2510262.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253A%253Bnid%253A2054644%253Bsrc%253AlazadaInShopSrp%253Brn%253A308ed28fcb34d40fba46e5eee07ae5f4%253Bregion%253Aph%253Bsku%253AKI120MEAA1LO0OANPH%253Bprice%253A280.25%253Bclient%253Adesktop%253Bsupplier_id%253A8826%253Bbiz_source%253Ah5_internal%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A9190%253Bitem_id%253A2054644%253Bsku_id%253A2510262%253Bshop_id%253A12412%253BtemplateInfo%253A107881_D_E%2523-1_A3_C%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Metro%20Manila~Makati&price=280.25&priceCompare=skuId%3A2510262%3Bsource%3Alazada-search-voucher-in-shop%3Bsn%3A308ed28fcb34d40fba46e5eee07ae5f4%3BoriginPrice%3A28025%3BdisplayPrice%3A28025%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A0%3Btimestamp%3A1737066732435&ratingscore=4.830275229357798&request_id=308ed28fcb34d40fba46e5eee07ae5f4&review=218&sale=1303&search=1&spm=a2o4l.store_product.list.1&stock=1",
      images: [
        "/assets/products/red1.png",
        "/assets/products/red1-side.png",
        "/assets/products/red1-nature.png",
        "/assets/products/red1-girl.png",
      ],
      details: {
        origin: "Handcrafted, Philippines",
        length: "31.2 cm (12.3 inches)",
        diameter: "2.54 cm (1 inch)",
        material: "Bamboo and naturally dried Nito vine",
        tuning: "Key of C, covers 2.5 octaves starting from middle C",
        playingStyle: "Soprano bamboo flute",
        history:
          "This red-painted bamboo flute is a bold statement piece, combining striking aesthetics with excellent sound quality. Perfect for performances and casual play.",
        features: [
          "Bold red-painted finish",
          "Easy to use",
          "Lightweight",
          "Suitable for all musicians",
          "Free manual and song sheet included",
          "Environmentally friendly",
        ],
      },
    }
  ];

  const reviews = [
    {
      photo: "/assets/reviews/review1-photo.png",
      userPhoto: "/assets/reviews/review1-user.png",
      name: "Jane Doe",
      date: "March 5, 2023",
      rating: 4,
      comment:
        "I absolutely love my bamboo flute! The sound quality is amazing, and it feels so well-crafted. I'm thrilled with my purchase!",
      product: {
        image: "/assets/products/plain1.png",
        name: "Queenflute Bamboo Flute",
        description: "Key of C Natural",
      },
    },
    {
      photo: "/assets/reviews/review2-photo.png",
      userPhoto: "/assets/reviews/review2-user.png",
      name: "Anna Smith",
      date: "March 10, 2023",
      rating: 5,
      comment:
        "My cat loves the soothing sound of this bamboo flute! It's such a joy to play, and the craftsmanship is beautiful.",
      product: {
        image: "/assets/products/green1.png",
        name: "Queenflute Bamboo Flute Green Painted",
        description: "Key of C Green",
      },
    },
    {
      photo: "/assets/reviews/review3-photo.png",
      userPhoto: "/assets/reviews/review3-user.png",
      name: "John Doe",
      date: "March 15, 2023",
      rating: 5,
      comment:
        "Even my dog enjoys listening to me play this flute! It has a great tone and is easy to use, even for a beginner like me.",
      product: {
        image: "/assets/products/blue1.png",
        name: "Queenflute Bamboo Flute Blue Painted",
        description: "Key of C Blue",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalItems = products.length;

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < totalItems ? prevIndex + 1 : prevIndex
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // dialog

  const [selectedProduct, setSelectedFlute] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openDialog = (product) => {
    setSelectedFlute(product);
    setCurrentImageIndex(0);
  };

  const closeDialog = () => {
    setSelectedFlute(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev + 1 >= selectedProduct.images.length ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev - 1 < 0 ? selectedProduct.images.length - 1 : prev - 1
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
            src="/assets/logos/logo2.png"
            alt="Queenflute Philippines Logo"
            className="mx-auto mb-0"
            style={{ width: "10rem" }}
          />

          {/* Title */}
          <h1
            className="text-2xl font-light tracking-wide"
            style={{ marginTop: "-20px" }}
          >
            Queenflute Philippines
          </h1>

          {/* Navigation Links */}
          <nav className="mt-2 space-x-9">
            <a
              href="#products"
              className="text-stone-700 hover:text-orange-500 transition"
            >
              PRODUCTS
            </a>
            <a
              href="#about"
              className="text-stone-700 hover:text-orange-500 transition"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-stone-700 hover:text-orange-500 transition"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96 text-white"
        style={{ backgroundImage: "url('/assets/bamboo-forest1.png')" }}
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

            {/* <div className="pt-4">
              <a
                href="#producs-grid"
                className="px-4 py-2 border border-stone-300 rounded hover:bg-stone-600"
              >
                Shop Now
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 relative">
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow transition"
            aria-label="Previous"
          >
            <IoChevronBackOutline size={40} />
          </button>
        )}

        {/* Flute Grid */}
        <div
          id="products-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-50 bg-stone-200 relative overflow-hidden">
                <img
                  src={product.images[0]}
                  alt="productImage"
                  className="mx-auto"
                />
              </div>
              <div className="p-4">
                <h2
                  className="font-light mb-2 cursor-pointer hover:underline"
                  onClick={() => openDialog(product)}
                >
                  {product.name}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">{product.price}</p>
                </div>
                <div className="flex space-x-2 mt-4">
                  <a
                    href={product.shopeeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-stone-300 text-stone-500 rounded hover:text-[#FF5722] hover:border-[#FF5722] transition-colors text-sm flex-1 justify-center"
                  >
                    Shopee
                  </a>
                  <a
                    href={product.lazadaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-stone-300 text-stone-500 rounded hover:text-[#1A1AFA] hover:border-[#1A1AFA] transition-colors text-sm flex-1 justify-center"
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
            className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow transition"
            aria-label="Next"
          >
            <IoChevronForwardOutline size={40} />
          </button>
        )}
      </main>

      {/* Details Dialog */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] scrollbar scrollbar-thumb-stone-600 scrollbar-track-stone-100 overflow-y-scroll">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-lg font-light tracking-wide">
                  {selectedProduct.name}
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
                  <div className="h-80 bg-stone-200 w-full mb-4 relative">
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
                    <div className="absolute inset-0 bg-stone-200 h-80">
                      <img
                        src={selectedProduct.images[currentImageIndex]}
                        alt={`${selectedProduct.name} view ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                    {selectedProduct.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => selectImage(index)}
                        className={`flex-shrink-0 w-20 h-20 bg-stone-200 rounded-sm transition ${
                          currentImageIndex === index
                            ? "ring-2 ring-stone-800"
                            : "hover:opacity-80"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${selectedProduct.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
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
                        <dd>{selectedProduct.details.origin}</dd>
                      </div>
                      <div>
                        <dt className="text-stone-500">Length</dt>
                        <dd>{selectedProduct.details.length}</dd>
                      </div>
                      <div>
                        <dt className="text-stone-500">Material</dt>
                        <dd>{selectedProduct.details.material}</dd>
                      </div>
                      <div>
                        <dt className="text-stone-500">Tuning</dt>
                        <dd>{selectedProduct.details.tuning}</dd>
                      </div>
                      <div>
                        <dt className="text-stone-500">Playing Style</dt>
                        <dd>{selectedProduct.details.playingStyle}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">History</h3>
                    <p className="text-stone-600 leading-relaxed">
                      {selectedProduct.details.history}
                    </p>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium">
                        {selectedProduct.price}
                      </p>
                      <p className="text-sm text-stone-500">
                        {/* Free shipping within Philippines */}
                      </p>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={selectedProduct.shopeeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-sm"
                      >
                        <SiShopee className="mr-2" /> Buy on Shopee
                      </a>
                      <a
                        href={selectedProduct.lazadaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-2 bg-[#1A1AFA] text-white rounded hover:bg-[#1515D1] transition-colors text-sm"
                      >
                        <PiShoppingCartSimple className="mr-2" /> Buy on Lazada
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* divider */}
      <div className="border-t border-gray-200 my-2"></div>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto py-5 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Customer Reviews
          </h2> */}
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">
            Hear what our customers have to say about our products and their
            experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                {/* Customer's Captured Photo */}
                <div className="mb-4">
                  <img
                    src={review.photo}
                    alt="Customer's captured photo"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4 mb-4 px-6">
                  <img
                    src={review.userPhoto}
                    alt={`${review.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-4 px-6">
                  {Array(5)
                    .fill(0)
                    .map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-5 h-5 ${
                          starIndex < review.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.716 5.29h5.557c.969 0 1.371 1.24.588 1.81l-4.504 3.276 1.716 5.29c.3.921-.755 1.688-1.54 1.11L10 15.347l-4.504 3.276c-.785.578-1.838-.189-1.54-1.11l1.716-5.29-4.504-3.276c-.784-.57-.38-1.81.588-1.81h5.557l1.716-5.29z" />
                      </svg>
                    ))}
                </div>

                {/* Review Comment */}
                <p className="text-gray-600 mb-4 px-6 text-sm">{review.comment}</p>

                {/* Purchased Product */}
                <div className="flex items-center space-x-4 px-6 pb-6">
                  <img
                    src={review.product.image}
                    alt={`${review.product.name}`}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {review.product.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {review.product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Outreach */}
      <section className="w-full mt-4 pb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Image 1 */}
          <div className="relative">
            <img
              src="/assets/activities/activity1.png"
              alt="School Outreach Program"
              className="w-full h-[300px] md:h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end justify-center">
              <p className="text-white px-4 py-4 text-center">
                Teaching students in rural areas how to play the bamboo flute and
                fostering a love for music.
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <img
              src="/assets/activities/activity2.png"
              alt="Community Workshop"
              className="w-full h-[300px] md:h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end justify-center">
              <p className="text-white px-4 py-4 text-center">
                Conducting free bamboo flute workshops to empower communities and
                promote music education.
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative">
            <img
              src="/assets/activities/activity3.png"
              alt="Youth Music Program"
              className="w-full h-[300px] md:h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end justify-center">
              <p className="text-white px-4 py-4 text-center">
                Partnering with schools to provide free instruments and lessons to
                underprivileged youth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* divider */}
      <div className="border-t border-gray-200 mt-6"></div>
      
      {/* Company */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          {/* <h2 className="text-xl font-medium text-center text-gray-800 mb-6">Shipping Anywhere in the Philippines</h2> */}

          {/* Images Row */}
          <div className="flex justify-center space-x-4 mb-8">
            {/* Office Photo */}
            <div className="">
              <img
                src="/assets/activities/activity3.png"
                alt="Office"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </div>
          </div>

          {/* Company Info */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800">Queenflute Philippines Inc. Since 1981</h3>
            <p className="text-gray-500 mb-4 text-sm">
              Office Address: 123 Bamboo Lane, Craftsville, Philippines
            </p>
            <p className="text-gray-700 mb-4 text-sm">
              We warmly invite you to visit us or explore our collection online. Our handcrafted
              bamboo flutes are a perfect blend of tradition and artistry. Whether you're a
              professional musician or a beginner, we have something for you!
            </p>
            {/* <p className="text-gray-700 text-sm">
              Feel free to contact us or drop by our office. We’re excited to share the joy of
              music with you!
            </p> */}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="hidden py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Have questions or feedback? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 pt-8 pb-5">
        <div className="container mx-auto px-6">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Get in Touch */}
            <div class="text-center">
              <h3 className="font-medium text-gray-700 mb-2 font-sans">Get in Touch</h3>
              <a href="#contact" className="text-sm text-gray-600 hover:underline">
                Contact Us
              </a>
            </div>

            {/* Customer Care */}
            <div class="text-center">
              <h3 className="font-medium text-gray-700 mb-2 font-sans">Customer Care</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:underline">
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div class="text-center">
              <h3 className="font-medium text-gray-700 mb-2 font-sans">Products</h3>
              <a href="#products" className="text-gray-600 hover:underline text-sm">
                View All Flutes
              </a>
            </div>

            {/* Follow Us */}
            <div class="text-center">
              <h3 className="font-medium text-gray-700 mb-4 font-sans">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                  <FaFacebookF className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition">
                  <FaTiktok className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-9">
            © 2025 QueenFlute. All rights reserved.
          </p>
        </div>
      </footer>


    </div>
  );
}

export default App;
