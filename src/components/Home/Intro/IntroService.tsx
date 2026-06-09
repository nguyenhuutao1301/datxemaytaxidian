import Image from "next/image";
import { siteConfig } from "@/config/default.config";

const TaxiServiceIntro = () => {
  return (
    <div className="px-4 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Text Section */}
        <div className="md:col-span-7">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              <span className="text-blue-600 font-semibold text-sm md:text-base tracking-wide uppercase">
                Dịch vụ hàng đầu Việt Nam
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Taxi Chuyên Nghiệp <br />
              <span className="text-blue-600">Cho Mọi Chuyến Đi</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Chúng tôi cung cấp dịch vụ taxi 4 chỗ, 7 chỗ, giao hàng và xe máy chất lượng cao với tài xế chuyên nghiệp,
              giá cả cạnh tranh và phục vụ 24/7 trên toàn quốc.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Giá Cạnh Tranh</p>
                  <p className="text-xs text-gray-600">Giá tốt nhất thị trường</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Tài Xế Uy Tín</p>
                  <p className="text-xs text-gray-600">Chuyên nghiệp, an toàn</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Phục Vụ 24/7</p>
                  <p className="text-xs text-gray-600">Luôn sẵn sàng</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Toàn Quốc</p>
                  <p className="text-xs text-gray-600">Phục vụ khắp nơi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image + Hotline Section */}
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-25"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex justify-center mb-6">
                <Image
                  src="/grab-image-5.png"
                  alt={siteConfig.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>

              <div className="space-y-4">
                <p className="text-center text-gray-700 font-medium">Liên hệ ngay để nhận ưu đãi đặc biệt!</p>

                <a
                  href={`tel:${siteConfig.contactInfo.phone}`}
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📞 {siteConfig.contactInfo.phone}
                </a>

                <p className="text-center text-sm text-gray-600">Phục vụ 24/7, không ngoài giờ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiServiceIntro;
