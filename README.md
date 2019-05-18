# electron-ext-icon

[![NPM](https://img.shields.io/npm/v/electron-ext-icon.svg?style=flat-square)](https://www.npmjs.com/package/electron-ext-icon)

Get icon associated with file extension.

## Installing

```bash
$ npm install electron-ext-icon
```

## API

- `getExtIcon(ext: string, options?: Electron.FileIconOptions): Promise<Electron.NativeImage>`

```ts
// Electron main
import { writeFileSync } from 'fs';
import { getExtIcon } from 'electron-ext-icon';

const icon = await getExtIcon('html', { size: 'normal' });

icon.toDataURL(); // Base64
```

## Related

- [Qusly](https://www.github.com/xnerhu/qusly) - An FTP/SFTP client with Material Design UI.
