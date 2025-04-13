import React from "react";

interface LightDarkImageProps {
  srcLight: string;
  srcDark: string;
  alt: string;
  caption?: string;
}

const LightDarkImage: React.FC<LightDarkImageProps> = ({
  srcLight,
  srcDark,
  alt,
  caption,
}) => {
  return (
    <figure className="my-8">
      <picture>
        <source srcSet={srcDark} media="(prefers-color-scheme: dark)" />
        <img src={srcLight} alt={alt} className="w-full rounded-lg shadow-lg" />
      </picture>
      {caption && (
        <figcaption className="mt-3 text-sm text-center text-gray-600 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default LightDarkImage;
