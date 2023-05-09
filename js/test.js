
// Render giỏ hàng: thông tin lấy từ users trong Loacalstorage, key: cart
renderCart();
function renderCart() {
    const usersDB = JSON.parse(localStorage.getItem("accounts")) ?? [];
        console.log(11,usersDB);
    const userLogin = JSON.parse(localStorage.getItem("userLogin")) ?? [];
        console.log(22,userLogin);
    let userAction = "";
    usersDB.forEach((user) => {
        if (user.email == userLogin.email) {
            userAction = user;
            return;
        }
    });

    // render phần tính tổng đơn hàng
    const areaTotal = document.querySelector(".box-sum");
    areaTotal.innerHTML = `<p>Tổng tiền:</p>
                         <p>${handleTotal()}$</p>`;
}

// Tính tổng tiền của Giỏ hàng
function handleTotal() {
    const usersDB =
        JSON.parse(localStorage.getItem("accounts")) ?? [];
    const userLogin =
        JSON.parse(localStorage.getItem("userLogin")) ?? [];
    let userAction = "";
    usersDB.forEach((user) => {
        if (user.email == userLogin.email) {
            userAction = user;
            return;
        }
    });
    let carts = userAction.cart;
    let sumCart = 0;
    carts.forEach((cart) => {
        itemQuantity = Number(cart.quantity);
        itemPrice = Number(cart.price)
        sumCart += itemQuantity * itemPrice;
    });

    return sumCart.toLocaleString().split(",").join(".");
}