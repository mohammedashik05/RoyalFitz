const products = [
  {
    name: "Watch Model 1",
    price: 1999,
    category: "watch",
    rating: 4.3,
    description:
      "Watch Model 1 combines elegance with precise timekeeping for any occasion.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323865/royalfitz_products/watch/j2kwhmb0zzhqfvurdyi00.jpg",
  },
  {
    name: "Watch Model 2",
    price: 2099,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 2 features a sleek design with durable materials for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323875/royalfitz_products/watch/e7wlflhcwwdy1otgaofuo.jpg",
  },
  {
    name: "Watch Model 3",
    price: 2199,
    category: "watch",
    rating: 4.1,
    description:
      "Watch Model 3 offers precision and style for both casual and formal looks.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323876/royalfitz_products/watch/ibuh8ln8kk4fu2mwbq0a9.jpg",
  },
  {
    name: "Watch Model 4",
    price: 2299,
    category: "watch",
    rating: 4.0,
    description:
      "Watch Model 4 is designed with a modern aesthetic and high-quality craftsmanship.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323877/royalfitz_products/watch/gcmym0s4ssdice0tlv0vw.jpg",
  },
  {
        name: "Watch Model 5",
    price: 2399,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 5 combines a classic look with robust functionality for daily use.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323878/royalfitz_products/watch/qv0tmpqacc9xfeoqg9kxy.jpg",
  },
  {
    
    name: "Watch Model 6",
    price: 2499,
    category: "watch",
    rating: 4.3,
    description:
      "Watch Model 6 features a polished finish and reliable movement for all-day wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323879/royalfitz_products/watch/qzexyhefqqsb08ct2xz9r.jpg",
  },
  {
  
    name: "Watch Model 7",
    price: 2599,
    category: "watch",
    rating: 4.1,
    description:
      "Watch Model 7 delivers a stylish design with premium materials and comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323881/royalfitz_products/watch/jwsbytis991gjldcpn9nz.jpg",
  },
  {
    
    name: "Watch Model 8",
    price: 2699,
    category: "watch",
    rating: 4.0,
    description:
      "Watch Model 8 offers a sophisticated look perfect for formal and casual wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323882/royalfitz_products/watch/beftvyxfttb7hd5jm8kf4.jpg",
  },
  {
    
    name: "Watch Model 9",
    price: 2799,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 9 combines precision engineering with a modern aesthetic.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323883/royalfitz_products/watch/nva3ldpl009zislqny5hg.jpg",
  },
  {
    
    name: "Watch Model 10",
    price: 2899,
    category: "watch",
    rating: 4.3,
    description:
      "Watch Model 10 features an elegant design with superior craftsmanship.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323867/royalfitz_products/watch/x29bkilyyavp6kf2eeq2y.jpg",
  },
  {
    
    name: "Watch Model 11",
    price: 2999,
    category: "watch",
    rating: 4.1,
    description:
      "Watch Model 11 ensures both style and durability with its premium design.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323868/royalfitz_products/watch/ic1ghj0445hspojmwbtix.jpg",
  },
  {
    
    name: "Watch Model 12",
    price: 3099,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 12 is perfect for those seeking modern aesthetics and functionality.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323870/royalfitz_products/watch/qpmkmxm33datghiceghsn.jpg",
  },
  {
    
    name: "Watch Model 13",
    price: 3199,
    category: "watch",
    rating: 4.3,
    description:
      "Watch Model 13 combines elegance, comfort, and high-quality materials.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323871/royalfitz_products/watch/bi21vfchhfcsqgmtvzeon.jpg",
  },
  {
    
    name: "Watch Model 14",
    price: 3299,
    category: "watch",
    rating: 4.1,
    description:
      "Watch Model 14 offers premium quality with a stylish modern look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323872/royalfitz_products/watch/kpe6eiwllyuqsu7jdzcse.jpg",
  },
  {
    
    name: "Watch Model 15",
    price: 3399,
    category: "watch",
    rating: 4.2,
    description:
      "Watch Model 15 is designed for those who value style and precision.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323873/royalfitz_products/watch/ypxrxswrrmowoe0cvocoi.jpg",
  },

  {
    
    name: "Shoe Model 1",
    price: 1999,
    category: "shoe",
    rating: 4.2,
    description:
      "Shoe Model 1 combines style and comfort, perfect for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323782/royalfitz_products/shoe/nw56xcovxu66f0xnltynu.jpg",
  },
  {
    
    name: "Shoe Model 2",
    price: 2049,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 2 offers a sleek design with durable material for long-lasting use.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323794/royalfitz_products/shoe/zhgkyhwhwettihzc1gp0m.jpg",
  },
  {
    
    name: "Shoe Model 3",
    price: 2099,
    category: "shoe",
    rating: 4.3,
    description: "Shoe Model 3 provides ultimate comfort with modern styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323800/royalfitz_products/shoe/rw4nwctyiwmm0kovvqf8y.jpg",
  },
  {
    
    name: "Shoe Model 4",
    price: 2149,
    category: "shoe",
    rating: 4.0,
    description:
      "Shoe Model 4 features premium craftsmanship and a versatile look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323801/royalfitz_products/shoe/a0arxhonyp11lvyj7ng9c.jpg",
  },
  {
    name: "Shoe Model 5",
    price: 2199,
    category: "shoe",
    rating: 4.2,
    description:
      "Shoe Model 5 offers a combination of elegance and durability.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323802/royalfitz_products/shoe/olbk22xewtmm5lqje6ct0.jpg",
  },
  {
    name: "Shoe Model 6",
    price: 2249,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 6 is perfect for casual and semi-formal occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323804/royalfitz_products/shoe/kxwfav4qzwbbtpaxkyq8x.jpg",
  },
  {
    name: "Shoe Model 7",
    price: 2299,
    category: "shoe",
    rating: 4.3,
    description: "Shoe Model 7 delivers a modern fit with exceptional comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323805/royalfitz_products/shoe/hibcwrvjexyybszk0ji7k.jpg",
  },
  {
    name: "Shoe Model 8",
    price: 2349,
    category: "shoe",
    rating: 4.2,
    description: "Shoe Model 8 combines sporty style with all-day wearability.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323806/royalfitz_products/shoe/wa2wjroxhszziuorkjgqf.jpg",
  },
  {
    name: "Shoe Model 9",
    price: 2399,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 9 offers premium grip and style for versatile use.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323807/royalfitz_products/shoe/zdxkyysplzttmzbbfwbqz.jpg",
  },
  {
    name: "Shoe Model 10",
    price: 2449,
    category: "shoe",
    rating: 4.3,
    description: "Shoe Model 10 provides a bold design and maximum comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323783/royalfitz_products/shoe/bmk2k1dnvllwmfejvsoox.jpg",
  },
  {
    name: "Shoe Model 11",
    price: 2499,
    category: "shoe",
    rating: 4.2,
    description:
      "Shoe Model 11 combines casual elegance with durable materials.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323785/royalfitz_products/shoe/bu1uhucj2zzwnloiky5f1.jpg",
  },
  {
    name: "Shoe Model 12",
    price: 2549,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 12 offers sleek design and reliable support for long wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323786/royalfitz_products/shoe/cgiucfxuhaabgqegmyxdk.jpg",
  },
  {
    name: "Shoe Model 13",
    price: 2599,
    category: "shoe",
    rating: 4.3,
    description:
      "Shoe Model 13 is designed for trendy styling and all-day comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323787/royalfitz_products/shoe/yl9sdqtjbkkeuu1sdxkmb.jpg",
  },
  {
    name: "Shoe Model 14",
    price: 2649,
    category: "shoe",
    rating: 4.2,
    description:
      "Shoe Model 14 blends sporty and casual design for versatile looks.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323788/royalfitz_products/shoe/owxaaaarvrrcsft9eif5g.jpg",
  },
  {
    name: "Shoe Model 15",
    price: 2699,
    category: "shoe",
    rating: 4.1,
    description:
      "Shoe Model 15 is made with high-quality materials for premium feel.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323789/royalfitz_products/shoe/agmliaw8lllussxdthawd.jpg",
  },
  {
    name: "Shirt Model 1",
    price: 949,
    category: "shirt",
    rating: 4.1,
    description:
      "Shirt Model 1 is crafted with premium fabric for comfort and style.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323614/royalfitz_products/shirt/ucsauqwgww4fzwsl9bveb.jpg",
  },
 {
    name: "Shirt Model 2",
    price: 999,
    category: "shirt",
    rating: 4.0,
    description:
      "Shirt Model 2 blends casual and formal wear with a perfect fit.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323624/royalfitz_products/shirt/j0loaqjrmmgl4vexijwmt.jpg",
},
{
    name: "Shirt Model 3",
    price: 1049,
    category: "shirt",
    rating: 4.2,
    description:
      "Shirt Model 3 offers elegant design and comfortable fabric for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323625/royalfitz_products/shirt/osjegpcuiikpounxa0v9b.jpg",
},
{
    name: "Shirt Model 4",
    price: 1099,
    category: "shirt",
    rating: 4.3,
    description:
      "Shirt Model 4 is perfect for office and casual outings with stylish appeal.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323626/royalfitz_products/shirt/couwz8hlookyxd5zfid7t.jpg",
},
{
    name: "Shirt Model 5",
    price: 1149,
    category: "shirt",
    rating: 4.1,
    description: "Shirt Model 5 combines classic patterns with modern styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323628/royalfitz_products/shirt/hbgiwvfveebuvurl2d5kk.jpg",
},
{
    name: "Shirt Model 6",
    price: 1199,
    category: "shirt",
    rating: 4.0,
    description:
      "Shirt Model 6 is made from soft, breathable fabric for all-day comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323629/royalfitz_products/shirt/g3wlsxrnxxivxlqjmk6fu.jpg",
},
{
    name: "Shirt Model 7",
    price: 1249,
    category: "shirt",
    rating: 4.2,
    description:
      "Shirt Model 7 features a sleek design suitable for formal and casual occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323630/royalfitz_products/shirt/gqvdcmdzee2ta9x6dyss8.jpg",
},
{
    name: "Shirt Model 8",
    price: 1299,
    category: "shirt",
    rating: 4.3,
    description:
      "Shirt Model 8 is stylish and versatile, perfect for layering or standalone wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323631/royalfitz_products/shirt/snfwiy3tzzufpktfwgifq.jpg",
},
{
    name: "Shirt Model 9",
    price: 1349,
    category: "shirt",
    rating: 4.1,
    description:
      "Shirt Model 9 offers comfort, elegance, and modern design for all occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323633/royalfitz_products/shirt/ylu6eiefgg0wbgjxzkitj.jpg",
},
{
    name: "Shirt Model 10",
    price: 1399,
    category: "shirt",
    rating: 4.2,
    description:
      "Shirt Model 10 is crafted for a perfect fit and premium look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323615/royalfitz_products/shirt/am1l5op33ma29vzmovbu9.jpg",
},
{
    name: "Shirt Model 11",
    price: 1449,
    category: "shirt",
    rating: 4.0,
    description:
      "Shirt Model 11 is designed for a refined look with breathable material.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323616/royalfitz_products/shirt/susqbf0ggfhbk48qinsla.jpg",
},
{
    name: "Shirt Model 12",
    price: 1499,
    category: "shirt",
    rating: 4.3,
    description:
      "Shirt Model 12 features a sharp cut and smooth fabric for premium styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323617/royalfitz_products/shirt/oaix08qaadhp7kibf7jup.jpg",
},
{
    name: "Shirt Model 13",
    price: 1549,
    category: "shirt",
    rating: 4.2,
    description: "Shirt Model 13 combines classic style with modern comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323619/royalfitz_products/shirt/zox3vbvnnldvliwo3rkuv.jpg",
},
{
    name: "Shirt Model 14",
    price: 1599,
    category: "shirt",
    rating: 4.1,
    description:
      "Shirt Model 14 is made for everyday wear with premium fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323620/royalfitz_products/shirt/niouxqaccxgkkfztqkvdd.jpg",
},
{
    name: "Shirt Model 15",
    price: 1649,
    category: "shirt",
    rating: 4.3,
    description:
      "Shirt Model 15 provides a stylish and durable finish for daily use.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323621/royalfitz_products/shirt/i9sddyjssnqrupiuwqnnh.jpg",
},
{
    name: "Pants Model 1",
    price: 1049,
    category: "pants",
    rating: 3.6,
    description:
      "Pants Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323590/royalfitz_products/pant/zleyy3a3tkcrxrdrdz6gi.jpg",
},

  {
    name: "Pants Model 2",
    price: 1099,
    category: "pants",
    rating: 3.7,
    description:
      "Pants Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323604/royalfitz_products/pant/f2aplykg3ipi8u82om7k.jpg",
},
{
    name: "Pants Model 3",
    price: 1149,
    category: "pants",
    rating: 3.8,
    description:
      "Pants Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323605/royalfitz_products/pant/fdt19u1aflwytgg6a2hz.jpg",
},
{
    name: "Pants Model 4",
    price: 1199,
    category: "pants",
    rating: 3.9,
    description:
      "Pants Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323606/royalfitz_products/pant/yznjqg54gzttahhfl1pjd.jpg",
},
{
    name: "Pants Model 5",
    price: 1249,
    category: "pants",
    rating: 3.5,
    description:
      "Pants Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323607/royalfitz_products/pant/uz3p7ghojoyynw4qsrbqp.jpg",
},
{
    name: "Pants Model 6",
    price: 1299,
    category: "pants",
    rating: 3.6,
    description:
      "Pants Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323608/royalfitz_products/pant/xcdwqnz5rouu3xl2fivgk.jpg",
},
{
    name: "Pants Model 7",
    price: 1349,
    category: "pants",
    rating: 3.7,
    description:
      "Pants Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323609/royalfitz_products/pant/mgqzcircu0rrzzo9sgwlo.jpg",
},
{
    name: "Pants Model 8",
    price: 1399,
    category: "pants",
    rating: 3.8,
    description:
      "Pants Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323611/royalfitz_products/pant/qozdcsaun1rrh0qih5cza.jpg",
},
{
    name: "Pants Model 9",
    price: 1449,
    category: "pants",
    rating: 3.9,
    description:
      "Pants Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323612/royalfitz_products/pant/hfhtmnb77grr81tzd0757.jpg",
},
{
    name: "Pants Model 10",
    price: 1499,
    category: "pants",
    rating: 3.5,
    description:
      "Pants Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323593/royalfitz_products/pant/hvbbugcospqezznqhlkjp.jpg",
},
{
    name: "Pants Model 11",
    price: 1549,
    category: "pants",
    rating: 3.6,
    description:
      "Pants Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323594/royalfitz_products/pant/kbsskv7hwpe046pi8cw7o.jpg",
},
{
    name: "Pants Model 12",
    price: 1599,
    category: "pants",
    rating: 3.7,
    description:
      "Pants Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323596/royalfitz_products/pant/cqnnxdmmaswxdmmaswgaveespbbu.jpg",
},
{
    name: "Pants Model 13",
    price: 1649,
    category: "pants",
    rating: 3.8,
    description:
      "Pants Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323597/royalfitz_products/pant/a6eym0r1fbdythxyo6ub.jpg",
},
{
    name: "Pants Model 14",
    price: 1699,
    category: "pants",
    rating: 3.9,
    description:
      "Pants Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323598/royalfitz_products/pant/v2g6cihc4mgc2qiebf1g.jpg",
},
{
    name: "Pants Model 15",
    price: 1749,
    category: "pants",
    rating: 3.5,
    description:
      "Pants Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323599/royalfitz_products/pant/su2ojgfdxgwrxocyey5s.jpg",
},
{
    name: "Jumpsuit Model 1",
    price: 1549,
    category: "jumpsuit",
    rating: 4.1,
    description:
      "Jumpsuit Model 1 combines comfort with elegance, perfect for casual and semi-formal occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323571/royalfitz_products/jumpssuits/siwvihtrjcgnbbxspfhp.jpg",
},
{
    name: "Jumpsuit Model 2",
    price: 1599,
    category: "jumpsuit",
    rating: 4.0,
    description:
      "Jumpsuit Model 2 is crafted with breathable fabric and stylish cuts for all-day wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323579/royalfitz_products/jumpssuits/aalqh8eptphyq4fuy2va.jpg",
},

 {
    name: "Jumpsuit Model 3",
    price: 1649,
    category: "jumpsuit",
    rating: 4.2,
    description:
      "Jumpsuit Model 3 offers a modern fit and versatile look that can be dressed up or down.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323580/royalfitz_products/jumpssuits/wemzfga9rreehoinlrnu.jpg",
},
{
    name: "Jumpsuit Model 4",
    price: 1699,
    category: "jumpsuit",
    rating: 4.3,
    description:
      "Jumpsuit Model 4 features premium stitching and sleek design for a chic look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323581/royalfitz_products/jumpssuits/g22fhjcqxgb3xpgtqieq.jpg",
},
{
    name: "Jumpsuit Model 5",
    price: 1749,
    category: "jumpsuit",
    rating: 4.1,
    description:
      "Jumpsuit Model 5 is stylish, durable, and crafted with attention to detail.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323582/royalfitz_products/jumpssuits/xienhrobvbne7jmiqwfs.jpg",
},
{
    name: "Jumpsuit Model 6",
    price: 1799,
    category: "jumpsuit",
    rating: 4.0,
    description:
      "Jumpsuit Model 6 is made from high-quality materials offering both comfort and flexibility.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323583/royalfitz_products/jumpssuits/pqzzpyg10xghl8msbrws.jpg",
},
{
    name: "Jumpsuit Model 7",
    price: 1849,
    category: "jumpsuit",
    rating: 4.2,
    description:
      "Jumpsuit Model 7 gives a flattering fit with a trendy design to suit any outing.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323585/royalfitz_products/jumpssuits/nkhfptjwaiolwgzggqkv.jpg",
},
{
    name: "Jumpsuit Model 8",
    price: 1899,
    category: "jumpsuit",
    rating: 4.3,
    description:
      "Jumpsuit Model 8 is perfect for casual wear, blending fashion and ease.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323586/royalfitz_products/jumpssuits/bqukuk6upw9x98gqteic.jpg",
},
{
    name: "Jumpsuit Model 9",
    price: 1949,
    category: "jumpsuit",
    rating: 4.1,
    description: "Jumpsuit Model 9 ensures both comfort and modern appeal.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323587/royalfitz_products/jumpssuits/bz3zttnnttu2oexho2qy.jpg",
},
{
    name: "Jumpsuit Model 10",
    price: 1999,
    category: "jumpsuit",
    rating: 4.2,
    description:
      "Jumpsuit Model 10 is sleek and practical, ideal for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323572/royalfitz_products/jumppsuits/kapav44rdpcqtvymapji.jpg",
},
{
    name: "Jumpsuit Model 11",
    price: 2049,
    category: "jumpsuit",
    rating: 4.0,
    description:
      "Jumpsuit Model 11 delivers unmatched quality and comfort for long-lasting wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323573/royalfitz_products/jumppsuits/rmimjkbxapvknqcvg4ok.jpg",
},
{
    name: "Jumpsuit Model 12",
    price: 2099,
    category: "jumpsuit",
    rating: 4.3,
    description:
      "Jumpsuit Model 12 is designed for a bold yet sophisticated look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323574/royalfitz_products/jumppsuits/ovyvdspew3aofhbar1yn.jpg",
},
{
    name: "Jumpsuit Model 13",
    price: 2149,
    category: "jumpsuit",
    rating: 4.2,
    description:
      "Jumpsuit Model 13 provides the perfect combination of elegance and simplicity.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323575/royalfitz_products/jumppsuits/wdhk4e7873pkcwrcpbze.jpg",
},
{
    name: "Jumpsuit Model 14",
    price: 2199,
    category: "jumpsuit",
    rating: 4.1,
    description:
      "Jumpsuit Model 14 offers durable quality and fashionable design.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323576/royalfitz_products/jumppsuits/zpwwtcyeucvn7pr5wt8n.jpg",
},
{
    name: "Jumpsuit Model 15",
    price: 2249,
    category: "jumpsuit",
    rating: 4.3,
    description: "Jumpsuit Model 15 is made for ultimate comfort",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323578/royalfitz_products/jumppsuits/njs0lnzfbnawkjmxma0o.jpg",
},
{
    name: "Suit Model 1",
    price: 4999,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 1 is crafted with premium fabric and a modern cut for elegance.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323828/royalfitz_products/suit/ytxo9hyxnhnnhrv5flm8v.jpg",
},
{
    name: "Suit Model 2",
    price: 5099,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 2 combines style and comfort, perfect for formal occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323837/royalfitz_products/suit/nqrs6inisqqqtepu6zsn2.jpg",
},
{
    name: "Suit Model 3",
    price: 5199,
    category: "suit",
    rating: 4.6,
    description:
      "Suit Model 3 features tailored design and premium quality stitching.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323838/royalfitz_products/suit/lhml6dqwqsqq1vfmgus86.jpg",
},
{
    name: "Suit Model 4",
    price: 5299,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 4 delivers elegance and comfort with modern tailoring.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323839/royalfitz_products/suit/lhur19qneoffz2mydw2r0.jpg",
},
{
    name: "Suit Model 5",
    price: 5399,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 5 combines classic design with premium fabric for sophistication.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323840/royalfitz_products/suit/xs5scpwmjhssx7h0cap5x.jpg",
},
  {
    name: "Suit Model 5",
    price: 5399,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 5 combines classic design with premium fabric for sophistication.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323840/royalfitz_products/suit/xs5scpwmjhssx7h0cap5x.jpg",
  },
  {
    name: "Suit Model 6",
    price: 5499,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 6 offers a modern cut with elegant finishing details.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323842/royalfitz_products/suit/iamcmvddoyjjwaws1r4lo.jpg",
  },
  {
    name: "Suit Model 7",
    price: 5599,
    category: "suit",
    rating: 4.6,
    description:
      "Suit Model 7 is tailored for style, comfort, and high-end occasions.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323843/royalfitz_products/suit/olgmgu05kcoova3p4bece.jpg",
  },
  {
    name: "Suit Model 8",
    price: 5699,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 8 features a sleek modern design with premium quality fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323844/royalfitz_products/suit/xoxemn5err33fpsyk3nln.jpg",
  },
  {
    name: "Suit Model 9",
    price: 5799,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 9 provides elegance and comfort for formal events.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323845/royalfitz_products/suit/fcwgluwm0g005m6m7djuq.jpg",
  },
  {
    name: "Suit Model 10",
    price: 5899,
    category: "suit",
    rating: 4.6,
    description:
      "Suit Model 10 combines timeless design with contemporary tailoring.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323830/royalfitz_products/suit/ow5q1qunkjjwbkkur2h1i.jpg",
  },
  {
    name: "Suit Model 11",
    price: 5999,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 11 is designed for a perfect fit and premium styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323831/royalfitz_products/suit/vejmzqoeq11atqw9uqqfu.jpg",
  },
  {
    name: "Suit Model 12",
    price: 6099,
    category: "suit",
    rating: 4.4,
    description:
      "Suit Model 12 offers refined tailoring and high-quality fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323832/royalfitz_products/suit/itjoxkskwkkjiwip9koeg.jpg",
  },
  {
    name: "Suit Model 13",
    price: 6199,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 13 combines elegant design with comfort and premium fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323833/royalfitz_products/suit/hnv0b69bm44n5essixlfr.jpg",
  },
  {
    name: "Suit Model 14",
    price: 6299,
    category: "suit",
    rating: 4.6,
    description:
      "Suit Model 14 features modern tailoring with a luxurious finish.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323834/royalfitz_products/suit/w8ixcvpwidduickrgp3jk.jpg",
  },
  {
    name: "Suit Model 15",
    price: 6399,
    category: "suit",
    rating: 4.5,
    description:
      "Suit Model 15 provides a premium look with classic design elements.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323836/royalfitz_products/suit/h4egsc1rraacmljchydlh.jpg",
  },
  {
    name: "Shorts Model 1",
    price: 699,
    category: "shorts",
    rating: 3.8,
    description:
      "Shorts Model 1 is crafted for comfort and style, perfect for casual outings.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323809/royalfitz_products/shorts/ivjq4mcck0nwhldluaysm.jpg",
  },
  {
    name: "Shorts Model 2",
    price: 749,
    category: "shorts",
    rating: 3.9,
    description:
      "Shorts Model 2 offers a relaxed fit with a modern design for everyday wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323817/royalfitz_products/shorts/ftbdfcaandnaeamm3p8ij.jpg",
  },
  {
    name: "Shorts Model 3",
    price: 799,
    category: "shorts",
    rating: 3.7,
    description:
      "Shorts Model 3 combines lightweight material with a stylish look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323819/royalfitz_products/shorts/ne4qzohhm6tlibgikpkns.jpg",
  },
  {
    name: "Shorts Model 4",
    price: 849,
    category: "shorts",
    rating: 3.8,
    description: "Shorts Model 4 ensures maximum comfort with a trendy design.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323821/royalfitz_products/shorts/iwqbopiidufmqqkhb0agz.jpg",
  },
  {
    name: "Shorts Model 5",
    price: 899,
    category: "shorts",
    rating: 3.9,
    description:
      "Shorts Model 5 is designed with attention to detail for a perfect casual look.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323822/royalfitz_products/shorts/izjthymmdaexuuvb7ktya.jpg",
  },
  {
    name: "Shorts Model 6",
    price: 949,
    category: "shorts",
    rating: 4.0,
    description:
      "Shorts Model 6 combines style and functionality for daily wear.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323824/royalfitz_products/shorts/dffrvljjk3sidfugzk415.jpg",
  },
  {
    name: "Shorts Model 7",
    price: 999,
    category: "shorts",
    rating: 3.7,
    description:
      "Shorts Model 7 offers a contemporary look with superior comfort.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323825/royalfitz_products/shorts/v1jyqvkkpdraasehstbey.jpg",
  },
  {
    name: "Shorts Model 8",
    price: 1049,
    category: "shorts",
    rating: 3.8,
    description:
      "Shorts Model 8 is perfect for summer outings with a breathable fabric.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323826/royalfitz_products/shorts/mn444uoosorfopyy6cqoq.jpg",
  },
  {
    name: "Shorts Model 9",
    price: 1099,
    category: "shorts",
    rating: 3.9,
    description:
      "Shorts Model 9 combines lightweight comfort with modern styling.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323827/royalfitz_products/shorts/zb5qrbllbsz6bvzcgb8zc.jpg",
  },
  {
    name: "Shorts Model 10",
    price: 1149,
    category: "shorts",
    rating: 4.0,
    description:
      "Shorts Model 10 is designed to give you a stylish and comfortable experience.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323810/royalfitz_products/shorts/zu0awkkn2vco0lowd08xi.jpg",
  },
  {
    name: "Shorts Model 11",
    price: 1199,
    category: "shorts",
    rating: 3.8,
    description:
      "Shorts Model 11 features a perfect blend of comfort and style.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323811/royalfitz_products/shorts/fzvrhggzgo2w23gsixvga.jpg",
  },
  {
    name: "Shorts Model 12",
    price: 1249,
    category: "shorts",
    rating: 3.9,
    description: "Shorts Model 12 is ideal for casual and active lifestyles.",
    image:
      "https://res.cloudinary.com/dwostjayu/image/upload/v1761323812/royalfitz_products/shorts/zz76rllxyn509r8qwhte9.jpg",
  },
  {
  name: "Shorts Model 13",
  price: 1299,
  category: "shorts",
  rating: 4.0,
  description: "Shorts Model 13 offers a trendy look with maximum comfort.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323814/royalfitz_products/shorts/laa8mpp39zmwxak8vccwu.jpg",
},
{
  name: "Shorts Model 14",
  price: 1349,
  category: "shorts",
  rating: 3.7,
  description:
    "Shorts Model 14 combines modern styling with durable material.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323815/royalfitz_products/shorts/xvxyt88mc0hnwd4h6c8cb.jpg",
},
{
  name: "Shorts Model 15",
  price: 1399,
  category: "shorts",
  rating: 3.8,
  description:
    "Shorts Model 15 ensures both comfort and style for everyday wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323816/royalfitz_products/shorts/ixfr1zz5wkpbqnziuqwax.jpg",
},

{
  name: "Belt Model 1",
  price: 599,
  category: "belt",
  rating: 4.2,
  description:
    "Belt Model 1 is crafted from premium leather, offering durability and a sleek look to elevate your outfit.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323697/royalfitz_products/belt/thofie8jlvuugdfptznam.jpg",
},
{
  name: "Belt Model 2",
  price: 649,
  category: "belt",
  rating: 4.5,
  description:
    "Belt Model 2 combines elegance and strength, perfect for both casual and formal wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323706/royalfitz_products/belt/emrkeemunjxxndqqqyhik.jpg",
},
{
  name: "Belt Model 3",
  price: 699,
  category: "belt",
  rating: 4.1,
  description:
    "Belt Model 3 is designed with a modern buckle style and long-lasting comfort.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323707/royalfitz_products/belt/w2m5ihicdz77y8yqumpg6.jpg",
},
{
  name: "Belt Model 4",
  price: 749,
  category: "belt",
  rating: 3.9,
  description:
    "Belt Model 4 offers a bold statement with its stylish design and premium material.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323709/royalfitz_products/belt/js4fw97ouahhou5vu4j0l.jpg",
},
{
  name: "Belt Model 5",
  price: 799,
  category: "belt",
  rating: 4.3,
  description:
    "Belt Model 5 features a refined design and strong durability for long-term use.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323710/royalfitz_products/belt/jcu5nztr0p33ke0112lrd.jpg",
},
{
  name: "Belt Model 6",
  price: 849,
  category: "belt",
  rating: 4.4,
  description:
    "Belt Model 6 adds sophistication to any look with its polished finish and versatile design.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323711/royalfitz_products/belt/z9jvb5ejydppsxxjnqpg9.jpg",
},
{
  name: "Belt Model 7",
  price: 899,
  category: "belt",
  rating: 4.0,
  description:
    "Belt Model 7 is lightweight yet durable, making it perfect for everyday wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323713/royalfitz_products/belt/ndugefyxtqjj4dsiepvk6.jpg",
},
{
  name: "Belt Model 8",
  price: 949,
  category: "belt",
  rating: 4.6,
  description:
    "Belt Model 8 blends elegance with strength for both office and party occasions.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323714/royalfitz_products/belt/v3em1xoalavvurjuscnzj.jpg",
},
{
  name: "Belt Model 9",
  price: 999,
  category: "belt",
  rating: 4.3,
  description:
    "Belt Model 9 is finely detailed with classic aesthetics and robust build quality.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323715/royalfitz_products/belt/ivw9i3vhs2mmexxbyk7fq.jpg",
},
{
  name: "Belt Model 10",
  price: 1049,
  category: "belt",
  rating: 3.8,
  description:
    "Belt Model 10 ensures a perfect fit and lasting comfort for daily use.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323699/royalfitz_products/belt/par7qahubqqmihwpavrx4.jpg",
},
{
  name: "Belt Model 11",
  price: 1099,
  category: "belt",
  rating: 4.2,
  description:
    "Belt Model 11 is designed for durability and effortless style.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323700/royalfitz_products/belt/wtkrxculettxqb4dsvh2w.jpg",
},
{
  name: "Belt Model 12",
  price: 1149,
  category: "belt",
  rating: 4.5,
  description:
    "Belt Model 12 provides a stylish finish to complete your formal attire.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323701/royalfitz_products/belt/d6xyjhfserrnsozss1pqu.jpg",
},
{
  name: "Belt Model 13",
  price: 1199,
  category: "belt",
  rating: 4.1,
  description:
    "Belt Model 13 is built with strong craftsmanship and modern elegance.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323702/royalfitz_products/belt/ygcaqtk2rrr1ofezkmf00.jpg",
},

  {
  name: "Belt Model 14",
  price: 1249,
  category: "belt",
  rating: 4.7,
  description:
    "Belt Model 14 is a premium accessory that elevates both casual and formal outfits.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323703/royalfitz_products/belt/qzjll1dybnn7wicr09mpn.jpg",
},
{
  name: "Belt Model 15",
  price: 1299,
  category: "belt",
  rating: 4.4,
  description:
    "Belt Model 15 delivers comfort, style, and strength for long-lasting performance.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323705/royalfitz_products/belt/eb1c3pumkbbctdrllculj.jpg",
},

{
  name: "T-Shirt Model 1",
  price: 699,
  category: "tshirt",
  rating: 4.0,
  description:
    "T-Shirt Model 1 is made with soft cotton fabric for daily comfort and style.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323847/royalfitz_products/tshirt/xwzmibpaxxah636skiffo.jpg",
},
{
  name: "T-Shirt Model 2",
  price: 749,
  category: "tshirt",
  rating: 4.1,
  description:
    "T-Shirt Model 2 offers a sleek design suitable for casual wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323854/royalfitz_products/tshirt/g5ocxhuhmrr1l5h5vmze1.jpg",
},
{
  name: "T-Shirt Model 3",
  price: 799,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 3 is stylish, breathable, and perfect for everyday use.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323855/royalfitz_products/tshirt/ujqswt8otiiw4rn9tnsdl.jpg",
},
{
  name: "T-Shirt Model 4",
  price: 849,
  category: "tshirt",
  rating: 4.0,
  description:
    "T-Shirt Model 4 combines comfort and a trendy look for any occasion.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323856/royalfitz_products/tshirt/tsekhe6wb22mwydhs1d5t.jpg",
},
{
  name: "T-Shirt Model 5",
  price: 899,
  category: "tshirt",
  rating: 4.1,
  description:
    "T-Shirt Model 5 is made with premium fabric for a stylish casual look.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323858/royalfitz_products/tshirt/nwmzvjthsffuw0beiz3vd.jpg",
},
{
  name: "T-Shirt Model 6",
  price: 949,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 6 offers a modern design with ultimate comfort.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323859/royalfitz_products/tshirt/e5mrywrjxllc56pgrkt3c.jpg",
},
{
  name: "T-Shirt Model 7",
  price: 999,
  category: "tshirt",
  rating: 4.3,
  description:
    "T-Shirt Model 7 is perfect for casual outings and everyday wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323861/royalfitz_products/tshirt/psqqk07ihhhntzlvmnnqs.jpg",
},
{
  name: "T-Shirt Model 8",
  price: 1049,
  category: "tshirt",
  rating: 4.1,
  description:
    "T-Shirt Model 8 combines a modern fit with soft and durable fabric.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323862/royalfitz_products/tshirt/vblcjauyhhh0pzjnsfnlm.jpg",
},
{
  name: "T-Shirt Model 9",
  price: 1099,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 9 is stylish and comfortable, ideal for daily wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323864/royalfitz_products/tshirt/fdttb6lkkffz7qso6uxsa.jpg",
},
{
  name: "T-Shirt Model 10",
  price: 1149,
  category: "tshirt",
  rating: 4.3,
  description:
    "T-Shirt Model 10 features trendy designs with premium cotton fabric.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323847/royalfitz_products/tshirt/xwzmibpaxxah636skiffo.jpg",
},
{
  name: "T-Shirt Model 11",
  price: 1199,
  category: "tshirt",
  rating: 4.1,
  description: "T-Shirt Model 11 ensures comfort and a stylish modern look.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323848/royalfitz_products/tshirt/jc9cnejfrrva5xhqcbvca.jpg",
},
{
  name: "T-Shirt Model 12",
  price: 1249,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 12 is perfect for casual wear with soft breathable fabric.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323849/royalfitz_products/tshirt/dq24xzeafft6gwit71lfe.jpg",
},
{
  name: "T-Shirt Model 13",
  price: 1299,
  category: "tshirt",
  rating: 4.3,
  description:
    "T-Shirt Model 13 combines a modern look with everyday comfort.",
  image:
    "https://cloudinary.com/dwostjayu/image/upload/v1761323850/royalfitz_products/tshirt/eqjop49qgg4skvq4xdppi.jpg",
},
{
  name: "T-Shirt Model 14",
  price: 1349,
  category: "tshirt",
  rating: 4.1,
  description:
    "T-Shirt Model 14 features trendy styling with premium cotton fabric.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323851/royalfitz_products/tshirt/ek1vpovexxhbwrnu1pfbg.jpg",
},
{
  name: "T-Shirt Model 15",
  price: 1399,
  category: "tshirt",
  rating: 4.2,
  description:
    "T-Shirt Model 15 provides style and comfort for all-day wear.",
  image:
    "https://res.cloudinary.com/dwostjayu/image/upload/v1761323853/royalfitz_products/tshirt/pagp0axoffnxuebgfeonv.jpg",
},

];

export default products;
