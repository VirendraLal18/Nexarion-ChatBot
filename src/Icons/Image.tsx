// Image.tsx
import React from 'react';
import imageSrc from '../assets/image.webp'; // Adjust the path as needed

interface ImageProps {
  alt?: string;
  width?: number;
  height?: number;
  src?: string;
  onMouseMove?: React.MouseEventHandler<HTMLImageElement>; // Add onMouseMove handler
  className?: string; // Add className for styling
}

const Image: React.FC<ImageProps> = ({ alt = 'WebP Image', width = 300, height = 200, src = imageSrc, onMouseMove, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onMouseMove={onMouseMove} // Add onMouseMove handler
      className={className} // Add className for styling
      style={{ objectFit: 'cover' }} // Optional: Adjust the fit if needed
    />
  );
};

export default Image;
