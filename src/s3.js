import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const bucketName = process.env.AWS_BUCKET_NAME || 'ojoy';
const region = process.env.AWS_BUCKET_REGION || 'eu-central-1';
const accessKeyId = process.env.AWS_ACCESS_KEY || 'AKIAXPHMUHUIVWBLWRXF';
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || '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';

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export function uploadFile(fileBuffer, fileName, mimetype) {
  const uploadParams = {
    Bucket: bucketName,
    Body: fileBuffer,
    Key: fileName,
    ContentType: mimetype,
  };

  return s3Client.send(new PutObjectCommand(uploadParams));
}

export function deleteFile(fileName) {
  const deleteParams = {
    Bucket: bucketName,
    Key: fileName,
  };

  return s3Client.send(new DeleteObjectCommand(deleteParams));
}

export async function getObjectSignedUrl(key) {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  const command = new GetObjectCommand(params);
  const seconds = 28800; // 8 hours
  return await getSignedUrl(s3Client, command, { expiresIn: seconds });
}
