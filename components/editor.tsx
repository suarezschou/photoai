"use client"

import Layers from "./layers/layers"
import ActiveImage from "./active-image"
import UploadForm from "./upload/upload-form"
import { useLayerStore } from "@/lib/layer-store"
import ImageTools from "./toolbar/image-toolbar"

export default function Editor() {
  const activeLayer = useLayerStore((state) => state.activeLayer)
  return (
    <div className="flex h-full ">
      <div className="py-6 px-4 basis-[240px] shrink-0">
        
        <div className="flex flex-col gap-4">
          {activeLayer.resourceType === "image" ? <ImageTools /> : null}
        </div>
      </div>
      <UploadForm />
      <ActiveImage />
      <Layers />
    </div>
  )
}
