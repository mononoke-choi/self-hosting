"use server";

import { PerformanceObserver, performance } from "perf_hooks";
import { BinaryToTextEncoding, createHash } from "crypto";

export async function benchmark(data: string) {
  return await new Promise((resolve) => {
    const scenarios: { alg: string, digest: BinaryToTextEncoding }[] = [
      { alg: 'md5', digest: 'hex' },
      { alg: 'md5', digest: 'base64' },
      { alg: 'sha1', digest: 'hex' },
      { alg: 'sha1', digest: 'base64' },
      { alg: 'sha256', digest: 'hex' },
      { alg: 'sha256', digest: 'base64' }
    ];

    const perf = performance.timerify(function hashing() {
      for (const { alg, digest } of scenarios) {
        performance.mark(`${alg}-${digest}.start`);
        let times = 1000000;
        while(times--) {
          createHash(alg).update(data).digest(digest);
        }
        performance.mark(`${alg}-${digest}.end`);
        performance.measure(`${alg}-${digest}`, `${alg}-${digest}.start`, `${alg}-${digest}.end`)
      }
    });

    const obs = new PerformanceObserver((list) => {
      performance.clearMarks();
      obs.disconnect();

      resolve(JSON.stringify(list.getEntries(), null, 4));
    });
    obs.observe({ entryTypes: ["measure"] });

    perf();
  });
}