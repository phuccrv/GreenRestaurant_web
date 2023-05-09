$(document).ready(function () {
  $(".slider-slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    Infinity: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow pull-left'><i class='bx bx-left-arrow-circle' ></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow pull-right'><i class='bx bx-right-arrow-circle'></i></button>",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // arrows: false,
          // Infinity: false,
        },
      },
    ],
  });
});

// render menu

const userLogin = JSON.parse(localStorage.getItem("userLogin")) ?? [];
const headerElement = document.querySelector("header");

if (userLogin) {
  const contentHeader = `
        <div class="logo">
          <a href="../index.html"><img src="../img/logoRG.png" /></a>
        </div>
        <div class="menu">
            <ul>
                <li><a href="../index.html">HOME</a> </li>
                <li><a href="#menu">MENU</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div class="control-right">
                <label id="icon" for="">
                    <i onclick="handleViewCarts()" class="fa-solid fa-bars"></i>
                </label>
                <div class="user-info">${userLogin.user}</div>
                <div class="cartbag"><a href="./cart.html"><i class="bx bxs-shopping-bags"></i></a></div>
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

// render sản phẩm cart

const AccountCart = JSON.parse(localStorage.getItem("accounts")) ?? [];
const userLogin1 = JSON.parse(localStorage.getItem("userLogin"));
renderCartUser(AccountCart);
function renderCartUser(data) {
  const cartElementUser = document.querySelector(".box-cart");
  let cartUserElement = "";
  data.forEach((user) => {

    if (user.email == userLogin1.email) {
      cartUserElement = user;
    }
  });
  let contentCartUser = "";
  cartUserElement.card.forEach((card) => {
    contentCartUser += `
        <div class="box-cartItem">
            <img src="${card.imgFood}" alt="">
            <div class="cart-title">
                <h3>${card.titleFood}</h3>
                <p>${card.price}$</p>
            </div>
            <div class="input">
                <button onclick="inputMinus('${card.id}')" min="1" type="button">-</button>
                <input type="text" id="amount" value="${card.quantity}">
                <button onclick="plusProduct('${card.id}')" type="button" >+</button>
            </div>
            <p onclick="deleteItem('${card.id}')"><i class="fa-solid fa-trash-can"></i></p>
        </div>`;
  });
  cartElementUser.innerHTML = contentCartUser;
}

// render phần tính tổng đơn hàng
renderCart();
function renderCart() {
    const usersDB = JSON.parse(localStorage.getItem("accounts")) ?? [];
    const userLogin = JSON.parse(localStorage.getItem("userLogin")) ?? [];
    let userAction = "";
    usersDB.forEach((user) => {
      console.log(33,usersDB);
        if (user.email == userLogin.email) {
            userAction = user;
            console.log(44,userAction);
        }
        // render phần tính tổng đơn hàng
        const areaTotal = document.querySelector(".box-sum");
        areaTotal.innerHTML = `<b>Total money:</b>
                             <b>${handleTotal()}$<b>`;
    });
    handleTotal()
}
//ính tổng tiền của Giỏ hàng
function handleTotal() {
    const usersDB =
        JSON.parse(localStorage.getItem("accounts")) ?? [];
    const userLogin =
        JSON.parse(localStorage.getItem("userLogin")) ?? [];
    let userAction = "";
    usersDB.forEach((user) => {
        if (user.email == userLogin.email) {
            userAction = user;
        }
    });
    let cards = userAction.card;
    let sumCart = 0;
    cards.forEach((card) => {
        itemQuantity = Number(card.quantity);
        itemPrice = Number(card.price)
        sumCart += itemQuantity * itemPrice;
    });
    return sumCart.toLocaleString().split(",").join(".");
}
//kết phúc phần tính tổng
                        

// tăng số lượng sản phẩm
function plusProduct(id) {
  let userAccount = JSON.parse(localStorage.getItem("accounts"));
  let inputAmount = document.querySelector("#amount");

  userAccount.forEach((user, index) => {
    user.card.forEach((cart, indexCart) => {
      if (cart.id == id) {
        user.card[indexCart].quantity =
          Number(user.card[indexCart].quantity) + 1;
      }
    });
  });
  inputAmount.value = Number(inputAmount.value) + 1;
  localStorage.setItem("accounts", JSON.stringify(userAccount));
  console.log(userAccount);
  renderCartUser(userAccount);
}
// giảm số lượng

function inputMinus(id) {
  let userAccount = JSON.parse(localStorage.getItem("accounts"));
  let inputAmount = document.querySelector("#amount");

  userAccount.forEach((user, index) => {
    user.card.forEach((cart, indexCart) => {
      console.log(77,user.card);
      if (cart.id == id) {
        user.card[indexCart].quantity = Number(user.card[indexCart].quantity) - 1;
      }
    });
  });
  inputAmount.value = Number(inputAmount.value) - 1;
  localStorage.setItem("accounts", JSON.stringify(userAccount));
  console.log(userAccount);
  renderCartUser(userAccount);
}

// xoá sản phẩm trong cart
function deleteItem(id) {
  const AccountCart = JSON.parse(localStorage.getItem("accounts")) ?? [];
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) ?? [];
  let userAction = "";
  AccountCart.forEach((user) => {
    if (user.email == userLogin.email) {
      userAction = user;
      return;
    }
  });
  userAction.card.forEach((card, index) => {
    if (card.id == id) {
      userAction.card.splice(index, 1);
      return;
    }
  });
  AccountCart.forEach((user, pos) => {
    if (userAction.email == user.email) {
      AccountCart.splice(pos, 1, userAction);
      return;
    }
  });
  localStorage.setItem("accounts", JSON.stringify(AccountCart));
  console.log(55, AccountCart);
  renderCartUser(AccountCart);
}
// khi clcik vào nút logout thì nhảy quá trang login
function logout() {
  window.location = "./login.html";
  localStorage.removeItem("userLogin");
  localStorage.removeItem("cart");
}