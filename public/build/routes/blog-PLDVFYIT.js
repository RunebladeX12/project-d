import {
  NavigationBar_default
} from "/build/_shared/chunk-M6PVTXRF.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link
} from "/build/_shared/chunk-SHA6JZ4A.js";
import {
  createHotContext
} from "/build/_shared/chunk-7JORAR74.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/blog.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/BlogSection.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/BlogSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/BlogSection.tsx"
  );
  import.meta.hot.lastModified = "1711893139306.1616";
}
var BlogSection = () => {
  const Footer = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, false, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 25,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 27,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 31,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 30,
        columnNumber: 12
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 26,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 38,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 42,
            columnNumber: 119
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 43,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 44,
            columnNumber: 119
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 41,
        columnNumber: 12
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 37,
      columnNumber: 10
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 24,
    columnNumber: 18
  }, this);
  const articles = [{
    id: 1,
    title: "Let's get solutions for building construction work",
    date: "3rd October, 2023",
    buttonLabel: "Kitchen design",
    blog: "blog1"
  }, {
    id: 2,
    title: "Low cost latest invented interior designing ideas",
    date: "23rd november, 2023",
    buttonLabel: "Living design",
    blog: "blog2"
  }];
  const sticker = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-[5rem] py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-r from-cyan-500 to-blue-500  h-[4rem] w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-full h-[4rem] items-centertransform -rotate-2 flex gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative -left-[1rem] flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 86,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 99,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 98,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 105,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 104,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 114,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 110,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 120,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 123,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 126,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 122,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 129,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 132,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 128,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-medium", children: "Design" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 135,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 134,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 67,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 65,
    columnNumber: 19
  }, this);
  const articleshori = [{
    id: 1,
    title: "Let's get solutions for building construction work",
    date: "3rd October, 2023",
    buttonLabel: "Kitchen design",
    blog: "blog1"
  }, {
    id: 2,
    title: "Low cost latest invented interior designing ideas",
    date: "23rd november, 2023",
    buttonLabel: "Living design",
    blog: "blog2"
  }, {
    id: 3,
    title: "Best for any office and business interior solution",
    date: "3rd january, 2024",
    buttonLabel: "Interior design",
    blog: "blog3"
  }, {
    id: 4,
    title: "Let's get solutions for building construction work",
    date: "3rd October, 2023",
    buttonLabel: "Kitchen design",
    blog: "blog2"
  }, {
    id: 5,
    title: "Low cost latest invented interior designing ideas",
    date: "23rd november, 2023",
    buttonLabel: "Living design",
    blog: "blog5"
  }, {
    id: 6,
    title: "Best for any office and business interior solution",
    date: "3rd january, 2024",
    buttonLabel: "Interior design",
    blog: "blog6"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-[10rem] ml-[7.5rem] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[65rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold -ml-[8rem] sm:text-7xl  mb-[7rem] text-center text-white", children: [
        "Blogs & articles ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 185,
          columnNumber: 26
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text", children: "for buisness growth" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 185,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 w-[55rem] md:grid-cols-2 sm:px-4", children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-[25rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-4 w-full h-[12rem] flex flex-col justify-end rounded-t-[0.4rem] ${article.blog}` }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blog-details`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-[1.2rem] px-[1.2rem] w-full flex flex-col gap-y-[1.2rem]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-[1rem]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "web design" }, void 0, false, {
              fileName: "app/components/BlogSection.tsx",
              lineNumber: 195,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "ui/ux design" }, void 0, false, {
              fileName: "app/components/BlogSection.tsx",
              lineNumber: 199,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 194,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-white font2 w-10/12 ", children: article.title }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md  text-white font2 w-10/12 mt-[0.5rem] ", children: "By Karthic Bansal" }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 205,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, article.id, true, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 188,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 181,
      columnNumber: 5
    }, this),
    sticker,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-[10rem] ml-[7.5rem] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[65rem] ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text ml-[1rem] sm:text-7xl  mb-[2rem]  ", children: "Recent insights" }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-[1rem] mb-[2rem] ml-[1.3rem]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl", children: "All post" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 221,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl", children: "Design" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl", children: "Technology" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 229,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl", children: "Webflow" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 233,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 w-[55rem]  sm:px-4", children: articleshori.map((articlehori) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  w-[50rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-4 w-full h-[18rem] max-w-[25rem] flex flex-col justify-end rounded-t-[0.4rem] ${articlehori.blog}` }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 240,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blog-details`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-[1.5rem] h-[18rem] w-full mt-[1rem]  flex flex-col gap-y-[2.3rem]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-[1rem]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "web design" }, void 0, false, {
              fileName: "app/components/BlogSection.tsx",
              lineNumber: 246,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "ui/ux design" }, void 0, false, {
              fileName: "app/components/BlogSection.tsx",
              lineNumber: 250,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 245,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-white font2 w-10/12 ", children: articlehori.title }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md  text-white font2 w-10/12 mt-[0.5rem] ", children: "By Karthic Bansal" }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 256,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this)
      ] }, articlehori.id, true, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 239,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 238,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 215,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 214,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-[7.5rem] w-[65rem] mt-[3rem] ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white font-bold text-[4rem]", children: [
        "See the impact of good,",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 266,
          columnNumber: 34
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative -top-[1.5rem]", children: "conversation-oriented design" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 266,
          columnNumber: 41
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 266,
          columnNumber: 118
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative -top-[3rem]", children: " on your business " }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 266,
          columnNumber: 125
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 265,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:w-[50rem] mt-[0.5rem] mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between mx-auto items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-[4rem]  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text  flex items-center", children: "Let's Work Together" }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 270,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon-[eva--diagonal-arrow-right-up-fill] bg-gradient-to-r block from-red-500 to-blue-500  w-[8rem] h-[8rem]" }, void 0, false, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 273,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 269,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: " bg-gradient-to-r block -mt-[1rem] from-red-500 to-blue-500  w-full sm:w-[50rem] h-[0.2rem] rounded-4" }, void 0, false, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 275,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 268,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 264,
      columnNumber: 7
    }, this),
    Footer
  ] }, void 0, true, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 180,
    columnNumber: 10
  }, this);
};
_c = BlogSection;
var BlogSection_default = BlogSection;
var _c;
$RefreshReg$(_c, "BlogSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/blog.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.tsx"
  );
  import.meta.hot.lastModified = "1711709410776.6223";
}
var meta = () => {
  return [{
    name: "description",
    content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style."
  }, {
    property: "og:title",
    content: "Interior Decorators Inc. - Transforming Spaces"
  }, {
    property: "og:type",
    content: "website"
  }, {
    property: "og:image",
    content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy"
  }, {
    property: "og:url",
    content: "https://interior-deco-kappa.vercel.app/"
  }, {
    property: "og:description",
    content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style."
  }, {
    property: "og:site_name",
    content: "Interior Decorators Inc."
  }];
};
function Index() {
  _s();
  const [isMenuOpen, setIsMenuOpen] = (0, import_react2.useState)(false);
  const toggleMenuDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavigationBar_default, { isMenuOpen, toggleMenuDropdown }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlogSection_default, {}, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(Index, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/blog-PLDVFYIT.js.map
