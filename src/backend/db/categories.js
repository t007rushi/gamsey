import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image:
      "https://ik.imagekit.io/t007rushi/categories/xbox_CbBqdQyL_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649592335177",
    categoryName: "xbox",
    description:
      "Experience the new generation of games and entertainment with Xbox. Explore consoles, new and old Xbox games and accessories to start or add to your",
  },
  {
    _id: uuid(),
    image:
      "https://ik.imagekit.io/t007rushi/categories/ps4_U0QLkry0_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=16495923340590",
    categoryName: "ps4",
    description:
      "Incredible games & non-stop entertainment. The PS4 console, delivering awesome gaming power, incredible entertainment and vibrant HDR technology",
  },
  {
    _id: uuid(),
    image:
      "https://ik.imagekit.io/t007rushi/categories/ps5_mWTLbI7nv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649592334517",
    categoryName: "ps5",
    description:
      "(PlayStation 5) The latest Sony PlayStation introduced in November 2020. Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, the PS5 is offered in two models: with and without a 4K Blu-ray drive.",
  },
  {
    _id: uuid(),
    image:
      "https://ik.imagekit.io/t007rushi/categories/mobile_a3gf2lhKa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649592333266",
    categoryName: "mobile",
    description:
      "Mobile gaming is the most popular form of gaming in the world, overtaking both console and PC gaming. One of the reasons for mobile gaming's popularity is accessibility—nearly everyone has a smartphone, which is capable of playing games.",
  },
  {
    _id: uuid(),
    image:
      "https://ik.imagekit.io/t007rushi/categories/pc_Z_HRjquxs.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649592333683",
    categoryName: "pc",
    description:
      "A gaming computer, also known as a gaming PC, is a specialized personal computer designed for playing video games at very high standards.",
  },
  {
    _id: uuid(),
    image:
      "https://ik.imagekit.io/t007rushi/categories/nintendo_387pttuhA.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649592333409",
    categoryName: "nintendo",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
];
