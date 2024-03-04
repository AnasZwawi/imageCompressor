Project Name: Client-Side Image Compression

Description:
This project provides a JavaScript function resizeImage that allows you to resize images on the client-side before uploading them. The function resizes the image to fit within specified maximum width and height, while also offering compression to reduce file size.

Usage:
Simply include the provided function (resizeImage) in your JavaScript code and call it passing the image file as a parameter. The function returns a Promise that resolves with the resized image file.

Parameters:
imageFile: The image file to be resized.

Configuration:
maxWidth: The maximum width for the resized image. Default is 1000 pixels.
maxHeight: The maximum height for the resized image. Default is 1000 pixels.
compressionQuality: The compression quality for the resized image (0 to 1). Default is 0.8.

Compatibility:
This function should work on modern browsers supporting the File API, FileReader, canvas element, and Blob API.

License:
This project is licensed under the MIT License. See the LICENSE file for details.

Author:
AnasZwawi

Contact:
anas.zouaoui.tn@gmail.com

Disclaimer:
This project is provided as is, without any warranty. Use at your own risk.
