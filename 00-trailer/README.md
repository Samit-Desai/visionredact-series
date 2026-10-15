# Trailer: VisionRedact Studio in 78 seconds

[Watch the trailer (MP4)](trailer.mp4)

VisionRedact Studio uses community YOLO models from Hugging Face to find faces in video. ONNX Runtime runs them on
DirectML, and the app blurs the faces while 4K60 video plays. Everything stays on the PC: no cloud, and no Python at
runtime.

- It finds faces on the GPU, or on the CPU if the GPU can't load the model.
- It keeps boxes on faces between scans, and can group faces into people.
- A person approves or rejects what the AI found, and draws boxes over anything it missed. A detected face stays
  blurred until someone rejects it.
- It previews a blur, pixelation or a black box live.
- It shows YouTube-style timeline previews: once the first preview tiles are built, a thumbnail appears instantly,
  then the exact frame.
- It exports with audio, and warns when part of the video isn't covered by the face scan.

The series starts with [Episode 1: smooth 4K60 video in WPF](../01-smooth-4k60/README.md).

Footage: Talha Uguz, Towfiqu barbhuiya, William Fortunato / Pexels. *Tears of Steel* (CC) Blender Foundation | mango.blender.org, licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), shown in the app with faces blurred where redaction is on.
