# React + F7Framework

### Environment

### Installation
- Run `npm install`

### Add more modules for F7
- Change `src/boot.ts` to add more modules ([Read more](https://framework7.io/docs/package#es-module)):
```typescript
// example
...
import Dialog from 'framework7/components/dialog';
...

export const f7Bootstrap = () => Framework7.use([
  ...
  Dialog
  ...
]);

```
