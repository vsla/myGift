import { NextResponse } from "next/server";
import aws from 'aws-sdk'


export async function createImageUrl(productName: string) {

  const s3 = new aws.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY,
    signatureVersion: 'v4'
  })
  const now = new Date()
  const nowString = `${now.getDate()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}-${now.getFullYear()}-`

  const params = ({
    Bucket: "products-my-gift",
    Key: process.env.AWS_S3_FOLDER + nowString + productName,
    Expires: 300,
  })

  const uploadUrl = await s3.getSignedUrlPromise('putObject', params)

  return uploadUrl

}


export async function POST(request: Request): Promise<NextResponse> {
  const { name } = await request.json()
  try {

    const url = await createImageUrl(name)
    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 } // The webhook will retry 5 times waiting for a 200
    );
  }
}
