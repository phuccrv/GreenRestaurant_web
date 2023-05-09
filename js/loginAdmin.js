const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

const adminAccount = {
  email: "phuccrv@gmail.com",
  password: "123456789",
};

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (adminAccount.email === email && adminAccount.password === password) {
    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem('loggedInAdmin', JSON.stringify(adminAccount));
    // Chuyển hướng đến trang admin.html
    window.location.href = "admin.html";
  } else {
    // Đăng nhập thất bại
    errorMsg.textContent = "Email hoặc mật khẩu không đúng.";
  }
});