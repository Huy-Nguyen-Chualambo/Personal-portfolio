# PORTFOLIO DESIGN SPECIFICATION
## 1. Design & Vibe (Core Identity)
*   **Theme:** Super Minimalist (siêu tối giản).
*   **Color Palette:**
    *   **Background:** Trắng tinh (`#ffffff`) hoặc Off-white rất nhẹ (`#f9fafb`) để đỡ mỏi mắt.
    *   **Text:** Đen tuyền (`#000000`) cho tiêu đề, Xám đậm (`#333`) cho nội dung, Xám nhạt (`#888`) cho các chi tiết phụ.
    *   **Accent:** Sử dụng chính màu Đen cho các nút bấm (Buttons) để tạo độ tương phản mạnh (High Contrast).
*   **Typography:** Sans-serif hiện đại, nét đậm (Bold) cho tiêu đề để tạo điểm nhấn thị giác (Visual Hierarchy). Gợi ý: `Inter` hoặc `Space Grotesk`.

## 2. Cấu trúc Landing Page (Dựa trên ảnh tham khảo)
Chúng ta sẽ xây dựng trang chủ dạng "One-page scroll" hoặc cấu trúc phân trang gọn gàng:

### A. Hero Section (Lời chào)
*   **Layout:** Căn giữa hoặc lệch trái (như ảnh 1).
*   **Element:**
    *   Headline cực lớn: "Hello, I'm [Name]."
    *   Sub-headline: Mô tả ngắn gọn vị trí (Fresher Frontend Dev).
    *   CTA Buttons: 2 nút.
        *   Primary: "Project" (Nền đen, chữ trắng).
        *   Secondary: "Get Resume" (Viền đen, nền trắng).
*   *Framer Motion Idea:* Text xuất hiện từ từ (Fade in + Slide up).

### B. Selected Works (Dự án - Phần quan trọng nhất)
*   **Layout:** Dạng danh sách dọc (như ảnh 2) hoặc Grid so le.
*   **Card Design:**
    *   Hình ảnh thumbnail lớn, chất lượng cao (có thể dùng hiệu ứng scale nhẹ khi hover).
    *   Tên dự án to, rõ ràng.
    *   Tech stack đi kèm (dạng tags nhỏ).
    *   Nút "View Project" tinh tế.
*   *Framer Motion Idea:* Hiệu ứng "Parallax scroll" nhẹ nhàng khi cuộn chuột qua các ảnh dự án.

### C. Tech Stack & Experience
*   **Tech Stack:** Grid icon đơn giản, sạch sẽ (như ảnh 3).
*   **Experience:** Dạng Timeline dọc (trục thời gian). Vì là sinh viên mới ra trường, ta có thể ghi các mốc: "University Graduation", "Internship at Company X", "Freelance Project", v.v.

### D. Footer (Mời gọi hành động)
*   **Style:** Nền đen hoàn toàn, chữ trắng (như ảnh 2 & 3).
*   **Content:** "Have a vision? Let's build it." + Các link social (GitHub, LinkedIn).

## 3. Tech Implementation Strategy
*   **Framework:** `Next.js 14` (App Router) - Tối ưu SEO & Performance.
*   **Styling:** `TailwindCSS` - Code nhanh layout.
*   **Animation:** `Framer Motion` - Chìa khóa để tạo cảm giác "Premium".
    *   *Micro-interactions:* Hover vào nút, nút nảy nhẹ.
    *   *Page Transition:* Chuyển trang mượt mà.
    *   *Scroll Reveal:* Các phần tử trồi lên khi cuộn xuống.

## 4. Nội dung cần chuẩn bị (User Input)
Để portfolio thật sự là của bạn, mình sẽ cần bạn chuẩn bị dần:
1.  **3-4 Hình ảnh dự án:** Ảnh chụp màn hình đẹp nhất của các web bạn từng làm.
2.  **Link GitHub/Demo:** Cho các dự án đó.
3.  **Link CV (PDF):** Để gắn vào nút download.
