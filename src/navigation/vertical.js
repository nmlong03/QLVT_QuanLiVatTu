export const MENU_NAVIGATION = [
  {
    dropText: "Chi tiết vật tư",
    icon: "mdi-archive-search",
    children: [
      { title: "Danh sách vật tư", path: "/danh-sach-vat-tu" },
      { title: "Thêm thông tin vật tư", path: "/thong-tin-vat-tu" },
    ],
  },
  {
    dropText: "Khách hàng",
    icon: "mdi-account-file-text",
    children: [
      {
        title: "Danh sách khách hàng đã thuê",
        path: "/danh-sach-khach-hang-thue",
      },
    ],
  },
  {
    dropText: "Hóa Đơn",
    icon: "mdi-application-outline",
    children: [
      { title: "Xuất hóa đơn", path: "/xuat-hoa-don" },
      { title: "Thống kê hóa đơn", path: "/thong-ke-hoa-don" },
    ],
  },
  {
    dropText: "Lịch sử giao dịch",
    icon: "mdi-book-open-outline",
    children: [
      {
        title: "Danh sách lịch sử giao dịch",
        path: "/danh-sach-lich-su-giao-dich",
      },
    ],
  },
  {
    dropText: "Thống kê",
    icon: "mdi-alarm-panel",
    children: [{ title: "Thống kê doanh thu", path: "/thong-ke-doanh-thu" }],
  },
  {
    dropText: "Nhân Viên",
    icon: "mdi-account-cog",
    children: [
      { title: "Tạo tài khoản nhân viên ", path: "/tao-tai-khoan-nhan-vien" },
    ],
  },
];
