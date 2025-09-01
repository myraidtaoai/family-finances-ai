import { useEffect, useRef } from "react";

export default function UploadArea() {
    const uploadRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = uploadRef.current;
        if (!el) return;

        const onDrop = (e: DragEvent) => {
            e.preventDefault();
            const files = e.dataTransfer?.files;
            if (files && files.length > 0) {
                alert("文件上传成功: " + files[0].name);
            }
        };


        el.addEventListener("dragover", (e) => e.preventDefault());
        el.addEventListener("drop", onDrop);


        return () => {
            el.removeEventListener("drop", onDrop);
        };
    }, []);


    return (
    <div ref={uploadRef} className="upload-area" onClick={() => alert("点击上传文件")}>
        <div className="upload-icon">☁️⬆️</div>
        <div className="text-gray-600 mb-2">拖拽图片到此处或点击上传</div>
        <div className="text-sm text-gray-500">支持PNG、JPG格式，最大5MB</div>
    </div>
    );
}