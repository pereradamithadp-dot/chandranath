import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({ projectId, dataset });

type ImageSource = Parameters<typeof builder.image>[0];

/** Width-limited, auto-format Sanity image URL. */
export function imageUrl(source: ImageSource, width: number) {
  return builder.image(source).width(width).auto("format").url();
}
