/** @type {import('@remix-run/dev').AppConfig} */


// remix.config.js

export default {
  ignoredRouteFiles: ["**/*.css"],
   // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
serverDependenciesToBundle: [/^gsap.*/],

  

};

