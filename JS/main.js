// ĐĂNG KÝ
function dangKY(event) {
    let form = document.querySelector("#registerForm");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    event.preventDefault(); // Ngăn gửi form để kiểm tra dữ liệu

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Xác nhận mật khẩu
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        confirmPassword.focus();
        return;
    }

    if (password.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 kí tự");
        return;
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return;
    }

    alert('Đăng ký thành công!');
    form.reset();
}


//ĐĂNG NHẬP
function dangNhap(event) {
    let form = document.querySelector("#loginForm");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    event.preventDefault(); // Ngăn gửi form để kiểm tra dữ liệu

    // Kiểm tra nếu người dùng chưa nhập email hoặc mật khẩu
    if (email === '' || password === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Kiểm tra định dạng email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return;
    }

    // Giả sử đăng nhập thành công, thông báo cho người dùng
    alert("Đăng nhập thành công!");

    // Chuyển hướng về trang chủ
    window.location.href = '/HTML/trang chu.html';
}


// FOOTER
function capnhatTTkhuyenmai(event) {
    event.preventDefault();  // Ngăn chặn hành động submit mặc định

    let email = document.getElementById("email").value;
    if (email === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return;
    }

    alert('Đăng ký nhận thông tin khuyến mãi thành công!');
}


// Trang liên hệ
function lienHe() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let form = document.getElementById("contactForm");

    if (name === '' || email === '' || message === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ.');
        return;
    }

    alert('Gửi liên hệ thành công! Cảm ơn bạn đã liên hệ với chúng tôi.');
    form.reset();
}

//ĐÁNH GIÁ
function reviewText(event) {
    event.preventDefault(); // Ngăn chặn hành động submit mặc định
    let input = document.getElementById("message").value.trim();
    let form = document.getElementById("formDanhgia");

    if (input === '') {
        alert('Vui lòng viết đánh giá!');
        return;
    }

    alert('Cảm ơn bạn đã gửi đánh giá');
    form.reset();
}