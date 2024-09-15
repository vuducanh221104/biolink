"use client";
// pages/install-app.js
import { useEffect } from "react";

const InstallApp = () => {
  useEffect(() => {
    window.location.href =
      "itms-services://?action=download-manifest&url=https://cloneminhtuan.id.vn/plist/com.khoindvn.fans.link1.plist";
  }, []);

  return null; // Không cần hiển thị gì cả
};

export default InstallApp;
