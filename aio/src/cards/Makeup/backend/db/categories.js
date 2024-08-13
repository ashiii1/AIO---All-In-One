import { v4 as uuid } from "uuid";
import categoryImage1 from '../../assets/Images/skincare-2.jpg'
import categoryImage2 from '../../assets/Images/tampons.jpg'
import categoryImage3 from '../../assets/Images/makeup-img-2.jpg'
import categoryImage4 from '../../assets/Images/hair-care-img.jpg'
import categoryImage5 from '../../assets/Images/body-care-img.jpg'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Makeup",
    description:
      "Get an appealing and fresh look that lasts the whole day with our makeup products at most affordable prices!",
      img:categoryImage3
  },
  {
    _id: uuid(),
    categoryName: "Skincare",
    description:
    "Pamper your skin with our products and feel the glow!",
    img:categoryImage1
  },
  {
    _id: uuid(),
    categoryName: "MenstrualHygiene",
    description:
      "Buy Menstrual Hygiene care products at most affordable prices now.",
      img:categoryImage2
  },
  {
    _id: uuid(),
    categoryName: "Haircare",
    description:
      "Buy hair care products now on Naaricare at great deals!",
      img:categoryImage4
  },
  {
    _id: uuid(),
    categoryName: "Bodycare",
    description:
      "We bring bodycare products at best prices.",
      img:categoryImage5
  },
];
