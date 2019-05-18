# electron-ext-icon

Get icon associated with file extension.

## API

- `getExtIcon(ext: string, options?: Electron.FileIconOptions): Promise<Electron.NativeImage>`

```ts
// Electron main
import { writeFileSync } from 'fs';
import { getExtIcon } from 'electron-ext-icon';

const icon = await getExtIcon('html', { size: 'normal' });

icon.toDataURL(); // Base64
```
