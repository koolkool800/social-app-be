import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import { CloudinaryResponse } from './responses/cloudinary.response';
import toStream = require('buffer-to-stream');

// CloudinaryResponse
@Injectable()
export class CloudinaryService {
  constructor() {}

  async uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      toStream(file.buffer).pipe(upload);
    });
  }
}
