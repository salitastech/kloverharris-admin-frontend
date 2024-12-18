import { USE_IMAGE_PLACEHOLDERS } from '../constants/paths';

export const getAssetPath = (
  url: string,
  size?: string,
  USE_PLACEHOLDER = false
) => {
  if (USE_PLACEHOLDER || USE_IMAGE_PLACEHOLDERS) {
    return `https://via.placeholder.com/${size}.png`;
  }
  return url;
};
