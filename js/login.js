const form = document.querySelector(".login-box");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // lấy dữ liệu
            const emailValue = document.querySelector("#emailInput").value.trim().toLowerCase();
            const passwordValue = document.querySelector("#passwordInput").value;

            // lấy dữ liệu từ local so sánh

            const accountDB = JSON.parse(localStorage.getItem("accounts")) ?? [];
            let userLogin;

            // so sánh user với từng phần tử trong accountDB
            accountDB.forEach(user => {
                if (emailValue === user.email && passwordValue === user.password) {
                    // gán userLogin = user
                    userLogin = user;
                    // xoá key password để bảo mật người dùng
                    delete userLogin.password;
                }
            });
            // đẩy user lên local và chuyển trang nếu sai thì thông báo cho người dùng biết
            if (userLogin) {
                localStorage.setItem("userLogin", JSON.stringify(userLogin));
                window.location = "/";
            } else {
                const errorElement = document.querySelector("#error");
                errorElement.innerHTML = "Email hoặc mật khẩu không chính xác";
            }
        })