"use server"
import z from "zod"
import { v2 as cloudinary } from "cloudinary"
import { actionClient } from "@/lib/safe-action"
import { checkImageProcessing } from "@/lib/check-processing"

cloudinary.config({
  cloud_name: "dsvohultm",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

const bgRemoveSchema = z.object({
  activeImage: z.string(),
  format: z.string(),
})

export const bgRemoval = actionClient
  .schema(bgRemoveSchema)
  .action(async ({ parsedInput: { format, activeImage } }) => {
    const form = activeImage.split(format)
    const pngConvert = form[0] + "png"
    const parts = pngConvert.split("/upload/")
    const bgUrl = `${parts[0]}/upload/e_background_removal/e_grayscale${parts[1]}`

    // checking if the image is processed
    let isProcessed = false
    const maxAttempts = 20
    const delay = 1000 
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      isProcessed = await checkImageProcessing(bgUrl)
      if (isProcessed) {
        break
      }
      await new Promise((resolve) => setTimeout(resolve, delay))
    }

    if (!isProcessed) {
      throw new Error("You are a TOWEL try again")
    }
    console.log(bgUrl)
    return { success: bgUrl }
  })
