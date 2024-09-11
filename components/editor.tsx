'use client'
import Layers from "./layers/layers"
import UploadForm from "./upload/upload-form"
import UploadImage from "./upload/upload-image"
import ActiveImage from "./active-image"
import { useLayerStore } from "@/lib/layer-store"
import ImageTools from "./toolbar/image-toolbar"

export default function Editor(){
    const activeLayer = useLayerStore((state) => state.activeLayer)
    
    return(
        <div>
            {activeLayer.resourceType === "image" ? <ImageTools /> : null}
            <h1>Hello Editor</h1>
            <UploadForm />
            <Layers />
            <ActiveImage />

        </div>
    )

}