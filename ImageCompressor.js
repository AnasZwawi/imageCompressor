const resizeImage = async (imageFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Resize the image to a max width and max height
        const maxWidth = 1000;
        const maxHeight = 1000;
        const compressionQuality = 0.8; // (0 to 1)

        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Draw the image on the canvas after resizing
        ctx.drawImage(img, 0, 0, width, height);

        // Convert the canvas content to a Blob with compression
        canvas.toBlob(
          (blob) => {
            const resizedImage = new File([blob], imageFile.name, {
              type: imageFile.type,
            });
            resolve(resizedImage);
          },
          imageFile.type, // Maintain the original image type
          compressionQuality // Set the compression quality
        );
      };
    };

    reader.onerror = (error) => {
      console.error("Error reading image:", error);
      reject(error);
    };

    // Read the image file as a data URL
    reader.readAsDataURL(imageFile);
  });
};