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

  rewrites.push({
    source: `/protocol/tot/Debugger/`,
    destination: `https://dc3tvimjwmdjm.cloudfront.net/protocol/tot/Debugger/index.html`,
  });
}

  rewrites.push({
    source: `/protocol/tot/:domain`,
    destination: `https://dc3tvimjwmdjm.cloudfront.net/protocol/tot/:domain/index.html`,
  });


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

module.exports = {
  rewrites() {
    return rewrites;
  },
  headers() {
    return headers;
  },
};
