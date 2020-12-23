const directories = ["dist", "images", "downloads", "driver", "protocol"];
const files = ["view"];

const rewrites = [];
const headers = [];

for (const directory of directories) {
  headers.push({
    source: `/${directory}/:rest*`,
    headers: [{ key: "cache-control", value: "s-maxage=1" }],
  });

  rewrites.push({
    source: `/${directory}/:rest*`,
    destination: `https://dc3tvimjwmdjm.cloudfront.net/${directory}/:rest*`,
  });
}

for (const file of files) {
  headers.push({
    source: `/${file}`,
    headers: [{ key: "cache-control", value: "s-maxage=0" }],
  });

  rewrites.push({
    source: `/${file}`,
    destination: `https://dc3tvimjwmdjm.cloudfront.net/${file}`,
  });
}

console.log(rewrites);

module.exports = {
  rewrites() {
    return rewrites;
  },
  headers() {
    return headers;
  },
};
