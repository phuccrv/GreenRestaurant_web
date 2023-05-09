const ProductList = [
  {
    id: 1,
    imgFood: "../img/anh1.jpg",
    titleFood: "Bánh mỳ có người ngồi",
    price: "40",
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolores iste dolorum dicta facere laudantium perspiciatis cum similique magnam fugit neque, excepturi, accusantium atque! Laudantium veritatis eaque sequi nulla?",
  },
  {
    id: 2,
    imgFood: "../img/anh2.jpg",
    titleFood: "Vịt bóng lưỡng",
    price: "20",
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolores iste dolorum dicta facere laudantium perspiciatis cum similique magnam fugit neque, excepturi, accusantium atque! Laudantium veritatis eaque sequi nulla?",
  },
  {
    id: 3,
    imgFood: "../img/anh3.jpg",
    titleFood: "Xiên thịt 2 que",
    price: "30",
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolores iste dolorum dicta facere laudantium perspiciatis cum similique magnam fugit neque, excepturi, accusantium atque! Laudantium veritatis eaque sequi nulla?",
  },
  {
    id: 4,
    imgFood: "../img/anh4.jpg",
    titleFood: "Gà vàng chói",
    price: "40",
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolores iste dolorum dicta facere laudantium perspiciatis cum similique magnam fugit neque, excepturi, accusantium atque! Laudantium veritatis eaque sequi nulla?",
  },
  {
    id: 5,
    imgFood: "../img/anh5.jpg",
    titleFood: "Gà nướng to chà bá",
    price: "50",
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolores iste dolorum dicta facere laudantium perspiciatis cum similique magnam fugit neque, excepturi, accusantium atque! Laudantium veritatis eaque sequi nulla?",
  },
  {
    id: 6,
    imgFood: "../img/anh6.jpg",
    titleFood: "Cơm gà có trứng",
    price: "40",
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolores iste dolorum dicta facere laudantium perspiciatis cum similique magnam fugit neque, excepturi, accusantium atque! Laudantium veritatis eaque sequi nulla?",
  },
  {
    id: 7,
    imgFood: "../img/anh7.jpg",
    titleFood: "Bánh mỳ có cà chua",
    price: "70",
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolores iste dolorum dicta facere laudantium perspiciatis cum similique magnam fugit neque, excepturi, accusantium atque! Laudantium veritatis eaque sequi nulla?",
  },
  {
    id: 8,
    imgFood: "../img/anh8.jpg",
    titleFood: "Hoa quả khô nguyên dĩa",
    price: "80",
    detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolores iste dolorum dicta facere laudantium perspiciatis cum similique magnam fugit neque, excepturi, accusantium atque! Laudantium veritatis eaque sequi nulla?",
  },
];

const productsLocal = JSON.parse(localStorage.getItem("product"));
if (!productsLocal) {
  localStorage.setItem("product", JSON.stringify(ProductList));
}
