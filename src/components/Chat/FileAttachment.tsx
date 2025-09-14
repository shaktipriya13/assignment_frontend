import { useDropzone } from "react-dropzone";

type FileAttachmentProps = {
  onFiles: (files: File[]) => void;
};

const FileAttachment = ({ onFiles }: FileAttachmentProps) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop: onFiles });

  return (
    <div {...getRootProps()} className="border p-4 rounded bg-gray-50">
      <input {...getInputProps()} />
      <p>Drag & drop or paste files here</p>
    </div>
  );
};

export default FileAttachment;
