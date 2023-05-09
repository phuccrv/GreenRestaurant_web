

const url = new URL(document.URL);
const idProduct =Number(url.searchParams.get("idproduct"));

console.log(typeof idProduct);
//   Render sản phẩm chi tiết
const dataFood = JSON.parse(localStorage.getItem("product")) ?? [];
console.log(11, dataFood);
const chooseProduct = document.querySelector(".container");
console.log(22,chooseProduct);
renderDetail(dataFood)
function renderDetail(data) {
    let productByID = "";
    data.forEach((product) => {
        console.log(33,dataFood);
        if (product.id == idProduct) {
            productByID = product;
            detailProduct = `<div class="row">
                <div class="left col-lg-7">
                    <div class="top-area">
                        <img src="${product.imgFood}" alt=""/>
                    </div>
                </div>
                <div class="right col-lg-5">
                    <h3>${product.titleFood}</h3>
                    <p>Giá sản phẩm: <b>${product.price}$</b></p>
                    <p>Chi tiết:${product.detail}</p>
                    <button><a href="./index.html"><i class='bx bxs-home'></i>Back Home</a></button>
                   
                </div>
            </div>`;
        }
    });
    chooseProduct.innerHTML = detailProduct;
}
//  <button onclick="handleAdd(${product.id})"><i class="bx bxs-cart-download"></i>Add cart</button>
// Kết thúc render

// thêm sản phầm vào cart

const userLogin = JSON.parse(localStorage.getItem("userLogin")) ?? [];
const headerElement = document.querySelector("header");

if (userLogin) {
  const contentHeader = `
        <div class="logo">
          <a href="./index.html"><img src="./img/logoRG.png" /></a>
        </div>
        <div class="menu">
            <ul>
                <li><a href="./index.html">HOME</a> </li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div class="control-right">
               
                <div class="user-info">${userLogin.user}</div>
                <div class="cart"><a href="./cart.html"><i class="bx bxs-shopping-bags"></i></a></div>
                <div class="login">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <i class="bx bx-log-in-circle"></i>
                        </div>
                    </div>
                    <span onclick="logout()">Logout</span>
                </div>
            </div>
        </div>
    `;
  headerElement.innerHTML = contentHeader;
}