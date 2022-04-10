## Note

### Mô hình client-server

- Client gửi một request lên server -> server response lại nội dung website (HTML, CSS, JS, ...).

### Npm

- Sử dụng câu lệnh: `npm i --save-exact express@4.17.1` để cài đặt express đúng version mong muốn.
    + --save để lưu vào file package.json.
    + -exact để cài đặt chính xác version mong muốn.
- Thư mục node_modules là những thư viện và version, không nên đẩy node_modules lên git. Khi clone code về chỉ
  cần `npm i`.
- File package-lock.json là nơi ghi chi tiết về dependencies trong file package.json.
- .gitignore là nơi chứa những file mà chúng ta không muốn đưa lên git.
- Chạy: `npm i` để cài đặt toàn bộ package trong dependencies file package.json.
- Chạy: `npm i --save-exact ejs@3.1.6` để cài đặt chính xác version.
- Cài đặt các package:
  ```
  npm install --save-exact body-parser@1.19.0 nodemon@2.0.12 @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6
  ```
- Chạy: `npm i --save dotenv` để cài đặt package dotenv

### Express

- Cấu trúc thư mục:
    - node_modules
    - src:
        - controllers
        - services/models (services tượng trưng cho models)
        - server.js: File chính
        - public: Lưu trữ các file tĩnh
            + css
            + image
            + js
        - configs: Là nơi cấu hình tham số của hệ thống.
            - viewEngine.js.
              ```
              import express from "express";
              const configViewEngine = (app) => {
                app.use(express.static("public"));
                app.set("view engine", "ejs");
                app.set("views", "./src/views");
              }
              export default configViewEngine;
              ```
        - views: chứa những file ejs
            - index.ejs
            - ...
    - .babelrc: file config babel (trình compiler): là công cụ chuyển đổi mã ES6+ thành phiên bản Javascript tương thích
      ngược trong các trình duyệt hoặc môi trường hiện tại và cũ hơn.
      ```
      // Nội dung file: 
      {
        "presets": ["@babel/preset-env"]
      }
      ```
    - .gitignore
    - package.json: Sửa lại file package.json
      ```
      "start": "nodemon --exec ./node_modules/.bin/babel-node src/server.js"
      ```
    - package-lock.json
    - .env: file môi trường

