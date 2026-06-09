"use client";
import { useState, useEffect } from "react";
import { readSettingApi } from "@/api/settings/readSetting";
import createSettingApi from "@/api/settings/createSetting";
import updateSetting from "@/api/settings/updateSetting";
import deleteSetting from "@/api/settings/deleteSetting";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/solid";
import { siteConfig } from "@/config/default.config";

interface Setting {
  _id: string;
  slug: string;
  numberphone: string;
}

export default function SettingPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [currentId, setCurrentId] = useState<string | null>(null);

  const [slug, setSlug] = useState("");
  const [phone, setPhone] = useState("");

  const phoneRegex = /^0\d{9}$/;
  const slugRegex = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;

  const loadSettings = async () => {
    setLoading(true);
    setError("");
    const res = await readSettingApi();
    if (res.success) {
      setSettings(res.result);
    } else {
      setError(res.message || "Không thể tải danh sách");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const openAddModal = () => {
    setModalMode("add");
    setSlug("");
    setPhone("");
    setCurrentId(null);
    setError("");
    setSuccess("");
    setIsModalOpen(true);
  };

  const openEditModal = (s: Setting) => {
    setModalMode("edit");
    setSlug(s.slug);
    setPhone(s.numberphone);
    setCurrentId(s._id);
    setError("");
    setSuccess("");
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    setError("");
    setSuccess("");

    if (!slugRegex.test(slug)) {
      setError("Slug không hợp lệ!");
      return;
    }
    if (!phoneRegex.test(phone)) {
      setError("Số điện thoại không hợp lệ!");
      return;
    }

    setLoading(true);

    if (modalMode === "add") {
      const res = await createSettingApi({ slug, numberphone: phone });
      if (res.success) {
        setSuccess("Thêm thành công!");
        setIsModalOpen(false);
        loadSettings();
      } else {
        setError(res.message || "Lỗi khi thêm");
      }
    } else if (modalMode === "edit" && currentId) {
      const res = await updateSetting(currentId, {
        slug,
        numberphone: phone,
      });
      if (res.success) {
        setSuccess("Cập nhật thành công!");
        setIsModalOpen(false);
        loadSettings();
      } else {
        setError(res.message || "Lỗi khi cập nhật");
      }
    }

    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xoá cài đặt này?")) return;
    setLoading(true);
    const res = await deleteSetting(id);
    if (res.success) {
      setSuccess("Xoá thành công!");
      loadSettings();
    } else {
      setError(res.message || "Lỗi khi xoá");
    }
    setLoading(false);
  };

  return (
    <div className="w-full mx-auto p-4 relative">
      <h2 className="text-xl font-bold mb-4">Cài đặt Bài Viết & Số điện thoại</h2>

      {/* Danh sách */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Danh sách cài đặt</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <ul className="space-y-2">
            {settings.map((s) => (
              <li key={s._id} className="flex justify-between items-center border-b pb-2 text-sm">
                <div className="flex flex-col">
                  <span className="font-medium text-blue-500">{s.slug}</span>{" "}
                  <span className="text-gray-500 font-light">{s.numberphone}</span>
                </div>
                <div className="flex gap-2 ml-2">
                  <button
                    onClick={() => openEditModal(s)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-1 rounded"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-1 rounded"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={openAddModal}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
      >
        <PlusIcon className="w-6 h-6" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">{modalMode === "add" ? "Thêm cài đặt" : "Sửa cài đặt"}</h2>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Đường dẫn</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={slug}
                onPaste={(e) => {
                  e.preventDefault();

                  const pastedText = e.clipboardData.getData("text");

                  const prefix = `${siteConfig.domain}/bai-viet/`;

                  let newSlug = pastedText;

                  if (pastedText.includes(prefix)) {
                    newSlug = pastedText.replace(prefix, "");
                  }
                  newSlug = newSlug
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9-]/g, "-")
                    .replace(/-+/g, "-")
                    .replace(/^-|-$/g, "");

                  setSlug(newSlug);
                }}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="VD: grab-ha-noi"
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1 font-medium">Số điện thoại</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="VD: 0327883039"
              />
            </div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && <p className="text-green-500 mb-2">{success}</p>}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                Đóng
              </button>
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {loading ? "Đang lưu..." : "Lưu"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
