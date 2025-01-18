export const enlargeImage = (imageElement: HTMLImageElement) => {
  // Get original image position/size
  const originalRect = imageElement.getBoundingClientRect();
  
  // Create overlay div
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '9999';
  overlay.style.cursor = 'pointer';
  overlay.style.transition = 'background-color 0.3s ease';

  // Clone the original image
  const enlargedImg = imageElement.cloneNode(true) as HTMLImageElement;
  enlargedImg.style.position = 'fixed';
  enlargedImg.style.top = originalRect.top + 'px';
  enlargedImg.style.left = originalRect.left + 'px';
  enlargedImg.style.width = originalRect.width + 'px';
  enlargedImg.style.height = originalRect.height + 'px';
  enlargedImg.style.margin = '0';
  enlargedImg.style.maxHeight = 'none';
  enlargedImg.style.maxWidth = 'none';
  enlargedImg.style.transition = 'all 0.3s ease';
  enlargedImg.style.zIndex = '-1';

  overlay.appendChild(enlargedImg);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  
  // Hide original image
  imageElement.style.visibility = 'hidden';

  // Calculate final dimensions
  const maxWidth = window.innerWidth * 0.9;
  const maxHeight = window.innerHeight * 0.9;
  const scale = Math.min(
    maxWidth / imageElement.naturalWidth,
    maxHeight / imageElement.naturalHeight,
    1
  );
  const finalWidth = imageElement.naturalWidth * scale;
  const finalHeight = imageElement.naturalHeight * scale;

  // Trigger opening animation
  requestAnimationFrame(() => {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    enlargedImg.style.top = `${(window.innerHeight - finalHeight) / 2}px`;
    enlargedImg.style.left = `${(window.innerWidth - finalWidth) / 2}px`;
    enlargedImg.style.width = finalWidth + 'px';
    enlargedImg.style.height = finalHeight + 'px';
    
    // Restore z-index after animation
    setTimeout(() => {
      enlargedImg.style.zIndex = '1';
    }, 300);
  });

  // Close handler with reverse animation
  const closeEnlarged = () => {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    enlargedImg.style.top = originalRect.top + 'px';
    enlargedImg.style.left = originalRect.left + 'px';
    enlargedImg.style.width = originalRect.width + 'px';
    enlargedImg.style.height = originalRect.height + 'px';
    
    setTimeout(() => {
      document.body.removeChild(overlay);
      document.body.style.overflow = '';
      imageElement.style.visibility = 'visible';
    }, 300);
  };

  overlay.onclick = closeEnlarged;
  
  // Escape key handler
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeEnlarged();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  
  document.addEventListener('keydown', handleEscape);
};