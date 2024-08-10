import { v4 as uuid } from "uuid";
import hero1 from "../assets/images/desktop-image-hero-1.jpg";
import hero2 from "../assets/images/desktop-image-hero-2.jpg";
import hero3 from "../assets/images/desktop-image-hero-3.jpg";
import darkRoom from "../assets/images/image-about-dark.jpg";
import lightRoom from "../assets/images/image-about-light.jpg";
import LivingRoom from "../assets/images/images/family-room-with-large-screen-doors.jpg";
import LivingRoomComfortableSofa from "../assets/images/images/livingroom-rainbows.jpg";
import BedRoomForCouples from "../assets/images/images/bedroom-with-heart-pillows.jpg";
import officeFurniture from "../assets/images/images/angled-view-of-clean-desk-and-chair-setup.jpg";
import entryWay from "../assets/images/images/ladder-plant-shelf.jpg";
import kidsRoom from "../assets/images/images/minimalist-room-with-modern-art.jpg";
import bedRoom from "../assets/images/images/loftstyle-bedroom-with-throw-pillows.jpg";
import dinningRoom from "../assets/images/images/natural-wooden-dining.jpg";

export const SHOP_DATA = [
  {
    title: "Living Room",
    backgroundImage: LivingRoom,
    className: "relative col-span-2 row-[1/-1]",

    items: [
      {
        id: uuid(),
        imageUrl: LivingRoom,
        imageVariants: [LivingRoom, hero2, hero3, lightRoom, darkRoom],

        name: "Fancy chair",
        path_name: "living-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2500,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: LivingRoomComfortableSofa,
        imageVariants: [
          LivingRoomComfortableSofa,
          hero1,
          hero3,
          lightRoom,
          darkRoom,
        ],

        name: "Comfortable sofa",
        path_name: "bed-room",
        description:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        price: 1422.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: lightRoom,
        imageVariants: [lightRoom, hero1, hero2, hero3, darkRoom],

        name: "comfortable sofa",
        path_name: "kids-furniture",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 1200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: darkRoom,
        imageVariants: [darkRoom, hero1, hero2, hero3, lightRoom],

        name: "arm-less chair",
        path_name: "Dinning-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero1,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "office arm chair",
        path_name: "entryway",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2300.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: darkRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "arm-less chair",
        path_name: "Dinning-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
    ],
  },
  {
    title: "Bed Room",
    backgroundImage: bedRoom,
    className: "relative col-[3/5] row-[1/3]",

    items: [
      {
        id: uuid(),
        imageUrl: bedRoom,
        imageVariants: [bedRoom, hero2, hero3, lightRoom, darkRoom],

        name: "Fancy Bed Room",
        url: "entryway",
        description:
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        price: 2300.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: BedRoomForCouples,
        imageVariants: [BedRoomForCouples, hero2, hero3, lightRoom, darkRoom],

        name: "Bed Room for Couples",
        url: "kids-furniture",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 1200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: darkRoom,
        imageVariants: [darkRoom, hero1, hero2, hero3, lightRoom],

        name: "office arm chair",
        url: "entryway",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2300.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: darkRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "arm-less chair",
        url: "Dinning-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero1,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "Fancy chair",
        url: "living-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 300,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero2,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "outdoor arm-less chair",
        url: "bed-room",
        description:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        price: 1422.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
    ],
  },
  {
    title: "Kid's",
    backgroundImage: kidsRoom,
    className: "relative  col-[5/7] row-[1/3]",

    items: [
      {
        id: uuid(),
        imageUrl: kidsRoom,
        imageVariants: [kidsRoom, hero2, hero3, lightRoom, darkRoom],

        name: "Kid's play room",
        url: "living-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 3500,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero2,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "outdoor arm-less chair",
        url: "bed-room",
        description:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        price: 1422.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero3,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "office arm chair",
        url: "entryway",
        description:
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        price: 2300.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: lightRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "comfortable sofa",
        url: "kids-furniture",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 1200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: darkRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "arm-less chair",
        url: "Dinning-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
    ],
  },
  {
    title: "Dining Room",
    backgroundImage: dinningRoom,
    className: "relative col-[3/5] row-[3/5]",

    items: [
      {
        id: uuid(),
        imageVariants: [dinningRoom, hero2, hero3, lightRoom, darkRoom],
        imageUrl: dinningRoom,
        name: "Dinning table with chair",
        url: "living-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 3000,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero2,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "outdoor arm-less chair",
        url: "bed-room",
        description:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        price: 1422.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: lightRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "comfortable sofa",
        url: "kids-furniture",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 1200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: darkRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "arm-less chair",
        url: "Dinning-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero3,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "outdoor chair",
        url: "office-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 100,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero1,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "office arm chair",
        url: "entryway",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2300.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: darkRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "arm-less chair",
        url: "Dinning-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 2200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
    ],
  },
  {
    title: "Office",
    backgroundImage: officeFurniture,
    className: "relative col-[5/7] row-[3/5]",

    items: [
      {
        id: uuid(),
        imageUrl: officeFurniture,
        imageVariants: [officeFurniture, hero2, hero3, lightRoom, darkRoom],

        name: "clean office set up",
        url: "living-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 3000,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: hero2,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "outdoor arm-less chair",
        url: "bed-room",
        description:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        price: 1422.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: lightRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "comfortable sofa",
        url: "kids-furniture",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 1200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },

      {
        id: uuid(),
        imageUrl: hero3,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],

        name: "outdoor chair",
        url: "office-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 100,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
    ],
  },
  {
    title: "Entry Way",
    backgroundImage: entryWay,
    className: "relative col-[7/9] row-[1/-1]",

    items: [
      {
        id: uuid(),
        imageUrl: entryWay,
        imageVariants: [entryWay, hero2, hero3, lightRoom, darkRoom],
        name: "Tree pots in a shelf",
        url: "living-room",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 3500,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },

      {
        id: uuid(),
        imageUrl: hero3,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],
        name: "office arm chair",
        url: "entryway",
        description:
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        price: 2300.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: lightRoom,
        imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],
        name: "comfortable sofa",
        url: "kids-furniture",
        description:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        price: 1200.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
      {
        id: uuid(),
        imageUrl: entryWay,
        imageVariants: [entryWay, hero1, hero3, lightRoom, darkRoom],
        name: "Tree pots in a shelf",
        url: "bed-room",
        description:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        price: 1422.99,
        statusBadge: "New",
        quantity: 1,
        inCart: false,
        inWishlist: false,
      },
    ],
  },
  // {
  //   title: "Kitchen Furniture",
  //   backgroundImage: entryWay,
  //   className: "relative col-[9/11] row-[1/-1]",

  //   items: [
  //     {
  //       id: uuid(),
  //       imageUrl: entryWay,
  //       imageVariants: [entryWay, hero2, hero3, lightRoom, darkRoom],
  //       name: "Tree pots in a shelf",
  //       url: "living-room",
  //       description:
  //         "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  //       price: 3500,
  //       statusBadge: "New",
  //       quantity: 1,
  //       inCart: false,
  //       inWishlist: false,
  //     },

  //     {
  //       id: uuid(),
  //       imageUrl: hero3,
  //       imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],
  //       name: "office arm chair",
  //       url: "entryway",
  //       description:
  //         "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  //       price: 2300.99,
  //       statusBadge: "New",
  //       quantity: 1,
  //       inCart: false,
  //       inWishlist: false,
  //     },
  //     {
  //       id: uuid(),
  //       imageUrl: lightRoom,
  //       imageVariants: [hero1, hero2, hero3, lightRoom, darkRoom],
  //       name: "comfortable sofa",
  //       url: "kids-furniture",
  //       description:
  //         "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  //       price: 1200.99,
  //       statusBadge: "New",
  //       quantity: 1,
  //       inCart: false,
  //       inWishlist: false,
  //     },
  //     {
  //       id: uuid(),
  //       imageUrl: entryWay,
  //       imageVariants: [entryWay, hero1, hero3, lightRoom, darkRoom],
  //       name: "Tree pots in a shelf",
  //       url: "bed-room",
  //       description:
  //         "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  //       price: 1422.99,
  //       statusBadge: "New",
  //       quantity: 1,
  //       inCart: false,
  //       inWishlist: false,
  //     },
  //   ],
  // },
];
