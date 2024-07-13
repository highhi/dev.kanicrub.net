"use client";

import { useEffect, useState } from "react";

export const UpLoader = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  // 入力されたファイルを取得するイベントハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file === undefined) return;

    // 入力されたファイルがimage/jpegかimage/pngでなければreturn
    if (!file.type.startsWith("image/")) return;

    if (imageUrl) URL.revokeObjectURL(imageUrl);
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  return (
    <div>
      <input
        onChange={handleChange}
        type="file"
        accept="image/jpeg,image/png"
      />
      {imageUrl && <img src={imageUrl} />}
    </div>
  );
};
