// pages/sign/uuid/show.js
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const ShowUUID = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      <p>Received UUID</p> // Điều chỉnh theo cấu trúc dữ liệu trả về
    </div>
  );
};

export default ShowUUID;
