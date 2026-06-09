// components/PostContent.tsx
import Link from "next/link";
import { FC } from "react";

type PostContentProps = {
  authorUrl?: string;
  title: string;
  author: string;
  createdAt: string;
  content: string;
  image: string;
};

const PostContent: FC<PostContentProps> = ({ title, author, authorUrl, createdAt, content, image }) => {
  return (
    <article className="max-w-4xl bg-white mx-auto p-4">
      {/* Ảnh */}
      {image && (
        <section className="w-full flex justify-center mb-6">
          <div className="relative w-full md:w-[70%] aspect-[3/2] rounded overflow-hidden">
            <img src={image} alt={title} className="absolute w-full h-full object-cover rounded" loading="lazy" />
          </div>
        </section>
      )}

      {/* Nội dung bài viết */}
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full w-full mx-auto overflow-hidden blog-content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className="mt-8 p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Thông Tin Liên Hệ</h2>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <span className="font-medium">Địa chỉ:</span> 188 DT743, Đông Hòa, TP Hồ Chí Minh
            </li>
            <li>
              <span className="font-medium">Điện thoại:</span>{" "}
              <a href="tel:0933551965" className="text-blue-600 hover:underline hover:text-blue-800">
                0933.551.965
              </a>
            </li>
            <li>
              <span className="font-medium">Zalo:</span>{" "}
              <a href="https://zalo.me/0933551965" className="text-blue-600 hover:underline hover:text-blue-800">
                0933.551.965
              </a>
            </li>
            <li>
              <span className="font-medium">Website:</span>{" "}
              <a
                href="https://hotrodatxesieure.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                hotrodatxesieure.com
              </a>
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:tranhuuphong08051993@gmail.com"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                tranhuuphong08051993@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer: Tác giả + Action */}
      <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="text-sm text-gray-600">
            <Link href={authorUrl ?? "/"} className="text-blue-600 hover:underline">
              Đăng bởi {author}
            </Link>{" "}
            - {new Date(createdAt).toLocaleDateString("vi-VN")}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostContent;
