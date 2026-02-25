document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const device = document.querySelector('input[name="deviceType"]:checked').value;
    const msg = document.getElementById('msg');

    if (user === "admin" && pass === "123456") {
        sessionStorage.setItem('deviceType', device);
        msg.style.color = "green";
        msg.innerText = "กำลังเข้าสู่ระบบ...";
        
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        msg.style.color = "red";
        msg.innerText = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง!";
    }
});