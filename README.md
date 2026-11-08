# Daily Four · 每日四位碼

Version 1.0.2. Standalone public date-to-four-digit calculator. Intended hostname: https://daily-pin.teze3808.com/ . No classroom data, credentials, analytics or backend.

## Algorithm
Use the date YYYY-MM-DD in Asia/Hong_Kong. SHA-256 the UTF-8 string `daily-pin-v1|Asia/Hong_Kong|YYYY-MM-DD`. Interpret the first four digest bytes as an unsigned big-endian integer, modulo 10000, then zero-pad to four digits. Versioned algorithm; duplicate codes across dates are possible.

This is PUBLIC and predictable, not secret-key authentication. Anyone can derive today's or future codes. No classroom authentication is changed by publishing this project.

## Run and deploy
Node 22+ : `npm test`. No runtime dependencies. Cloudflare Pages builds from GitHub `main`, runs `npm test`, and publishes output directory `public`. Custom domain: `daily-pin.teze3808.com`. Preview branch deployments are disabled. Cloudflare deployment permissions must be explicitly configured; the existing DNS-only credential is insufficient. Keep all credentials out of Git.

HTML, CSS and native JavaScript modules; Web Crypto SHA-256; Intl for Hong Kong dates. Updates automatically at midnight using the device clock. No code sent to a server. Copy uses the browser clipboard after a click.
