# 🚀 Hướng dẫn chạy Portfolio Website

## Bước 1: Cài đặt Dependencies

Mở terminal/command prompt và chạy lệnh:

```bash
npm install
```

Lệnh này sẽ cài đặt tất cả các package cần thiết (React, React-DOM, React-Scripts).

## Bước 2: Chạy Development Server

Sau khi cài đặt xong, chạy lệnh:

```bash
npm start
```

## Bước 3: Xem kết quả

Sau khi chạy `npm start`, bạn sẽ thấy:

1. **Trong terminal/console:**
   ```
   Compiled successfully!
   
   You can now view portfolio-kieu-van-son in the browser.
   
     Local:            http://localhost:3000
     On Your Network:  http://192.168.x.x:3000
   ```

2. **Trong trình duyệt:**
   - Trình duyệt sẽ tự động mở tại `http://localhost:3000`
   - Nếu không tự mở, bạn copy link `http://localhost:3000` và paste vào trình duyệt

3. **Trong Console của trình duyệt (F12):**
   - Bạn sẽ thấy thông tin về URL và thông điệp chào mừng
   - Mở Developer Tools (F12) → Tab Console để xem

## Các lệnh khác

### Build cho Production:
```bash
npm run build
```
Tạo thư mục `build/` chứa các file đã được tối ưu để deploy lên server.

### Chạy Tests:
```bash
npm test
```

## Lưu ý

- **Port mặc định:** 3000
- **Nếu port 3000 đã được sử dụng:** React sẽ tự động hỏi bạn có muốn dùng port khác không (ví dụ: 3001)
- **Hot Reload:** Khi bạn sửa code, trang web sẽ tự động reload
- **Để dừng server:** Nhấn `Ctrl + C` trong terminal

## Xem Console Log

Để xem console.log với URL:
1. Mở trình duyệt
2. Nhấn `F12` hoặc `Right-click → Inspect`
3. Chọn tab **Console**
4. Bạn sẽ thấy thông tin về URL và các log khác

## Troubleshooting

### Lỗi "npm: command not found"
→ Cần cài đặt Node.js từ https://nodejs.org/

### Lỗi "Port 3000 is already in use"
→ Đóng ứng dụng đang dùng port 3000 hoặc chọn port khác khi được hỏi

### Lỗi khi npm install
→ Xóa thư mục `node_modules` và file `package-lock.json`, sau đó chạy lại `npm install`

---

**Chúc bạn thành công! 🎉**

