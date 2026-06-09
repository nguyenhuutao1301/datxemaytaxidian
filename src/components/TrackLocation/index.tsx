"use client";

import { useEffect } from "react";
import axiosInstance from "@/untils/axios";
import { useUser } from "@/context/UserContext";
import generateVisitorId from "@/helpers/createVisitId.helpper";
export default function TrackUserLocation() {
  const { user } = useUser();

  useEffect(() => {
    let visitorId = localStorage.getItem("visitor_id");
    if (!visitorId) {
      visitorId = generateVisitorId();
      localStorage.setItem("visitor_id", visitorId);
    }
    const sendTrackingData = async (lat?: number, lon?: number) => {
      const ref = window.location.href;
      const checkRef = async (ref: string) => {
        const url = ref.toLowerCase();

        if (url.includes("gclid") || url.includes("gbraid")) {
          return "google ads";
        } else if (url.includes("fbclid")) {
          return "facebook";
        } else if (url.includes("zalo")) {
          return "zalo";
        } else {
          try {
            const parsedUrl = new URL(ref);
            const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
            if (pathSegments.length === 0) return "[SEO] home";

            const lastSegment = pathSegments[pathSegments.length - 1];
            const cleanedText = lastSegment
              .replace(/[-_]+/g, " ")
              .replace(/\s+/g, " ")
              .trim();

            return `[SEO] ${cleanedText}`;
          } catch (error) {
            console.warn(error);
            return "seo";
          }
        }
      };
      const source = await checkRef(ref); // ✅ await Promise
      if (user?.role === "admin" || user?.role === "supperAdmin") return;
      axiosInstance.post("/api/traffic/create/tracking", {
        lat,
        lon,
        referrer: source,
        userAgent: navigator.userAgent,
        visitorId,
      });
    };
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          sendTrackingData(pos.coords.latitude, pos.coords.longitude);
        },
        (err) => {
          console.warn("Không lấy được vị trí:", err);
          sendTrackingData();
        }
      );
    } else {
      sendTrackingData();
    }
  }, [user?.role]);

  return null;
}
