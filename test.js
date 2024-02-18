function verifyImage(image) {
    // Vérifier la taille
    if (image.width !== 512 || image.height !== 512) {
      return false;
    }
  
    // Vérifier la transparence
    for (let x = 0; x < image.width; x++) {
      for (let y = 0; y < image.height; y++) {
        const pixel = image.getPixel(x, y);
        if (pixel.alpha !== 0) {
          // Pixel non transparent trouvé en dehors du cercle
          if (!isInsideCircle(x, y)) {
            return false;
          }
        }
      }
    }
  
    // Vérifier les couleurs (optionnel)
    // ...
  
    return true;
  }
  
  function isInsideCircle(x, y) {
    const centerX = image.width / 2;
    const centerY = image.height / 2;
    const radius = Math.min(centerX, centerY);
    const distance = Math.sqrt((x - centerX)**2 + (y - centerY)**2);
    return distance <= radius;
  }
  