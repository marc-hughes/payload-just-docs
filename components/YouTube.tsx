import React from "react";

interface YouTubeProps {
  id: string;
  title: string;
}

const YouTube: React.FC<YouTubeProps> = () => {
  // For now, we're just returning null
  // If you want to actually embed videos later, you can update this component
  return null;
};

export default YouTube;
