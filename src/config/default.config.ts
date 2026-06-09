interface FeatureData {
  src: string;
  alt: string;
  title: string;
  desc: string;
}
const siteConfig = {
  siteName: "TAXI GIÁ RẺ",
  name: "TAXI GIÁ RẺ | Đặt 4 - 7 Chỗ Nhanh Nhất",
  title: "TAXI GIÁ RẺ | Đặt 4 - 7 Chỗ Nhanh Nhất",
  description: "Tổng đài taxi liên tỉnh , xe đời mới tài lâu năm đón nhanh chỉ 5 phút gọi xe đặt xe nhiều ưu đãi",
  domain: "https://datxemaytaxidian.com",
  metaDescription: "Tổng đài taxi liên tỉnh , xe đời mới tài lâu năm đón nhanh chỉ 5 phút gọi xe đặt xe nhiều ưu đãi",
  keywords: "taxi tphcm,taxi giá rẻ,taxi gần đây,grab,bee,xanh sm,đặt xe,4 chỗ,7 chỗ",
  logo: "https://datxemaytaxidian.com/logo.png",
  contactInfo: {
    phone: "0933551965",
    email: "tranhuuphong08051993@gmail.com",
    address: "DT743 Đông Hòa TP Hồ Chí Minh",
  },
};
const featureData: FeatureData[] = [
  {
    src: `/feature1.png`,
    alt: "Taxi 4 cho & 7 cho",
    title: "HỆ THỐNG RỘNG KHẮP",
    desc: "Taxi có mặt khắp các tỉnh thành trên toàn quốc",
  },
  {
    src: `/feature2.png`,
    alt: "Taxi 4 cho & 7 cho",
    title: "PHỤC VỤ CHUYÊN NGHIỆP",
    desc: "Đội ngũ tài xế chuyên nghiệp , thân thiện và nhiệt tình",
  },
  {
    src: `/feature3.png`,
    alt: "Taxi 4 cho & 7 cho",
    title: "GIÁ CỰC RẺ",
    desc: "Giá cả cạnh tranh nhất thị trường với nhiều ưu đãi hấp dẫn",
  },
  {
    src: `/feature4.png`,
    alt: "Taxi 4 cho & 7 cho",
    title: "HỖ TRỢ 24/7",
    desc: "Đội ngũ tổng đài viên hỗ trợ 24/7 sẵn sàng phục vụ bạn",
  },
];
export { siteConfig, featureData };
