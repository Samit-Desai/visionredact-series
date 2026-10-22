# VisionRedact Studio: building a 4K video redaction app in C#

I built VisionRedact Studio, a Windows desktop app that uses AI to find faces in video and blurs them before the
video is shared. This repository holds the series I wrote about building it: what I designed, what went wrong, what I
measured, and what each fix cost.

**Watch it on the website:** [samit-desai.github.io/visionredact-series](https://samit-desai.github.io/visionredact-series/)

## What video redaction is for

Before a video is shared, people who never agreed to appear in it often have to be hidden:

- **Courts and legal cases**: evidence shared with the other side or shown in public.
- **Police and body cameras**: footage released to the public.
- **CCTV and security**: when footage is handed over, for example to someone who asked for footage of themselves,
  other people who can be identified often need to be hidden, depending on the circumstances.
- **Schools, hospitals and workplaces**: recordings of children, patients or staff.
- **News and research**: bystanders who never agreed to appear.

By hand, that means drawing over every face in every frame, and my 23-minute test recording (59.94 fps) has
82,373 frames. In VisionRedact, the AI finds the faces on the laptop's GPU, without uploading anything, and a person
checks them. Every face it finds stays blurred until someone rejects it.

## The series

| | Episode | Read | Watch | Carousel |
|---|---|---|---|---|
| 0 | **[Trailer (start here)](00-trailer/README.md)**: what the app does, in 78 seconds | [Overview](00-trailer/README.md) | [trailer.mp4](00-trailer/trailer.mp4) | |
| 1 | **[Smooth 4K60 video in WPF](01-smooth-4k60/README.md)**: From 7 FPS to 60, measured step by step. | [Article](01-smooth-4k60/README.md) | [video.mp4](01-smooth-4k60/video.mp4) | [PDF](01-smooth-4k60/carousel.pdf) |
| 2 | **[YouTube-style timeline previews in WPF](02-timeline-previews/README.md)**: Half-second seeks, microsecond lookups: a thumbnail, then the exact frame. | [Article](02-timeline-previews/README.md) | [video.mp4](02-timeline-previews/video.mp4) | [PDF](02-timeline-previews/carousel.pdf) |
| 3 | **[Local AI on the GPU in C#](03-local-ai-gpu/README.md)**: Hugging Face YOLO with ONNX Runtime and DirectML, from faces to tracks to people. | [Article](03-local-ai-gpu/README.md) | [video.mp4](03-local-ai-gpu/video.mp4) | [PDF](03-local-ai-gpu/carousel.pdf) |
| 4 | **[Redaction you can trust](04-review-and-export/README.md)**: Fail-safe review, and a parallel 4K export pipeline with FFmpeg. | [Article](04-review-and-export/README.md) | [video.mp4](04-review-and-export/video.mp4) | [PDF](04-review-and-export/carousel.pdf) |
| 5 | **[The engineering behind VisionRedact](05-engineering/README.md)**: System design, threads, and design patterns, each with the problem it solves. | [Article](05-engineering/README.md) | [video.mp4](05-engineering/video.mp4) |  |

## Built with

C# · .NET 10 · WPF · Prism · OpenCV (Emgu CV) · ONNX Runtime · DirectML · YOLO face models from Hugging Face · FFmpeg

## How I measured

The numbers come from my development laptop (Intel Core Ultra 9 185H, RTX 3500 Ada laptop GPU). They are read from
the app's own Diagnostics counters, or timed by a benchmark harness that runs the app's own classes. Each article
says how it measured and under what conditions. The raw results are in [measurements](measurements/README.md).

## The code

The app's source code is public: [github.com/Samit-Desai/VisionRedact](https://github.com/Samit-Desai/VisionRedact). File and class names in the
articles refer to that code, and the raw benchmark outputs are in [measurements](measurements/README.md).

## Notes

- I built the app with an AI coding assistant as my pair programmer. The design, the measurements and the mistakes
  are mine.
- The video narration is an AI voice made from my own voice.

## Credits

Footage: Talha Uguz, Towfiqu barbhuiya, William Fortunato / Pexels. *Tears of Steel* (CC) Blender Foundation | mango.blender.org, licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/), shown in the app with faces blurred where redaction is on.

© 2026 Samit Desai. The articles, diagrams and videos are mine. The footage keeps its own license.

[LinkedIn](https://www.linkedin.com/in/samit-desai-62868420)
