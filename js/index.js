
// render product
const Product = JSON.parse(localStorage.getItem("product")) ?? [];
renderData(Product)
function renderData(data) {
  const listProduct = document.querySelector(".list_product");
  console.log(listProduct);
  let contentItem = ``;
  data.forEach((product, index) => {
    contentItem += `<div class="product">
                <p>${index + 1}</p>
                <div class="product-img">
                    <img src="${product.imgFood}" alt="" />
                </div>
                <div class="product-title">
                    <h4>${product.titleFood}&#128523;</h4>
                    <h3>Price: ${product.price}$</h3>
                </div>
                <div class="btn-product">
                    <button onclick="handleAdd(${product.id})"><i class="bx bxs-cart-download"></i></button>
                    <button onclick="handleViewDetail(${product.id})">View more</button>
                </div>
            </div>`;
  });
  listProduct.innerHTML = contentItem;
}

// render menu

const userLogin = JSON.parse(localStorage.getItem("userLogin")) ?? [];
const headerElement = document.querySelector(".menu");

renderUser(userLogin)
function renderUser(user){
if (userLogin !=0) {
    if (user) {
      const contentHeader = `<ul>
                    <li><a href="./index.html">HOME</a></li>
                    <li><a href="#menu">MENU</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
                <label id="icon" for="">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <div class="control-right">
                    <div class="user-info">${user.user}</div>
                    <div onclick="showCarts()" class="cart"><i  class="bx bxs-shopping-bags"></i></div>
                    <div class="login">
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                                <i class="bx bx-log-in-circle"></i>
                            </div>
                        </div>
                        <span onclick="logout()">Logout</span>
                    </div>
                </div>`;
        headerElement.innerHTML = contentHeader;
    }
  }
}

//<div class="user-info">${user.user}</div>

// tìm kiếm sản phẩm
function search() {
    const valueSearch = document.querySelector("#inputSearch").value;
    // console.log("kiểm tra search", valueSearch);
    const dataSearch = [];
    Product.forEach((item) => {
      if (
        item.titleFood.toLowerCase().includes(valueSearch.toLowerCase()) ||
        item.price == valueSearch
      ) {
        dataSearch.push(item);
      }
    });
    renderData(dataSearch); //show sản phẩm tìm kiếm
  }
 //   Khi thêm sản phẩm vào giỏ hàng

 function handleAdd(productId) {
    let addProduct;
    const carts = JSON.parse(localStorage.getItem("carts")) ?? [];

    // Tìm sản phẩm được mua trong tất cả sản phẩm
    Product.forEach((product) => {
      if (product.id == productId) {
        addProduct = product;
        addProduct.quantity = 1;
      }
    });
    let isDulicate = false;
    carts.forEach((cart, index) => {
      if (cart.id == addProduct.id) {
        cart.quantity++;
        isDulicate = true;
      }
    });
    if (!isDulicate) {
      carts.push(addProduct);
    }
    localStorage.setItem("carts", JSON.stringify(carts));
    // Nếu người dùng đăng nhập rồi thì đẩy dữ liệu vào accounts lưu trữ cart người dùng
    if (userLogin) {
      const accounts = JSON.parse(localStorage.getItem("accounts")) ?? [];
      accounts.forEach((user) => {
        if (user.email === userLogin.email) {
          if (!user.cart) {
            return (user.card = carts);
          }
          user.cart?.forEach((cartDB) => {
            let isDulicate = false;
            carts.forEach((cartNew) => {
              if (cartDB.id == cartNew.id) {
                isDulicate = true;
                cartDB.quantity++;
              }
            });
            if (!isDulicate) {
              user.cart.push(cartNew);
            }
          });
        }
      });
      localStorage.setItem("accounts", JSON.stringify(accounts));
    }
  }
  //Nếu người dùng login mới cho view
  function handleViewCarts() {
    if (userLogin) {
      window.location = "cart.html";
    } else {
      window.location = "/pages/login.html";
    }
  }



// khi click vào nút logout thì thoát ra trang đăng nhập login và xoá đăng nhập
function logout(){
  localStorage.removeItem("userLogin");
  window.location.href = "/pages/login.html";
}

function showCarts(){
    window.location = "../../pages/cart.html";
}

// show menu dọc
const show = document.querySelector("#icon");
const ulItem = document.querySelector("ul");
show.onclick = function () {
  ulItem.classList.toggle("show");
};

// chức năng xem chi tiết

function handleViewDetail(id){
  window.location = `../pages/detail.html?idproduct=${id}`
}