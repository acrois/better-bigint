# better-bigint

Better JSON support for BigInt

## Usage

Install using bun (or npm, yarn, etc.):

```sh
bun install better-bigint
```

Import it at the top of your entrypoint file:

```ts
import { betterBigInt } from 'better-bigint';
```

Somewhere before you start calling `JSON.parse`/`JSON.stringify`:

```ts
betterBigInt();
```

Now, stop thinking about it and go develop some software.

## Contribute

```bash
# install dependencies
bun install

# test the app
bun test

# build the app, available under dist
bun run build
```

## License

MIT
