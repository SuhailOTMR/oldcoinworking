import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const partners = [
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/83283072d40e3962491a250bed8f4e277c62f28275d829bbd2fbfbf8c9adfd19?placeholderIfAbsent=true",
    altText: "Opinion Universe",
    rating: 5,
    gradientBackground: "linear-gradient(180deg, #384152, #FF5300)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/8474f5845a7a568cbaae6acaa7c9ac3da90da57a4aebeceaf939bab81e684e69?placeholderIfAbsent=true",
    altText: "Torox",
    rating: 5,
    gradientBackground: "linear-gradient(180deg, #384152, #9552FF)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/b3cf60a552ba0b7136936134161dfd5813e337304fdcc90e9ef27996cde73787?placeholderIfAbsent=true",
    altText: "TimeWall",
    rating: 5,
    gradientBackground: "linear-gradient(180deg, #384152, #4BB170)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/8474f5845a7a568cbaae6acaa7c9ac3da90da57a4aebeceaf939bab81e684e69?placeholderIfAbsent=true",
    altText: "Torox",
    rating: 5,
    gradientBackground: "linear-gradient(180deg, #384152, #9552FF)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/b3cf60a552ba0b7136936134161dfd5813e337304fdcc90e9ef27996cde73787?placeholderIfAbsent=true",
    altText: "TimeWall",
    rating: 4,
    gradientBackground: "linear-gradient(180deg, #384152, #4BB170)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/83283072d40e3962491a250bed8f4e277c62f28275d829bbd2fbfbf8c9adfd19?placeholderIfAbsent=true",
    altText: "Opinion Universe",
    rating: 5,
    gradientBackground: "linear-gradient(180deg, #384152, #FF5300)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/8474f5845a7a568cbaae6acaa7c9ac3da90da57a4aebeceaf939bab81e684e69?placeholderIfAbsent=true",
    altText: "Torox",
    rating: 5,
    gradientBackground: "linear-gradient(180deg, #384152, #9552FF)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/b3cf60a552ba0b7136936134161dfd5813e337304fdcc90e9ef27996cde73787?placeholderIfAbsent=true",
    altText: "TimeWall",
    rating: 4,
    gradientBackground: "linear-gradient(180deg, #384152, #4BB170)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/83283072d40e3962491a250bed8f4e277c62f28275d829bbd2fbfbf8c9adfd19?placeholderIfAbsent=true",
    altText: "Opinion Universe",
    rating: 5,
    gradientBackground: "linear-gradient(180deg, #384152, #FF5300)",
  },
  {
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/8474f5845a7a568cbaae6acaa7c9ac3da90da57a4aebeceaf939bab81e684e69?placeholderIfAbsent=true",
    altText: "Torox",
    rating: 5,
    gradientBackground: "linear-gradient(180deg, #384152, #9552FF)",
  },
];

const OfferPartners = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      />
      <section className="px-4 py-10 max-sm:p-5">
        <div className="flex justify-center mb-10">
          <h1 className="text-3xl font-bold text-white max-sm:text-2xl">
            <span>Offer </span>
            <span className="text-bg">Partners</span>
          </h1>
        </div>

        <Swiper
          dir="rtl"
          spaceBetween={10}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          className="px-2.5"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={2500}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="max-w-[150px]">
              <article
                className="flex flex-col gap-4 items-center p-5 rounded-2xl max-md:p-4 max-sm:p-2.5 cursor-pointer"
                style={{
                  background:
                    partner.gradientBackground ||
                    "linear-gradient(to bottom, #1e1e2e, black)",
                }}
              >
                <img
                  src={partner?.logoUrl}
                  alt={partner?.altText}
                  className="w-full h-auto max-w-20"
                />
                <div
                  className="flex gap-1 self-center mt-24 w-[62px] max-md:mt-10"
                  role="img"
                  aria-label={`${partner.rating} star rating`}
                >
                  {[...Array(partner.rating)].map((_, index) => (
                    <img
                      key={index}
                      src="https://cdn.builder.io/api/v1/image/assets/bcf0af37e5844f8e811df77939554071/8cd512fcf0c96dd9703bec02e723505dc9ca3abec5e173e96312b8875ce9bf16?placeholderIfAbsent=true"
                      className="object-contain shrink-0 w-2.5 aspect-[1.11]"
                      alt="Star rating icon"
                    />
                  ))}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default OfferPartners;
