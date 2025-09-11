const products = [
  {
    "id": 1,
    "name": "Watch Model 1",
    "price": 1049,
    "category": "watch",
    "rating": 3.6,
    "description": "Watch Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 2,
    "name": "Watch Model 2",
    "price": 1099,
    "category": "watch",
    "rating": 3.7,
    "description": "Watch Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 3,
    "name": "Watch Model 3",
    "price": 1149,
    "category": "watch",
    "rating": 3.8,
    "description": "Watch Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 4,
    "name": "Watch Model 4",
    "price": 1199,
    "category": "watch",
    "rating": 3.9,
    "description": "Watch Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 5,
    "name": "Watch Model 5",
    "price": 1249,
    "category": "watch",
    "rating": 3.5,
    "description": "Watch Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 6,
    "name": "Watch Model 6",
    "price": 1299,
    "category": "watch",
    "rating": 3.6,
    "description": "Watch Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 7,
    "name": "Watch Model 7",
    "price": 1349,
    "category": "watch",
    "rating": 3.7,
    "description": "Watch Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 8,
    "name": "Watch Model 8",
    "price": 1399,
    "category": "watch",
    "rating": 3.8,
    "description": "Watch Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 9,
    "name": "Watch Model 9",
    "price": 1449,
    "category": "watch",
    "rating": 3.9,
    "description": "Watch Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 10,
    "name": "Watch Model 10",
    "price": 1499,
    "category": "watch",
    "rating": 3.5,
    "description": "Watch Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 11,
    "name": "Watch Model 11",
    "price": 1549,
    "category": "watch",
    "rating": 3.6,
    "description": "Watch Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 12,
    "name": "Watch Model 12",
    "price": 1599,
    "category": "watch",
    "rating": 3.7,
    "description": "Watch Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 13,
    "name": "Watch Model 13",
    "price": 1649,
    "category": "watch",
    "rating": 3.8,
    "description": "Watch Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 14,
    "name": "Watch Model 14",
    "price": 1699,
    "category": "watch",
    "rating": 3.9,
    "description": "Watch Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 15,
    "name": "Watch Model 15",
    "price": 1749,
    "category": "watch",
    "rating": 3.5,
    "description": "Watch Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/watch.jpg"
  },
  {
    "id": 16,
    "name": "Shoes Model 1",
    "price": 1049,
    "category": "shoes",
    "rating": 3.6,
    "description": "Shoes Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 17,
    "name": "Shoes Model 2",
    "price": 1099,
    "category": "shoes",
    "rating": 3.7,
    "description": "Shoes Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 18,
    "name": "Shoes Model 3",
    "price": 1149,
    "category": "shoes",
    "rating": 3.8,
    "description": "Shoes Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 19,
    "name": "Shoes Model 4",
    "price": 1199,
    "category": "shoes",
    "rating": 3.9,
    "description": "Shoes Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 20,
    "name": "Shoes Model 5",
    "price": 1249,
    "category": "shoes",
    "rating": 3.5,
    "description": "Shoes Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 21,
    "name": "Shoes Model 6",
    "price": 1299,
    "category": "shoes",
    "rating": 3.6,
    "description": "Shoes Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 22,
    "name": "Shoes Model 7",
    "price": 1349,
    "category": "shoes",
    "rating": 3.7,
    "description": "Shoes Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 23,
    "name": "Shoes Model 8",
    "price": 1399,
    "category": "shoes",
    "rating": 3.8,
    "description": "Shoes Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 24,
    "name": "Shoes Model 9",
    "price": 1449,
    "category": "shoes",
    "rating": 3.9,
    "description": "Shoes Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 25,
    "name": "Shoes Model 10",
    "price": 1499,
    "category": "shoes",
    "rating": 3.5,
    "description": "Shoes Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 26,
    "name": "Shoes Model 11",
    "price": 1549,
    "category": "shoes",
    "rating": 3.6,
    "description": "Shoes Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 27,
    "name": "Shoes Model 12",
    "price": 1599,
    "category": "shoes",
    "rating": 3.7,
    "description": "Shoes Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 28,
    "name": "Shoes Model 13",
    "price": 1649,
    "category": "shoes",
    "rating": 3.8,
    "description": "Shoes Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 29,
    "name": "Shoes Model 14",
    "price": 1699,
    "category": "shoes",
    "rating": 3.9,
    "description": "Shoes Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 30,
    "name": "Shoes Model 15",
    "price": 1749,
    "category": "shoes",
    "rating": 3.5,
    "description": "Shoes Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shoes.jpg"
  },
  {
    "id": 31,
    "name": "Shirt Model 1",
    "price": 1049,
    "category": "shirt",
    "rating": 3.6,
    "description": "Shirt Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 32,
    "name": "Shirt Model 2",
    "price": 1099,
    "category": "shirt",
    "rating": 3.7,
    "description": "Shirt Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 33,
    "name": "Shirt Model 3",
    "price": 1149,
    "category": "shirt",
    "rating": 3.8,
    "description": "Shirt Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 34,
    "name": "Shirt Model 4",
    "price": 1199,
    "category": "shirt",
    "rating": 3.9,
    "description": "Shirt Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 35,
    "name": "Shirt Model 5",
    "price": 1249,
    "category": "shirt",
    "rating": 3.5,
    "description": "Shirt Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 36,
    "name": "Shirt Model 6",
    "price": 1299,
    "category": "shirt",
    "rating": 3.6,
    "description": "Shirt Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 37,
    "name": "Shirt Model 7",
    "price": 1349,
    "category": "shirt",
    "rating": 3.7,
    "description": "Shirt Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 38,
    "name": "Shirt Model 8",
    "price": 1399,
    "category": "shirt",
    "rating": 3.8,
    "description": "Shirt Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 39,
    "name": "Shirt Model 9",
    "price": 1449,
    "category": "shirt",
    "rating": 3.9,
    "description": "Shirt Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 40,
    "name": "Shirt Model 10",
    "price": 1499,
    "category": "shirt",
    "rating": 3.5,
    "description": "Shirt Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 41,
    "name": "Shirt Model 11",
    "price": 1549,
    "category": "shirt",
    "rating": 3.6,
    "description": "Shirt Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 42,
    "name": "Shirt Model 12",
    "price": 1599,
    "category": "shirt",
    "rating": 3.7,
    "description": "Shirt Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 43,
    "name": "Shirt Model 13",
    "price": 1649,
    "category": "shirt",
    "rating": 3.8,
    "description": "Shirt Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 44,
    "name": "Shirt Model 14",
    "price": 1699,
    "category": "shirt",
    "rating": 3.9,
    "description": "Shirt Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 45,
    "name": "Shirt Model 15",
    "price": 1749,
    "category": "shirt",
    "rating": 3.5,
    "description": "Shirt Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/shirt.jpg"
  },
  {
    "id": 46,
    "name": "Pants Model 1",
    "price": 1049,
    "category": "pants",
    "rating": 3.6,
    "description": "Pants Model 1 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 47,
    "name": "Pants Model 2",
    "price": 1099,
    "category": "pants",
    "rating": 3.7,
    "description": "Pants Model 2 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 48,
    "name": "Pants Model 3",
    "price": 1149,
    "category": "pants",
    "rating": 3.8,
    "description": "Pants Model 3 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 49,
    "name": "Pants Model 4",
    "price": 1199,
    "category": "pants",
    "rating": 3.9,
    "description": "Pants Model 4 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 50,
    "name": "Pants Model 5",
    "price": 1249,
    "category": "pants",
    "rating": 3.5,
    "description": "Pants Model 5 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 51,
    "name": "Pants Model 6",
    "price": 1299,
    "category": "pants",
    "rating": 3.6,
    "description": "Pants Model 6 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 52,
    "name": "Pants Model 7",
    "price": 1349,
    "category": "pants",
    "rating": 3.7,
    "description": "Pants Model 7 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 53,
    "name": "Pants Model 8",
    "price": 1399,
    "category": "pants",
    "rating": 3.8,
    "description": "Pants Model 8 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 54,
    "name": "Pants Model 9",
    "price": 1449,
    "category": "pants",
    "rating": 3.9,
    "description": "Pants Model 9 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 55,
    "name": "Pants Model 10",
    "price": 1499,
    "category": "pants",
    "rating": 3.5,
    "description": "Pants Model 10 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 56,
    "name": "Pants Model 11",
    "price": 1549,
    "category": "pants",
    "rating": 3.6,
    "description": "Pants Model 11 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 57,
    "name": "Pants Model 12",
    "price": 1599,
    "category": "pants",
    "rating": 3.7,
    "description": "Pants Model 12 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 58,
    "name": "Pants Model 13",
    "price": 1649,
    "category": "pants",
    "rating": 3.8,
    "description": "Pants Model 13 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 59,
    "name": "Pants Model 14",
    "price": 1699,
    "category": "pants",
    "rating": 3.9,
    "description": "Pants Model 14 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
  {
    "id": 60,
    "name": "Pants Model 15",
    "price": 1749,
    "category": "pants",
    "rating": 3.5,
    "description": "Pants Model 15 is designed with style and comfort in mind. Perfect for every occasion, it offers exceptional quality and a unique design that makes you stand out.",
    "image": "/assets/product_image/pant.jpg"
  },
    {
    "id": 61,
    "name": "Jumpsuit Model 1",
    "price": 1549,
    "category": "jumpsuit",
    "rating": 4.1,
    "description": "Jumpsuit Model 1 combines comfort with elegance, perfect for casual and semi-formal occasions.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 62,
    "name": "Jumpsuit Model 2",
    "price": 1599,
    "category": "jumpsuit",
    "rating": 4.0,
    "description": "Jumpsuit Model 2 is crafted with breathable fabric and stylish cuts for all-day wear.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 63,
    "name": "Jumpsuit Model 3",
    "price": 1649,
    "category": "jumpsuit",
    "rating": 4.2,
    "description": "Jumpsuit Model 3 offers a modern fit and versatile look that can be dressed up or down.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 64,
    "name": "Jumpsuit Model 4",
    "price": 1699,
    "category": "jumpsuit",
    "rating": 4.3,
    "description": "Jumpsuit Model 4 features premium stitching and sleek design for a chic look.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 65,
    "name": "Jumpsuit Model 5",
    "price": 1749,
    "category": "jumpsuit",
    "rating": 4.1,
    "description": "Jumpsuit Model 5 is stylish, durable, and crafted with attention to detail.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 66,
    "name": "Jumpsuit Model 6",
    "price": 1799,
    "category": "jumpsuit",
    "rating": 4.0,
    "description": "Jumpsuit Model 6 is made from high-quality materials offering both comfort and flexibility.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 67,
    "name": "Jumpsuit Model 7",
    "price": 1849,
    "category": "jumpsuit",
    "rating": 4.2,
    "description": "Jumpsuit Model 7 gives a flattering fit with a trendy design to suit any outing.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 68,
    "name": "Jumpsuit Model 8",
    "price": 1899,
    "category": "jumpsuit",
    "rating": 4.3,
    "description": "Jumpsuit Model 8 is perfect for casual wear, blending fashion and ease.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 69,
    "name": "Jumpsuit Model 9",
    "price": 1949,
    "category": "jumpsuit",
    "rating": 4.1,
    "description": "Jumpsuit Model 9 ensures both comfort and modern appeal.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 70,
    "name": "Jumpsuit Model 10",
    "price": 1999,
    "category": "jumpsuit",
    "rating": 4.2,
    "description": "Jumpsuit Model 10 is sleek and practical, ideal for everyday wear.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 71,
    "name": "Jumpsuit Model 11",
    "price": 2049,
    "category": "jumpsuit",
    "rating": 4.0,
    "description": "Jumpsuit Model 11 delivers unmatched quality and comfort for long-lasting wear.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 72,
    "name": "Jumpsuit Model 12",
    "price": 2099,
    "category": "jumpsuit",
    "rating": 4.3,
    "description": "Jumpsuit Model 12 is designed for a bold yet sophisticated look.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 73,
    "name": "Jumpsuit Model 13",
    "price": 2149,
    "category": "jumpsuit",
    "rating": 4.2,
    "description": "Jumpsuit Model 13 provides the perfect combination of elegance and simplicity.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 74,
    "name": "Jumpsuit Model 14",
    "price": 2199,
    "category": "jumpsuit",
    "rating": 4.1,
    "description": "Jumpsuit Model 14 offers durable quality and fashionable design.",
    "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 75,
    "name": "Jumpsuit Model 15",
    "price": 2249,
    "category": "jumpsuit",
    "rating": 4.3,
    "description": "Jumpsuit Model 15 is made for ultimate comfort",
     "image": "/assets/product_image/jumpsuit.jpg"
  },
  {
    "id": 76,
    "name": "Top Model 1",
    "price": 849,
    "category": "top",
    "rating": 4.0,
    "description": "Top Model 1 is a stylish and versatile piece that pairs well with jeans, skirts, or shorts.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 77,
    "name": "Top Model 2",
    "price": 899,
    "category": "top",
    "rating": 4.1,
    "description": "Top Model 2 is designed with breathable fabric for maximum comfort throughout the day.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 78,
    "name": "Top Model 3",
    "price": 949,
    "category": "top",
    "rating": 4.2,
    "description": "Top Model 3 adds a modern touch to your wardrobe with its trendy cut and design.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 79,
    "name": "Top Model 4",
    "price": 999,
    "category": "top",
    "rating": 4.3,
    "description": "Top Model 4 is lightweight and chic, perfect for everyday wear or outings.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 80,
    "name": "Top Model 5",
    "price": 1049,
    "category": "top",
    "rating": 4.0,
    "description": "Top Model 5 offers a relaxed fit with premium fabric for comfort and durability.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 81,
    "name": "Top Model 6",
    "price": 1099,
    "category": "top",
    "rating": 4.1,
    "description": "Top Model 6 is an elegant piece that blends casual and formal fashion effortlessly.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 82,
    "name": "Top Model 7",
    "price": 1149,
    "category": "top",
    "rating": 4.2,
    "description": "Top Model 7 provides a flattering silhouette with soft, stretchable material.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 83,
    "name": "Top Model 8",
    "price": 1199,
    "category": "top",
    "rating": 4.3,
    "description": "Top Model 8 is designed with stylish cuts that make it suitable for both work and casual wear.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 84,
    "name": "Top Model 9",
    "price": 1249,
    "category": "top",
    "rating": 4.0,
    "description": "Top Model 9 is perfect for layering or wearing as a statement piece.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 85,
    "name": "Top Model 10",
    "price": 1299,
    "category": "top",
    "rating": 4.1,
    "description": "Top Model 10 combines comfort and modern style to fit seamlessly into your wardrobe.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 86,
    "name": "Top Model 11",
    "price": 1349,
    "category": "top",
    "rating": 4.2,
    "description": "Top Model 11 is lightweight and breathable, making it ideal for warm weather.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 87,
    "name": "Top Model 12",
    "price": 1399,
    "category": "top",
    "rating": 4.3,
    "description": "Top Model 12 is crafted with premium materials for durability and long-lasting comfort.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 88,
    "name": "Top Model 13",
    "price": 1449,
    "category": "top",
    "rating": 4.0,
    "description": "Top Model 13 is a chic option for casual hangouts or formal events.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 89,
    "name": "Top Model 14",
    "price": 1499,
    "category": "top",
    "rating": 4.1,
    "description": "Top Model 14 offers a sleek look with a comfortable fit for everyday wear.",
    "image": "/assets/product_image/top.jpg"
  },
  {
    "id": 90,
    "name": "Top Model 15",
    "price": 1549,
    "category": "top",
    "rating": 4.2,
    "description": "Top Model 15 is versatile, trendy, and designed to complement a variety of outfits.",
    "image": "/assets/product_image/top.jpg"
  },

  {
    "id": 91,
    "name": "Shorts Model 1",
    "price": 749,
    "category": "shorts",
    "rating": 4.1,
    "description": "Shorts Model 1 is lightweight and comfortable, perfect for casual outings and summer wear.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 92,
    "name": "Shorts Model 2",
    "price": 799,
    "category": "shorts",
    "rating": 4.2,
    "description": "Shorts Model 2 combines breathable fabric with a stylish fit for all-day comfort.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 93,
    "name": "Shorts Model 3",
    "price": 849,
    "category": "shorts",
    "rating": 4.0,
    "description": "Shorts Model 3 is made with durable stitching, ideal for both indoor and outdoor activities.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 94,
    "name": "Shorts Model 4",
    "price": 899,
    "category": "shorts",
    "rating": 4.3,
    "description": "Shorts Model 4 offers a relaxed fit with a modern style, suitable for everyday use.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 95,
    "name": "Shorts Model 5",
    "price": 949,
    "category": "shorts",
    "rating": 4.4,
    "description": "Shorts Model 5 is crafted from soft cotton fabric to provide exceptional comfort.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 96,
    "name": "Shorts Model 6",
    "price": 999,
    "category": "shorts",
    "rating": 4.1,
    "description": "Shorts Model 6 is designed for a trendy look while ensuring maximum breathability.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 97,
    "name": "Shorts Model 7",
    "price": 1049,
    "category": "shorts",
    "rating": 4.5,
    "description": "Shorts Model 7 blends style and comfort, perfect for casual wear in all seasons.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 98,
    "name": "Shorts Model 8",
    "price": 1099,
    "category": "shorts",
    "rating": 4.3,
    "description": "Shorts Model 8 comes with a slim fit design and superior quality stitching.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 99,
    "name": "Shorts Model 9",
    "price": 1149,
    "category": "shorts",
    "rating": 4.2,
    "description": "Shorts Model 9 is perfect for everyday wear, offering unmatched comfort and flexibility.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 100,
    "name": "Shorts Model 10",
    "price": 1199,
    "category": "shorts",
    "rating": 4.4,
    "description": "Shorts Model 10 combines durability and comfort, ideal for summer adventures.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 101,
    "name": "Shorts Model 11",
    "price": 1249,
    "category": "shorts",
    "rating": 4.0,
    "description": "Shorts Model 11 features premium fabric for a stylish and comfortable fit.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 102,
    "name": "Shorts Model 12",
    "price": 1299,
    "category": "shorts",
    "rating": 4.3,
    "description": "Shorts Model 12 delivers excellent breathability and comfort for daily use.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 103,
    "name": "Shorts Model 13",
    "price": 1349,
    "category": "shorts",
    "rating": 4.5,
    "description": "Shorts Model 13 is designed for versatility, pairing well with casual or sporty outfits.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 104,
    "name": "Shorts Model 14",
    "price": 1399,
    "category": "shorts",
    "rating": 4.6,
    "description": "Shorts Model 14 provides a premium look with unmatched comfort and durability.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 105,
    "name": "Shorts Model 15",
    "price": 1399,
    "category": "shorts",
    "rating": 4.6,
    "description": "Shorts Model 15 provides a premium look with unmatched comfort and durability.",
    "image": "/assets/product_image/shorts.jpg"
  },
  {
    "id": 106,
    "name": "Belt Model 1",
    "price": 599,
    "category": "belt",
    "rating": 4.2,
    "description": "Belt Model 1 is crafted from premium leather, offering durability and a sleek look to elevate your outfit.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 107,
    "name": "Belt Model 2",
    "price": 649,
    "category": "belt",
    "rating": 4.5,
    "description": "Belt Model 2 combines elegance and strength, perfect for both casual and formal wear.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 108,
    "name": "Belt Model 3",
    "price": 699,
    "category": "belt",
    "rating": 4.1,
    "description": "Belt Model 3 is designed with a modern buckle style and long-lasting comfort.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 109,
    "name": "Belt Model 4",
    "price": 749,
    "category": "belt",
    "rating": 3.9,
    "description": "Belt Model 4 offers a bold statement with its stylish design and premium material.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 110,
    "name": "Belt Model 5",
    "price": 799,
    "category": "belt",
    "rating": 4.3,
    "description": "Belt Model 5 features a refined design and strong durability for long-term use.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 111,
    "name": "Belt Model 6",
    "price": 849,
    "category": "belt",
    "rating": 4.4,
    "description": "Belt Model 6 adds sophistication to any look with its polished finish and versatile design.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 112,
    "name": "Belt Model 7",
    "price": 899,
    "category": "belt",
    "rating": 4.0,
    "description": "Belt Model 7 is lightweight yet durable, making it perfect for everyday wear.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 113,
    "name": "Belt Model 8",
    "price": 949,
    "category": "belt",
    "rating": 4.6,
    "description": "Belt Model 8 blends elegance with strength for both office and party occasions.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 114,
    "name": "Belt Model 9",
    "price": 999,
    "category": "belt",
    "rating": 4.3,
    "description": "Belt Model 9 is finely detailed with classic aesthetics and robust build quality.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 115,
    "name": "Belt Model 10",
    "price": 1049,
    "category": "belt",
    "rating": 3.8,
    "description": "Belt Model 10 ensures a perfect fit and lasting comfort for daily use.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 116,
    "name": "Belt Model 11",
    "price": 1099,
    "category": "belt",
    "rating": 4.2,
    "description": "Belt Model 11 is designed for durability and effortless style.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 117,
    "name": "Belt Model 12",
    "price": 1149,
    "category": "belt",
    "rating": 4.5,
    "description": "Belt Model 12 provides a stylish finish to complete your formal attire.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 118,
    "name": "Belt Model 13",
    "price": 1199,
    "category": "belt",
    "rating": 4.1,
    "description": "Belt Model 13 is built with strong craftsmanship and modern elegance.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 119,
    "name": "Belt Model 14",
    "price": 1249,
    "category": "belt",
    "rating": 4.7,
    "description": "Belt Model 14 is a premium accessory that elevates both casual and formal outfits.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 120,
    "name": "Belt Model 15",
    "price": 1299,
    "category": "belt",
    "rating": 4.4,
    "description": "Belt Model 15 delivers comfort, style, and strength for long-lasting performance.",
    "image": "/assets/product_image/belt.jpg"
  },
  {
    "id": 121,
    "name": "T-shirt Model 1",
    "price": 499,
    "category": "t-shirt",
    "rating": 4.2,
    "description": "T-shirt Model 1 is made from soft cotton fabric, offering everyday comfort and breathability.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 122,
    "name": "T-shirt Model 2",
    "price": 549,
    "category": "t-shirt",
    "rating": 4.4,
    "description": "T-shirt Model 2 combines casual style with durability, perfect for all-day wear.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 123,
    "name": "T-shirt Model 3",
    "price": 599,
    "category": "t-shirt",
    "rating": 4.1,
    "description": "T-shirt Model 3 offers a trendy fit with lightweight comfort for summer days.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 124,
    "name": "T-shirt Model 4",
    "price": 649,
    "category": "t-shirt",
    "rating": 4.0,
    "description": "T-shirt Model 4 is designed with a modern cut and breathable fabric to keep you cool.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 125,
    "name": "T-shirt Model 5",
    "price": 699,
    "category": "t-shirt",
    "rating": 3.9,
    "description": "T-shirt Model 5 combines casual comfort with stylish design details.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 126,
    "name": "T-shirt Model 6",
    "price": 749,
    "category": "t-shirt",
    "rating": 4.3,
    "description": "T-shirt Model 6 provides a relaxed fit, ideal for everyday wear.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 127,
    "name": "T-shirt Model 7",
    "price": 799,
    "category": "t-shirt",
    "rating": 4.5,
    "description": "T-shirt Model 7 is crafted with premium fabric for maximum comfort and style.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 128,
    "name": "T-shirt Model 8",
    "price": 849,
    "category": "t-shirt",
    "rating": 4.2,
    "description": "T-shirt Model 8 is perfect for casual outings with its sleek design and soft fabric.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 129,
    "name": "T-shirt Model 9",
    "price": 899,
    "category": "t-shirt",
    "rating": 4.6,
    "description": "T-shirt Model 9 delivers a modern look with premium stitched quality.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 130,
    "name": "T-shirt Model 10",
    "price": 949,
    "category": "t-shirt",
    "rating": 4.0,
    "description": "T-shirt Model 10 is designed to provide long-lasting comfort and style.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 131,
    "name": "T-shirt Model 11",
    "price": 999,
    "category": "t-shirt",
    "rating": 4.3,
    "description": "T-shirt Model 11 offers a perfect blend of comfort and smart casual looks.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 132,
    "name": "T-shirt Model 12",
    "price": 1049,
    "category": "t-shirt",
    "rating": 4.1,
    "description": "T-shirt Model 12 is crafted with breathable cotton, suitable for all seasons.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 133,
    "name": "T-shirt Model 13",
    "price": 1099,
    "category": "t-shirt",
    "rating": 4.4,
    "description": "T-shirt Model 13 stands out with its fine detailing and comfortable design.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 134,
    "name": "T-shirt Model 14",
    "price": 1149,
    "category": "t-shirt",
    "rating": 4.5,
    "description": "T-shirt Model 14 is a premium piece that keeps you stylish on any occasion.",
    "image": "/assets/product_image/tshirt.jpg"
  },
  {
    "id": 135,
    "name": "T-shirt Model 15",
    "price": 1199,
    "category": "t-shirt",
    "rating": 4.6,
    "description": "T-shirt Model 15 combines luxury fabric with modern tailoring for an elevated look.",
    "image": "/assets/product_image/tshirt.jpg"
  }






];

export default products;