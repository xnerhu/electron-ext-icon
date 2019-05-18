import { app } from 'electron';
import { resolve as resolvePath } from 'path';
import { promises } from 'fs';

import { makeId } from './utils';

/**
 * Gets icon associated with file extension.
 * @param ext Extension (e.g `html`)
 * @param options
 */
export const getExtIcon = (ext: string, options?: Electron.FileIconOptions): Promise<Electron.NativeImage> => {
  return new Promise(async (resolve, reject) => {
    const tempPath = app.getPath('temp');
    const filePath = resolvePath(tempPath, makeId(16) + '.' + ext);

    await promises.writeFile(filePath, null);

    app.getFileIcon(filePath, options, async (err, icon) => {
      if (err) return reject(err);
      await promises.unlink(filePath);
      resolve(icon);
    })
  });
}
