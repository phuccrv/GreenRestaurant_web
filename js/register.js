const form = document.querySelector(".login-box");

      form.addEventListener("submit", (e) => {
        console.log(e);
        e.preventDefault();

        const emailValue = document.querySelector("#emailInput").value.trim().toLowerCase();
        const userValue = document.querySelector("#userInput").value;
        const passwordValue = document.querySelector("#passwordInput").value;
        const confirmValue = document.querySelector("#confirmInput").value;

        const rexgEmail =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const error = {
          isError: false,//kiểm tra lỗi
          emailMsg: "",
          passwordMsg: "",
          confirmPasswordMsg: "",
        };
        if (!emailValue.match(rexgEmail)) {
          error.isError = true;
          error.emailMsg = "Email không đúng định dạng,vui lòng nhập lại";
        }
        if (emailValue.legth > 30) {
          error.isError = true;
          error.passwordMsg = "Email dài quá 30 ký tự, vui lòng nhập lại";
        }
        if (
          !passwordValue ||
          passwordValue.legth < 8 ||
          passwordValue.legth > 20
        ) {
          error.isError = true;
          error.confirmPasswordMsg = "Mật khẩu không trùng, vui lòng nhập lại";
        }
        renderError(error);
        if (!error.isError) {
          const accounts = JSON.parse(localStorage.getItem("accounts")) ?? [];
          let isDulicase = false;
          accounts.forEach((user) => {
            if (user.email === emailValue) {
              error.emailMsg = "Email đã tồn tại, vui lòng nhập email khác";
              isDulicase = true;
              renderError(error);
            }
          });
          if (!isDulicase) {
            accounts.push({
              email: emailValue,
              password: passwordValue,
              user: userValue,
            });
            localStorage.setItem("accounts", JSON.stringify(accounts));

            window.location = "/pages/login.html";//chuyển trang
          }
        }
      });
    //   render
      function renderError(error) {
        const errorEmailElement = document.querySelector("#erro-emial");
        const errorPasswordElement = document.querySelector("#erro-emial");
        const errorConfirnPasswordElement = document.querySelector("#erro-emial");

        errorEmailElement.innerHTML = error.emailMsg;
        errorPasswordElement.innerHTML = error.passwordMsg;
        errorConfirnPasswordElement.innerHTML = error.confirmPasswordMsg;
      }