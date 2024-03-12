const sampleListings = [
  {
    title: "Arsalan",
    description: "Biryani, North Indian, Mughlai, Kebab, Rolls, Seafood",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/7/20797/7c440b99b4140cce88505e64bb690b0f_o2_featured_v2.jpg?output-format=webp",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/7/20797/a5b149a2ed8e78709f56093578862b93.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/7/20797/3249e292c0a6ad5a767c49eee411b264.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "33 min",
    price: 250,
    location: "Park Street Area, Kolkata",
  },
  {
    title: "Al Baik Fast Food Corner",
    description:
      "Biryani, Rolls, North Indian, Chinese, Kebab, Fast Food, Street Food, Roast Chicken",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/6/18560756/582a2813f08cd285f9941587f603c68f_o2_featured_v2.jpg?output-format=webp",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/6/18560756/77c5ede61b16d981c10fdf7857d4c72b.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/6/18560756/fdffe24b0e7ed0c688af077674024687.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "30 min",
    price: 250,
    location: "Bara Bazar, Kolkata",
  },
  {
    title: "Lazeez Biryani",
    description: "Biryani, North Indian",
    image:
      "https://b.zmtcdn.com/data/pictures/6/18761176/faa954598a51b5d2ead55d405a8f14b2_o2_featured_v2.jpg?output-format=webp",
    image2:
      "https://b.zmtcdn.com/data/pictures/6/18761176/15dec1edcd0ddce0f599f8ec4fb99b77.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/6/18761176/87fea71d8449b4c447a02d7a8d89e376_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    time: "17 min",
    price: 250,
    location: "Entally, Kolkata",
  },
  {
    title: "La Pino'z Pizza",
    description: "Pizza, Pasta, Italian, Fast Food",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/3/19264953/eac5d48527700f6ea1bcfbb2094456d0.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/3/19264953/66cd73ee02313747cf0a5d49cbe5d4e9.jpeg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/3/19264953/1c6409dcd5379e6c536d312eadbcd41d.jpeg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "34 min",
    price: 250,
    location: "Kankurgachi, Kolkata",
  },
  {
    title: "KFC",
    description: "Fast Food, Burger, Biryani, Desserts, Beverages",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/7/20287/b95de2b33a9e18dcdb2da7a179202dd8.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/7/20287/ab7dc239625ef34124d8a38b57a22e3a.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/7/20287/0e79614ea14113b8b3d4b48574293d00.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "28 min",
    price: 250,
    location: "Sealdah Area, Kolkata",
  },
  {
    title: "Oudh 1590",
    description:
      "North Indian, Awadhi, Mughlai, Kebab, Biryani, Desserts, Beverages.",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/3/23273/e13f6132a65233d63e9dbe6e6cda910f_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/3/23273/fa5f87bea02987f972cb94f0646b3f2a.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/3/23273/05a9cf04ae6274ef796f8a4da9745105.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "38 min",
    price: 250,
    location: "Paikpara, Kolkata",
  },

  {
    title: "WOW! Momo",
    description:
      "Momos, Fast Food, Chinese, Tibetan, Sichuan, Beverages, Desserts",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/0/21060/7a3d71e5a94b487b4b61fb5e374f6b56.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/0/21060/00f4368d2009d91fca719841bedd3ee7.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/0/21060/70649ea3624b891425b7644cf627fac0.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "30 min",
    price: 150,
    location: "Sealdah Area, Kolkata",
  },

  {
    title: "Pizza Hut",
    description: "Pizza, Pasta, Italian, Fast Food",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/7/20407/a32bffd7a846b6cfd5475ce56a6daca1.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/7/20407/4f4440d6f4e39151f92a850c27ac13f7.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/7/20407/6d4d04396c5d7f59c760fceeaed5693f.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "29 min",
    price: 100,
    location: "Esplanade, Kolkata",
  },
  {
    title: "Chowman",
    description: "Chinese, Seafood, Sichuan, Beverages",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/5/21495/8c4620d51de56bb45a8462a2baca5a96.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/5/21495/dd162b67fea9280d4af6ceb59e4968e5.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/5/21495/69a4a40468cb39f293ce0408d1b85b59.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "30 min",
    price: 150,
    location: "Hatibagan, Kolkata",
  },

  {
    title: "Domino's Pizza",
    description: "Chinese, Seafood, Sichuan, Beverages",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/2/20172/0b2779d59a54d0b06e9f9ea0a94639bb.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/2/20172/dd087133fd1d024cccaa87a6847acd22.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/2/20172/bfcc93b44c11f27f7dd2238eea0fadb1.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "33 min",
    price: 200,
    location: "Bara Bazar, Kolkata",
  },
  {
    title: "Kasturi Restaurant",
    description: "Bengali, Bangladeshi, Seafood, Biryani",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/6/21576/0d48f9b50a9f8226ca2791e4f45823b9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    image2:
      "https://b.zmtcdn.com/data/pictures/chains/6/21576/643ba187123c9659329ac96972da5917.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    image3:
      "https://b.zmtcdn.com/data/pictures/chains/6/21576/6202a54050ec8c457d628c4437fb219f.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
    time: "54 min",
    price: 200,
    location: "New Market Area, Kolkata",
  },
];

module.exports = { data: sampleListings };
