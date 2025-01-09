export const enlargeImage = (imageElement: HTMLImageElement) => {
  // Create overlay div
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '9999';
  overlay.style.cursor = 'pointer';
  overlay.style.transition = 'opacity 0.3s ease';

  // Create enlarged image
  const enlargedImg = document.createElement('img');
  enlargedImg.src = imageElement.src;
  enlargedImg.alt = imageElement.alt;
  enlargedImg.style.maxHeight = '90vh';
  enlargedImg.style.maxWidth = '90vw';
  enlargedImg.style.objectFit = 'contain';
  enlargedImg.style.transition = 'transform 0.3s ease';
  
  // Add elements to overlay
  overlay.appendChild(enlargedImg);
  document.body.appendChild(overlay);
  
  // Prevent body scrolling
  document.body.style.overflow = 'hidden';

  // Close handlers
  const closeEnlarged = () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(overlay);
      document.body.style.overflow = '';
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