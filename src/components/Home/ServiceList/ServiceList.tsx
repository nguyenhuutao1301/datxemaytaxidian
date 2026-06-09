"use client";

import Image from "next/image";

type Service = {
  img: string;
  title: string;
  desc: string;
  icon?: string;
};

const services: Service[] = [
  {
    img: "/taxi-4-cho.png",
    title: "Taxi 4 Chỗ",
    desc: "Di chuyển tiện lợi, nhanh chóng và tiết kiệm chi phí cho cá nhân hoặc gia đình nhỏ.",
    icon: "🚕",
  },
  {
    img: "/taxi-7-cho.jpg",
    title: "Taxi 7 Chỗ",
    desc: "Phù hợp cho nhóm bạn hoặc gia đình đông người, không gian rộng rãi, thoải mái.",
    icon: "🚐",
  },
  {
    img: "/taxi-lien-tinh.png",
    title: "Xe Đi Tỉnh",
    desc: "Chuyên tuyến liên tỉnh, đảm bảo an toàn, tài xế chuyên nghiệp, phục vụ tận nơi.",
    icon: "🛣️",
  },
  {
    img: "/taxi-san-bay.png",
    title: "Giao Hàng Nhanh",
    desc: "Giao hàng siêu tốc trong ngày, phù hợp với shop, cửa hàng và cá nhân.",
    icon: "📦",
  },
];

export default function ServiceList() {
  return (
    <section className="px-4 md:px-8 py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-blue-600 rounded"></div>
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">Dịch Vụ Chúng Tôi</span>
            <div className="w-8 h-1 bg-blue-600 rounded"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Giải Pháp Vận Chuyển Toàn Diện</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp các dịch vụ vận chuyển linh hoạt, phù hợp với mọi nhu cầu di chuyển của bạn.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden bg-gray-200">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 min-h-[60px]">{service.desc}</p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
                  Đặt Ngay
                </button>
              </div>

              {/* Accent border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Chất Lượng Hàng Đầu</h3>
            <p className="text-gray-600 text-sm">Xe sạch sẽ, tài xế lành nghề, dịch vụ tận tâm</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🕐</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Nhanh Chóng & Đúng Giờ</h3>
            <p className="text-gray-600 text-sm">Đón tận nơi, đến đích nhanh chóng</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Giá Cạnh Tranh</h3>
            <p className="text-gray-600 text-sm">Giá tốt nhất, không phụ phí ẩn</p>
          </div>
        </div>
      </div>
    </section>
  );
}
