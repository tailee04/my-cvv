import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Avatar + Tên */}
      <div className="header">
        <img src="/avatar.jpg" alt="avatar" />
        <h1>Lê Văn Tài</h1>
        <p>Developer CNTT</p>
      </div>

      {/* Thông tin liên hệ */}
      <section>
        <h2>Thông tin liên hệ</h2>
        <p>Email: tailee1357@gmail.com</p>
        <p>Số điện thoại: 0333965489</p>
        <p>Địa chỉ: 1B Phan Đình Phùng, Phường Vĩnh Ninh, Quận Thuận Hóa, TP Huế</p>
        <p>GitHub: <a href="https://github.com/tailee04">https://github.com/tailee04</a></p>
      </section>

      {/* Học vấn */}
      <section>
        <h2>Học vấn</h2>
        <p><strong>Ngành Công nghệ Thông tin</strong></p>
        <p>Đại học Khoa học Huế | 2022 - 2026</p>
      </section>

      {/* Kinh nghiệm làm việc */}
      <section>
        <h2>Kinh nghiệm làm việc</h2>
        <div>
          <p><strong>Thực tập sinh</strong></p>
          <p>Công ty XYZ | 2023 - 2024</p>
          <ul>
            <li>Hỗ trợ phát triển website bán hàng sử dụng HTML, CSS, JavaScript.</li>
            <li>Viết báo cáo kỹ thuật và tài liệu API.</li>
            <li>Tìm hiểu, fix bug nhỏ trong hệ thống backend.</li>
          </ul>
        </div>
      </section>

      {/* Kỹ năng */}
      <section>
        <h2>Kỹ năng</h2>
        <div className="skills">
          <span>Java</span>
          <span>C/C++</span>
          <span>Python</span>
          <span>PHP</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SQL</span>
        </div>
      </section>
    </div>
  );
}

export default App;
