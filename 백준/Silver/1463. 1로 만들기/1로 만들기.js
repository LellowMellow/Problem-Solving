const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = +input;
const dp = new Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) dp[i] = dp[i / 2] + 1;
  if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) dp[i] = dp[i / 3] + 1;
}

console.log(dp[N]);
