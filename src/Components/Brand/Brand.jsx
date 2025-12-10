import {
  brandImg1,
  brandImg2,
  brandImg3,
  brandImg4,
  brandImg5,
  brandImg6,
  brandImg7,
} from "../../assets/brands";

const Brand = () => {
  const brands = [
    {
      id: 1,
      image: brandImg1,
    },
    {
      id: 2,
      image: brandImg2,
    },
    {
      id: 3,
      image: brandImg3,
    },
    {
      id: 4,
      image: brandImg4,
    },
    {
      id: 5,
      image: brandImg5,
    },
    {
      id: 6,
      image: brandImg6,
    },
    {
      id: 7,
      image: brandImg7,
    },
  ];

  return (
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-7 items-center justify-center gap-5">
        {brands?.map((brand) => (
          <div key={brand?.id} className="brand_item">
            <img className="w-auto h-auto" src={brand?.image} alt="brand" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
