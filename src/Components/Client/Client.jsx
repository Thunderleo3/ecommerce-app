import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User } from "lucide-react";

const Client = () => {
  const clientSays = [
    {
      id: 1,
      description:
        "I ordered a wooden chair and received them within two days. The quality exceeded my expectations and the support team was very responsive.",
      name: "Mark",
    },
    {
      id: 2,
      description:
        "This app made online shopping so easy. The user interface is smooth and payment was secure. Will definitely recommend it to friends!",
      name: "Marie Rose",
    },
    {
      id: 3,
      description:
        "Great variety of products and timely delivery. I especially liked the return policy — very customer-friendly!",
      name: "Austin Chan",
    },
    {
      id: 4,
      description:
        "Great variety of products and timely delivery. I especially liked the return policy — very customer-friendly!",
      name: "Robert jr.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="lg:container mx-auto ">
      <SectionTitle title="What client says about us" mb="mb-11"></SectionTitle>

      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {clientSays?.map((client, index) => (
            <div
              key={index}
              className="p-12 border-[1px] border-[#e1e1e3] rounded-lg"
            >
              <p className="text-2xl mb-4 text-[#636270] font-inter font-normal client_say_description">
                {client?.description}
              </p>
              <div className="flex items-center">
                <h4>
                  <User size="4rem" />
                </h4>
                <div>
                  <h4 className="text-2xl text-[#272343] font-inter font-medium capitalize mb-1.5">
                    {client?.name}
                  </h4>
                  <p className="text-base text-[#9a9caa] font-inter capitalize font-normal">
                    {client?.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
