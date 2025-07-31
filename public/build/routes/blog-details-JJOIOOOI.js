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

// app/routes/blog-details.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/blog-details.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/blog-details.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/blog-details.tsx"
  );
  import.meta.hot.lastModified = "1711892874094.4658";
}
var BlogDetails = () => {
  const Footer = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, false, {
      fileName: "app/components/blog-details.tsx",
      lineNumber: 25,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, false, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 27,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, false, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 31,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, false, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 32,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, false, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 30,
        columnNumber: 12
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/blog-details.tsx",
      lineNumber: 26,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, false, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 38,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 42,
            columnNumber: 119
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 43,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 44,
            columnNumber: 119
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 41,
        columnNumber: 12
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/blog-details.tsx",
      lineNumber: 37,
      columnNumber: 10
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/blog-details.tsx",
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-[65rem] flex flex-col  sm:ml-8 lg:ml-[3rem] items-center pt-[10rem] ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-center font-bold text-[4rem]", children: [
          "7 Tips to improve your ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 69,
            columnNumber: 34
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative -top-[1.5rem]", children: " UI/UX designs for your" }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 69,
            columnNumber: 41
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 69,
            columnNumber: 113
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative -top-[3rem]", children: " new projects." }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 69,
            columnNumber: 120
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative -top-[2rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-[0.6rem] mx-auto items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon-[fluent--line-horizontal-1-16-regular] rounded-xl bg-gradient-to-r block from-red-500 to-blue-500  w-[4rem] h-[4rem]" }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-[2rem]  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text  flex items-center", children: "By Karthic Bansal" }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-[1.6rem] blog-details-banner h-[30rem] w-[90rem] " }, void 0, false, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 67,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-customColor", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `  text-white sm:p-8  ml-[4rem] lg:mt-0 lg:pt-[4rem] `, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold  sm:text-5xl ", children: "overview" }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "sm:mt-6 text-xl w-[55rem] text-white", children: "Lorem ipsum dolor sit amet consectetur. Vulputate quam mattis non suscipit adipiscing diam. Ultricies nullam cras arcu sed cursus condimentum erat pulvinar. Eu viverra tellus nullam sed magna donec sed elit eget." }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 86,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-[2rem] flex flex-col gap-y-[2rem] ml-[6rem]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-white  sm:text-5xl lg:w-3/5", children: " Lorem ipsum dolor sit amet" }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 97,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " blog-details-picture1  h-[30rem]  w-[55rem] rounded-md" }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 98,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "sm:mt-6 text-xl w-[55rem] text-white", children: "Lorem ipsum dolor sit amet consectetur. Sed malesuada rutrum convallis id eu est convallis. Mattis quis dolor maecenas platea purus euismod nisi quis. Donec placerat libero ac eu ac volutpat quis sit. Et in posuere pellentesque purus orci. Nibh ut fringilla quis volutpat mauris. Amet tempus mauris augue eu urna sed nec. Condimentum quam rhoncus lectus eleifend duis. Sit cursus porta eu nullam et blandit. Et luctus arcu at penatibus id eleifend est. At volutpat aliquet gravida condimentum sed turpis purus. Nunc ullamcorper phasellus cursus elementum morbi. Scelerisque arcu interdum feugiat commodo aenean. Enim a tortor sit augue euismod id non pharetra duis. Dui feugiat diam consectetur mus nibh facilisi arcu nunc vulputate. Venenatis id sem blandit vestibulum nunc amet scelerisque urna. Massa odio enim vel at porttitor." }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 101,
            columnNumber: 12
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 96,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-[2rem] flex pb-[9rem] flex-col gap-y-[2rem] ml-[6rem]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-white  sm:text-5xl lg:w-3/5", children: " Lorem ipsum dolor sit amet" }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 107,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " blog-details-picture2 h-[30rem]  w-[55rem] rounded-md" }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 108,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "sm:mt-6 text-xl w-[55rem] text-white", children: [
            "Lorem ipsum dolor sit amet consectetur. Sed malesuada rutrum convallis id eu est convallis. Mattis quis dolor maecenas platea purus euismod nisi quis. Donec placerat libero ac eu ac volutpat quis sit. Et in posuere pellentesque purus orci. Nibh ut fringilla quis volutpat mauris.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 114,
              columnNumber: 2
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block mt-[1.6rem] ", children: "Amet tempus mauris augue eu urna sed nec. Condimentum quam rhoncus lectus eleifend duis. Sit cursus porta eu nullam et blandit. Et luctus arcu at penatibus id eleifend est. At volutpat aliquet gravida condimentum sed turpis purus." }, void 0, false, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 114,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 115,
              columnNumber: 2
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block mt-[1.6rem] ", children: "Nunc ullamcorper phasellus cursus elementum morbi. Scelerisque arcu interdum feugiat commodo aenean. Enim a tortor sit augue euismod id non pharetra duis. Dui feugiat diam consectetur mus nibh facilisi arcu nunc vulputate. ." }, void 0, false, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 115,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 116,
              columnNumber: 3
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block mt-[2.6rem] ", children: "Venenatis id sem blandit vestibulum nunc amet scelerisque urna. Massa odio enim vel at porttitor.." }, void 0, false, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 116,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 111,
            columnNumber: 12
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 106,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[65rem] mt-[6rem]  sm:ml-8 lg:ml-[6rem]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold -ml-[6rem] sm:text-7xl  mb-[3rem] text-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-gradient-to-r  block from-red-500 to-blue-500 text-transparent bg-clip-text", children: "More articles" }, void 0, false, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 124,
          columnNumber: 5
        }, this) }, void 0, false, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 123,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 w-[55rem] ml-[2rem] md:grid-cols-2 sm:px-4", children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-[25rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-4 w-full h-[12rem] flex flex-col justify-end rounded-t-[0.4rem] ${article.blog}` }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 128,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blogs/${article.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-[1.2rem] px-[1.2rem] w-full flex flex-col gap-y-[1.2rem]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-[1rem]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "web design" }, void 0, false, {
                fileName: "app/components/blog-details.tsx",
                lineNumber: 134,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "ui/ux design" }, void 0, false, {
                fileName: "app/components/blog-details.tsx",
                lineNumber: 138,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 133,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-white font2 w-10/12 ", children: article.title }, void 0, false, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 143,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md  text-white font2 w-10/12 mt-[0.5rem] ", children: "By Karthic Bansal" }, void 0, false, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 144,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 132,
            columnNumber: 7
          }, this) }, void 0, false, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 131,
            columnNumber: 7
          }, this)
        ] }, article.id, true, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 127,
          columnNumber: 28
        }, this)) }, void 0, false, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 126,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/blog-details.tsx",
      lineNumber: 66,
      columnNumber: 6
    }, this),
    Footer
  ] }, void 0, true, {
    fileName: "app/components/blog-details.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
};
_c = BlogDetails;
var blog_details_default = BlogDetails;
var _c;
$RefreshReg$(_c, "BlogDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/blog-details.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog-details.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog-details.tsx"
  );
  import.meta.hot.lastModified = "1711801792695.3499";
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
      fileName: "app/routes/blog-details.tsx",
      lineNumber: 69,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(blog_details_default, {}, void 0, false, {
      fileName: "app/routes/blog-details.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog-details.tsx",
    lineNumber: 67,
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
//# sourceMappingURL=/build/routes/blog-details-JJOIOOOI.js.map
