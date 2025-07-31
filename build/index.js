var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe: pipe3, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe3(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe: pipe3, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe3(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5GJSRQPN.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/blog-details.tsx
var blog_details_exports = {};
__export(blog_details_exports, {
  default: () => Index,
  meta: () => meta
});
import { useState as useState2 } from "react";

// app/components/blog-details.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var BlogDetails = () => {
  let Footer2 = /* @__PURE__ */ jsxDEV3("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
    /* @__PURE__ */ jsxDEV3("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, !1, {
      fileName: "app/components/blog-details.tsx",
      lineNumber: 8,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV3("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, !1, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 10,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 14,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV3(Link, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, !1, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV3(Link, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, !1, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 16,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 13,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blog-details.tsx",
      lineNumber: 9,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV3("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, !1, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 21,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV3("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 25,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV3("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 26,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV3("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 27,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 24,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blog-details.tsx",
      lineNumber: 20,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blog-details.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ jsxDEV3("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: " ", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: " w-[65rem] flex flex-col  sm:ml-8 lg:ml-[3rem] items-center pt-[10rem] ", children: [
        /* @__PURE__ */ jsxDEV3("p", { className: "text-white text-center font-bold text-[4rem]", children: [
          "7 Tips to improve your ",
          /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 59,
            columnNumber: 34
          }, this),
          " ",
          /* @__PURE__ */ jsxDEV3("span", { className: "relative -top-[1.5rem]", children: " UI/UX designs for your" }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 59,
            columnNumber: 41
          }, this),
          " ",
          /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 59,
            columnNumber: 113
          }, this),
          " ",
          /* @__PURE__ */ jsxDEV3("span", { className: "relative -top-[3rem]", children: " new projects." }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 59,
            columnNumber: 120
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "relative -top-[2rem]", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex gap-x-[0.6rem] mx-auto items-center", children: [
          /* @__PURE__ */ jsxDEV3("span", { className: "icon-[fluent--line-horizontal-1-16-regular] rounded-xl bg-gradient-to-r block from-red-500 to-blue-500  w-[4rem] h-[4rem]" }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "font-bold text-[2rem]  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text  flex items-center", children: "By Karthic Bansal" }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 64,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "mt-[1.6rem] blog-details-banner h-[30rem] w-[90rem] " }, void 0, !1, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 57,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "bg-customColor", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "  text-white sm:p-8  ml-[4rem] lg:mt-0 lg:pt-[4rem] ", children: [
          /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl font-bold  sm:text-5xl ", children: "overview" }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "sm:mt-6 text-xl w-[55rem] text-white", children: "Lorem ipsum dolor sit amet consectetur. Vulputate quam mattis non suscipit adipiscing diam. Ultricies nullam cras arcu sed cursus condimentum erat pulvinar. Eu viverra tellus nullam sed magna donec sed elit eget." }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 76,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "mt-[2rem] flex flex-col gap-y-[2rem] ml-[6rem]", children: [
          /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl font-bold text-white  sm:text-5xl lg:w-3/5", children: " Lorem ipsum dolor sit amet" }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 87,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: " blog-details-picture1  h-[30rem]  w-[55rem] rounded-md" }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 88,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "sm:mt-6 text-xl w-[55rem] text-white", children: "Lorem ipsum dolor sit amet consectetur. Sed malesuada rutrum convallis id eu est convallis. Mattis quis dolor maecenas platea purus euismod nisi quis. Donec placerat libero ac eu ac volutpat quis sit. Et in posuere pellentesque purus orci. Nibh ut fringilla quis volutpat mauris. Amet tempus mauris augue eu urna sed nec. Condimentum quam rhoncus lectus eleifend duis. Sit cursus porta eu nullam et blandit. Et luctus arcu at penatibus id eleifend est. At volutpat aliquet gravida condimentum sed turpis purus. Nunc ullamcorper phasellus cursus elementum morbi. Scelerisque arcu interdum feugiat commodo aenean. Enim a tortor sit augue euismod id non pharetra duis. Dui feugiat diam consectetur mus nibh facilisi arcu nunc vulputate. Venenatis id sem blandit vestibulum nunc amet scelerisque urna. Massa odio enim vel at porttitor." }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 91,
            columnNumber: 12
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 86,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "mt-[2rem] flex pb-[9rem] flex-col gap-y-[2rem] ml-[6rem]", children: [
          /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl font-bold text-white  sm:text-5xl lg:w-3/5", children: " Lorem ipsum dolor sit amet" }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 97,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: " blog-details-picture2 h-[30rem]  w-[55rem] rounded-md" }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 98,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "sm:mt-6 text-xl w-[55rem] text-white", children: [
            "Lorem ipsum dolor sit amet consectetur. Sed malesuada rutrum convallis id eu est convallis. Mattis quis dolor maecenas platea purus euismod nisi quis. Donec placerat libero ac eu ac volutpat quis sit. Et in posuere pellentesque purus orci. Nibh ut fringilla quis volutpat mauris.",
            /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 104,
              columnNumber: 2
            }, this),
            /* @__PURE__ */ jsxDEV3("span", { className: "block mt-[1.6rem] ", children: "Amet tempus mauris augue eu urna sed nec. Condimentum quam rhoncus lectus eleifend duis. Sit cursus porta eu nullam et blandit. Et luctus arcu at penatibus id eleifend est. At volutpat aliquet gravida condimentum sed turpis purus." }, void 0, !1, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 104,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 105,
              columnNumber: 2
            }, this),
            /* @__PURE__ */ jsxDEV3("span", { className: "block mt-[1.6rem] ", children: "Nunc ullamcorper phasellus cursus elementum morbi. Scelerisque arcu interdum feugiat commodo aenean. Enim a tortor sit augue euismod id non pharetra duis. Dui feugiat diam consectetur mus nibh facilisi arcu nunc vulputate. ." }, void 0, !1, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 105,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 106,
              columnNumber: 3
            }, this),
            " ",
            /* @__PURE__ */ jsxDEV3("span", { className: "block mt-[2.6rem] ", children: "Venenatis id sem blandit vestibulum nunc amet scelerisque urna. Massa odio enim vel at porttitor.." }, void 0, !1, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 106,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 101,
            columnNumber: 12
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 96,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "w-[65rem] mt-[6rem]  sm:ml-8 lg:ml-[6rem]", children: [
        /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl font-bold -ml-[6rem] sm:text-7xl  mb-[3rem] text-center ", children: /* @__PURE__ */ jsxDEV3("span", { className: "bg-gradient-to-r  block from-red-500 to-blue-500 text-transparent bg-clip-text", children: "More articles" }, void 0, !1, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 114,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 113,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "grid grid-cols-1 w-[55rem] ml-[2rem] md:grid-cols-2 sm:px-4", children: [
          {
            id: 1,
            title: "Let's get solutions for building construction work",
            date: "3rd October, 2023",
            buttonLabel: "Kitchen design",
            blog: "blog1"
          },
          {
            id: 2,
            title: "Low cost latest invented interior designing ideas",
            date: "23rd november, 2023",
            buttonLabel: "Living design",
            blog: "blog2"
          }
        ].map((article) => /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col w-[25rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]", children: [
          /* @__PURE__ */ jsxDEV3("div", { className: `p-4 w-full h-[12rem] flex flex-col justify-end rounded-t-[0.4rem] ${article.blog}` }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 119,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ jsxDEV3(Link, { to: `/blogs/${article.id}`, children: /* @__PURE__ */ jsxDEV3("div", { className: "py-[1.2rem] px-[1.2rem] w-full flex flex-col gap-y-[1.2rem]", children: [
            /* @__PURE__ */ jsxDEV3("div", { className: "flex gap-x-[1rem]", children: [
              /* @__PURE__ */ jsxDEV3("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "web design" }, void 0, !1, {
                fileName: "app/components/blog-details.tsx",
                lineNumber: 125,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ jsxDEV3("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "ui/ux design" }, void 0, !1, {
                fileName: "app/components/blog-details.tsx",
                lineNumber: 129,
                columnNumber: 7
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 124,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ jsxDEV3("h2", { className: "text-2xl font-bold text-white font2 w-10/12 ", children: article.title }, void 0, !1, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 134,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: "text-md  text-white font2 w-10/12 mt-[0.5rem] ", children: "By Karthic Bansal" }, void 0, !1, {
              fileName: "app/components/blog-details.tsx",
              lineNumber: 135,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 123,
            columnNumber: 7
          }, this) }, void 0, !1, {
            fileName: "app/components/blog-details.tsx",
            lineNumber: 122,
            columnNumber: 7
          }, this)
        ] }, article.id, !0, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 118,
          columnNumber: 5
        }, this)) }, void 0, !1, {
          fileName: "app/components/blog-details.tsx",
          lineNumber: 116,
          columnNumber: 5
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/blog-details.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blog-details.tsx",
      lineNumber: 56,
      columnNumber: 6
    }, this),
    Footer2
  ] }, void 0, !0, {
    fileName: "app/components/blog-details.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}, blog_details_default = BlogDetails;

// app/components/NavigationBar.tsx
import { Link as Link2 } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var NavigationBar = () => {
  let [isMenuOpen, setMenuOpen] = useState(!1), menuAnimation = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    maxHeight: isMenuOpen ? 400 : 0
  }), toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }, dropdownRef = useRef(null), handleClickOutside = (event) => {
    isMenuOpen && dropdownRef.current && !dropdownRef.current.contains(event.target) && setMenuOpen(!1);
  };
  return useEffect(() => (document.addEventListener("click", handleClickOutside), () => {
    document.removeEventListener("click", handleClickOutside);
  }), [isMenuOpen]), /* @__PURE__ */ jsxDEV4("nav", { className: "fixed bg-black z-10 w-screen ", children: /* @__PURE__ */ jsxDEV4("div", { className: " mx-[8rem]  px-2 ", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-1 items-center justify-end sm:items-stretch sm:justify-between", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex  flex-shrink-0 items-center mt-2", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-white", children: "XFOLIO" }, void 0, !1, {
        fileName: "app/components/NavigationBar.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/NavigationBar.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "hidden  sm:mt-2  sm:block", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex space-x-4", children: [
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/service", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium", children: "Services" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/about", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium", children: "About" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/blog", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium", children: "Blog" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/contact", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium", children: "Contact" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NavigationBar.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/NavigationBar.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("button", { className: "mt-4 text-[0.8rem] sm:text-sm bg-white hover:bg-blue-700 ml-[20rem] text-black font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "Let's Talk" }, void 0, !1, {
        fileName: "app/components/NavigationBar.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavigationBar.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "relative flex h-16 hidden items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ jsxDEV4(
        "button",
        {
          type: "button",
          className: "relative inline-flex mr-4 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
          onClick: toggleMenu,
          children: [
            /* @__PURE__ */ jsxDEV4("span", { className: "absolute -inset-0.5" }, void 0, !1, {
              fileName: "app/components/NavigationBar.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV4("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
              fileName: "app/components/NavigationBar.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "svg",
              {
                className: `h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`,
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "white",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxDEV4("path", { d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }, void 0, !1, {
                  fileName: "app/components/NavigationBar.tsx",
                  lineNumber: 77,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/NavigationBar.tsx",
                lineNumber: 69,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV4(
              "svg",
              {
                className: `h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`,
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "white",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxDEV4("path", { d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
                  fileName: "app/components/NavigationBar.tsx",
                  lineNumber: 87,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/NavigationBar.tsx",
                lineNumber: 79,
                columnNumber: 15
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 62,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NavigationBar.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(animated.div, { className: "bg-white/50 backdrop-blur-md mt-6 right-4 rounded-lg absolute sm:hidden", ref: dropdownRef, style: menuAnimation, children: /* @__PURE__ */ jsxDEV4("div", { className: "space-y-1 pl-2 pr-40 pb-3 pt-2", children: [
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "text-white hover:text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium", children: "Services" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium", children: "About us" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium", children: "Blog" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium", children: "Contact us" }, void 0, !1, {
          fileName: "app/components/NavigationBar.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/NavigationBar.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/NavigationBar.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/NavigationBar.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavigationBar.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NavigationBar.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}, NavigationBar_default = NavigationBar;

// app/routes/blog-details.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta = () => [
  { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
  { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
  { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:site_name", content: "Interior Decorators Inc." }
];
function Index() {
  let [isMenuOpen, setIsMenuOpen] = useState2(!1);
  return /* @__PURE__ */ jsxDEV5("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV5(NavigationBar_default, { isMenuOpen, toggleMenuDropdown: () => {
      setIsMenuOpen(!isMenuOpen);
    } }, void 0, !1, {
      fileName: "app/routes/blog-details.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV5(blog_details_default, {}, void 0, !1, {
      fileName: "app/routes/blog-details.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog-details.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/testimonial.tsx
var testimonial_exports = {};
__export(testimonial_exports, {
  default: () => Index2,
  meta: () => meta2
});
import { useState as useState3 } from "react";

// app/components/Testimonial.tsx
import { Link as Link3 } from "@remix-run/react";

// app/assets/images/person1.jpg
var person1_default = "/build/_assets/person1-DCS6MDPR.jpg";

// app/assets/images/person2.jpg
var person2_default = "/build/_assets/person2-HUC3GCHW.jpg";

// app/assets/images/person3.jpg
var person3_default = "/build/_assets/person3-KOOKNV3L.jpg";

// app/assets/images/lady3.jpg
var lady3_default = "/build/_assets/lady3-K7IV65OI.jpg";

// app/assets/images/guy3.jpg
var guy3_default = "/build/_assets/guy3-JIS4FISS.jpg";

// app/assets/images/lady4.jpg
var lady4_default = "/build/_assets/lady4-PECRC36X.jpg";

// app/assets/images/guy4.jpg
var guy4_default = "/build/_assets/guy4-JNHHT7FB.jpg";

// app/assets/images/lady5.jpg
var lady5_default = "/build/_assets/lady5-XMKUVEJN.jpg";

// app/assets/images/guy5.jpg
var guy5_default = "/build/_assets/guy5-YJVXKQV2.jpg";

// app/assets/images/team-lady.jpg
var team_lady_default = "/build/_assets/team-lady-EHDHHPSX.jpg";

// app/components/Testimonial.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var testimonies = [
  {
    id: 1,
    img: person1_default,
    name: "John Doe",
    location: "Sydney, USA",
    text: "I had an amazing experience with your services.The quality and attention to detail exceeded my expectations. Highly recommended!"
  },
  {
    id: 2,
    img: person2_default,
    name: "Benny Roll",
    location: "Sydney, New York",
    text: " Your team went above and beyond to make sure I was satisfied. I appreciate the professionalism and dedication to excellence."
  },
  {
    id: 3,
    img: person3_default,
    name: "Raymond Gario",
    location: "Sydney, Australia",
    text: "The stylish living section is exactly what I was looking for. It added a unique and elegant touch to my home. Thank you!"
  },
  {
    id: 4,
    img: lady3_default,
    name: "Mary Johnson",
    location: "New York, USA",
    text: "Impressive design and outstanding customer service. I'm delighted with the results. Will definitely work with you again!"
  },
  {
    id: 5,
    img: guy3_default,
    name: "Robert Smith",
    location: "London, UK",
    text: "Your attention to detail is impeccable. The realization of my project exceeded my expectations. Thank you for your creativity!"
  },
  {
    id: 6,
    img: lady4_default,
    name: "Jennifer Davis",
    location: "Sydney, Australia",
    text: "The interior work you did for me was top-notch. It transformed my space into a beautiful and functional environment."
  },
  {
    id: 7,
    img: guy4_default,
    name: "Michael Wilson",
    location: "Tokyo, Japan",
    text: "I can't thank you enough for the wonderful project plan. It was well-thought-out and perfectly suited to my needs."
  },
  {
    id: 8,
    img: lady5_default,
    name: "Sarah Brown",
    location: "Paris, France",
    text: "The level of professionalism displayed by your team is commendable. I couldn't be happier with the outcome of my project."
  },
  {
    id: 9,
    img: guy5_default,
    name: "Christopher Lee",
    location: "Toronto, Canada",
    text: "From concept to completion, your team demonstrated expertise and creativity. I'm thrilled with the end result!"
  },
  {
    id: 10,
    img: team_lady_default,
    name: "Amanda Martinez",
    location: "Berlin, Germany",
    text: "Working with your company was a pleasure. The communication, craftsmanship, and final product were all exceptional."
  },
  {
    id: 11,
    img: person1_default,
    name: "John Doe",
    location: "Sydney, USA",
    text: "Lauren ipsum is simply Tommy text of the type setting industry Epson has been"
  },
  {
    id: 12,
    img: person2_default,
    name: "Benny Roll",
    location: "Sydney, New York",
    text: "Lauren Epson a simply dummy text of data setting industry Epson has been scrambled it to make a Time Book"
  },
  {
    id: 13,
    img: person3_default,
    name: "Raymond Gario",
    location: "Sydney, Australia",
    text: "Alarm Epson is simply Timmy text of the type setting industry Epson has been scrambled"
  }
], Testimonial = () => {
  let Footer2 = /* @__PURE__ */ jsxDEV6("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
    /* @__PURE__ */ jsxDEV6("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, !1, {
      fileName: "app/components/Testimonial.tsx",
      lineNumber: 115,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, !1, {
        fileName: "app/components/Testimonial.tsx",
        lineNumber: 117,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ jsxDEV6(Link3, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 121,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV6(Link3, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, !1, {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 122,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV6(Link3, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, !1, {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 123,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Testimonial.tsx",
        lineNumber: 120,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Testimonial.tsx",
      lineNumber: 116,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, !1, {
        fileName: "app/components/Testimonial.tsx",
        lineNumber: 128,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV6("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/Testimonial.tsx",
            lineNumber: 132,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV6("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/Testimonial.tsx",
            lineNumber: 133,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV6("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
            fileName: "app/components/Testimonial.tsx",
            lineNumber: 134,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Testimonial.tsx",
        lineNumber: 131,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Testimonial.tsx",
      lineNumber: 127,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Testimonial.tsx",
    lineNumber: 114,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ jsxDEV6("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "ml-4 mb-[12rem] sm:ml-8 lg:ml-[5rem]", children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "text-3xl mb-[2rem] font-medium sm:text-7xl pt-[14rem] ml-[1.5rem] text-white", children: [
        "Client ",
        /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("span", { className: "bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: " Testimonials " }, void 0, !1, {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 147,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Testimonial.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { style: { display: "flex", alignItems: "flex-start" }, className: "flex-container flex-wrap w-[44rem] ml-[2rem] gap-[3rem]  gap-x-6", children: testimonies.map((testimonial, index) => /* @__PURE__ */ jsxDEV6(
        "div",
        {
          style: { flex: 1 },
          className: `gap-y-[1rem] flex-item min-w-[20rem] max-w-[20rem] flex flex-col justify-center py-[2rem] rounded-xl px-[2rem] mb-8 sm:mb-0 bg-gray-800 ${index === 1 ? "center" : ""}`,
          children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "flex gap-x-2", children: [
              /* @__PURE__ */ jsxDEV6("span", { className: "bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white", children: " " }, void 0, !1, {
                fileName: "app/components/Testimonial.tsx",
                lineNumber: 157,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ jsxDEV6("span", { className: "bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white", children: " " }, void 0, !1, {
                fileName: "app/components/Testimonial.tsx",
                lineNumber: 158,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ jsxDEV6("span", { className: "bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white", children: " " }, void 0, !1, {
                fileName: "app/components/Testimonial.tsx",
                lineNumber: 159,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ jsxDEV6("span", { className: "bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white", children: " " }, void 0, !1, {
                fileName: "app/components/Testimonial.tsx",
                lineNumber: 160,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ jsxDEV6("span", { className: "bg-gradient-to-r from-red-500 to-blue-500 icon-[ic--sharp-star] w-5 h-5 text-white", children: " " }, void 0, !1, {
                fileName: "app/components/Testimonial.tsx",
                lineNumber: 161,
                columnNumber: 6
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Testimonial.tsx",
              lineNumber: 156,
              columnNumber: 4
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6("p", { className: "text-white h-auto text-[0.8rem] text-justify", children: testimonial.text }, void 0, !1, {
              fileName: "app/components/Testimonial.tsx",
              lineNumber: 164,
              columnNumber: 6
            }, this) }, void 0, !1, {
              fileName: "app/components/Testimonial.tsx",
              lineNumber: 163,
              columnNumber: 4
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "flex mb-2 sm:mb-5", children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV6(
                "img",
                {
                  src: testimonial.img,
                  alt: testimonial.name,
                  className: "w-12 h-12 rounded-full object-cover"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Testimonial.tsx",
                  lineNumber: 168,
                  columnNumber: 8
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Testimonial.tsx",
                lineNumber: 167,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "ml-4 mt-1", children: [
                /* @__PURE__ */ jsxDEV6("h3", { className: "text-md text-white font-medium font2", children: testimonial.name }, void 0, !1, {
                  fileName: "app/components/Testimonial.tsx",
                  lineNumber: 175,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ jsxDEV6("h5", { className: "text-sm text-white font2", children: testimonial.location }, void 0, !1, {
                  fileName: "app/components/Testimonial.tsx",
                  lineNumber: 176,
                  columnNumber: 8
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Testimonial.tsx",
                lineNumber: 174,
                columnNumber: 6
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Testimonial.tsx",
              lineNumber: 166,
              columnNumber: 4
            }, this)
          ]
        },
        testimonial.id,
        !0,
        {
          fileName: "app/components/Testimonial.tsx",
          lineNumber: 151,
          columnNumber: 4
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Testimonial.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", {}, void 0, !1, {
        fileName: "app/components/Testimonial.tsx",
        lineNumber: 184,
        columnNumber: 2
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Testimonial.tsx",
      lineNumber: 145,
      columnNumber: 6
    }, this),
    Footer2
  ] }, void 0, !0, {
    fileName: "app/components/Testimonial.tsx",
    lineNumber: 144,
    columnNumber: 5
  }, this);
}, Testimonial_default = Testimonial;

// app/routes/testimonial.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
  { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
  { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:site_name", content: "Interior Decorators Inc." }
];
function Index2() {
  let [isMenuOpen, setIsMenuOpen] = useState3(!1);
  return /* @__PURE__ */ jsxDEV7("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV7(NavigationBar_default, { isMenuOpen, toggleMenuDropdown: () => {
      setIsMenuOpen(!isMenuOpen);
    } }, void 0, !1, {
      fileName: "app/routes/testimonial.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV7(Testimonial_default, {}, void 0, !1, {
      fileName: "app/routes/testimonial.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/testimonial.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/casestudy.tsx
var casestudy_exports = {};
__export(casestudy_exports, {
  default: () => Index3,
  meta: () => meta3
});
import { useState as useState4 } from "react";

// app/components/CaseStudy.tsx
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var CaseStudy = () => /* @__PURE__ */ jsxDEV8("div", { className: "", children: [
  /* @__PURE__ */ jsxDEV8("div", { className: "pt-[10rem] ml-[7.5rem] ", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "", children: [
      /* @__PURE__ */ jsxDEV8("h4", { className: "font-bold text-3xl w-[23rem] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text ", children: "Saas tool Design" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold text-white text-7xl mt-[1rem]", children: "Con Cubo" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex mt-[3rem] justify-between w-[50rem]", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "font-bold text-white flex flex-col gap-y-[0.3rem]", children: [
          /* @__PURE__ */ jsxDEV8("h4", { className: "text-3xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: "client" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("h2", { className: "text-4xl", children: "Con Cuba" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("h2", { className: "text-4xl", children: "GmbH" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "font-bold text-white flex flex-col gap-y-[0.3rem]", children: [
          /* @__PURE__ */ jsxDEV8("h4", { className: "text-3xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: "My Role" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("h2", { className: "text-4xl", children: "Product" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("h2", { className: "text-4xl", children: "Designer" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "font-bold text-white flex flex-col gap-y-[0.3rem]", children: [
          /* @__PURE__ */ jsxDEV8("h4", { className: "text-3xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: "Location" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("h2", { className: "text-4xl", children: "Hamburg and" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8("h2", { className: "text-4xl", children: "Remote" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mt-[4rem] casestudy1 h-[35rem] w-[65rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "mt-[6rem] w-[65rem] text-white ", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold text-[2rem] w-[23rem] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text ", children: "ABOUT THE PRODUCT" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold mt-[0.8rem] text-[2.5rem]", children: [
        "Design a Saas tool to visualize and manage complex",
        /* @__PURE__ */ jsxDEV8("br", {}, void 0, !1, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 92,
          columnNumber: 58
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV8("span", { className: "-mt-[0.8rem] block", children: " organisations" }, void 0, !1, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 92,
          columnNumber: 65
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-[1.4rem] mt-[4rem]", children: "The newly founded startup wants to support organisations and teams in the design,control and optimisation of their work" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-[1.4rem] mt-[2rem]", children: "The tool aims to be an intelligent companion in setting up highly efficent organisation structures to tackle overhead and lacks of transparency" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 87,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "text-white w-[65rem] mt-[5rem]", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold text-[3.3rem]", children: "CLIENT'S CHALLENGE" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 102,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-[1.4rem] my-[2rem]", children: "Lorem ipsum dolor sit amet consectetur. Consectetur eu enim integer odio. Nulla porta vitae fames ut ultricies. Ultrices mauris in hendrerit sagittis odio justo orci." }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 105,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mt-[3rem] casestudy2 h-[35rem] w-[65rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 109,
        columnNumber: 8
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 101,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "text-white w-[65rem] mt-[5rem]", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold text-[3.3rem]", children: "THE SOLUTION" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 114,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-[1.4rem] my-[2rem]", children: "Lorem ipsum dolor sit amet consectetur. Consectetur eu enim integer odio. Nulla porta vitae fames ut ultricies. Ultrices mauris in hendrerit sagittis odio justo orci." }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 117,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mt-[3rem] casestudy5 h-[35rem] w-[65rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 121,
        columnNumber: 8
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 113,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "text-white w-[65rem] mt-[5rem]", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold text-[3.3rem]", children: "DESIGNING WITH COMPONENTS" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 126,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-[1.4rem] my-[2rem]", children: "Lorem ipsum dolor sit amet consectetur. Consectetur eu enim integer odio. Nulla porta vitae fames ut ultricies. Ultrices mauris in hendrerit sagittis odio justo orci." }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 129,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mt-[3rem] casestudy3 h-[35rem] w-[65rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 133,
        columnNumber: 8
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 125,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "text-white w-[65rem] mt-[5rem]", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold text-[3.3rem]", children: "PROJECT'S RESULTS" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 138,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "text-[1.4rem] my-[2rem]", children: "Lorem ipsum dolor sit amet consectetur. Consectetur eu enim integer odio. Nulla porta vitae fames ut ultricies. Ultrices mauris in hendrerit sagittis odio justo orci." }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 141,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mt-[3rem] casestudy4 h-[35rem] w-[65rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 145,
        columnNumber: 8
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 137,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "text-white w-[65rem] mt-[7rem]", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold text-[5rem] ", children: [
        "More cool ",
        /* @__PURE__ */ jsxDEV8("span", { className: " bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: " projects" }, void 0, !1, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 150,
          columnNumber: 58
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-x-[2rem]", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "casestudy6 mt-[2rem] h-[30rem] w-[27rem] rounded-md", children: /* @__PURE__ */ jsxDEV8("div", { className: "relative top-[19rem] pl-[1rem] ", children: [
          /* @__PURE__ */ jsxDEV8("h1", { className: "font-bold text-[1.9rem]", children: "Lorem Ipsum" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 154,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8("h2", { className: "text-[1.2rem] my-[1rem] font-medium", children: "Technology" }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 157,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-x-[1rem]", children: [
            /* @__PURE__ */ jsxDEV8("button", { className: " text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "web design" }, void 0, !1, {
              fileName: "app/components/CaseStudy.tsx",
              lineNumber: 161,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV8("button", { className: " text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "ui/ux design" }, void 0, !1, {
              fileName: "app/components/CaseStudy.tsx",
              lineNumber: 165,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 160,
            columnNumber: 10
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 153,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 152,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "casestudy7 mt-[2rem] h-[30rem] w-[27rem] rounded-md" }, void 0, !1, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 172,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 151,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ jsxDEV8("div", {}, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 193,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 149,
      columnNumber: 6
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CaseStudy.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV8("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
    /* @__PURE__ */ jsxDEV8("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, !1, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 9,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 11,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ jsxDEV8(Link4, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV8(Link4, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, !1, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 16,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV8(Link4, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, !1, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 17,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 14,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 10,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, !1, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 22,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV8("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 26,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV8("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 27,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV8("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
            fileName: "app/components/CaseStudy.tsx",
            lineNumber: 28,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/CaseStudy.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CaseStudy.tsx",
        lineNumber: 25,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/CaseStudy.tsx",
      lineNumber: 21,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CaseStudy.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/CaseStudy.tsx",
  lineNumber: 39,
  columnNumber: 5
}, this), CaseStudy_default = CaseStudy;

// app/routes/casestudy.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
  { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
  { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:site_name", content: "Interior Decorators Inc." }
];
function Index3() {
  let [isMenuOpen, setIsMenuOpen] = useState4(!1);
  return /* @__PURE__ */ jsxDEV9("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV9(NavigationBar_default, { isMenuOpen, toggleMenuDropdown: () => {
      setIsMenuOpen(!isMenuOpen);
    } }, void 0, !1, {
      fileName: "app/routes/casestudy.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV9(CaseStudy_default, {}, void 0, !1, {
      fileName: "app/routes/casestudy.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/casestudy.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Index4,
  meta: () => meta4
});
import { useState as useState5 } from "react";

// app/components/GetInTouch.tsx
import { Link as Link5 } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var GetInTouch = () => /* @__PURE__ */ jsxDEV10("div", { className: "", children: [
  /* @__PURE__ */ jsxDEV10("div", { className: "  p-4 text-white sm:p-8 ml-4 sm:ml-8 lg:ml-[5rem] lg:mt-0 lg:pt-[10rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]", children: [
    /* @__PURE__ */ jsxDEV10("h1", { className: "text-3xl sm:text-5xl font-bold font2 w-10/12 sm:w-4/5 lg:w-3/5 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: "Get in touch" }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 168,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "sm:mt-6 text-md w-4/5 sm:text-xl ", children: "Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow" }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 171,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "mt-[2rem] ", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center w-[14rem] mb-4", children: [
        /* @__PURE__ */ jsxDEV10("span", { className: "bg-gradient-to-r from-red-500 to-blue-500  icon-[ic--baseline-email]  w-10 h-10 " }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "ml-4 text-sm text-white", children: "info@yourdomain.com" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center w-[14rem] mb-4", children: [
        /* @__PURE__ */ jsxDEV10("span", { className: "bg-gradient-to-r from-red-500 to-blue-500  icon-[ic--baseline-call]  w-10 h-10 " }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "ml-4 text-sm text-white", children: "+888-776-899" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 174,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/GetInTouch.tsx",
    lineNumber: 167,
    columnNumber: 10
  }, this),
  /* @__PURE__ */ jsxDEV10("form", { className: "", children: /* @__PURE__ */ jsxDEV10("fieldset", { className: "ml-[6.5rem]", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: " mb-2", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV10("label", { htmlFor: "name", className: "block text-lg text-white font-bold mb-4", children: "Your Name" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10(
          "input",
          {
            className: "bg-gray-800 w-[50rem] py-2 pl-[1rem] h-[3rem] text-white rounded-md focus:outline-none focus:shadow-outline text-sm",
            id: "name",
            type: "text",
            placeholder: "Enter your name"
          },
          void 0,
          !1,
          {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV10("label", { htmlFor: "name", className: "block text-lg text-white font-bold mb-4", children: "Your E-mail" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10(
          "input",
          {
            className: "bg-gray-800 w-[50rem] text-white py-2 pl-[3rem] h-[3rem] rounded-md focus:outline-none focus:shadow-outline text-sm",
            id: "name",
            type: "text",
            placeholder: "Enter your e-mail"
          },
          void 0,
          !1,
          {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 24,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10("span", { className: "relative -left-[49rem] top-[0.45rem] bg-gray-400 icon-[ic--baseline-email]  w-6 h-6 " }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV10("label", { htmlFor: "name", className: "block text-lg text-white font-bold mb-4", children: "Your Budget" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10(
          "input",
          {
            className: "bg-gray-800 w-[50rem] text-white py-2 pl-[3rem] h-[3rem] rounded-md focus:outline-none focus:shadow-outline text-sm",
            id: "name",
            type: "text",
            placeholder: "1k-3k"
          },
          void 0,
          !1,
          {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV10("span", { className: "relative -left-[49rem] top-[0.45rem] bg-gray-400 icon-[solar--dollar-bold]  w-6 h-6 " }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxDEV10("label", { htmlFor: "message", className: "block text-lg text-white font-bold mb-4", children: " Tell me more a bit what you are looking for" }, void 0, !1, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10(
        "textarea",
        {
          className: "bg-gray-800 text-white w-[50rem] h-[7rem] py-2 px-[1rem] rounded-md focus:outline-none focus:shadow-outline text-sm",
          id: "message",
          placeholder: "Hello! I am interested in..."
        },
        void 0,
        !1,
        {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { children: /* @__PURE__ */ jsxDEV10("button", { className: "mt-6 w-[8rem] bg-gradient-to-r from-red-500 to-blue-500 sm:w-[9rem] text-[0.8rem] sm:text-lg flex items-center gap-x-2  text-white hover:bg-blue-700  font-bold py-3 sm:py-3 sm:pl-4 pl-4 rounded-md sm:rounded-xl", children: "Submit now" }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 57,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/GetInTouch.tsx",
    lineNumber: 8,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/GetInTouch.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV10("div", { className: "sm:w-screen mt-[10rem] ml-[6.5rem] mb-[2rem]", children: [
    /* @__PURE__ */ jsxDEV10("h2", { className: "text-2xl sm:text-5xl  text-white font-bold", children: [
      "Frequently Asked ",
      /* @__PURE__ */ jsxDEV10("br", {}, void 0, !1, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 97,
        columnNumber: 30
      }, this),
      " ",
      /* @__PURE__ */ jsxDEV10("span", { className: "mt-6 ml-2 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: " Questions" }, void 0, !1, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 97,
        columnNumber: 37
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("p", { className: "text-base text-gray-200 my-[1.5rem]", children: "Answers to the burning questions in your mind" }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { children: /* @__PURE__ */ jsxDEV10("button", { className: "mt-6 w-[10rem] bg-gradient-to-r from-red-500 to-blue-500 sm:w-[9rem] text-lg  flex items-center gap-x-2  text-white hover:bg-blue-700  font-bold py-3 sm:py-2 sm:pl-6 pl-4 rounded-md sm:rounded-3xl", children: "contact me" }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 103,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "", children: /* @__PURE__ */ jsxDEV10("div", { className: "sm:w-[50rem] mt-[3rem] mb-[3rem] sm:mb-[0rem]", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "sm:w-[50remrem] mb-2", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "flex justify-between mx-auto items-center py-[1rem] mb-4", children: [
          /* @__PURE__ */ jsxDEV10("p", { className: "font-medium font1 text-xl text-white flex items-center", children: "How long does a website take to build?" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { className: "icon-[ri--arrow-down-s-line] text-white w-[1.5rem] h-[1.5rem]" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 115,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("hr", { className: " bg-customColor2 w-full sm:w-[50rem] h-[0.15rem] rounded-4" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 110,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "sm:w-[50rem] mb-4", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "flex justify-between mx-auto py-[1rem] items-center mb-4", children: [
          /* @__PURE__ */ jsxDEV10("p", { className: "font-medium font1 text-xl text-white flex items-center", children: "How much does a website cost?" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 121,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { className: "icon-[iconamoon--arrow-right-2] text-white w-[1.5rem] h-[1.5rem]" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV10("p", { className: "sm:w-[48rem] text-justify text-white text-lg mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit eros id justo eleifend, vel aliquet urna porttitor. Ut non volutpat justo. Vivamus nec orci vel mauris vulputate fermentum. Nulla facilisi." }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 126,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("hr", { className: " bg-white w-full sm:w-[50rem] h-[0.15rem] rounded-4" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 119,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "sm:w-[50remrem] mb-2", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "flex justify-between mx-auto py-[1rem] items-center mb-4", children: [
          /* @__PURE__ */ jsxDEV10("p", { className: "font-medium font1 text-xl text-white flex items-center", children: "I don't have a design can you build it for me?" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { className: "icon-[ri--arrow-down-s-line] text-white w-[1.5rem] h-[1.5rem]" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 139,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("hr", { className: " bg-customColor2 w-full sm:w-[50rem] h-[0.15rem] rounded-4" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 134,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "sm:w-[50remrem] mb-2", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "flex justify-between mx-auto py-[1rem] items-center mb-4", children: [
          /* @__PURE__ */ jsxDEV10("p", { className: "font-medium font1 text-xl text-white flex items-center", children: "Do you provide seo as well?" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 145,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { className: "icon-[ri--arrow-down-s-line] text-white w-[1.5rem] h-[1.5rem]" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 144,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("hr", { className: " bg-customColor2 w-full sm:w-[50rem] h-[0.15rem] rounded-4" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 143,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "sm:w-[50remrem] mb-2", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "flex justify-between mx-auto py-[1rem] items-center mb-4", children: [
          /* @__PURE__ */ jsxDEV10("p", { className: "font-medium font1 text-xl text-white flex items-center", children: "Will my website load quickly?" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 154,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV10("span", { className: "icon-[ri--arrow-down-s-line] text-white w-[1.5rem] h-[1.5rem]" }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 157,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 153,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10("hr", { className: " bg-customColor2 w-full sm:w-[50rem] h-[0.15rem] rounded-4" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 159,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 152,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/GetInTouch.tsx",
    lineNumber: 95,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV10("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
    /* @__PURE__ */ jsxDEV10("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, !1, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 66,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV10("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, !1, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 68,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ jsxDEV10(Link5, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV10(Link5, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 73,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV10(Link5, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, !1, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 71,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 67,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV10("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, !1, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 79,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ jsxDEV10("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV10("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 83,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV10("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 84,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV10("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV10("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
            fileName: "app/components/GetInTouch.tsx",
            lineNumber: 85,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/GetInTouch.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/GetInTouch.tsx",
        lineNumber: 82,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/GetInTouch.tsx",
      lineNumber: 78,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/GetInTouch.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/GetInTouch.tsx",
  lineNumber: 166,
  columnNumber: 5
}, this), GetInTouch_default = GetInTouch;

// app/routes/contact.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
  { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
  { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:site_name", content: "Interior Decorators Inc." }
];
function Index4() {
  let [isMenuOpen, setIsMenuOpen] = useState5(!1);
  return /* @__PURE__ */ jsxDEV11("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV11(NavigationBar_default, { isMenuOpen, toggleMenuDropdown: () => {
      setIsMenuOpen(!isMenuOpen);
    } }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV11(GetInTouch_default, {}, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/service.tsx
var service_exports = {};
__export(service_exports, {
  default: () => Index5,
  meta: () => meta5
});
import { useState as useState6 } from "react";

// app/components/Ourservices.tsx
import { Link as Link6 } from "@remix-run/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var OurServices = () => /* @__PURE__ */ jsxDEV12("div", { className: "", children: [
  /* @__PURE__ */ jsxDEV12("div", { className: "ml-4 mb-[12rem] sm:w-[65rem] sm:mx-auto ", children: [
    /* @__PURE__ */ jsxDEV12("h1", { className: "text-3xl sm:text-7xl pt-[14rem] ml-[1.5rem] text-white", children: [
      "Our ",
      /* @__PURE__ */ jsxDEV12("span", { className: "bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: " Services " }, void 0, !1, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 40,
        columnNumber: 14
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Ourservices.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: " bg-opacity-60 p-4 text-white sm:p-8  lg:mt-0 lg:pt-[4rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]", children: [
        /* @__PURE__ */ jsxDEV12("h1", { className: "text-3xl sm:text-5xl font2 w-10/12 sm:w-4/5 lg:w-3/5", children: "Web Design" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "sm:mt-6 text-md sm:text-xl ", children: "Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("button", { className: "mt-6 text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "Hire Me" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 43,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "mt-6 picture2 h-[30rem] ml-8 w-[55rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Ourservices.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: " bg-opacity-60 p-4 text-white sm:p-8  lg:mt-0 lg:pt-[10rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]", children: [
        /* @__PURE__ */ jsxDEV12("h1", { className: "text-3xl sm:text-5xl font2 w-10/12  lg:w-4/5", children: "Graphics Design" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "sm:mt-6 text-md sm:text-xl ", children: "Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("button", { className: "mt-6 text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "Hire Me" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 61,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "mt-6 picture h-[30rem] ml-8 w-[55rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Ourservices.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "", children: [
      /* @__PURE__ */ jsxDEV12("div", { className: " bg-opacity-60 p-4 text-white sm:p-8  lg:mt-0 lg:pt-[10rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]", children: [
        /* @__PURE__ */ jsxDEV12("h1", { className: "text-3xl sm:text-5xl font2 w-10/12 sm:w-4/5 lg:w-3/5", children: "UI/UX Design" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("p", { className: "sm:mt-6 text-md sm:text-xl ", children: "Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12("button", { className: "mt-6 text-[0.8rem] text-white sm:text-sm  hover:bg-blue-700  bg-gradient-to-r from-red-500 to-blue-500  font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "Hire Me" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 79,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "mt-6 picture3 h-[30rem] ml-8 w-[55rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Ourservices.tsx",
      lineNumber: 78,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Ourservices.tsx",
    lineNumber: 38,
    columnNumber: 6
  }, this),
  /* @__PURE__ */ jsxDEV12("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
    /* @__PURE__ */ jsxDEV12("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, !1, {
      fileName: "app/components/Ourservices.tsx",
      lineNumber: 8,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV12("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, !1, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 10,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ jsxDEV12(Link6, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 14,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV12(Link6, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV12(Link6, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, !1, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 16,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 13,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Ourservices.tsx",
      lineNumber: 9,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV12("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, !1, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 21,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ jsxDEV12("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV12("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/Ourservices.tsx",
            lineNumber: 25,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV12("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/Ourservices.tsx",
            lineNumber: 26,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV12("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
            fileName: "app/components/Ourservices.tsx",
            lineNumber: 27,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Ourservices.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Ourservices.tsx",
        lineNumber: 24,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Ourservices.tsx",
      lineNumber: 20,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Ourservices.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Ourservices.tsx",
  lineNumber: 37,
  columnNumber: 5
}, this), Ourservices_default = OurServices;

// app/routes/service.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
  { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
  { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:site_name", content: "Interior Decorators Inc." }
];
function Index5() {
  let [isMenuOpen, setIsMenuOpen] = useState6(!1);
  return /* @__PURE__ */ jsxDEV13("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV13(NavigationBar_default, { isMenuOpen, toggleMenuDropdown: () => {
      setIsMenuOpen(!isMenuOpen);
    } }, void 0, !1, {
      fileName: "app/routes/service.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV13(Ourservices_default, {}, void 0, !1, {
      fileName: "app/routes/service.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/service.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index6,
  meta: () => meta6
});
import { useState as useState7, useEffect as useEffect4, useRef as useRef4 } from "react";

// app/components/index.tsx
import { useRef as useRef2 } from "react";
import { useGSAP } from "@gsap/react";

// node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) {
  if (self === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, subClass.__proto__ = superClass;
}
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, _defaults = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, _suppressOverwrites, _reverting, _context, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function(value) {
  return typeof value == "string";
}, _isFunction = function(value) {
  return typeof value == "function";
}, _isNumber = function(value) {
  return typeof value == "number";
}, _isUndefined = function(value) {
  return typeof value > "u";
}, _isObject = function(value) {
  return typeof value == "object";
}, _isNotFalse = function(value) {
  return value !== !1;
}, _windowExists = function() {
  return typeof window < "u";
}, _isFuncOrString = function(value) {
  return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function(message, suppress) {
  return !suppress && console.warn(message);
}, _addGlobal = function(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function() {
  return 0;
}, _startAtRevertConfig = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, _revertConfigNoKill = {
  suppressEvents: !0,
  kill: !1
}, _revertConfig = {
  suppressEvents: !0
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function(targets) {
  var target = targets[0], harnessPlugin, i;
  if (_isObject(target) || _isFunction(target) || (targets = [targets]), !(harnessPlugin = (target._gsap || {}).harness)) {
    for (i = _harnessPlugins.length; i-- && !_harnessPlugins[i].targetTest(target); )
      ;
    harnessPlugin = _harnessPlugins[i];
  }
  for (i = targets.length; i--; )
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  return targets;
}, _getCache = function(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function(names, func) {
  return (names = names.split(",")).forEach(func) || names;
}, _round = function(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
}, _roundPrecise = function(value) {
  return Math.round(value * 1e7) / 1e7 || 0;
}, _parseRelative = function(start, value) {
  var operator = value.charAt(0), end = parseFloat(value.substr(2));
  return start = parseFloat(start), operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function(toSearch, toFind) {
  for (var l = toFind.length, i = 0; toSearch.indexOf(toFind[i]) < 0 && ++i < l; )
    ;
  return i < l;
}, _lazyRender = function() {
  var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
  for (_lazyLookup = {}, _lazyTweens.length = 0, i = 0; i < l; i++)
    tween = a[i], tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], !0)._lazy = 0);
}, _lazySafeRender = function(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender(), animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt)), _lazyTweens.length && !_reverting && _lazyRender();
}, _numericIfPossible = function(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function(p) {
  return p;
}, _setDefaults = function(obj, defaults2) {
  for (var p in defaults2)
    p in obj || (obj[p] = defaults2[p]);
  return obj;
}, _setKeyframeDefaults = function(excludeDuration) {
  return function(obj, defaults2) {
    for (var p in defaults2)
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
  };
}, _merge = function(base, toMerge) {
  for (var p in toMerge)
    base[p] = toMerge[p];
  return base;
}, _mergeDeep = function _mergeDeep2(base, toMerge) {
  for (var p in toMerge)
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  return base;
}, _copyExcluding = function(obj, excluding) {
  var copy = {}, p;
  for (p in obj)
    p in excluding || (copy[p] = obj[p]);
  return copy;
}, _inheritDefaults = function(vars) {
  var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
  if (_isNotFalse(vars.inherit))
    for (; parent; )
      func(vars, parent.vars.defaults), parent = parent.parent || parent._dp;
  return vars;
}, _arraysMatch = function(a1, a2) {
  for (var i = a1.length, match = i === a2.length; match && i-- && a1[i] === a2[i]; )
    ;
  return i < 0;
}, _addLinkedListItem = function(parent, child, firstProp, lastProp, sortBy) {
  firstProp === void 0 && (firstProp = "_first"), lastProp === void 0 && (lastProp = "_last");
  var prev = parent[lastProp], t;
  if (sortBy)
    for (t = child[sortBy]; prev && prev[sortBy] > t; )
      prev = prev._prev;
  return prev ? (child._next = prev._next, prev._next = child) : (child._next = parent[firstProp], parent[firstProp] = child), child._next ? child._next._prev = child : parent[lastProp] = child, child._prev = prev, child.parent = child._dp = parent, child;
}, _removeLinkedListItem = function(parent, child, firstProp, lastProp) {
  firstProp === void 0 && (firstProp = "_first"), lastProp === void 0 && (lastProp = "_last");
  var prev = child._prev, next = child._next;
  prev ? prev._next = next : parent[firstProp] === child && (parent[firstProp] = next), next ? next._prev = prev : parent[lastProp] === child && (parent[lastProp] = prev), child._next = child._prev = child.parent = null;
}, _removeFromParent = function(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child), child._act = 0;
}, _uncache = function(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0))
    for (var a = animation; a; )
      a._dirty = 1, a = a.parent;
  return animation;
}, _recacheAncestors = function(animation) {
  for (var parent = animation.parent; parent && parent.parent; )
    parent._dirty = 1, parent.totalDuration(), parent = parent.parent;
  return animation;
}, _rewindStartAt = function(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, !0, force));
}, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
}, _elapsedCycleDuration = function(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, _animationCycle = function(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function(animation, totalTime) {
  var parent = animation._dp;
  return parent && parent.smoothChildTiming && animation._ts && (animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts)), _setEnd(animation), parent._dirty || _uncache(parent, animation)), animation;
}, _postAddChecks = function(timeline2, child) {
  var t;
  if ((child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) && (t = _parentToChildTotalTime(timeline2.rawTime(), child), (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) && child.render(t, !0)), _uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
    if (timeline2._dur < timeline2.duration())
      for (t = timeline2; t._dp; )
        t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
    timeline2._zTime = -_tinyNum;
  }
}, _addToTimeline = function(timeline2, child, position, skipChecks) {
  return child.parent && _removeFromParent(child), child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay), child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0)), _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0), _isFromOrFromStart(child) || (timeline2._recent = child), skipChecks || _postAddChecks(timeline2, child), timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime), timeline2;
}, _scrollTrigger = function(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function(tween, time, force, suppressEvents, tTime) {
  if (_initTween(tween, time, tTime), !tween._initted)
    return 1;
  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== !1 || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame)
    return _lazyTweens.push(tween), tween._lazy = [tTime, suppressEvents], 1;
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
}, _isFromOrFromStart = function(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
  if (repeatDelay && tween._repeat && (tTime = _clamp(0, tween._tDur, totalTime), iteration = _animationCycle(tTime, repeatDelay), tween._yoyo && iteration & 1 && (ratio = 1 - ratio), iteration !== _animationCycle(tween._tTime, repeatDelay) && (prevRatio = 1 - ratio, tween.vars.repeatRefresh && tween._initted && tween.invalidate())), ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime))
      return;
    for (prevIteration = tween._zTime, tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0), suppressEvents || (suppressEvents = totalTime && !prevIteration), tween.ratio = ratio, tween._from && (ratio = 1 - ratio), tween._time = 0, tween._tTime = tTime, pt = tween._pt; pt; )
      pt.r(ratio, pt.d), pt = pt._next;
    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, !0), tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate"), tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat"), (totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio && (ratio && _removeFromParent(tween, 1), !suppressEvents && !_reverting && (_callback(tween, ratio ? "onComplete" : "onReverseComplete", !0), tween._prom && tween._prom()));
  } else
    tween._zTime || (tween._zTime = totalTime);
}, _findNextPauseTween = function(animation, prevTime, time) {
  var child;
  if (time > prevTime)
    for (child = animation._first; child && child._start <= time; ) {
      if (child.data === "isPause" && child._start > prevTime)
        return child;
      child = child._next;
    }
  else
    for (child = animation._last; child && child._start >= time; ) {
      if (child.data === "isPause" && child._start < prevTime)
        return child;
      child = child._prev;
    }
}, _setDuration = function(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
  return totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur), animation._dur = dur, animation._tDur = repeat ? repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat) : dur, totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress), animation.parent && _setEnd(animation), skipUncache || _uncache(animation.parent, animation), animation;
}, _onUpdateTotalDuration = function(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
  var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(!1) : animation._dur, i, offset, isPercent;
  return _isString(position) && (isNaN(position) || position in labels) ? (offset = position.charAt(0), isPercent = position.substr(-1) === "%", i = position.indexOf("="), offset === "<" || offset === ">" ? (i >= 0 && (position = position.replace(/=/, "")), (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1)) : i < 0 ? (position in labels || (labels[position] = clippedDuration), labels[position]) : (offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1)), isPercent && percentAnimation && (offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration()), i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset)) : position == null ? clippedDuration : +position;
}, _createTweenType = function(type, params, timeline2) {
  var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
  if (isLegacy && (vars.duration = params[1]), vars.parent = timeline2, type) {
    for (irVars = vars, parent = timeline2; parent && !("immediateRender" in irVars); )
      irVars = parent.vars.defaults || {}, parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    vars.immediateRender = _isNotFalse(irVars.immediateRender), type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
  }
  return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function(value, func) {
  return value || value === 0 ? func(value) : func;
}, _clamp = function(min, max, value) {
  return value < min ? min : value > max ? max : value;
}, getUnit = function(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, clamp = function(min, max, value) {
  return _conditionalReturn(value, function(v) {
    return _clamp(min, max, v);
  });
}, _slice = [].slice, _isArrayLike = function(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function(ar, leaveStrings, accumulator) {
  return accumulator === void 0 && (accumulator = []), ar.forEach(function(value) {
    var _accumulator;
    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
}, toArray = function(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
}, selector = function(value) {
  return value = toArray(value)[0] || _warn("Invalid scope") || {}, function(v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
}, shuffle = function(a) {
  return a.sort(function() {
    return 0.5 - Math.random();
  });
}, distribute = function(v) {
  if (_isFunction(v))
    return v;
  var vars = _isObject(v) ? v : {
    each: v
  }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
  return _isString(from) ? ratioX = ratioY = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[from] || 0 : !isDecimal && ratios && (ratioX = from[0], ratioY = from[1]), function(i, target, a) {
    var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
    if (!distances) {
      if (wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1], !wrapAt) {
        for (max = -_bigNum; max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l; )
          ;
        wrapAt < l && wrapAt--;
      }
      for (distances = cache[l] = [], originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt, originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0, max = 0, min = _bigNum, j = 0; j < l; j++)
        x = j % wrapAt - originX, y = originY - (j / wrapAt | 0), distances[j] = d = axis ? Math.abs(axis === "y" ? y : x) : _sqrt(x * x + y * y), d > max && (max = d), d < min && (min = d);
      from === "random" && shuffle(distances), distances.max = max - min, distances.min = min, distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : axis ? axis === "y" ? l / wrapAt : wrapAt : Math.max(wrapAt, l / wrapAt)) || 0) * (from === "edges" ? -1 : 1), distances.b = l < 0 ? base - l : base, distances.u = getUnit(vars.amount || vars.each) || 0, ease = ease && l < 0 ? _invertEase(ease) : ease;
    }
    return l = (distances[i] - distances.min) / distances.max || 0, _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
  };
}, _roundModifier = function(v) {
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
  return function(raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
  };
}, snap = function(snapTo, value) {
  var isArray = _isArray(snapTo), radius, is2D;
  return !isArray && _isObject(snapTo) && (radius = isArray = snapTo.radius || _bigNum, snapTo.values ? (snapTo = toArray(snapTo.values), (is2D = !_isNumber(snapTo[0])) && (radius *= radius)) : snapTo = _roundModifier(snapTo.increment)), _conditionalReturn(value, isArray ? _isFunction(snapTo) ? function(raw) {
    return is2D = snapTo(raw), Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function(raw) {
    for (var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy; i--; )
      is2D ? (dx = snapTo[i].x - x, dy = snapTo[i].y - y, dx = dx * dx + dy * dy) : dx = Math.abs(snapTo[i] - x), dx < min && (min = dx, closest = i);
    return closest = !radius || min <= radius ? snapTo[closest] : raw, is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  } : _roundModifier(snapTo));
}, random = function(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === !0 ? !!(roundingIncrement = 0) : !returnFunction, function() {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
}, pipe = function() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)
    functions[_key] = arguments[_key];
  return function(value) {
    return functions.reduce(function(v, f) {
      return f(v);
    }, value);
  };
}, unitize = function(func, unit) {
  return function(value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
}, normalize = function(min, max, value) {
  return mapRange(min, max, 0, 1, value);
}, _wrapArray = function(a, wrapper, value) {
  return _conditionalReturn(value, function(index) {
    return a[~~wrapper(index)];
  });
}, wrap = function wrap2(min, max, value) {
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
    return (range + (value2 - min) % range) % range + min;
  });
}, wrapYoyo = function wrapYoyo2(min, max, value) {
  var range = max - min, total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
    return value2 = (total + (value2 - min) % total) % total || 0, min + (value2 > range ? total - value2 : value2);
  });
}, _replaceRandom = function(value) {
  for (var prev = 0, s = "", i, nums, end, isArray; ~(i = value.indexOf("random(", prev)); )
    end = value.indexOf(")", i), isArray = value.charAt(i + 7) === "[", nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp), s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5), prev = end + 1;
  return s + value.substr(prev, value.length - prev);
}, mapRange = function(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin, outRange = outMax - outMin;
  return _conditionalReturn(value, function(value2) {
    return outMin + ((value2 - inMin) / inRange * outRange || 0);
  });
}, interpolate = function interpolate2(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function(p2) {
    return (1 - p2) * start + p2 * end;
  };
  if (!func) {
    var isString = _isString(start), master = {}, p, i, interpolators, l, il;
    if (progress === !0 && (mutate = 1) && (progress = null), isString)
      start = {
        p: start
      }, end = {
        p: end
      };
    else if (_isArray(start) && !_isArray(end)) {
      for (interpolators = [], l = start.length, il = l - 2, i = 1; i < l; i++)
        interpolators.push(interpolate2(start[i - 1], start[i]));
      l--, func = function(p2) {
        p2 *= l;
        var i2 = Math.min(il, ~~p2);
        return interpolators[i2](p2 - i2);
      }, progress = end;
    } else
      mutate || (start = _merge(_isArray(start) ? [] : {}, start));
    if (!interpolators) {
      for (p in end)
        _addPropTween.call(master, start, p, "get", end[p]);
      func = function(p2) {
        return _renderPropTweens(p2, master) || (isString ? start.p : start);
      };
    }
  }
  return _conditionalReturn(progress, func);
}, _getLabelInDirection = function(timeline2, fromTime, backward) {
  var labels = timeline2.labels, min = _bigNum, p, distance, label;
  for (p in labels)
    distance = labels[p] - fromTime, distance < 0 == !!backward && distance && min > (distance = Math.abs(distance)) && (label = p, min = distance);
  return label;
}, _callback = function(animation, type, executeLazyFirst) {
  var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
  if (callback)
    return params = v[type + "Params"], scope = v.callbackScope || animation, executeLazyFirst && _lazyTweens.length && _lazyRender(), context3 && (_context = context3), result = params ? callback.apply(scope, params) : callback.call(scope), _context = prevContext, result;
}, _interrupt = function(animation) {
  return _removeFromParent(animation), animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting), animation.progress() < 1 && _callback(animation, "onInterrupt"), animation;
}, _quickTween, _registerPluginQueue = [], _createPlugin = function(config3) {
  if (config3)
    if (config3 = !config3.name && config3.default || config3, _windowExists() || config3.headless) {
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      if (_wake(), config3 !== Plugin) {
        if (_plugins[name])
          return;
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics)), _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics))), _plugins[Plugin.prop = name] = Plugin, config3.targetTest && (_harnessPlugins.push(Plugin), _reservedProps[name] = 1), name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin), config3.register && config3.register(gsap, Plugin, PropTween);
    } else
      _registerPluginQueue.push(config3);
}, _255 = 255, _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
}, _hue = function(h, m1, m2) {
  return h += h < 0 ? 1 : h > 1 ? -1 : 0, (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
}, splitColor = function(v, toHSL, forceAlpha) {
  var a = v ? _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0 : _colorLookup.black, r, g, b, h, s, l, max, min, d, wasHSL;
  if (!a) {
    if (v.substr(-1) === "," && (v = v.substr(0, v.length - 1)), _colorLookup[v])
      a = _colorLookup[v];
    else if (v.charAt(0) === "#") {
      if (v.length < 6 && (r = v.charAt(1), g = v.charAt(2), b = v.charAt(3), v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "")), v.length === 9)
        return a = parseInt(v.substr(1, 6), 16), [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      v = parseInt(v.substr(1), 16), a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      if (a = wasHSL = v.match(_strictNumExp), !toHSL)
        h = +a[0] % 360 / 360, s = +a[1] / 100, l = +a[2] / 100, g = l <= 0.5 ? l * (s + 1) : l + s - l * s, r = l * 2 - g, a.length > 3 && (a[3] *= 1), a[0] = _hue(h + 1 / 3, r, g), a[1] = _hue(h, r, g), a[2] = _hue(h - 1 / 3, r, g);
      else if (~v.indexOf("="))
        return a = v.match(_numExp), forceAlpha && a.length < 4 && (a[3] = 1), a;
    } else
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    a = a.map(Number);
  }
  return toHSL && !wasHSL && (r = a[0] / _255, g = a[1] / _255, b = a[2] / _255, max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, max === min ? h = s = 0 : (d = max - min, s = l > 0.5 ? d / (2 - max - min) : d / (max + min), h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4, h *= 60), a[0] = ~~(h + 0.5), a[1] = ~~(s * 100 + 0.5), a[2] = ~~(l * 100 + 0.5)), forceAlpha && a.length < 4 && (a[3] = 1), a;
}, _colorOrderData = function(v) {
  var values = [], c = [], i = -1;
  return v.split(_colorExp).forEach(function(v2) {
    var a = v2.match(_numWithUnitExp) || [];
    values.push.apply(values, a), c.push(i += a.length + 1);
  }), values.c = c, values;
}, _formatColors = function(s, toHSL, orderMatchData) {
  var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
  if (!colors)
    return s;
  if (colors = colors.map(function(color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  }), orderMatchData && (d = _colorOrderData(s), c = orderMatchData.c, c.join(result) !== d.c.join(result)))
    for (shell = s.replace(_colorExp, "1").split(_numWithUnitExp), l = shell.length - 1; i < l; i++)
      result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
  if (!shell)
    for (shell = s.split(_colorExp), l = shell.length - 1; i < l; i++)
      result += shell[i] + colors[i];
  return result + shell[l];
}, _colorExp = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
  for (p in _colorLookup)
    s += "|" + p + "\\b";
  return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function(a) {
  var combined = a.join(" "), toHSL;
  if (_colorExp.lastIndex = 0, _colorExp.test(combined))
    return toHSL = _hslExp.test(combined), a[1] = _formatColors(a[1], toHSL), a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])), !0;
}, _tickerActive, _ticker = function() {
  var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
    var elapsed = _getTime3() - _lastUpdate, manual = v === !0, overlap, dispatch, time, frame;
    if ((elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag), _lastUpdate += elapsed, time = _lastUpdate - _startTime, overlap = time - _nextTime, (overlap > 0 || manual) && (frame = ++_self.frame, _delta = time - _self.time * 1e3, _self.time = time = time / 1e3, _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap), dispatch = 1), manual || (_id = _req(_tick2)), dispatch)
      for (_i2 = 0; _i2 < _listeners3.length; _i2++)
        _listeners3[_i2](time, _delta, frame, v);
  };
  return _self = {
    time: 0,
    frame: 0,
    tick: function() {
      _tick(!0);
    },
    deltaRatio: function(fps) {
      return _delta / (1e3 / (fps || 60));
    },
    wake: function() {
      _coreReady && (!_coreInitted && _windowExists() && (_win = _coreInitted = window, _doc = _win.document || {}, _globals.gsap = gsap, (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version), _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {}), _registerPluginQueue.forEach(_createPlugin)), _raf = typeof requestAnimationFrame < "u" && requestAnimationFrame, _id && _self.sleep(), _req = _raf || function(f) {
        return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
      }, _tickerActive = 1, _tick(2));
    },
    sleep: function() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id), _tickerActive = 0, _req = _emptyFunc;
    },
    lagSmoothing: function(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / 0, _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function(_fps) {
      _gap = 1e3 / (_fps || 240), _nextTime = _self.time * 1e3 + _gap;
    },
    add: function(callback, once, prioritize) {
      var func = once ? function(t, d, f, v) {
        callback(t, d, f, v), _self.remove(func);
      } : callback;
      return _self.remove(callback), _listeners3[prioritize ? "unshift" : "push"](func), _wake(), func;
    },
    remove: function(callback, i) {
      ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
    },
    _listeners: _listeners3
  }, _self;
}(), _wake = function() {
  return !_tickerActive && _ticker.wake();
}, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function(value) {
  for (var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal; i < l; i++)
    val = split[i], index = i !== l - 1 ? val.lastIndexOf(",") : val.length, parsedVal = val.substr(0, index), obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal, key = val.substr(index + 1).trim();
  return obj;
}, _valueInParentheses = function(value) {
  var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function(name) {
  var split = (name + "").split("("), ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function(ease) {
  return function(p) {
    return 1 - ease(1 - p);
  };
}, _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
  for (var child = timeline2._first, ease; child; )
    child instanceof Timeline ? _propagateYoyoEase2(child, isYoyo) : child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo && (child.timeline ? _propagateYoyoEase2(child.timeline, isYoyo) : (ease = child._ease, child._ease = child._yEase, child._yEase = ease, child._yoyo = isYoyo)), child = child._next;
}, _parseEase = function(ease, defaultEase) {
  return ease && (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function(names, easeIn, easeOut, easeInOut) {
  easeOut === void 0 && (easeOut = function(p) {
    return 1 - easeIn(1 - p);
  }), easeInOut === void 0 && (easeInOut = function(p) {
    return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
  });
  var ease = {
    easeIn,
    easeOut,
    easeInOut
  }, lowercaseName;
  return _forEachName(names, function(name) {
    _easeMap[name] = _globals[name] = ease, _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
    for (var p in ease)
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
  }), ease;
}, _easeInOutFromOut = function(easeOut) {
  return function(p) {
    return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
  };
}, _configElastic = function _configElastic2(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  return p2 = _2PI / p2, ease.config = function(amplitude2, period2) {
    return _configElastic2(type, amplitude2, period2);
  }, ease;
}, _configBack = function _configBack2(type, overshoot) {
  overshoot === void 0 && (overshoot = 1.70158);
  var easeOut = function(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  return ease.config = function(overshoot2) {
    return _configBack2(type, overshoot2);
  }, ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function(p) {
    return Math.pow(p, power);
  } : function(p) {
    return p;
  }, function(p) {
    return 1 - Math.pow(1 - p, power);
  }, function(p) {
    return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
  var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
  };
  _insertEase("Bounce", function(p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function(steps, immediateStart) {
    steps === void 0 && (steps = 1);
    var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
    return function(p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
  return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function(target, harness) {
  this.id = _gsID++, target._gsap = this, this.target = target, this.harness = harness, this.get = harness ? harness.get : _getProperty, this.set = harness ? harness.getSetter : _getSetter;
}, Animation = /* @__PURE__ */ function() {
  function Animation2(vars) {
    this.vars = vars, this._delay = +vars.delay || 0, (this._repeat = vars.repeat === 1 / 0 ? -2 : vars.repeat || 0) && (this._rDelay = vars.repeatDelay || 0, this._yoyo = !!vars.yoyo || !!vars.yoyoEase), this._ts = 1, _setDuration(this, +vars.duration, 1, 1), this.data = vars.data, _context && (this._ctx = _context, _context.data.push(this)), _tickerActive || _ticker.wake();
  }
  var _proto = Animation2.prototype;
  return _proto.delay = function(value) {
    return value || value === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay), this._delay = value, this) : this._delay;
  }, _proto.duration = function(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  }, _proto.totalDuration = function(value) {
    return arguments.length ? (this._dirty = 0, _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, _proto.totalTime = function(_totalTime, suppressEvents) {
    if (_wake(), !arguments.length)
      return this._tTime;
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      for (_alignPlayhead(this, _totalTime), !parent._dp || parent.parent || _postAddChecks(parent, this); parent && parent.parent; )
        parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts) && parent.totalTime(parent._tTime, !0), parent = parent.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime) && _addToTimeline(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = _totalTime), _lazySafeRender(this, _totalTime, suppressEvents)), this;
  }, _proto.time = function(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
  }, _proto.totalProgress = function(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, _proto.progress = function(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, _proto.iteration = function(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  }, _proto.timeScale = function(value, suppressEvents) {
    if (!arguments.length)
      return this._rts === -_tinyNum ? 0 : this._rts;
    if (this._rts === value)
      return this;
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
    return this._rts = +value || 0, this._ts = this._ps || value === -_tinyNum ? 0 : this._rts, this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== !1), _setEnd(this), _recacheAncestors(this);
  }, _proto.paused = function(value) {
    return arguments.length ? (this._ps !== value && (this._ps = value, value ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (_wake(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)))), this) : this._ps;
  }, _proto.startTime = function(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      return parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay), this;
    }
    return this._start;
  }, _proto.endTime = function(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, _proto.rawTime = function(wrapRepeats) {
    var parent = this.parent || this._dp;
    return parent ? wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _parentToChildTotalTime(parent.rawTime(wrapRepeats), this) : this._tTime : this._tTime;
  }, _proto.revert = function(config3) {
    config3 === void 0 && (config3 = _revertConfig);
    var prevIsReverting = _reverting;
    return _reverting = config3, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(config3), this.totalTime(-0.01, config3.suppressEvents)), this.data !== "nested" && config3.kill !== !1 && this.kill(), _reverting = prevIsReverting, this;
  }, _proto.globalTime = function(rawTime) {
    for (var animation = this, time = arguments.length ? rawTime : animation.rawTime(); animation; )
      time = animation._start + time / (Math.abs(animation._ts) || 1), animation = animation._dp;
    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
  }, _proto.repeat = function(value) {
    return arguments.length ? (this._repeat = value === 1 / 0 ? -2 : value, _onUpdateTotalDuration(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, _proto.repeatDelay = function(value) {
    if (arguments.length) {
      var time = this._time;
      return this._rDelay = value, _onUpdateTotalDuration(this), time ? this.time(time) : this;
    }
    return this._rDelay;
  }, _proto.yoyo = function(value) {
    return arguments.length ? (this._yoyo = value, this) : this._yoyo;
  }, _proto.seek = function(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  }, _proto.restart = function(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  }, _proto.play = function(from, suppressEvents) {
    return from != null && this.seek(from, suppressEvents), this.reversed(!1).paused(!1);
  }, _proto.reverse = function(from, suppressEvents) {
    return from != null && this.seek(from || this.totalDuration(), suppressEvents), this.reversed(!0).paused(!1);
  }, _proto.pause = function(atTime, suppressEvents) {
    return atTime != null && this.seek(atTime, suppressEvents), this.paused(!0);
  }, _proto.resume = function() {
    return this.paused(!1);
  }, _proto.reversed = function(value) {
    return arguments.length ? (!!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)), this) : this._rts < 0;
  }, _proto.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -_tinyNum, this;
  }, _proto.isActive = function() {
    var parent = this.parent || this._dp, start = this._start, rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(!0)) >= start && rawTime < this.endTime(!0) - _tinyNum);
  }, _proto.eventCallback = function(type, callback, params) {
    var vars = this.vars;
    return arguments.length > 1 ? (callback ? (vars[type] = callback, params && (vars[type + "Params"] = params), type === "onUpdate" && (this._onUpdate = callback)) : delete vars[type], this) : vars[type];
  }, _proto.then = function(onFulfilled) {
    var self = this;
    return new Promise(function(resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function() {
        var _then = self.then;
        self.then = null, _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then), resolve(f), self.then = _then;
      };
      self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0 ? _resolve() : self._prom = _resolve;
    });
  }, _proto.kill = function() {
    _interrupt(this);
  }, Animation2;
}();
_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Timeline = /* @__PURE__ */ function(_Animation) {
  _inheritsLoose(Timeline2, _Animation);
  function Timeline2(vars, position) {
    var _this;
    return vars === void 0 && (vars = {}), _this = _Animation.call(this, vars) || this, _this.labels = {}, _this.smoothChildTiming = !!vars.smoothChildTiming, _this.autoRemoveChildren = !!vars.autoRemoveChildren, _this._sort = _isNotFalse(vars.sortChildren), _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position), vars.reversed && _this.reverse(), vars.paused && _this.paused(!0), vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger), _this;
  }
  var _proto2 = Timeline2.prototype;
  return _proto2.to = function(targets, vars, position) {
    return _createTweenType(0, arguments, this), this;
  }, _proto2.from = function(targets, vars, position) {
    return _createTweenType(1, arguments, this), this;
  }, _proto2.fromTo = function(targets, fromVars, toVars, position) {
    return _createTweenType(2, arguments, this), this;
  }, _proto2.set = function(targets, vars, position) {
    return vars.duration = 0, vars.parent = this, _inheritDefaults(vars).repeatDelay || (vars.repeat = 0), vars.immediateRender = !!vars.immediateRender, new Tween(targets, vars, _parsePosition(this, position), 1), this;
  }, _proto2.call = function(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  }, _proto2.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    return vars.duration = duration, vars.stagger = vars.stagger || stagger, vars.onComplete = onCompleteAll, vars.onCompleteParams = onCompleteAllParams, vars.parent = this, new Tween(targets, vars, _parsePosition(this, position)), this;
  }, _proto2.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    return vars.runBackwards = 1, _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender), this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  }, _proto2.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    return toVars.startAt = fromVars, _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender), this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  }, _proto2.render = function(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 != totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
    if (this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur), tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur && (tTime += this._time - prevTime, totalTime += this._time - prevTime), time = tTime, prevStart = this._start, timeScale = this._ts, prevPaused = !timeScale, crossingStart && (dur || (prevTime = this._zTime), (totalTime || !suppressEvents) && (this._zTime = totalTime)), this._repeat) {
        if (yoyo = this._yoyo, cycleDuration = dur + this._rDelay, this._repeat < -1 && totalTime < 0)
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        if (time = _roundPrecise(tTime % cycleDuration), tTime === tDur ? (iteration = this._repeat, time = dur) : (iteration = ~~(tTime / cycleDuration), iteration && iteration === tTime / cycleDuration && (time = dur, iteration--), time > dur && (time = dur)), prevIteration = _animationCycle(this._tTime, cycleDuration), !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration), yoyo && iteration & 1 && (time = dur - time, isYoyo = 1), iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
          if (iteration < prevIteration && (rewinding = !rewinding), prevTime = rewinding ? 0 : tTime % dur ? dur : tTime, this._lock = 1, this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0, this._tTime = tTime, !suppressEvents && this.parent && _callback(this, "onRepeat"), this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1), prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (dur = this._dur, tDur = this._tDur, doesWrap && (this._lock = 2, prevTime = rewinding ? dur : -1e-4, this.render(prevTime, !0), this.vars.repeatRefresh && !isYoyo && this.invalidate()), this._lock = 0, !this._ts && !prevPaused)
            return this;
          _propagateYoyoEase(this, isYoyo);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time)), pauseTween && (tTime -= time - (time = pauseTween._start))), this._tTime = tTime, this._time = time, this._act = !timeScale, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = totalTime, prevTime = 0), !prevTime && time && !suppressEvents && !iteration && (_callback(this, "onStart"), this._tTime !== tTime))
        return this;
      if (time >= prevTime && totalTime >= 0)
        for (child = this._first; child; ) {
          if (next = child._next, (child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this)
              return this.render(totalTime, suppressEvents, force);
            if (child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force), time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0, next && (tTime += this._zTime = -_tinyNum);
              break;
            }
          }
          child = next;
        }
      else {
        child = this._last;
        for (var adjustedTime = totalTime < 0 ? totalTime : time; child; ) {
          if (next = child._prev, (child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this)
              return this.render(totalTime, suppressEvents, force);
            if (child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)), time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0, next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents && (this.pause(), pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1, this._ts))
        return this._start = prevStart, _setEnd(this), this.render(totalTime, suppressEvents, force);
      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", !0), (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) && (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) && (this._lock || ((totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1), !suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur) && (_callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, _proto2.add = function(child, position) {
    var _this2 = this;
    if (_isNumber(position) || (position = _parsePosition(this, position, child)), !(child instanceof Animation)) {
      if (_isArray(child))
        return child.forEach(function(obj) {
          return _this2.add(obj, position);
        }), this;
      if (_isString(child))
        return this.addLabel(child, position);
      if (_isFunction(child))
        child = Tween.delayedCall(0, child);
      else
        return this;
    }
    return this !== child ? _addToTimeline(this, child, position) : this;
  }, _proto2.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
    nested === void 0 && (nested = !0), tweens === void 0 && (tweens = !0), timelines === void 0 && (timelines = !0), ignoreBeforeTime === void 0 && (ignoreBeforeTime = -_bigNum);
    for (var a = [], child = this._first; child; )
      child._start >= ignoreBeforeTime && (child instanceof Tween ? tweens && a.push(child) : (timelines && a.push(child), nested && a.push.apply(a, child.getChildren(!0, tweens, timelines)))), child = child._next;
    return a;
  }, _proto2.getById = function(id) {
    for (var animations = this.getChildren(1, 1, 1), i = animations.length; i--; )
      if (animations[i].vars.id === id)
        return animations[i];
  }, _proto2.remove = function(child) {
    return _isString(child) ? this.removeLabel(child) : _isFunction(child) ? this.killTweensOf(child) : (_removeLinkedListItem(this, child), child === this._recent && (this._recent = this._last), _uncache(this));
  }, _proto2.totalTime = function(_totalTime2, suppressEvents) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts))), _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents), this._forcing = 0, this) : this._tTime;
  }, _proto2.addLabel = function(label, position) {
    return this.labels[label] = _parsePosition(this, position), this;
  }, _proto2.removeLabel = function(label) {
    return delete this.labels[label], this;
  }, _proto2.addPause = function(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    return t.data = "isPause", this._hasPause = 1, _addToTimeline(this, t, _parsePosition(this, position));
  }, _proto2.removePause = function(position) {
    var child = this._first;
    for (position = _parsePosition(this, position); child; )
      child._start === position && child.data === "isPause" && _removeFromParent(child), child = child._next;
  }, _proto2.killTweensOf = function(targets, props, onlyActive) {
    for (var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length; i--; )
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    return this;
  }, _proto2.getTweensOf = function(targets, onlyActive) {
    for (var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children; child; )
      child instanceof Tween ? _arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive()) && a.push(child) : (children = child.getTweensOf(parsedTargets, onlyActive)).length && a.push.apply(a, children), child = child._next;
    return a;
  }, _proto2.tweenTo = function(position, vars) {
    vars = vars || {};
    var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function() {
        if (tl.pause(), !initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, !0, !0), initted = 1;
        }
        _onStart && _onStart.apply(tween, onStartParams || []);
      }
    }, vars));
    return immediateRender ? tween.render(0) : tween;
  }, _proto2.tweenFromTo = function(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  }, _proto2.recent = function() {
    return this._recent;
  }, _proto2.nextLabel = function(afterTime) {
    return afterTime === void 0 && (afterTime = this._time), _getLabelInDirection(this, _parsePosition(this, afterTime));
  }, _proto2.previousLabel = function(beforeTime) {
    return beforeTime === void 0 && (beforeTime = this._time), _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  }, _proto2.currentLabel = function(value) {
    return arguments.length ? this.seek(value, !0) : this.previousLabel(this._time + _tinyNum);
  }, _proto2.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
    ignoreBeforeTime === void 0 && (ignoreBeforeTime = 0);
    for (var child = this._first, labels = this.labels, p; child; )
      child._start >= ignoreBeforeTime && (child._start += amount, child._end += amount), child = child._next;
    if (adjustLabels)
      for (p in labels)
        labels[p] >= ignoreBeforeTime && (labels[p] += amount);
    return _uncache(this);
  }, _proto2.invalidate = function(soft) {
    var child = this._first;
    for (this._lock = 0; child; )
      child.invalidate(soft), child = child._next;
    return _Animation.prototype.invalidate.call(this, soft);
  }, _proto2.clear = function(includeLabels) {
    includeLabels === void 0 && (includeLabels = !0);
    for (var child = this._first, next; child; )
      next = child._next, this.remove(child), child = next;
    return this._dp && (this._time = this._tTime = this._pTime = 0), includeLabels && (this.labels = {}), _uncache(this);
  }, _proto2.totalDuration = function(value) {
    var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
    if (arguments.length)
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    if (self._dirty) {
      for (parent = self.parent; child; )
        prev = child._prev, child._dirty && child.totalDuration(), start = child._start, start > prevStart && self._sort && child._ts && !self._lock ? (self._lock = 1, _addToTimeline(self, child, start - child._delay, 1)._lock = 0) : prevStart = start, start < 0 && child._ts && (max -= start, (!parent && !self._dp || parent && parent.smoothChildTiming) && (self._start += start / self._ts, self._time -= start, self._tTime -= start), self.shiftChildren(-start, !1, -1 / 0), prevStart = 0), child._end > max && child._ts && (max = child._end), child = prev;
      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1), self._dirty = 0;
    }
    return self._tDur;
  }, Timeline2.updateRoot = function(time) {
    if (_globalTimeline._ts && (_lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline)), _lastRenderedFrame = _ticker.frame), _ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if ((!child || !child._ts) && _config.autoSleep && _ticker._listeners.length < 2) {
        for (; child && !child._ts; )
          child = child._next;
        child || _ticker.sleep();
      }
    }
  }, Timeline2;
}(Animation);
_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function(target, prop, start, end, setter, stringFilter, funcParam) {
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
  for (pt.b = start, pt.e = end, start += "", end += "", (hasRandom = ~end.indexOf("random(")) && (end = _replaceRandom(end)), stringFilter && (a = [start, end], stringFilter(a, target, prop), start = a[0], end = a[1]), startNums = start.match(_complexStringNumExp) || []; result = _complexStringNumExp.exec(end); )
    endNum = result[0], chunk = end.substring(index, result.index), color ? color = (color + 1) % 5 : chunk.substr(-5) === "rgba(" && (color = 1), endNum !== startNums[matchIndex++] && (startNum = parseFloat(startNums[matchIndex - 1]) || 0, pt._pt = {
      _next: pt._pt,
      p: chunk || matchIndex === 1 ? chunk : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: startNum,
      c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
      m: color && color < 4 ? Math.round : 0
    }, index = _complexStringNumExp.lastIndex);
  return pt.c = index < end.length ? end.substring(index, end.length) : "", pt.fp = funcParam, (_relExp.test(end) || hasRandom) && (pt.e = 0), this._pt = pt, pt;
}, _addPropTween = function(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop], parsedStart = start !== "get" ? start : _isFunction(currentValue) ? funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop]() : currentValue, setter = _isFunction(currentValue) ? funcParam ? _setterFuncWithParam : _setterFunc : _setterPlain, pt;
  if (_isString(end) && (~end.indexOf("random(") && (end = _replaceRandom(end)), end.charAt(1) === "=" && (pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0), (pt || pt === 0) && (end = pt))), !optional || parsedStart !== end || _forceAllPropTweens)
    return !isNaN(parsedStart * end) && end !== "" ? (pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue == "boolean" ? _renderBoolean : _renderPlain, 0, setter), funcParam && (pt.fp = funcParam), modifier && pt.modifier(modifier, this, target), this._pt = pt) : (!currentValue && !(prop in target) && _missingPlugin(prop, end), _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam));
}, _processVars = function(vars, index, target, targets, tween) {
  if (_isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets)), !_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars))
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  var copy = {}, p;
  for (p in vars)
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  return copy;
}, _checkPlugin = function(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;
  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== !1 && (tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority), tween !== _quickTween))
    for (ptLookup = tween._ptLookup[tween._targets.indexOf(target)], i = plugin._props.length; i--; )
      ptLookup[plugin._props[i]] = pt;
  return plugin;
}, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time, tTime) {
  var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
  if (tl && (!keyframes || !ease) && (ease = "none"), tween._ease = _parseEase(ease, _defaults.ease), tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === !0 ? ease : yoyoEase, _defaults.ease)) : 0, yoyoEase && tween._yoyo && !tween._repeat && (yoyoEase = tween._yEase, tween._yEase = tween._ease, tween._ease = yoyoEase), tween._from = !tl && !!vars.runBackwards, !tl || keyframes && !vars.stagger) {
    if (harness = targets[0] ? _getCache(targets[0]).harness : 0, harnessVars = harness && vars[harness.prop], cleanVars = _copyExcluding(vars, _reservedProps), prevStartAt && (prevStartAt._zTime < 0 && prevStartAt.progress(1), time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, !0) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig), prevStartAt._lazy = 0), startAt) {
      if (_removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: !1,
        parent,
        immediateRender: !0,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function() {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))), tween._startAt._dp = 0, tween._startAt._sat = tween, time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill), immediateRender && dur && time <= 0 && tTime <= 0) {
        time && (tween._zTime = time);
        return;
      }
    } else if (runBackwards && dur && !prevStartAt) {
      if (time && (immediateRender = !1), p = _setDefaults({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
        immediateRender,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, cleanVars), harnessVars && (p[harness.prop] = harnessVars), _removeFromParent(tween._startAt = Tween.set(targets, p)), tween._startAt._dp = 0, tween._startAt._sat = tween, time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, !0)), tween._zTime = time, !immediateRender)
        _initTween2(tween._startAt, _tinyNum, _tinyNum);
      else if (!time)
        return;
    }
    for (tween._pt = tween._ptCache = 0, lazy = dur && _isNotFalse(lazy) || lazy && !dur, i = 0; i < targets.length; i++) {
      if (target = targets[i], gsData = target._gsap || _harness(targets)[i]._gsap, tween._ptLookup[i] = ptLookup = {}, _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(), index = fullTargets === targets ? i : fullTargets.indexOf(target), harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== !1 && (tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority), plugin._props.forEach(function(name) {
        ptLookup[name] = pt;
      }), plugin.priority && (hasPriority = 1)), !harness || harnessVars)
        for (p in cleanVars)
          _plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets)) ? plugin.priority && (hasPriority = 1) : ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
      tween._op && tween._op[i] && tween.kill(target, tween._op[i]), autoOverwrite && tween._pt && (_overwritingTween = tween, _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)), overwritten = !tween.parent, _overwritingTween = 0), tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }
    hasPriority && _sortPropTweensByPriority(tween), tween._onInit && tween._onInit(tween);
  }
  tween._onUpdate = onUpdate, tween._initted = (!tween._op || tween._pt) && !overwritten, keyframes && time <= 0 && tl.render(_bigNum, !0, !0);
}, _updatePropTweens = function(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
  if (!ptCache)
    for (ptCache = tween._ptCache[property] = [], lookup = tween._ptLookup, i = tween._targets.length; i--; ) {
      if (pt = lookup[i][property], pt && pt.d && pt.d._pt)
        for (pt = pt.d._pt; pt && pt.p !== property && pt.fp !== property; )
          pt = pt._next;
      if (!pt)
        return _forceAllPropTweens = 1, tween.vars[property] = "+=0", _initTween(tween, time), _forceAllPropTweens = 0, skipRecursion ? _warn(property + " not eligible for reset") : 1;
      ptCache.push(pt);
    }
  for (i = ptCache.length; i--; )
    rootPT = ptCache[i], pt = rootPT._pt || rootPT, pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c, pt.c = value - pt.s, rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)), rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
}, _addAliasesToVars = function(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
  if (!propertyAliases)
    return vars;
  copy = _merge({}, vars);
  for (p in propertyAliases)
    if (p in copy)
      for (aliases = propertyAliases[p].split(","), i = aliases.length; i--; )
        copy[aliases[i]] = copy[p];
  return copy;
}, _parseKeyframe = function(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut", p, a;
  if (_isArray(obj))
    a = allProps[prop] || (allProps[prop] = []), obj.forEach(function(value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  else
    for (p in obj)
      a = allProps[p] || (allProps[p] = []), p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
}, _parseFuncOrString = function(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
  return _staggerPropsToSkip[name] = 1;
});
var Tween = /* @__PURE__ */ function(_Animation2) {
  _inheritsLoose(Tween2, _Animation2);
  function Tween2(targets, vars, position, skipInherit) {
    var _this3;
    typeof vars == "number" && (position.duration = vars, vars = position, position = null), _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
    if (_this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [], _this3._ptLookup = [], _this3._overwrite = overwrite, keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      if (vars = _this3.vars, tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults2 || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }), tl.kill(), tl.parent = tl._dp = _assertThisInitialized(_this3), tl._start = 0, stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        if (l = parsedTargets.length, staggerFunc = stagger && distribute(stagger), _isObject(stagger))
          for (p in stagger)
            ~_staggerTweenProps.indexOf(p) && (staggerVarsToMerge || (staggerVarsToMerge = {}), staggerVarsToMerge[p] = stagger[p]);
        for (i = 0; i < l; i++)
          copy = _copyExcluding(vars, _staggerPropsToSkip), copy.stagger = 0, yoyoEase && (copy.yoyoEase = yoyoEase), staggerVarsToMerge && _merge(copy, staggerVarsToMerge), curTarget = parsedTargets[i], copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets), copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay, !stagger && l === 1 && copy.delay && (_this3._delay = delay = copy.delay, _this3._start += delay, copy.delay = 0), tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0), tl._ease = _easeMap.none;
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        })), tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0, a, kf, v;
        if (_isArray(keyframes))
          keyframes.forEach(function(frame) {
            return tl.to(parsedTargets, frame, ">");
          }), tl.duration();
        else {
          copy = {};
          for (p in keyframes)
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          for (p in copy)
            for (a = copy[p].sort(function(a2, b) {
              return a2.t - b.t;
            }), time = 0, i = 0; i < a.length; i++)
              kf = a[i], v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              }, v[p] = kf.v, tl.to(parsedTargets, v, time), time += v.duration;
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          });
        }
      }
      duration || _this3.duration(duration = tl.duration());
    } else
      _this3.timeline = 0;
    return overwrite === !0 && !_suppressOverwrites && (_overwritingTween = _assertThisInitialized(_this3), _globalTimeline.killTweensOf(parsedTargets), _overwritingTween = 0), _addToTimeline(parent, _assertThisInitialized(_this3), position), vars.reversed && _this3.reverse(), vars.paused && _this3.paused(!0), (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") && (_this3._tTime = -_tinyNum, _this3.render(Math.max(0, -delay) || 0)), scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger), _this3;
  }
  var _proto3 = Tween2.prototype;
  return _proto3.render = function(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
    if (!dur)
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      if (time = tTime, timeline2 = this.timeline, this._repeat) {
        if (cycleDuration = dur + this._rDelay, this._repeat < -1 && isNegative)
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        if (time = _roundPrecise(tTime % cycleDuration), tTime === tDur ? (iteration = this._repeat, time = dur) : (iteration = ~~(tTime / cycleDuration), iteration && iteration === _roundPrecise(tTime / cycleDuration) && (time = dur, iteration--), time > dur && (time = dur)), isYoyo = this._yoyo && iteration & 1, isYoyo && (yoyoEase = this._yEase, time = dur - time), prevIteration = _animationCycle(this._tTime, cycleDuration), time === prevTime && !force && this._initted && iteration === prevIteration)
          return this._tTime = tTime, this;
        iteration !== prevIteration && (timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo), this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted && (this._lock = force = 1, this.render(_roundPrecise(cycleDuration * iteration), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime))
          return this._tTime = 0, this;
        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration))
          return this;
        if (dur !== this._dur)
          return this.render(totalTime, suppressEvents, force);
      }
      if (this._tTime = tTime, this._time = time, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = ratio = (yoyoEase || this._ease)(time / dur), this._from && (this.ratio = ratio = 1 - ratio), time && !prevTime && !suppressEvents && !iteration && (_callback(this, "onStart"), this._tTime !== tTime))
        return this;
      for (pt = this._pt; pt; )
        pt.r(ratio, pt.d), pt = pt._next;
      timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime), this._onUpdate && !suppressEvents && (isNegative && _rewindStartAt(this, totalTime, suppressEvents, force), _callback(this, "onUpdate")), this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat"), (tTime === this._tDur || !tTime) && this._tTime === tTime && (isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, !0, !0), (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1), !suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo) && (_callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", !0), this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, _proto3.targets = function() {
    return this._targets;
  }, _proto3.invalidate = function(soft) {
    return (!soft || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(soft), _Animation2.prototype.invalidate.call(this, soft);
  }, _proto3.resetTo = function(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake(), this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
    return this._initted || _initTween(this, time), ratio = this._ease(time / this._dur), _updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion) ? this.resetTo(property, value, start, startIsRelative, 1) : (_alignPlayhead(this, 0), this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, _proto3.kill = function(targets, vars) {
    if (vars === void 0 && (vars = "all"), !targets && (!vars || vars === "all"))
      return this._lazy = this._pt = 0, this.parent ? _interrupt(this) : this;
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      return this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== !0)._first || _interrupt(this), this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1), this;
    }
    var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets))
      return vars === "all" && (this._pt = 0), _interrupt(this);
    for (overwrittenProps = this._op = this._op || [], vars !== "all" && (_isString(vars) && (p = {}, _forEachName(vars, function(name) {
      return p[name] = 1;
    }), vars = p), vars = _addAliasesToVars(parsedTargets, vars)), i = parsedTargets.length; i--; )
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i], vars === "all" ? (overwrittenProps[i] = vars, props = curLookup, curOverwriteProps = {}) : (curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {}, props = vars);
        for (p in props)
          pt = curLookup && curLookup[p], pt && ((!("kill" in pt.d) || pt.d.kill(p) === !0) && _removeLinkedListItem(this, pt, "_pt"), delete curLookup[p]), curOverwriteProps !== "all" && (curOverwriteProps[p] = 1);
      }
    return this._initted && !this._pt && firstPT && _interrupt(this), this;
  }, Tween2.to = function(targets, vars) {
    return new Tween2(targets, vars, arguments[2]);
  }, Tween2.from = function(targets, vars) {
    return _createTweenType(1, arguments);
  }, Tween2.delayedCall = function(delay, callback, params, scope) {
    return new Tween2(callback, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  }, Tween2.fromTo = function(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  }, Tween2.set = function(targets, vars) {
    return vars.duration = 0, vars.repeatDelay || (vars.repeat = 0), new Tween2(targets, vars);
  }, Tween2.killTweensOf = function(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  }, Tween2;
}(Animation);
_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
  Tween[name] = function() {
    var tl = new Timeline(), params = _slice.call(arguments, 0);
    return params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0), tl[name].apply(tl, params);
  };
});
var _setterPlain = function(target, property, value) {
  return target[property] = value;
}, _setterFunc = function(target, property, value) {
  return target[property](value);
}, _setterFuncWithParam = function(target, property, value, data) {
  return target[property](data.fp, value);
}, _setterAttribute = function(target, property, value) {
  return target.setAttribute(property, value);
}, _getSetter = function(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
}, _renderBoolean = function(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function(ratio, data) {
  var pt = data._pt, s = "";
  if (!ratio && data.b)
    s = data.b;
  else if (ratio === 1 && data.e)
    s = data.e;
  else {
    for (; pt; )
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s, pt = pt._next;
    s += data.c;
  }
  data.set(data.t, data.p, s, data);
}, _renderPropTweens = function(ratio, data) {
  for (var pt = data._pt; pt; )
    pt.r(ratio, pt.d), pt = pt._next;
}, _addPluginModifier = function(modifier, tween, target, property) {
  for (var pt = this._pt, next; pt; )
    next = pt._next, pt.p === property && pt.modifier(modifier, tween, target), pt = next;
}, _killPropTweensOf = function(property) {
  for (var pt = this._pt, hasNonDependentRemaining, next; pt; )
    next = pt._next, pt.p === property && !pt.op || pt.op === property ? _removeLinkedListItem(this, pt, "_pt") : pt.dep || (hasNonDependentRemaining = 1), pt = next;
  return !hasNonDependentRemaining;
}, _setterWithModifier = function(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function(parent) {
  for (var pt = parent._pt, next, pt2, first, last; pt; ) {
    for (next = pt._next, pt2 = first; pt2 && pt2.pr > pt.pr; )
      pt2 = pt2._next;
    (pt._prev = pt2 ? pt2._prev : last) ? pt._prev._next = pt : first = pt, (pt._next = pt2) ? pt2._prev = pt : last = pt, pt = next;
  }
  parent._pt = first;
}, PropTween = /* @__PURE__ */ function() {
  function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target, this.s = start, this.c = change, this.p = prop, this.r = renderer || _renderPlain, this.d = data || this, this.set = setter || _setterPlain, this.pr = priority || 0, this._next = next, next && (next._prev = this);
  }
  var _proto4 = PropTween2.prototype;
  return _proto4.modifier = function(func, tween, target) {
    this.mSet = this.mSet || this.set, this.set = _setterWithModifier, this.m = func, this.mt = target, this.tween = tween;
  }, PropTween2;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: !1,
  defaults: _defaults,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
_config.stringFilter = _colorStringFilter;
var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function(type) {
  return (_listeners[type] || _emptyArray).map(function(f) {
    return f();
  });
}, _onMediaChange = function() {
  var time = Date.now(), matches = [];
  time - _lastMediaTime > 2 && (_dispatch("matchMediaInit"), _media.forEach(function(c) {
    var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
    for (p in queries)
      match = _win.matchMedia(queries[p]).matches, match && (anyMatch = 1), match !== conditions[p] && (conditions[p] = match, toggled = 1);
    toggled && (c.revert(), anyMatch && matches.push(c));
  }), _dispatch("matchMediaRevert"), matches.forEach(function(c) {
    return c.onMatch(c, function(func) {
      return c.add(null, func);
    });
  }), _lastMediaTime = time, _dispatch("matchMedia"));
}, Context = /* @__PURE__ */ function() {
  function Context2(func, scope) {
    this.selector = scope && selector(scope), this.data = [], this._r = [], this.isReverted = !1, this.id = _contextID++, func && this.add(func);
  }
  var _proto5 = Context2.prototype;
  return _proto5.add = function(name, func, scope) {
    _isFunction(name) && (scope = func, func = name, name = _isFunction);
    var self = this, f = function() {
      var prev = _context, prevSelector = self.selector, result;
      return prev && prev !== self && prev.data.push(self), scope && (self.selector = selector(scope)), _context = self, result = func.apply(self, arguments), _isFunction(result) && self._r.push(result), _context = prev, self.selector = prevSelector, self.isReverted = !1, result;
    };
    return self.last = f, name === _isFunction ? f(self, function(func2) {
      return self.add(null, func2);
    }) : name ? self[name] = f : f;
  }, _proto5.ignore = function(func) {
    var prev = _context;
    _context = null, func(this), _context = prev;
  }, _proto5.getTweens = function() {
    var a = [];
    return this.data.forEach(function(e) {
      return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    }), a;
  }, _proto5.clear = function() {
    this._r.length = this.data.length = 0;
  }, _proto5.kill = function(revert, matchMedia2) {
    var _this4 = this;
    if (revert ? function() {
      for (var tweens = _this4.getTweens(), i2 = _this4.data.length, t; i2--; )
        t = _this4.data[i2], t.data === "isFlip" && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(tween) {
          return tweens.splice(tweens.indexOf(tween), 1);
        }));
      for (tweens.map(function(t2) {
        return {
          g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -1 / 0,
          t: t2
        };
      }).sort(function(a, b) {
        return b.g - a.g || -1 / 0;
      }).forEach(function(o) {
        return o.t.revert(revert);
      }), i2 = _this4.data.length; i2--; )
        t = _this4.data[i2], t instanceof Timeline ? t.data !== "nested" && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof Tween) && t.revert && t.revert(revert);
      _this4._r.forEach(function(f) {
        return f(revert, _this4);
      }), _this4.isReverted = !0;
    }() : this.data.forEach(function(e) {
      return e.kill && e.kill();
    }), this.clear(), matchMedia2)
      for (var i = _media.length; i--; )
        _media[i].id === this.id && _media.splice(i, 1);
  }, _proto5.revert = function(config3) {
    this.kill(config3 || {});
  }, Context2;
}(), MatchMedia = /* @__PURE__ */ function() {
  function MatchMedia2(scope) {
    this.contexts = [], this.scope = scope, _context && _context.data.push(this);
  }
  var _proto6 = MatchMedia2.prototype;
  return _proto6.add = function(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
    _context && !context3.selector && (context3.selector = _context.selector), this.contexts.push(context3), func = context3.add("onMatch", func), context3.queries = conditions;
    for (p in conditions)
      p === "all" ? active = 1 : (mq = _win.matchMedia(conditions[p]), mq && (_media.indexOf(context3) < 0 && _media.push(context3), (cond[p] = mq.matches) && (active = 1), mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange)));
    return active && func(context3, function(f) {
      return context3.add(null, f);
    }), this;
  }, _proto6.revert = function(config3) {
    this.kill(config3 || {});
  }, _proto6.kill = function(revert) {
    this.contexts.forEach(function(c) {
      return c.kill(revert, !0);
    });
  }, MatchMedia2;
}(), _gsap = {
  registerPlugin: function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
      args[_key2] = arguments[_key2];
    args.forEach(function(config3) {
      return _createPlugin(config3);
    });
  },
  timeline: function(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]);
    var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
    return unit === "native" && (unit = ""), target && (property ? format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache)) : function(property2, unit2, uncache2) {
      return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
    });
  },
  quickSetter: function(target, property, unit) {
    if (target = toArray(target), target.length > 1) {
      var setters = target.map(function(t) {
        return gsap.quickSetter(t, property, unit);
      }), l = setters.length;
      return function(value) {
        for (var i = l; i--; )
          setters[i](value);
      };
    }
    target = target[0] || {};
    var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
      var p2 = new Plugin();
      _quickTween._pt = 0, p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]), p2.render(1, p2), _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);
    return Plugin ? setter : function(value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function(target, property, vars) {
    var _merge22, tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = !0, _merge22), vars || {})), func = function(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };
    return func.tween = tween, func;
  },
  isTweening: function(targets) {
    return _globalTimeline.getTweensOf(targets, !0).length > 0;
  },
  defaults: function(value) {
    return value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease)), _mergeDeep(_defaults, value || {});
  },
  config: function(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function(_ref3) {
    var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function(pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    }), _effects[name] = function(targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
    }, extendTimeline && (Timeline.prototype[name] = function(targets, vars, position) {
      return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
    });
  },
  registerEase: function(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function(vars, includeDelayedCalls) {
    vars === void 0 && (vars = {});
    var tl = new Timeline(vars), child, next;
    for (tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming), _globalTimeline.remove(tl), tl._dp = 0, tl._time = tl._tTime = _globalTimeline._time, child = _globalTimeline._first; child; )
      next = child._next, (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) && _addToTimeline(tl, child, child._start - child._delay), child = next;
    return _addToTimeline(_globalTimeline, tl, 0), tl;
  },
  context: function(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function() {
    return _media.forEach(function(c) {
      var cond = c.conditions, found, p;
      for (p in cond)
        cond[p] && (cond[p] = !1, found = 1);
      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap,
    wrapYoyo,
    distribute,
    random,
    snap,
    normalize,
    getUnit,
    clamp,
    splitColor,
    toArray,
    selector,
    mapRange,
    pipe,
    unitize,
    interpolate,
    shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween,
    globals: _addGlobal,
    Tween,
    Timeline,
    Animation,
    getCache: _getCache,
    _removeLinkedListItem,
    reverting: function() {
      return _reverting;
    },
    context: function(toAdd) {
      return toAdd && _context && (_context.data.push(toAdd), toAdd._ctx = _context), _context;
    },
    suppressOverwrites: function(value) {
      return _suppressOverwrites = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
});
var _getPluginPropTween = function(plugin, prop) {
  for (var pt = plugin._pt; pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop; )
    pt = pt._next;
  return pt;
}, _addModifiers = function(tween, modifiers) {
  var targets = tween._targets, p, i, pt;
  for (p in modifiers)
    for (i = targets.length; i--; )
      pt = tween._ptLookup[i][p], pt && (pt = pt.d) && (pt._pt && (pt = _getPluginPropTween(pt, p)), pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p));
}, _buildModifierPlugin = function(name, modifier) {
  return {
    name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(target, vars, tween) {
      tween._onInit = function(tween2) {
        var temp, p;
        if (_isString(vars) && (temp = {}, _forEachName(vars, function(name2) {
          return temp[name2] = 1;
        }), vars = temp), modifier) {
          temp = {};
          for (p in vars)
            temp[p] = modifier(vars[p]);
          vars = temp;
        }
        _addModifiers(tween2, vars);
      };
    }
  };
}, gsap = _gsap.registerPlugin({
  name: "attr",
  init: function(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;
    for (p in vars)
      v = target.getAttribute(p) || "", pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p), pt.op = p, pt.b = v, this._props.push(p);
  },
  render: function(ratio, data) {
    for (var pt = data._pt; pt; )
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d), pt = pt._next;
  }
}, {
  name: "endArray",
  init: function(target, value) {
    for (var i = value.length; i--; )
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap.version = "3.12.5";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;

// node_modules/gsap/CSSPlugin.js
var _win2, _doc2, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting2, _windowExists3 = function() {
  return typeof window < "u";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum2 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, _renderCSSProp = function(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
}, _renderPropWithEnd = function(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
}, _renderCSSPropWithBeginning = function(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
}, _renderRoundedCSSProp = function(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
}, _renderNonTweeningValue = function(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function(target, property, value) {
  return target.style[property] = value;
}, _setterCSSProp = function(target, property, value) {
  return target.style.setProperty(property, value);
}, _setterTransform = function(target, property, value) {
  return target._gsap[property] = value;
}, _setterScale = function(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value, cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value, cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle2(property, isNotCSS) {
  var _this = this, target = this.target, style = target.style, cache = target._gsap;
  if (property in _transformProps && style) {
    if (this.tfm = this.tfm || {}, property !== "transform")
      property = _propertyAliases[property] || property, ~property.indexOf(",") ? property.split(",").forEach(function(a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property), property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    else
      return _propertyAliases.transform.split(",").forEach(function(p) {
        return _saveStyle2.call(_this, p, isNotCSS);
      });
    if (this.props.indexOf(_transformProp) >= 0)
      return;
    cache.svg && (this.svgo = target.getAttribute("data-svg-origin"), this.props.push(_transformOriginProp, isNotCSS, "")), property = _transformProp;
  }
  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, _removeIndependentTransforms = function(style) {
  style.translate && (style.removeProperty("translate"), style.removeProperty("scale"), style.removeProperty("rotate"));
}, _revertStyle = function() {
  var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
  for (i = 0; i < props.length; i += 3)
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
  if (this.tfm) {
    for (p in this.tfm)
      cache[p] = this.tfm[p];
    cache.svg && (cache.renderTransform(), target.setAttribute("data-svg-origin", this.svgo || "")), i = _reverting2(), (!i || !i.isStart) && !style[_transformProp] && (_removeIndependentTransforms(style), cache.zOrigin && style[_transformOriginProp] && (style[_transformOriginProp] += " " + cache.zOrigin + "px", cache.zOrigin = 0, cache.renderTransform()), cache.uncache = 1);
  }
}, _getStyleSaver = function(target, properties) {
  var saver = {
    target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  return target._gsap || gsap.core.getCache(target), properties && properties.split(",").forEach(function(p) {
    return saver.save(p);
  }), saver;
}, _supports3D, _createElement = function(type, ns) {
  var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
  return e && e.style ? e : _doc2.createElement(type);
}, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function(property, element, preferPrefix) {
  var e = element || _tempDiv, s = e.style, i = 5;
  if (property in s && !preferPrefix)
    return property;
  for (property = property.charAt(0).toUpperCase() + property.substr(1); i-- && !(_prefixes[i] + property in s); )
    ;
  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function() {
  _windowExists3() && window.document && (_win2 = window, _doc2 = _win2.document, _docElement = _doc2.documentElement, _tempDiv = _createElement("div") || {
    style: {}
  }, _tempDivStyler = _createElement("div"), _transformProp = _checkPropPrefix(_transformProp), _transformOriginProp = _transformProp + "Origin", _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", _supports3D = !!_checkPropPrefix("perspective"), _reverting2 = gsap.core.reverting, _pluginInitted = 1);
}, _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
  if (_docElement.appendChild(svg), svg.appendChild(this), this.style.display = "block", swapIfPossible)
    try {
      bbox = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = _getBBoxHack2;
    } catch {
    }
  else
    this._gsapBBox && (bbox = this._gsapBBox());
  return oldParent && (oldSibling ? oldParent.insertBefore(this, oldSibling) : oldParent.appendChild(this)), _docElement.removeChild(svg), this.style.cssText = oldCSS, bbox;
}, _getAttributeFallbacks = function(target, attributesArray) {
  for (var i = attributesArray.length; i--; )
    if (target.hasAttribute(attributesArray[i]))
      return target.getAttribute(attributesArray[i]);
}, _getBBox = function(target) {
  var bounds;
  try {
    bounds = target.getBBox();
  } catch {
    bounds = _getBBoxHack.call(target, !0);
  }
  return bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, !0)), bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
}, _isSVG = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, _removeProperty = function(target, property) {
  if (property) {
    var style = target.style, first2Chars;
    property in _transformProps && property !== _transformOriginProp && (property = _transformProp), style.removeProperty ? (first2Chars = property.substr(0, 2), (first2Chars === "ms" || property.substr(0, 6) === "webkit") && (property = "-" + property), style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase())) : style.removeAttribute(property);
  }
}, _addNonTweeningPT = function(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  return plugin._pt = pt, pt.b = beginning, pt.e = end, plugin._props.push(property), pt;
}, _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
}, _nonStandardLayouts = {
  grid: 1,
  flex: 1
}, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
  var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit])
    return curValue;
  if (curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px")), isSVG = target.getCTM && _isSVG(target), (toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius")))
    return px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty], _round(toPercent ? curValue / px * amount : curValue / 100 * px);
  if (style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit), parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode, isSVG && (parent = (target.ownerSVGElement || {}).parentNode), (!parent || parent === _doc2 || !parent.appendChild) && (parent = _doc2.body), cache = parent._gsap, cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache)
    return _round(curValue / cache.width * amount);
  if (toPercent && (property === "height" || property === "width")) {
    var v = target.style[property];
    target.style[property] = amount + unit, px = target[measureProperty], v ? target.style[property] = v : _removeProperty(target, property);
  } else
    (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position")), parent === target && (style.position = "static"), parent.appendChild(_tempDiv), px = _tempDiv[measureProperty], parent.removeChild(_tempDiv), style.position = "absolute";
  return horizontal && toPercent && (cache = _getCache(parent), cache.time = _ticker.time, cache.width = parent[measureProperty]), _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function(target, property, unit, uncache) {
  var value;
  return _pluginInitted || _initCore(), property in _propertyAliases && property !== "transform" && (property = _propertyAliases[property], ~property.indexOf(",") && (property = property.split(",")[0])), _transformProps[property] && property !== "transform" ? (value = _parseTransform(target, uncache), value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px") : (value = target.style[property], (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) && (value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0))), unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function(target, prop, start, end) {
  if (!start || start === "none") {
    var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
    s && s !== start ? (prop = p, start = s) : prop === "borderColor" && (start = _getComputedProperty(target, "borderTopColor"));
  }
  var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
  if (pt.b = start, pt.e = end, start += "", end += "", end === "auto" && (startValue = target.style[prop], target.style[prop] = end, end = _getComputedProperty(target, prop) || end, startValue ? target.style[prop] = startValue : _removeProperty(target, prop)), a = [start, end], _colorStringFilter(a), start = a[0], end = a[1], startValues = start.match(_numWithUnitExp) || [], endValues = end.match(_numWithUnitExp) || [], endValues.length) {
    for (; result = _numWithUnitExp.exec(end); )
      endValue = result[0], chunk = end.substring(index, result.index), color ? color = (color + 1) % 5 : (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") && (color = 1), endValue !== (startValue = startValues[matchIndex++] || "") && (startNum = parseFloat(startValue) || 0, startUnit = startValue.substr((startNum + "").length), endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit), endNum = parseFloat(endValue), endUnit = endValue.substr((endNum + "").length), index = _numWithUnitExp.lastIndex - endUnit.length, endUnit || (endUnit = endUnit || _config.units[prop] || startUnit, index === end.length && (end += endUnit, pt.e += endUnit)), startUnit !== endUnit && (startNum = _convertToUnit(target, prop, startValue, endUnit) || 0), pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum - startNum,
        m: color && color < 4 || prop === "zIndex" ? Math.round : 0
      });
    pt.c = index < end.length ? end.substring(index, end.length) : "";
  } else
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  return _relExp.test(end) && (pt.e = 0), this._pt = pt, pt;
}, _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, _convertKeywordsToPercentages = function(value) {
  var split = value.split(" "), x = split[0], y = split[1] || "50%";
  return (x === "top" || x === "bottom" || y === "left" || y === "right") && (value = x, x = y, y = value), split[0] = _keywordToPercent[x] || x, split[1] = _keywordToPercent[y] || y, split.join(" ");
}, _renderClearProps = function(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
    if (props === "all" || props === !0)
      style.cssText = "", clearTransforms = 1;
    else
      for (props = props.split(","), i = props.length; --i > -1; )
        prop = props[i], _transformProps[prop] && (clearTransforms = 1, prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp), _removeProperty(target, prop);
    clearTransforms && (_removeProperty(target, _transformProp), cache && (cache.svg && target.removeAttribute("transform"), _parseTransform(target, 1), cache.uncache = 1, _removeIndependentTransforms(style)));
  }
}, _specialProps = {
  clearProps: function(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      return pt.u = endValue, pt.pr = -10, pt.tween = tween, plugin._props.push(property), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function(target) {
  var matrixString = _getComputedProperty(target, _transformProp);
  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
}, _getMatrix = function(target, force2D) {
  var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
  return cache.svg && target.getAttribute("transform") ? (temp = target.transform.baseVal.consolidate().matrix, matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f], matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix) : (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg && (temp = style.display, style.display = "block", parent = target.parentNode, (!parent || !target.offsetParent) && (addedToDOM = 1, nextSibling = target.nextElementSibling, _docElement.appendChild(target)), matrix = _getComputedTransformMatrixAsArray(target), temp ? style.display = temp : _removeProperty(target, "display"), addedToDOM && (nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target))), force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix);
}, _applySVGOrigin = function(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap, matrix = matrixArray || _getMatrix(target, !0), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
  originIsAbsolute ? matrix !== _identity2DMatrix && (determinant = a * d - b * c) && (x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant, y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant, xOrigin = x, yOrigin = y) : (bounds = _getBBox(target), xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin), yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin)), smooth || smooth !== !1 && cache.smooth ? (tx = xOrigin - xOriginOld, ty = yOrigin - yOriginOld, cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx, cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty) : cache.xOffset = cache.yOffset = 0, cache.xOrigin = xOrigin, cache.yOrigin = yOrigin, cache.smooth = !!smooth, cache.origin = origin, cache.originIsAbsolute = !!originIsAbsolute, target.style[_transformOriginProp] = "0px 0px", pluginToAddPropTweensTo && (_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin), _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin), _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset), _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset)), target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function(target, uncache) {
  var cache = target._gsap || new GSCache(target);
  if ("x" in cache && !uncache && !cache.uncache)
    return cache;
  var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
  return x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0, scaleX = scaleY = 1, cache.svg = !!(target.getCTM && _isSVG(target)), cs.translate && ((cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") && (style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "")), style.scale = style.rotate = style.translate = "none"), matrix = _getMatrix(target, cache.svg), cache.svg && (cache.uncache ? (t2 = target.getBBox(), origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px", t1 = "") : t1 = !uncache && target.getAttribute("data-svg-origin"), _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== !1, matrix)), xOrigin = cache.xOrigin || 0, yOrigin = cache.yOrigin || 0, matrix !== _identity2DMatrix && (a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], x = a12 = matrix[4], y = a22 = matrix[5], matrix.length === 6 ? (scaleX = Math.sqrt(a * a + b * b), scaleY = Math.sqrt(d * d + c * c), rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0, skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0, skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD))), cache.svg && (x -= xOrigin - (xOrigin * a + yOrigin * c), y -= yOrigin - (xOrigin * b + yOrigin * d))) : (a32 = matrix[6], a42 = matrix[7], a13 = matrix[8], a23 = matrix[9], a33 = matrix[10], a43 = matrix[11], x = matrix[12], y = matrix[13], z = matrix[14], angle = _atan2(a32, a33), rotationX = angle * _RAD2DEG, angle && (cos = Math.cos(-angle), sin = Math.sin(-angle), t1 = a12 * cos + a13 * sin, t2 = a22 * cos + a23 * sin, t3 = a32 * cos + a33 * sin, a13 = a12 * -sin + a13 * cos, a23 = a22 * -sin + a23 * cos, a33 = a32 * -sin + a33 * cos, a43 = a42 * -sin + a43 * cos, a12 = t1, a22 = t2, a32 = t3), angle = _atan2(-c, a33), rotationY = angle * _RAD2DEG, angle && (cos = Math.cos(-angle), sin = Math.sin(-angle), t1 = a * cos - a13 * sin, t2 = b * cos - a23 * sin, t3 = c * cos - a33 * sin, a43 = d * sin + a43 * cos, a = t1, b = t2, c = t3), angle = _atan2(b, a), rotation = angle * _RAD2DEG, angle && (cos = Math.cos(angle), sin = Math.sin(angle), t1 = a * cos + b * sin, t2 = a12 * cos + a22 * sin, b = b * cos - a * sin, a22 = a22 * cos - a12 * sin, a = t1, a12 = t2), rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9 && (rotationX = rotation = 0, rotationY = 180 - rotationY), scaleX = _round(Math.sqrt(a * a + b * b + c * c)), scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32)), angle = _atan2(a12, a22), skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0, perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0), cache.svg && (t1 = target.getAttribute("transform"), cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp)), t1 && target.setAttribute("transform", t1))), Math.abs(skewX) > 90 && Math.abs(skewX) < 270 && (invertedScaleX ? (scaleX *= -1, skewX += rotation <= 0 ? 180 : -180, rotation += rotation <= 0 ? 180 : -180) : (scaleY *= -1, skewX += skewX <= 0 ? 180 : -180)), uncache = uncache || cache.uncache, cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px, cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px, cache.z = z + px, cache.scaleX = _round(scaleX), cache.scaleY = _round(scaleY), cache.rotation = _round(rotation) + deg, cache.rotationX = _round(rotationX) + deg, cache.rotationY = _round(rotationY) + deg, cache.skewX = skewX + deg, cache.skewY = skewY + deg, cache.transformPerspective = perspective + px, (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) && (style[_transformOriginProp] = _firstTwoOnly(origin)), cache.xOffset = cache.yOffset = 0, cache.force3D = _config.force3D, cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms, cache.uncache = 0, cache;
}, _firstTwoOnly = function(value) {
  return (value = value.split(" "))[0] + " " + value[1];
}, _addPxTranslate = function(target, start, value) {
  var unit = getUnit(start);
  return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function(ratio, cache) {
  cache.z = "0px", cache.rotationY = cache.rotationX = "0deg", cache.force3D = 0, _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function(ratio, cache) {
  var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === !0;
  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
    angle = parseFloat(rotationX) * _DEG2RAD, cos = Math.cos(angle), x = _addPxTranslate(target, x, a13 * cos * -zOrigin), y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin), z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }
  transformPerspective !== _zeroPx && (transforms += "perspective(" + transformPerspective + _endParenthesis), (xPercent || yPercent) && (transforms += "translate(" + xPercent + "%, " + yPercent + "%) "), (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) && (transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis), rotation !== _zeroDeg && (transforms += "rotate(" + rotation + _endParenthesis), rotationY !== _zeroDeg && (transforms += "rotateY(" + rotationY + _endParenthesis), rotationX !== _zeroDeg && (transforms += "rotateX(" + rotationX + _endParenthesis), (skewX !== _zeroDeg || skewY !== _zeroDeg) && (transforms += "skew(" + skewX + ", " + skewY + _endParenthesis), (scaleX !== 1 || scaleY !== 1) && (transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis), target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function(ratio, cache) {
  var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
  rotation = parseFloat(rotation), skewX = parseFloat(skewX), skewY = parseFloat(skewY), skewY && (skewY = parseFloat(skewY), skewX += skewY, rotation += skewY), rotation || skewX ? (rotation *= _DEG2RAD, skewX *= _DEG2RAD, a11 = Math.cos(rotation) * scaleX, a21 = Math.sin(rotation) * scaleX, a12 = Math.sin(rotation - skewX) * -scaleY, a22 = Math.cos(rotation - skewX) * scaleY, skewX && (skewY *= _DEG2RAD, temp = Math.tan(skewX - skewY), temp = Math.sqrt(1 + temp * temp), a12 *= temp, a22 *= temp, skewY && (temp = Math.tan(skewY), temp = Math.sqrt(1 + temp * temp), a11 *= temp, a21 *= temp)), a11 = _round(a11), a21 = _round(a21), a12 = _round(a12), a22 = _round(a22)) : (a11 = scaleX, a22 = scaleY, a21 = a12 = 0), (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) && (tx = _convertToUnit(target, "x", x, "px"), ty = _convertToUnit(target, "y", y, "px")), (xOrigin || yOrigin || xOffset || yOffset) && (tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset), ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset)), (xPercent || yPercent) && (temp = target.getBBox(), tx = _round(tx + xPercent / 100 * temp.width), ty = _round(ty + yPercent / 100 * temp.height)), temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")", target.setAttribute("transform", temp), forceCSS && (target.style[_transformProp] = temp);
}, _addRotationalPropTween = function(plugin, target, property, startNum, endValue) {
  var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
  return isString && (direction = endValue.split("_")[1], direction === "short" && (change %= cap, change !== change % (cap / 2) && (change += change < 0 ? cap : -cap)), direction === "cw" && change < 0 ? change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap : direction === "ccw" && change > 0 && (change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap)), plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd), pt.e = finalValue, pt.u = "deg", plugin._props.push(property), pt;
}, _assign = function(target, source) {
  for (var p in source)
    target[p] = source[p];
  return target;
}, _addRawTransformPTs = function(plugin, transforms, target) {
  var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
  startCache.svg ? (startValue = target.getAttribute("transform"), target.setAttribute("transform", ""), style[_transformProp] = transforms, endCache = _parseTransform(target, 1), _removeProperty(target, _transformProp), target.setAttribute("transform", startValue)) : (startValue = getComputedStyle(target)[_transformProp], style[_transformProp] = transforms, endCache = _parseTransform(target, 1), style[_transformProp] = startValue);
  for (p in _transformProps)
    startValue = startCache[p], endValue = endCache[p], startValue !== endValue && exclude.indexOf(p) < 0 && (startUnit = getUnit(startValue), endUnit = getUnit(endValue), startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue), endNum = parseFloat(endValue), plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp), plugin._pt.u = endUnit || 0, plugin._props.push(p));
  _assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
  var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
    return index < 2 ? name + side : "border" + side + name;
  });
  _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4)
      return a = props.map(function(prop) {
        return _get(plugin, prop, property);
      }), vars = a.join(" "), vars.split(a[0]).length === 5 ? a[0] : vars;
    a = (endValue + "").split(" "), vars = {}, props.forEach(function(prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    }), plugin.init(target, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function(target) {
    return target.style && target.nodeType;
  },
  init: function(target, vars, tween, index, targets) {
    var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
    _pluginInitted || _initCore(), this.styles = this.styles || _getStyleSaver(target), inlineProps = this.styles.props, this.tween = tween;
    for (p in vars)
      if (p !== "autoRound" && (endValue = vars[p], !(_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)))) {
        if (type = typeof endValue, specialProp = _specialProps[p], type === "function" && (endValue = endValue.call(tween, index, target, targets), type = typeof endValue), type === "string" && ~endValue.indexOf("random(") && (endValue = _replaceRandom(endValue)), specialProp)
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        else if (p.substr(0, 2) === "--")
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim(), endValue += "", _colorExp.lastIndex = 0, _colorExp.test(startValue) || (startUnit = getUnit(startValue), endUnit = getUnit(endValue)), endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit), this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p), props.push(p), inlineProps.push(p, 0, style[p]);
        else if (type !== "undefined") {
          if (startAt && p in startAt ? (startValue = typeof startAt[p] == "function" ? startAt[p].call(tween, index, target, targets) : startAt[p], _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue)), getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || ""), (startValue + "").charAt(1) === "=" && (startValue = _get(target, p))) : startValue = _get(target, p), startNum = parseFloat(startValue), relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2), relative && (endValue = endValue.substr(2)), endNum = parseFloat(endValue), p in _propertyAliases && (p === "autoAlpha" && (startNum === 1 && _get(target, "visibility") === "hidden" && endNum && (startNum = 0), inlineProps.push("visibility", 0, style.visibility), _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum)), p !== "scale" && p !== "transform" && (p = _propertyAliases[p], ~p.indexOf(",") && (p = p.split(",")[0]))), isTransformRelated = p in _transformProps, isTransformRelated) {
            if (this.styles.save(p), transformPropTween || (cache = target._gsap, cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform), smooth = vars.smoothOrigin !== !1 && cache.smooth, transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1), transformPropTween.dep = 1), p === "scale")
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp), this._pt.u = 0, props.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]), endValue = _convertKeywordsToPercentages(endValue), cache.svg ? _applySVGOrigin(target, endValue, 0, smooth, 0, this) : (endUnit = parseFloat(endValue.split(" ")[2]) || 0, endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit), _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue)));
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else
            p in style || (p = _checkPropPrefix(p) || p);
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style)
            startUnit = (startValue + "").substr((startNum + "").length), endNum || (endNum = 0), endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit), startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit)), this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== !1 ? _renderRoundedCSSProp : _renderCSSProp), this._pt.u = endUnit || 0, startUnit !== endUnit && endUnit !== "%" && (this._pt.b = startValue, this._pt.r = _renderCSSPropWithBeginning);
          else if (p in style)
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          else if (p in target)
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          else if (p !== "parseTransform") {
            _missingPlugin(p, endValue);
            continue;
          }
          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p])), props.push(p);
        }
      }
    hasPriority && _sortPropTweensByPriority(this);
  },
  render: function(ratio, data) {
    if (data.tween._time || !_reverting2())
      for (var pt = data._pt; pt; )
        pt.r(ratio, pt.d), pt = pt._next;
    else
      data.styles.revert();
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function(target, property, plugin) {
    var p = _propertyAliases[property];
    return p && p.indexOf(",") < 0 && (property = p), property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
  },
  core: {
    _removeProperty,
    _getMatrix
  }
};
gsap.utils.checkPrefix = _checkPropPrefix;
gsap.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
    _transformProps[name] = 1;
  });
  _forEachName(rotation, function(name) {
    _config.units[name] = "deg", _rotationalProperties[name] = 1;
  }), _propertyAliases[all[13]] = positionAndScale + "," + rotation, _forEachName(aliases, function(name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
  _config.units[name] = "px";
});
gsap.registerPlugin(CSSPlugin);

// node_modules/gsap/index.js
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, TweenMaxWithCSS = gsapWithCSS.core.Tween;

// node_modules/gsap/Observer.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
}
var gsap2, _coreInitted2, _clamp3, _win3, _doc3, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context2, _getGSAP = function() {
  return gsap2 || typeof window < "u" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
}, _startup = 1, _observers = [], _scrollers = [], _proxies = [], _getTime = Date.now, _bridge = function(name, value) {
  return value;
}, _integrate = function() {
  var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers), proxies.push.apply(proxies, _proxies), _scrollers = scrollers, _proxies = proxies, _bridge = function(name, value) {
    return data[name](value);
  };
}, _getProxyProp = function(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
}, _isViewport = function(el) {
  return !!~_root.indexOf(el);
}, _addListener = function(element, type, func, passive, capture) {
  return element.addEventListener(type, func, {
    passive: passive !== !1,
    capture: !!capture
  });
}, _removeListener = function(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
}, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
}, _scrollCacheFunc = function(f, doNotCache) {
  var cachingFunc = function cachingFunc2(value) {
    if (value || value === 0) {
      _startup && (_win3.history.scrollRestoration = "manual");
      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0), f(value), cachingFunc2.cacheID = _scrollers.cache, isNormalizing && _bridge("ss", value);
    } else
      (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) && (cachingFunc2.cacheID = _scrollers.cache, cachingFunc2.v = f());
    return cachingFunc2.v + cachingFunc2.offset;
  };
  return cachingFunc.offset = 0, f && cachingFunc;
}, _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win3.scrollTo(value, _vertical.sc()) : _win3.pageXOffset || _doc3[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
}, _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win3.scrollTo(_horizontal.sc(), value) : _win3.pageYOffset || _doc3[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
}, _getTarget = function(t, self) {
  return (self && self._ctx && self._ctx.selector || gsap2.utils.toArray)(t)[0] || (typeof t == "string" && gsap2.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, _getScrollFunc = function(element, _ref) {
  var s = _ref.s, sc = _ref.sc;
  _isViewport(element) && (element = _doc3.scrollingElement || _docEl);
  var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
  !~i && (i = _scrollers.push(element) - 1), _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
  var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), !0) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  return func.target = element, prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth"), func;
}, _getVelocityProp = function(value, minTimeRefresh, useDelta) {
  var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function(value2, force) {
    var t = _getTime();
    force || t - t1 > min ? (v2 = v1, v1 = value2, t2 = t1, t1 = t) : useDelta ? v1 += value2 : v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
  }, reset = function() {
    v2 = v1 = useDelta ? 0 : v1, t2 = t1 = 0;
  }, getVelocity = function(latestValue) {
    var tOld = t2, vOld = v2, t = _getTime();
    return (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue), t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
  };
  return {
    update,
    reset,
    getVelocity
  };
}, _getEvent = function(e, preventDefault) {
  return preventDefault && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, _getAbsoluteMax = function(a) {
  var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
}, _setScrollTrigger = function() {
  ScrollTrigger = gsap2.core.globals().ScrollTrigger, ScrollTrigger && ScrollTrigger.core && _integrate();
}, _initCore3 = function(core) {
  return gsap2 = core || _getGSAP(), !_coreInitted2 && gsap2 && typeof document < "u" && document.body && (_win3 = window, _doc3 = document, _docEl = _doc3.documentElement, _body = _doc3.body, _root = [_win3, _doc3, _docEl, _body], _clamp3 = gsap2.utils.clamp, _context2 = gsap2.core.context || function() {
  }, _pointerType = "onpointerenter" in _body ? "pointer" : "mouse", _isTouch = Observer.isTouch = _win3.matchMedia && _win3.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win3 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in _docEl ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return _startup = 0;
  }, 500), _setScrollTrigger(), _coreInitted2 = 1), _coreInitted2;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /* @__PURE__ */ function() {
  function Observer2(vars) {
    this.init(vars);
  }
  var _proto = Observer2.prototype;
  return _proto.init = function(vars) {
    _coreInitted2 || _initCore3(gsap2) || console.warn("Please gsap.registerPlugin(Observer)"), ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl, this.vars = vars, ignore && (ignore = gsap2.utils.toArray(ignore)), tolerance = tolerance || 1e-9, dragMinimum = dragMinimum || 0, wheelSpeed = wheelSpeed || 1, scrollSpeed = scrollSpeed || 1, type = type || "wheel,touch,pointer", debounce = debounce !== !1, lineHeight || (lineHeight = parseFloat(_win3.getComputedStyle(_body).lineHeight) || 22);
    var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function() {
      return onClickTime = _getTime();
    }, _ignoreCheck = function(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    }, onStopFunc = function() {
      self._vx.reset(), self._vy.reset(), onStopDelayedCall.pause(), onStop && onStop(self);
    }, update = function() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY), changedX && (onRight && self.deltaX > 0 && onRight(self), onLeft && self.deltaX < 0 && onLeft(self), onChangeX && onChangeX(self), onToggleX && self.deltaX < 0 != prevDeltaX < 0 && onToggleX(self), prevDeltaX = self.deltaX, deltaX[0] = deltaX[1] = deltaX[2] = 0), changedY && (onDown && self.deltaY > 0 && onDown(self), onUp && self.deltaY < 0 && onUp(self), onChangeY && onChangeY(self), onToggleY && self.deltaY < 0 != prevDeltaY < 0 && onToggleY(self), prevDeltaY = self.deltaY, deltaY[0] = deltaY[1] = deltaY[2] = 0), (moved || dragged) && (onMove && onMove(self), dragged && (onDrag(self), dragged = !1), moved = !1), locked && !(locked = !1) && onLockAxis && onLockAxis(self), wheeled && (onWheel(self), wheeled = !1), id = 0;
    }, onDelta = function(x, y, index) {
      deltaX[index] += x, deltaY[index] += y, self._vx.update(x), self._vy.update(y), debounce ? id || (id = requestAnimationFrame(update)) : update();
    }, onTouchOrPointerDelta = function(x, y) {
      lockAxis && !axis && (self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y", locked = !0), axis !== "y" && (deltaX[2] += x, self._vx.update(x, !0)), axis !== "x" && (deltaY[2] += y, self._vy.update(y, !0)), debounce ? id || (id = requestAnimationFrame(update)) : update();
    }, _onDrag = function(e) {
      if (!_ignoreCheck(e, 1)) {
        e = _getEvent(e, preventDefault);
        var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
        self.x = x, self.y = y, (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) && (onDrag && (dragged = !0), isDragging || (self.isDragging = !0), onTouchOrPointerDelta(dx, dy), isDragging || onDragStart && onDragStart(self));
      }
    }, _onPress = self.onPress = function(e) {
      _ignoreCheck(e, 1) || e && e.button || (self.axis = axis = null, onStopDelayedCall.pause(), self.isPressed = !0, e = _getEvent(e), prevDeltaX = prevDeltaY = 0, self.startX = self.x = e.clientX, self.startY = self.y = e.clientY, self._vx.reset(), self._vy.reset(), _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, !0), self.deltaX = self.deltaY = 0, onPress && onPress(self));
    }, _onRelease = self.onRelease = function(e) {
      if (!_ignoreCheck(e, 1)) {
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, !0);
        var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
        !isDragNotClick && isTrackingDrag && (self._vx.reset(), self._vy.reset(), preventDefault && allowClicks && gsap2.delayedCall(0.08, function() {
          if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
            if (e.target.click)
              e.target.click();
            else if (ownerDoc.createEvent) {
              var syntheticEvent = ownerDoc.createEvent("MouseEvents");
              syntheticEvent.initMouseEvent("click", !0, !0, _win3, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(syntheticEvent);
            }
          }
        })), self.isDragging = self.isGesturing = self.isPressed = !1, onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(!0), onDragEnd && wasDragging && onDragEnd(self), onRelease && onRelease(self, isDragNotClick);
      }
    }, _onGestureStart = function(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = !0) && onGestureStart(e, self.isDragging);
    }, _onGestureEnd = function() {
      return (self.isGesturing = !1) || onGestureEnd(self);
    }, onScroll = function(e) {
      if (!_ignoreCheck(e)) {
        var x = scrollFuncX(), y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1), scrollX = x, scrollY = y, onStop && onStopDelayedCall.restart(!0);
      }
    }, _onWheel = function(e) {
      if (!_ignoreCheck(e)) {
        e = _getEvent(e, preventDefault), onWheel && (wheeled = !0);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win3.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0), onStop && !isNormalizer && onStopDelayedCall.restart(!0);
      }
    }, _onMove = function(e) {
      if (!_ignoreCheck(e)) {
        var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
        self.x = x, self.y = y, moved = !0, onStop && onStopDelayedCall.restart(!0), (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }
    }, _onHover = function(e) {
      self.event = e, onHover(self);
    }, _onHoverEnd = function(e) {
      self.event = e, onHoverEnd(self);
    }, _onClick = function(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };
    onStopDelayedCall = self._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause(), self.deltaX = self.deltaY = 0, self._vx = _getVelocityProp(0, 50, !0), self._vy = _getVelocityProp(0, 50, !0), self.scrollX = scrollFuncX, self.scrollY = scrollFuncY, self.isDragging = self.isGesturing = self.isPressed = !1, _context2(this), self.enable = function(e) {
      return self.isEnabled || (_addListener(isViewport ? ownerDoc : target, "scroll", _onScroll), type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture), type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture), (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) && (_addListener(target, _eventTypes[0], _onPress, passive, capture), _addListener(ownerDoc, _eventTypes[2], _onRelease), _addListener(ownerDoc, _eventTypes[3], _onRelease), allowClicks && _addListener(target, "click", clickCapture, !0, !0), onClick && _addListener(target, "click", _onClick), onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart), onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd), onHover && _addListener(target, _pointerType + "enter", _onHover), onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd), onMove && _addListener(target, _pointerType + "move", _onMove)), self.isEnabled = !0, e && e.type && _onPress(e), onEnable && onEnable(self)), self;
    }, self.disable = function() {
      self.isEnabled && (_observers.filter(function(o) {
        return o !== self && _isViewport(o.target);
      }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll), self.isPressed && (self._vx.reset(), self._vy.reset(), _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, !0)), _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture), _removeListener(target, "wheel", _onWheel, capture), _removeListener(target, _eventTypes[0], _onPress, capture), _removeListener(ownerDoc, _eventTypes[2], _onRelease), _removeListener(ownerDoc, _eventTypes[3], _onRelease), _removeListener(target, "click", clickCapture, !0), _removeListener(target, "click", _onClick), _removeListener(ownerDoc, "gesturestart", _onGestureStart), _removeListener(ownerDoc, "gestureend", _onGestureEnd), _removeListener(target, _pointerType + "enter", _onHover), _removeListener(target, _pointerType + "leave", _onHoverEnd), _removeListener(target, _pointerType + "move", _onMove), self.isEnabled = self.isPressed = self.isDragging = !1, onDisable && onDisable(self));
    }, self.kill = self.revert = function() {
      self.disable();
      var i = _observers.indexOf(self);
      i >= 0 && _observers.splice(i, 1), _normalizer === self && (_normalizer = 0);
    }, _observers.push(self), isNormalizer && _isViewport(target) && (_normalizer = self), self.enable(event);
  }, _createClass(Observer2, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), Observer2;
}();
Observer.version = "3.12.5";
Observer.create = function(vars) {
  return new Observer(vars);
};
Observer.register = _initCore3;
Observer.getAll = function() {
  return _observers.slice();
};
Observer.getById = function(id) {
  return _observers.filter(function(o) {
    return o.vars.id === id;
  })[0];
};
_getGSAP() && gsap2.registerPlugin(Observer);

// node_modules/gsap/ScrollTrigger.js
var gsap3, _coreInitted3, _win4, _doc4, _docEl2, _body2, _root2, _resizeDelay, _toArray, _clamp4, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp2, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites2, _ignoreResize, _normalizer2, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context3, _scrollRestoration, _div100vh, _100vh, _isReverted, _clampingMax, _limitCallbacks, _startup2 = 1, _getTime2 = Date.now, _time1 = _getTime2(), _lastScrollTime = 0, _enabled = 0, _parseClamp = function(value, type, self) {
  var clamp3 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  return self["_" + type + "Clamp"] = clamp3, clamp3 ? value.substr(6, value.length - 7) : value;
}, _keepClamp = function(value, clamp3) {
  return clamp3 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
}, _rafBugFix = function _rafBugFix2() {
  return _enabled && requestAnimationFrame(_rafBugFix2);
}, _pointerDownHandler = function() {
  return _pointerIsDown = 1;
}, _pointerUpHandler = function() {
  return _pointerIsDown = 0;
}, _passThrough3 = function(v) {
  return v;
}, _round3 = function(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
}, _windowExists5 = function() {
  return typeof window < "u";
}, _getGSAP3 = function() {
  return gsap3 || _windowExists5() && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
}, _isViewport3 = function(e) {
  return !!~_root2.indexOf(e);
}, _getViewportDimension = function(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win4["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
}, _getBoundsFunc = function(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
    return _winOffsets.width = _win4.innerWidth, _winOffsets.height = _100vh, _winOffsets;
  } : function() {
    return _getBounds(element);
  });
}, _getSizeFunc = function(scroller, isViewport, _ref) {
  var d = _ref.d, d2 = _ref.d2, a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
    return a()[d];
  } : function() {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
}, _getOffsetsFunc = function(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
    return _winOffsets;
  };
}, _maxScroll = function(element, _ref2) {
  var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
}, _iterateAutoRefresh = function(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3)
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
}, _isString3 = function(value) {
  return typeof value == "string";
}, _isFunction3 = function(value) {
  return typeof value == "function";
}, _isNumber3 = function(value) {
  return typeof value == "number";
}, _isObject3 = function(value) {
  return typeof value == "object";
}, _endAnimation = function(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, _callback3 = function(self, func) {
  if (self.enabled) {
    var result = self._ctx ? self._ctx.add(function() {
      return func(self);
    }) : func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
}, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function(element) {
  return _win4.getComputedStyle(element);
}, _makePositionable = function(element) {
  var position = _getComputedStyle(element).position;
  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, _setDefaults4 = function(obj, defaults2) {
  for (var p in defaults2)
    p in obj || (obj[p] = defaults2[p]);
  return obj;
}, _getBounds = function(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap3.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), bounds = element.getBoundingClientRect();
  return tween && tween.progress(0).kill(), bounds;
}, _getSize = function(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
}, _getLabelRatioArray = function(timeline2) {
  var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
  for (p in labels)
    a.push(labels[p] / duration);
  return a;
}, _getClosestLabel = function(animation) {
  return function(value) {
    return gsap3.utils.snap(_getLabelRatioArray(animation), value);
  };
}, _snapDirectional = function(snapIncrementOrArray) {
  var snap3 = gsap3.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
    return a2 - b;
  });
  return a ? function(value, direction, threshold) {
    threshold === void 0 && (threshold = 1e-3);
    var i;
    if (!direction)
      return snap3(value);
    if (direction > 0) {
      for (value -= threshold, i = 0; i < a.length; i++)
        if (a[i] >= value)
          return a[i];
      return a[i - 1];
    } else
      for (i = a.length, value += threshold; i--; )
        if (a[i] <= value)
          return a[i];
    return a[0];
  } : function(value, direction, threshold) {
    threshold === void 0 && (threshold = 1e-3);
    var snapped = snap3(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 == direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
}, _getLabelAtDirection = function(timeline2) {
  return function(value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
  };
}, _multiListener = function(func, element, types, callback) {
  return types.split(",").forEach(function(type) {
    return func(element, type, callback);
  });
}, _addListener3 = function(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
}, _removeListener3 = function(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
}, _wheelListener = function(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler, scrollFunc && (func(el, "wheel", scrollFunc), func(el, "touchmove", scrollFunc));
}, _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, _defaults2 = {
  toggleActions: "play",
  anticipatePin: 0
}, _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, _offsetToPx = function(value, size) {
  if (_isString3(value)) {
    var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
    ~eqIndex && (value.indexOf("%") > eqIndex && (relative *= size / 100), value = value.substr(0, eqIndex - 1)), value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }
  return value;
}, _createMarker = function(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight, e = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;"), (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;"), matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;"), e._isStart = isStart, e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : "")), e.style.cssText = css, e.innerText = name || name === 0 ? type + "-" + name : type, parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e), e._offset = e["offset" + direction.op.d2], _positionMarker(e, 0, direction, isStart), e;
}, _positionMarker = function(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped, vars[direction.a + "Percent"] = flipped ? -100 : 0, vars[direction.a] = flipped ? "1px" : 0, vars["border" + side + _Width] = 1, vars["border" + oppositeSide + _Width] = 0, vars[direction.p] = start + "px", gsap3.set(marker, vars);
}, _triggers = [], _ids = {}, _rafID, _sync = function() {
  return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
}, _onScroll3 = function() {
  (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) && (_scrollers.cache++, _normalizer2 ? _rafID || (_rafID = requestAnimationFrame(_updateAll)) : _updateAll(), _lastScrollTime || _dispatch3("scrollStart"), _lastScrollTime = _getTime2());
}, _setBaseDimensions = function() {
  _baseScreenWidth = _win4.innerWidth, _baseScreenHeight = _win4.innerHeight;
}, _onResize = function() {
  _scrollers.cache++, !_refreshing && !_ignoreResize && !_doc4.fullscreenElement && !_doc4.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win4.innerWidth || Math.abs(_win4.innerHeight - _baseScreenHeight) > _win4.innerHeight * 0.25) && _resizeDelay.restart(!0);
}, _listeners2 = {}, _emptyArray2 = [], _softRefresh = function _softRefresh2() {
  return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(!0);
}, _dispatch3 = function(type) {
  return _listeners2[type] && _listeners2[type].map(function(f) {
    return f();
  }) || _emptyArray2;
}, _savedStyles = [], _revertRecorded = function(media) {
  for (var i = 0; i < _savedStyles.length; i += 5)
    (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) && (_savedStyles[i].style.cssText = _savedStyles[i + 1], _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || ""), _savedStyles[i + 3].uncache = 1);
}, _revertAll = function(kill, media) {
  var trigger;
  for (_i = 0; _i < _triggers.length; _i++)
    trigger = _triggers[_i], trigger && (!media || trigger._ctx === media) && (kill ? trigger.kill(1) : trigger.revert(!0, !0));
  _isReverted = !0, media && _revertRecorded(media), media || _dispatch3("revert");
}, _clearScrollMemory = function(scrollRestoration, force) {
  _scrollers.cache++, (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
    return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
  }), _isString3(scrollRestoration) && (_win4.history.scrollRestoration = _scrollRestoration = scrollRestoration);
}, _refreshingAll, _refreshID = 0, _queueRefreshID, _queueRefreshAll = function() {
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function() {
      return id === _refreshID && _refreshAll(!0);
    });
  }
}, _refresh100vh = function() {
  _body2.appendChild(_div100vh), _100vh = !_normalizer2 && _div100vh.offsetHeight || _win4.innerHeight, _body2.removeChild(_div100vh);
}, _hideAllMarkers = function(hide) {
  return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
    return el.style.display = hide ? "none" : "block";
  });
}, _refreshAll = function(force, skipRevert) {
  if (_lastScrollTime && !force && !_isReverted) {
    _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
    return;
  }
  _refresh100vh(), _refreshingAll = ScrollTrigger2.isRefreshing = !0, _scrollers.forEach(function(obj) {
    return _isFunction3(obj) && ++obj.cacheID && (obj.rec = obj());
  });
  var refreshInits = _dispatch3("refreshInit");
  _sort && ScrollTrigger2.sort(), skipRevert || _revertAll(), _scrollers.forEach(function(obj) {
    _isFunction3(obj) && (obj.smooth && (obj.target.style.scrollBehavior = "auto"), obj(0));
  }), _triggers.slice(0).forEach(function(t) {
    return t.refresh();
  }), _isReverted = !1, _triggers.forEach(function(t) {
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
      t.revert(!0, 1), t.adjustPinSpacing(t.pin[prop] - original), t.refresh();
    }
  }), _clampingMax = 1, _hideAllMarkers(!0), _triggers.forEach(function(t) {
    var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
    (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, !0);
  }), _hideAllMarkers(!1), _clampingMax = 0, refreshInits.forEach(function(result) {
    return result && result.render && result.render(-1);
  }), _scrollers.forEach(function(obj) {
    _isFunction3(obj) && (obj.smooth && requestAnimationFrame(function() {
      return obj.target.style.scrollBehavior = "smooth";
    }), obj.rec && obj(obj.rec));
  }), _clearScrollMemory(_scrollRestoration, 1), _resizeDelay.pause(), _refreshID++, _refreshingAll = 2, _updateAll(2), _triggers.forEach(function(t) {
    return _isFunction3(t.vars.onRefresh) && t.vars.onRefresh(t);
  }), _refreshingAll = ScrollTrigger2.isRefreshing = !1, _dispatch3("refresh");
}, _lastScroll = 0, _direction = 1, _primary, _updateAll = function(force) {
  if (force === 2 || !_refreshingAll && !_isReverted) {
    ScrollTrigger2.isUpdating = !0, _primary && _primary.update(0);
    var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
    if (_direction = _lastScroll > scroll ? -1 : 1, _refreshingAll || (_lastScroll = scroll), recordVelocity && (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200 && (_lastScrollTime = 0, _dispatch3("scrollEnd")), _time2 = _time1, _time1 = time), _direction < 0) {
      for (_i = l; _i-- > 0; )
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      _direction = 1;
    } else
      for (_i = 0; _i < l; _i++)
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
    ScrollTrigger2.isUpdating = !1;
  }
  _rafID = 0;
}, _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]), _swapPinOut = function(pin, spacer, state) {
  _setState(state);
  var cache = pin._gsap;
  if (cache.spacerIsNative)
    _setState(cache.spacerState);
  else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;
    parent && (parent.insertBefore(pin, spacer), parent.removeChild(spacer));
  }
  pin._gsap.swappedIn = !1;
}, _swapPinIn = function(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    for (var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p; i--; )
      p = _propNamesToCopy[i], spacerStyle[p] = cs[p];
    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative", cs.display === "inline" && (spacerStyle.display = "inline-block"), pinStyle[_bottom] = pinStyle[_right] = "auto", spacerStyle.flexBasis = cs.flexBasis || "auto", spacerStyle.overflow = "visible", spacerStyle.boxSizing = "border-box", spacerStyle[_width] = _getSize(pin, _horizontal) + _px, spacerStyle[_height] = _getSize(pin, _vertical) + _px, spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0", _setState(spacerState), pinStyle[_width] = pinStyle["max" + _Width] = cs[_width], pinStyle[_height] = pinStyle["max" + _Height] = cs[_height], pinStyle[_padding] = cs[_padding], pin.parentNode !== spacer && (pin.parentNode.insertBefore(spacer, pin), spacer.appendChild(pin)), pin._gsap.swappedIn = !0;
  }
}, _capsExp2 = /([A-Z])/g, _setState = function(state) {
  if (state) {
    var style = state.t.style, l = state.length, i = 0, p, value;
    for ((state.t._gsap || gsap3.core.getCache(state.t)).uncache = 1; i < l; i += 2)
      value = state[i + 1], p = state[i], value ? style[p] = value : style[p] && style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
  }
}, _getState = function(element) {
  for (var l = _stateProps.length, style = element.style, state = [], i = 0; i < l; i++)
    state.push(_stateProps[i], style[_stateProps[i]]);
  return state.t = element, state;
}, _copyState = function(state, override, omitOffsets) {
  for (var result = [], l = state.length, i = omitOffsets ? 8 : 0, p; i < l; i += 2)
    p = state[i], result.push(p, p in override ? override[p] : state[i + 1]);
  return result.t = state.t, result;
}, _winOffsets = {
  left: 0,
  top: 0
}, _parsePosition3 = function(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction3(value) && (value = value(self)), _isString3(value) && value.substr(0, 3) === "max" && (value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0));
  var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
  if (containerAnimation && containerAnimation.seek(0), isNaN(value) || (value = +value), _isNumber3(value))
    containerAnimation && (value = gsap3.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value)), markerScroller && _positionMarker(markerScroller, scrollerSize, direction, !0);
  else {
    _isFunction3(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
    element = _getTarget(trigger, self) || _body2, bounds = _getBounds(element) || {}, (!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none" && (display = element.style.display, element.style.display = "block", bounds = _getBounds(element), display ? element.style.display = display : element.style.removeProperty("display")), localOffset = _offsetToPx(offsets[0], bounds[direction.d]), globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize), value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset, markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20), scrollerSize -= scrollerSize - globalOffset;
  }
  if (clampZeroProp && (self[clampZeroProp] = value || -1e-3, value < 0 && (value = 0)), marker) {
    var position = value + scrollerSize, isStart = marker._isStart;
    p1 = "scroll" + direction.d2, _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1), useFixedPosition && (scrollerBounds = _getBounds(markerScroller), useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px));
  }
  return containerAnimation && element && (p1 = _getBounds(element), containerAnimation.seek(scrollerMax), p2 = _getBounds(element), containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p], value = value / containerAnimation._caScrollDist * scrollerMax), containerAnimation && containerAnimation.seek(time), containerAnimation ? value : Math.round(value);
}, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style, p, cs;
    if (parent === _body2) {
      element._stOrig = style.cssText, cs = _getComputedStyle(element);
      for (p in cs)
        !+p && !_prefixExp.test(p) && cs[p] && typeof style[p] == "string" && p !== "0" && (style[p] = cs[p]);
      style.top = top, style.left = left;
    } else
      style.cssText = element._stOrig;
    gsap3.core.getCache(element).uncache = 1, parent.appendChild(element);
  }
}, _interruptionTracker = function(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue, last2 = last1;
  return function(value) {
    var current = Math.round(getValueFunc());
    return current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3 && (value = current, onInterrupt && onInterrupt()), last2 = last1, last1 = value, value;
  };
}, _shiftMarker = function(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value, gsap3.set(marker, vars);
}, _getTweenCreator = function(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
    initialValue = initialValue || getScroll();
    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
      tween.kill(), getTween2.tween = 0;
    });
    return change2 = change1 && change2 || 0, change1 = change1 || scrollTo - initialValue, tween && tween.kill(), vars[prop] = scrollTo, vars.inherit = !1, vars.modifiers = modifiers, modifiers[prop] = function() {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    }, vars.onUpdate = function() {
      _scrollers.cache++, getTween2.tween && _updateAll();
    }, vars.onComplete = function() {
      getTween2.tween = 0, onComplete && onComplete.call(tween);
    }, tween = getTween2.tween = gsap3.to(scroller, vars), tween;
  };
  return scroller[prop] = getScroll, getScroll.wheelHandler = function() {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  }, _addListener3(scroller, "wheel", getScroll.wheelHandler), ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler), getTween;
}, ScrollTrigger2 = /* @__PURE__ */ function() {
  function ScrollTrigger3(vars, animation) {
    _coreInitted3 || ScrollTrigger3.register(gsap3) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), _context3(this), this.init(vars, animation);
  }
  var _proto = ScrollTrigger3.prototype;
  return _proto.init = function(vars, animation) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !_enabled) {
      this.update = this.refresh = this.kill = _passThrough3;
      return;
    }
    vars = _setDefaults4(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults2);
    var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== !1 ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap3.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
      return vars.onRefreshInit(self);
    }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
    if (self._startClamp = self._endClamp = !1, self._dir = direction, anticipatePin *= 45, self.scroller = scroller, self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc, scroll1 = scrollFunc(), self.vars = vars, animation = animation || vars.animation, "refreshPriority" in vars && (_sort = 1, vars.refreshPriority === -9999 && (_primary = self)), scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    }, self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p], self.scrubDuration = function(value) {
      scrubSmooth = _isNumber3(value) && value, scrubSmooth ? scrubTween ? scrubTween.duration(value) : scrubTween = gsap3.to(animation, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: scrubSmooth,
        paused: !0,
        onComplete: function() {
          return onScrubComplete && onScrubComplete(self);
        }
      }) : (scrubTween && scrubTween.progress(1).kill(), scrubTween = 0);
    }, animation && (animation.vars.lazy = !1, animation._initted && !self.isReverted || animation.vars.immediateRender !== !1 && vars.immediateRender !== !1 && animation.duration() && animation.render(0, !0, !0), self.animation = animation.pause(), animation.scrollTrigger = self, self.scrubDuration(scrub), snap1 = 0, id || (id = animation.vars.id)), snap3 && ((!_isObject3(snap3) || snap3.push) && (snap3 = {
      snapTo: snap3
    }), "scrollBehavior" in _body2.style && gsap3.set(isViewport ? [_body2, _docEl2] : scroller, {
      scrollBehavior: "auto"
    }), _scrollers.forEach(function(o) {
      return _isFunction3(o) && o.target === (isViewport ? _doc4.scrollingElement || _docEl2 : scroller) && (o.smooth = !1);
    }), snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== !1 ? function(value, st) {
      return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
    } : gsap3.utils.snap(snap3.snapTo), snapDurClamp = snap3.duration || {
      min: 0.1,
      max: 2
    }, snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp), snapDelayedCall = gsap3.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
      var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
      if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
        var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap3.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === !1 ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
        if (endValue = snapFunc(naturalEnd, self), _isNumber3(endValue) || (endValue = naturalEnd), endScroll = Math.round(start + endValue * change), scroll <= end && scroll >= start && endScroll !== scroll) {
          if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll))
            return;
          snap3.inertia === !1 && (change1 = endValue - progress), tweenTo(endScroll, {
            duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
            ease: snap3.ease || "power3",
            data: _abs(endScroll - scroll),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return snapDelayedCall.restart(!0) && _onInterrupt && _onInterrupt(self);
            },
            onComplete: function() {
              self.update(), lastSnap = scrollFunc(), animation && (scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue)), snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress, onSnapComplete && onSnapComplete(self), _onComplete && _onComplete(self);
            }
          }, scroll, change1 * change, endScroll - scroll - change1 * change), onStart && onStart(self, tweenTo.tween);
        }
      } else
        self.isActive && lastSnap !== scroll && snapDelayedCall.restart(!0);
    }).pause()), id && (_ids[id] = self), trigger = self.trigger = _getTarget(trigger || pin !== !0 && pin), customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert, customRevertReturn && (customRevertReturn = customRevertReturn(self)), pin = pin === !0 ? trigger : _getTarget(pin), _isString3(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    }), pin && (pinSpacing === !1 || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? !1 : _padding), self.pin = pin, pinCache = gsap3.core.getCache(pin), pinCache.spacer ? pinOriginalState = pinCache.pinState : (pinSpacer && (pinSpacer = _getTarget(pinSpacer), pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement), pinCache.spacerIsNative = !!pinSpacer, pinSpacer && (pinCache.spacerState = _getState(pinSpacer))), pinCache.spacer = spacer = pinSpacer || _doc4.createElement("div"), spacer.classList.add("pin-spacer"), id && spacer.classList.add("pin-spacer-" + id), pinCache.pinState = pinOriginalState = _getState(pin)), vars.force3D !== !1 && gsap3.set(pin, {
      force3D: !0
    }), self.spacer = spacer = pinCache.spacer, cs = _getComputedStyle(pin), spacingStart = cs[pinSpacing + direction.os2], pinGetter = gsap3.getProperty(pin), pinSetter = gsap3.quickSetter(pin, direction.a, _px), _swapPinIn(pin, spacer, cs), pinState = _getState(pin)), markers) {
      markerVars = _isObject3(markers) ? _setDefaults4(markers, _markerDefaults) : _markerDefaults, markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0), markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger), offset = markerStartTrigger["offset" + direction.op.d2];
      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation), markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation), containerAnimation && (caMarkerSetter = gsap3.quickSetter([markerStart, markerEnd], direction.a, _px)), !useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === !0) && (_makePositionable(isViewport ? _body2 : scroller), gsap3.set([markerStartTrigger, markerEndTrigger], {
        force3D: !0
      }), markerStartSetter = gsap3.quickSetter(markerStartTrigger, direction.a, _px), markerEndSetter = gsap3.quickSetter(markerEndTrigger, direction.a, _px));
    }
    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function() {
        self.update(0, 0, 1), oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }
    if (self.previous = function() {
      return _triggers[_triggers.indexOf(self) - 1];
    }, self.next = function() {
      return _triggers[_triggers.indexOf(self) + 1];
    }, self.revert = function(revert, temp) {
      if (!temp)
        return self.kill(!0);
      var r = revert !== !1 || !self.enabled, prevRefreshing = _refreshing;
      r !== self.isReverted && (r && (prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0), prevProgress = self.progress, prevAnimProgress = animation && animation.progress()), markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
        return m.style.display = r ? "none" : "block";
      }), r && (_refreshing = self, self.update(r)), pin && (!pinReparent || !self.isActive) && (r ? _swapPinOut(pin, spacer, pinOriginalState) : _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState)), r || self.update(r), _refreshing = prevRefreshing, self.isReverted = r);
    }, self.refresh = function(soft, force, position, pinOffset) {
      if (!((_refreshing || !self.enabled) && !force)) {
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self), _refreshing = self, tweenTo.tween && !position && (tweenTo.tween.kill(), tweenTo.tween = 0), scrubTween && scrubTween.pause(), invalidateOnRefresh && animation && animation.revert({
          kill: !1
        }).invalidate(), self.isReverted || self.revert(!0, !0), self._subPinOffset = !1;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        for (markers && _isObject3(position) && (markerStartOffset = gsap3.getProperty(markerStartTrigger, direction.p), markerEndOffset = gsap3.getProperty(markerEndTrigger, direction.p)); i--; )
          curTrigger = _triggers[i], curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self), curPin = curTrigger.pin, curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted && (revertedPins || (revertedPins = []), revertedPins.unshift(curTrigger), curTrigger.revert(!0, !0)), curTrigger !== _triggers[i] && (triggerIndex--, i--);
        for (_isFunction3(parsedStart) && (parsedStart = parsedStart(self)), parsedStart = _parseClamp(parsedStart, "start", self), start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0), _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self)), _isString3(parsedEnd) && !parsedEnd.indexOf("+=") && (~parsedEnd.indexOf(" ") ? parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd : (offset2 = _offsetToPx(parsedEnd.substr(2), size), parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap3.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2, parsedEndTrigger = trigger)), parsedEnd = _parseClamp(parsedEnd, "end", self), end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3, offset2 = 0, i = triggerIndex; i--; )
          curTrigger = _triggers[i], curPin = curTrigger.pin, curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0 && (cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start), (curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart) && (offset2 += cs2 * (1 - curTrigger.progress)), curPin === pin && (otherPinOffset += cs2));
        if (start += offset2, end += offset2, self._startClamp && (self._startClamp += offset2), self._endClamp && !_refreshingAll && (self._endClamp = end || -1e-3, end = Math.min(end, _maxScroll(scroller, direction))), change = end - start || (start -= 0.01) && 1e-3, isFirstRefresh && (prevProgress = gsap3.utils.clamp(0, 1, gsap3.utils.normalize(start, end, prevScroll))), self._pinPush = otherPinOffset, markerStart && offset2 && (cs2 = {}, cs2[direction.a] = "+=" + offset2, pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc()), gsap3.set([markerStart, markerEnd], cs2)), pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction)))
          cs2 = _getComputedStyle(pin), isVertical = direction === _vertical, scroll = scrollFunc(), pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset, !max && end > 1 && (forcedOverflow = (isViewport ? _doc4.scrollingElement || _docEl2 : scroller).style, forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          }, isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll" && (forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll")), _swapPinIn(pin, spacer, cs2), pinState = _getState(pin), bounds = _getBounds(pin, !0), oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)(), pinSpacing ? (spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px], spacerState.t = spacer, i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0, i && (spacerState.push(direction.d, i + _px), spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px)), _setState(spacerState), pinnedContainer && _triggers.forEach(function(t) {
            t.pin === pinnedContainer && t.vars.pinSpacing !== !1 && (t._subPinOffset = !0);
          }), useFixedPosition && scrollFunc(prevScroll)) : (i = _getSize(pin, direction), i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px)), useFixedPosition && (override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          }, override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px, override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px, override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0", override[_padding] = cs2[_padding], override[_padding + _Top] = cs2[_padding + _Top], override[_padding + _Right] = cs2[_padding + _Right], override[_padding + _Bottom] = cs2[_padding + _Bottom], override[_padding + _Left] = cs2[_padding + _Left], pinActiveState = _copyState(pinOriginalState, override, pinReparent), _refreshingAll && scrollFunc(0)), animation ? (initted = animation._initted, _suppressOverwrites2(1), animation.render(animation.duration(), !0, !0), pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset, pinMoves = Math.abs(change - pinChange) > 1, useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2), animation.render(0, !0, !0), initted || animation.invalidate(!0), animation.parent || animation.totalTime(animation.totalTime()), _suppressOverwrites2(0)) : pinChange = change, forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        else if (trigger && scrollFunc() && !containerAnimation)
          for (bounds = trigger.parentNode; bounds && bounds !== _body2; )
            bounds._pinOffset && (start -= bounds._pinOffset, end -= bounds._pinOffset), bounds = bounds.parentNode;
        revertedPins && revertedPins.forEach(function(t) {
          return t.revert(!1, !0);
        }), self.start = start, self.end = end, scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(), !containerAnimation && !_refreshingAll && (scroll1 < prevScroll && scrollFunc(prevScroll), self.scroll.rec = 0), self.revert(!1, !0), lastRefresh = _getTime2(), snapDelayedCall && (lastSnap = -1, snapDelayedCall.restart(!0)), _refreshing = 0, animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, !0).render(animation.time(), !0, !0), (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh) && (animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap3.utils.normalize(start, end, 0) : prevProgress, !0), self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress), pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange)), scrubTween && scrubTween.invalidate(), isNaN(markerStartOffset) || (markerStartOffset -= gsap3.getProperty(markerStartTrigger, direction.p), markerEndOffset -= gsap3.getProperty(markerEndTrigger, direction.p), _shiftMarker(markerStartTrigger, direction, markerStartOffset), _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0)), _shiftMarker(markerEndTrigger, direction, markerEndOffset), _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0))), isFirstRefresh && !_refreshingAll && self.update(), onRefresh && !_refreshingAll && !executingOnRefresh && (executingOnRefresh = !0, onRefresh(self), executingOnRefresh = !1);
      }
    }, self.getVelocity = function() {
      return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
    }, self.endAnimation = function() {
      _endAnimation(self.callbackAnimation), animation && (scrubTween ? scrubTween.progress(1) : animation.paused() ? isToggle || _endAnimation(animation, self.direction < 0, 1) : _endAnimation(animation, animation.reversed()));
    }, self.labelToScroll = function(label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    }, self.getTrailing = function(name) {
      var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
      return (_isString3(name) ? a.filter(function(t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function(t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    }, self.update = function(reset, recordVelocity, forceFake) {
      if (!(containerAnimation && !forceFake && !reset)) {
        var scroll = _refreshingAll === !0 ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity && (scroll2 = scroll1, scroll1 = containerAnimation ? scrollFunc() : scroll, snap3 && (snap22 = snap1, snap1 = animation && !isToggle ? animation.totalProgress() : clipped)), anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime && (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin ? clipped = 1e-4 : clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin && (clipped = 0.9999)), clipped !== prevProgress2 && self.enabled) {
          if (isActive = self.isActive = !!clipped && clipped < 1, wasActive = !!prevProgress2 && prevProgress2 < 1, toggled = isActive !== wasActive, stateChanged = toggled || !!clipped != !!prevProgress2, self.direction = clipped > prevProgress2 ? 1 : -1, self.progress = clipped, stateChanged && !_refreshing && (toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3, isToggle && (action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState], isTakingAction = animation && (action === "complete" || action === "reset" || action in animation))), preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
            return t.endAnimation();
          })), isToggle || (scrubTween && !_refreshing && !_startup2 ? (scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start), scrubTween.resetTo ? scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur) : (scrubTween.vars.totalProgress = clipped, scrubTween.invalidate().restart())) : animation && animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)))), pin) {
            if (reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart), !useFixedPosition)
              pinSetter(_round3(pinStart + pinChange * clipped));
            else if (stateChanged) {
              if (isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction), pinReparent)
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, !0), _offset = scroll - start;
                  _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else
                  _reparent(pin, spacer);
              _setState(isActive || isAtMax ? pinActiveState : pinState), pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(!0), toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          }), onUpdate && !isToggle && !reset && onUpdate(self), stateChanged && !_refreshing ? (isToggle && (isTakingAction && (action === "complete" ? animation.pause().totalProgress(1) : action === "reset" ? animation.restart(!0).pause() : action === "restart" ? animation.restart(!0) : animation[action]()), onUpdate && onUpdate(self)), (toggled || !_limitCallbacks) && (onToggle && toggled && _callback3(self, onToggle), callbacks[toggleState] && _callback3(self, callbacks[toggleState]), once && (clipped === 1 ? self.kill(!1, 1) : callbacks[toggleState] = 0), toggled || (toggleState = clipped === 1 ? 1 : 3, callbacks[toggleState] && _callback3(self, callbacks[toggleState]))), fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500) && (_endAnimation(self.callbackAnimation), scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1))) : isToggle && onUpdate && !_refreshing && onUpdate(self);
        }
        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0)), markerEndSetter(n);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      }
    }, self.enable = function(reset, refresh) {
      self.enabled || (self.enabled = !0, _addListener3(scroller, "resize", _onResize), isViewport || _addListener3(scroller, "scroll", _onScroll3), onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit), reset !== !1 && (self.progress = prevProgress = 0, scroll1 = scroll2 = lastSnap = scrollFunc()), refresh !== !1 && self.refresh());
    }, self.getTween = function(snap4) {
      return snap4 && tweenTo ? tweenTo.tween : scrubTween;
    }, self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
      if (containerAnimation) {
        var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
        newStart = st.start + _change * newStart / duration, newEnd = st.start + _change * newEnd / duration;
      }
      self.refresh(!1, !1, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset), self.update();
    }, self.adjustPinSpacing = function(amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px, spacerState[1] = parseFloat(spacerState[1]) + amount + _px, _setState(spacerState);
      }
    }, self.disable = function(reset, allowAnimation) {
      if (self.enabled && (reset !== !1 && self.revert(!0, !0), self.enabled = self.isActive = !1, allowAnimation || scrubTween && scrubTween.pause(), prevScroll = 0, pinCache && (pinCache.uncache = 1), onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit), snapDelayedCall && (snapDelayedCall.pause(), tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0)), !isViewport)) {
        for (var i = _triggers.length; i--; )
          if (_triggers[i].scroller === scroller && _triggers[i] !== self)
            return;
        _removeListener3(scroller, "resize", _onResize), isViewport || _removeListener3(scroller, "scroll", _onScroll3);
      }
    }, self.kill = function(revert, allowAnimation) {
      self.disable(revert, allowAnimation), scrubTween && !allowAnimation && scrubTween.kill(), id && delete _ids[id];
      var i = _triggers.indexOf(self);
      i >= 0 && _triggers.splice(i, 1), i === _i && _direction > 0 && _i--, i = 0, _triggers.forEach(function(t) {
        return t.scroller === self.scroller && (i = 1);
      }), i || _refreshingAll || (self.scroll.rec = 0), animation && (animation.scrollTrigger = null, revert && animation.revert({
        kill: !1
      }), allowAnimation || animation.kill()), markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
        return m.parentNode && m.parentNode.removeChild(m);
      }), _primary === self && (_primary = 0), pin && (pinCache && (pinCache.uncache = 1), i = 0, _triggers.forEach(function(t) {
        return t.pin === pin && i++;
      }), i || (pinCache.spacer = 0)), vars.onKill && vars.onKill(self);
    }, _triggers.push(self), self.enable(!1, !1), customRevertReturn && customRevertReturn(self), animation && animation.add && !change) {
      var updateFunc = self.update;
      self.update = function() {
        self.update = updateFunc, start || end || self.refresh();
      }, gsap3.delayedCall(0.01, self.update), change = 0.01, start = end = 0;
    } else
      self.refresh();
    pin && _queueRefreshAll();
  }, ScrollTrigger3.register = function(core) {
    return _coreInitted3 || (gsap3 = core || _getGSAP3(), _windowExists5() && window.document && ScrollTrigger3.enable(), _coreInitted3 = _enabled), _coreInitted3;
  }, ScrollTrigger3.defaults = function(config3) {
    if (config3)
      for (var p in config3)
        _defaults2[p] = config3[p];
    return _defaults2;
  }, ScrollTrigger3.disable = function(reset, kill) {
    _enabled = 0, _triggers.forEach(function(trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    }), _removeListener3(_win4, "wheel", _onScroll3), _removeListener3(_doc4, "scroll", _onScroll3), clearInterval(_syncInterval), _removeListener3(_doc4, "touchcancel", _passThrough3), _removeListener3(_body2, "touchstart", _passThrough3), _multiListener(_removeListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler), _multiListener(_removeListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler), _resizeDelay.kill(), _iterateAutoRefresh(_removeListener3);
    for (var i = 0; i < _scrollers.length; i += 3)
      _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]), _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
  }, ScrollTrigger3.enable = function() {
    if (_win4 = window, _doc4 = document, _docEl2 = _doc4.documentElement, _body2 = _doc4.body, gsap3 && (_toArray = gsap3.utils.toArray, _clamp4 = gsap3.utils.clamp, _context3 = gsap3.core.context || _passThrough3, _suppressOverwrites2 = gsap3.core.suppressOverwrites || _passThrough3, _scrollRestoration = _win4.history.scrollRestoration || "auto", _lastScroll = _win4.pageYOffset, gsap3.core.globals("ScrollTrigger", ScrollTrigger3), _body2)) {
      _enabled = 1, _div100vh = document.createElement("div"), _div100vh.style.height = "100vh", _div100vh.style.position = "absolute", _refresh100vh(), _rafBugFix(), Observer.register(gsap3), ScrollTrigger3.isTouch = Observer.isTouch, _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), _ignoreMobileResize = Observer.isTouch === 1, _addListener3(_win4, "wheel", _onScroll3), _root2 = [_win4, _doc4, _docEl2, _body2], gsap3.matchMedia ? (ScrollTrigger3.matchMedia = function(vars) {
        var mm = gsap3.matchMedia(), p;
        for (p in vars)
          mm.add(p, vars[p]);
        return mm;
      }, gsap3.addEventListener("matchMediaInit", function() {
        return _revertAll();
      }), gsap3.addEventListener("matchMediaRevert", function() {
        return _revertRecorded();
      }), gsap3.addEventListener("matchMedia", function() {
        _refreshAll(0, 1), _dispatch3("matchMedia");
      }), gsap3.matchMedia("(orientation: portrait)", function() {
        return _setBaseDimensions(), _setBaseDimensions;
      })) : console.warn("Requires GSAP 3.11.0 or later"), _setBaseDimensions(), _addListener3(_doc4, "scroll", _onScroll3);
      var bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap3.core.Animation.prototype, bounds, i;
      for (AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), bodyStyle.borderTopStyle = "solid", bounds = _getBounds(_body2), _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0, _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0, border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"), _syncInterval = setInterval(_sync, 250), gsap3.delayedCall(0.5, function() {
        return _startup2 = 0;
      }), _addListener3(_doc4, "touchcancel", _passThrough3), _addListener3(_body2, "touchstart", _passThrough3), _multiListener(_addListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler), _multiListener(_addListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler), _transformProp2 = gsap3.utils.checkPrefix("transform"), _stateProps.push(_transformProp2), _coreInitted3 = _getTime2(), _resizeDelay = gsap3.delayedCall(0.2, _refreshAll).pause(), _autoRefresh = [_doc4, "visibilitychange", function() {
        var w = _win4.innerWidth, h = _win4.innerHeight;
        _doc4.hidden ? (_prevWidth = w, _prevHeight = h) : (_prevWidth !== w || _prevHeight !== h) && _onResize();
      }, _doc4, "DOMContentLoaded", _refreshAll, _win4, "load", _refreshAll, _win4, "resize", _onResize], _iterateAutoRefresh(_addListener3), _triggers.forEach(function(trigger) {
        return trigger.enable(0, 1);
      }), i = 0; i < _scrollers.length; i += 3)
        _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]), _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
    }
  }, ScrollTrigger3.config = function(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms), "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize), "autoRefreshEvents" in vars && (_iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none"), _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1);
  }, ScrollTrigger3.scrollerProxy = function(target, vars) {
    var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
    ~i && _scrollers.splice(i, isViewport ? 6 : 2), vars && (isViewport ? _proxies.unshift(_win4, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars));
  }, ScrollTrigger3.clearMatchMedia = function(query) {
    _triggers.forEach(function(t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(!0, !0);
    });
  }, ScrollTrigger3.isInViewport = function(element, ratio, horizontal) {
    var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win4.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win4.innerHeight;
  }, ScrollTrigger3.positionInViewport = function(element, referencePoint, horizontal) {
    _isString3(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win4.innerWidth : (bounds.top + offset) / _win4.innerHeight;
  }, ScrollTrigger3.killAll = function(allowListeners) {
    if (_triggers.slice(0).forEach(function(t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    }), allowListeners !== !0) {
      var listeners = _listeners2.killAll || [];
      _listeners2 = {}, listeners.forEach(function(f) {
        return f();
      });
    }
  }, ScrollTrigger3;
}();
ScrollTrigger2.version = "3.12.5";
ScrollTrigger2.saveStyles = function(targets) {
  return targets ? _toArray(targets).forEach(function(target) {
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);
      i >= 0 && _savedStyles.splice(i, 5), _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap3.core.getCache(target), _context3());
    }
  }) : _savedStyles;
};
ScrollTrigger2.revert = function(soft, media) {
  return _revertAll(!soft, media);
};
ScrollTrigger2.create = function(vars, animation) {
  return new ScrollTrigger2(vars, animation);
};
ScrollTrigger2.refresh = function(safe) {
  return safe ? _onResize() : (_coreInitted3 || ScrollTrigger2.register()) && _refreshAll(!0);
};
ScrollTrigger2.update = function(force) {
  return ++_scrollers.cache && _updateAll(force === !0 ? 2 : 0);
};
ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
ScrollTrigger2.maxScroll = function(element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};
ScrollTrigger2.getScrollFunc = function(element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};
ScrollTrigger2.getById = function(id) {
  return _ids[id];
};
ScrollTrigger2.getAll = function() {
  return _triggers.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
ScrollTrigger2.isScrolling = function() {
  return !!_lastScrollTime;
};
ScrollTrigger2.snapDirectional = _snapDirectional;
ScrollTrigger2.addEventListener = function(type, callback) {
  var a = _listeners2[type] || (_listeners2[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger2.removeEventListener = function(type, callback) {
  var a = _listeners2[type], i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};
ScrollTrigger2.batch = function(targets, vars) {
  var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function(type, callback) {
    var elements = [], triggers = [], delay = gsap3.delayedCall(interval, function() {
      callback(elements, triggers), elements = [], triggers = [];
    }).pause();
    return function(self) {
      elements.length || delay.restart(!0), elements.push(self.trigger), triggers.push(self), batchMax <= elements.length && delay.progress(1);
    };
  }, p;
  for (p in vars)
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  return _isFunction3(batchMax) && (batchMax = batchMax(), _addListener3(ScrollTrigger2, "refresh", function() {
    return batchMax = vars.batchMax();
  })), _toArray(targets).forEach(function(target) {
    var config3 = {};
    for (p in varsCopy)
      config3[p] = varsCopy[p];
    config3.trigger = target, result.push(ScrollTrigger2.create(config3));
  }), result;
};
var _clampScrollAndGetDurationMultiplier = function(scrollFunc, current, end, max) {
  return current > max ? scrollFunc(max) : current < 0 && scrollFunc(0), end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, _allowNativePanning = function _allowNativePanning2(target, direction) {
  direction === !0 ? target.style.removeProperty("touch-action") : target.style.touchAction = direction === !0 ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none", target === _docEl2 && _allowNativePanning2(_body2, direction);
}, _overflow = {
  auto: 1,
  scroll: 1
}, _nestedScroll = function(_ref5) {
  var event = _ref5.event, target = _ref5.target, axis = _ref5.axis, node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap3.core.getCache(node), time = _getTime2(), cs;
  if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
    for (; node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX])); )
      node = node.parentNode;
    cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]), cache._isScrollT = time;
  }
  (cache._isScroll || axis === "x") && (event.stopPropagation(), event._gsapAllow = !0);
}, _inputObserver = function(target, type, inputs, nested) {
  return Observer.create({
    target,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function() {
      return inputs && _addListener3(_doc4, Observer.eventTypes[0], _captureInputs, !1, !0);
    },
    onDisable: function() {
      return _removeListener3(_doc4, Observer.eventTypes[0], _captureInputs, !0);
    }
  });
}, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function(e) {
  var isInput = _inputExp.test(e.target.tagName);
  (isInput || _inputIsFocused) && (e._gsapAllow = !0, _inputIsFocused = isInput);
}, _getScrollNormalizer = function(vars) {
  _isObject3(vars) || (vars = {}), vars.preventDefault = vars.isNormalizer = vars.allowClicks = !0, vars.type || (vars.type = "wheel,touch"), vars.debounce = !!vars.debounce, vars.id = vars.id || "normalizer";
  var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap3.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== !1 && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
    return momentum(self);
  } : function() {
    return momentum || 2.8;
  }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, !0, allowNestedScroll), resumeTouchMove = function() {
    return skipTouchMove = !1;
  }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function() {
    maxY = _maxScroll(target, _vertical), scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY), normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal))), lastRefreshID = _refreshID;
  }, removeContentOffset = function() {
    content._gsap.y = _round3(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px", content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)", scrollFuncY.offset = scrollFuncY.cacheID = 0;
  }, ignoreDrag = function() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);
      var offset = _round3(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;
        var y = _round3((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)", content._gsap.y = y + "px", scrollFuncY.cacheID = _scrollers.cache, _updateAll();
      }
      return !0;
    }
    scrollFuncY.offset && removeContentOffset(), skipTouchMove = !0;
  }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function() {
    updateClamps(), tween.isActive() && tween.vars.scrollY > maxY && (scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY));
  };
  return content && gsap3.set(content, {
    y: "+=0"
  }), vars.ignoreCheck = function(e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  }, vars.onPress = function() {
    skipTouchMove = !1;
    var prevScale = scale;
    scale = _round3((_win4.visualViewport && _win4.visualViewport.scale || 1) / initialScale), tween.pause(), prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? !0 : normalizeScrollX ? !1 : "x"), startScrollX = scrollFuncX(), startScrollY = scrollFuncY(), updateClamps(), lastRefreshID = _refreshID;
  }, vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
    if (scrollFuncY.offset && removeContentOffset(), !wasDragging)
      onStopDelayedCall.restart(!0);
    else {
      _scrollers.cache++;
      var dur = resolveMomentumDuration(), currentScroll, endScroll;
      normalizeScrollX && (currentScroll = scrollFuncX(), endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227, dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal)), tween.vars.scrollX = scrollClampX(endScroll)), currentScroll = scrollFuncY(), endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227, dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical)), tween.vars.scrollY = scrollClampY(endScroll), tween.invalidate().duration(dur).play(0.01), (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) && gsap3.to({}, {
        onUpdate: onResize,
        duration: dur
      });
    }
    onRelease && onRelease(self2);
  }, vars.onWheel = function() {
    tween._ts && tween.pause(), _getTime2() - wheelRefresh > 1e3 && (lastRefreshID = 0, wheelRefresh = _getTime2());
  }, vars.onChange = function(self2, dx, dy, xArray, yArray) {
    if (_refreshID !== lastRefreshID && updateClamps(), dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1])), dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y), scrollFuncY(yClamped);
    }
    (dy || dx) && _updateAll();
  }, vars.onEnable = function() {
    _allowNativePanning(target, normalizeScrollX ? !1 : "x"), ScrollTrigger2.addEventListener("refresh", onResize), _addListener3(_win4, "resize", onResize), scrollFuncY.smooth && (scrollFuncY.target.style.scrollBehavior = "auto", scrollFuncY.smooth = scrollFuncX.smooth = !1), inputObserver.enable();
  }, vars.onDisable = function() {
    _allowNativePanning(target, !0), _removeListener3(_win4, "resize", onResize), ScrollTrigger2.removeEventListener("refresh", onResize), inputObserver.kill();
  }, vars.lockAxis = vars.lockAxis !== !1, self = new Observer(vars), self.iOS = _fixIOSBug, _fixIOSBug && !scrollFuncY() && scrollFuncY(1), _fixIOSBug && gsap3.ticker.add(_passThrough3), onStopDelayedCall = self._dc, tween = gsap3.to(self, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  }), self;
};
ScrollTrigger2.sort = function(func) {
  return _triggers.sort(func || function(a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};
ScrollTrigger2.observe = function(vars) {
  return new Observer(vars);
};
ScrollTrigger2.normalizeScroll = function(vars) {
  if (typeof vars > "u")
    return _normalizer2;
  if (vars === !0 && _normalizer2)
    return _normalizer2.enable();
  if (vars === !1) {
    _normalizer2 && _normalizer2.kill(), _normalizer2 = vars;
    return;
  }
  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  return _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill(), _isViewport3(normalizer.target) && (_normalizer2 = normalizer), normalizer;
};
ScrollTrigger2.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp,
  _inputObserver,
  _scrollers,
  _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      _lastScrollTime || _dispatch3("scrollStart"), _lastScrollTime = _getTime2();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return _refreshing;
    }
  }
};
_getGSAP3() && gsap3.registerPlugin(ScrollTrigger2);

// app/assets/icon/07.svg
var __default = "/build/_assets/07-PHC7KN46.svg";

// app/assets/icon/08.svg
var __default2 = "/build/_assets/08-ZCTTJKFJ.svg";

// app/assets/icon/09.svg
var __default3 = "/build/_assets/09-DYTZCF4S.svg";

// app/components/TypingAnimation.tsx
import { TypeAnimation } from "react-type-animation";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var App2 = () => /* @__PURE__ */ jsxDEV14("div", { children: /* @__PURE__ */ jsxDEV14(
  TypeAnimation,
  {
    sequence: [
      `Hello, I'm Karthic Creative
designer based in india.`,
      2e3,
      `I'm a Writer
and a Designer.`,
      2e3,
      `I'm a Designer
and a Designer.`,
      2e3,
      `Welcome to my website!
I'm a Developer`,
      2e3
    ],
    speed: { type: "keyStrokeDelayInMs", value: 100 },
    repeat: 1 / 0,
    style: {
      background: "linear-gradient(to right, #ff0000, #0000ff,#ffffff,#ffffff )",
      WebkitBackgroundClip: "text",
      color: "transparent",
      whiteSpace: "pre-line",
      fontSize: "3.5rem",
      textAlign: "center",
      height: "115px",
      width: "900px",
      display: "block"
    }
  },
  void 0,
  !1,
  {
    fileName: "app/components/TypingAnimation.tsx",
    lineNumber: 7,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/TypingAnimation.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), TypingAnimation_default = App2;

// app/components/index.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
gsapWithCSS.registerPlugin(ScrollTrigger2);
var IndexPage = () => {
  let container = useRef2(null), circle = useRef2(null), scroll = useRef2(null);
  return useGSAP(() => {
    gsapWithCSS.fromTo(".box1", { opacity: 0 }, { opacity: 1, duration: 3, delay: 1 }), gsapWithCSS.fromTo(".box2", { opacity: 0 }, { opacity: 1, duration: 3, delay: 2 }), gsapWithCSS.fromTo(".box3", { opacity: 0 }, { opacity: 1, duration: 3, delay: 3 }), gsapWithCSS.to(circle.current, { rotation: "-=360", duration: 3, repeat: -1 });
  }, { scope: container }), useGSAP(() => {
    gsapWithCSS.from(".trigger", {
      opacity: 0,
      y: 100,
      duration: 10,
      scrollTrigger: {
        trigger: ".trigger",
        start: "top center",
        end: "+=500",
        scrub: !0
      }
    });
  }), /* @__PURE__ */ jsxDEV15("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV15("div", { className: "w-[70rem]  text-white lg:pt-[10rem] flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV15("div", { className: "rounded-full h-[17rem] w-[17rem] blog-details-picture1 " }, void 0, !1, {
        fileName: "app/components/index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV15("h1", { className: "text-3xl mt-[1rem] font-bold  sm:text-5xl ", children: /* @__PURE__ */ jsxDEV15("span", { className: "bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: [
        " ",
        /* @__PURE__ */ jsxDEV15(TypingAnimation_default, {}, void 0, !1, {
          fileName: "app/components/index.tsx",
          lineNumber: 73,
          columnNumber: 104
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/index.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/index.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "sm:mt-6 text-md w-[55rem] text-center sm:text-lg ", children: "Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow" }, void 0, !1, {
        fileName: "app/components/index.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "flex mt-[1rem] gap-x-[1rem]", children: [
        /* @__PURE__ */ jsxDEV15("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-3 sm:px-8  rounded-md sm:rounded-3xl", children: "Get in touch" }, void 0, !1, {
          fileName: "app/components/index.tsx",
          lineNumber: 79,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV15("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  border border-white text-white font-bold py-3 sm:py-3 sm:px-8  rounded-md sm:rounded-3xl", children: "View all works" }, void 0, !1, {
          fileName: "app/components/index.tsx",
          lineNumber: 83,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/index.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/index.tsx",
      lineNumber: 68,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: "ml-[5rem] mt-[5rem]", children: [
      /* @__PURE__ */ jsxDEV15("h1", { className: "text-white font-bold text-2xl mt-[3rem]", children: "Trusted by leading brands" }, void 0, !1, {
        fileName: "app/components/index.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { ref: container, className: "flex justify-between items-center -ml-[2rem] -mt-[5rem] sm:w-[40rem] py-4", children: [
        /* @__PURE__ */ jsxDEV15("img", { src: __default, alt: "Logo 1", className: "box1 sm:mr-4 mx-2 w-20 h-10 sm:w-[20rem] sm:h-[20rem]" }, void 0, !1, {
          fileName: "app/components/index.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("img", { src: __default2, alt: "Logo 1", className: "box2 sm:mx-4 mx-2 w-10 h-10 sm:w-[20rem] sm:h-[20rem]" }, void 0, !1, {
          fileName: "app/components/index.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV15("img", { src: __default3, alt: "Logo 1", className: "box3 sm:mx-4 mx-2 w-10 -mt-[4.5rem] h-10 sm:w-[20rem] sm:h-[20rem]" }, void 0, !1, {
          fileName: "app/components/index.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/index.tsx",
        lineNumber: 56,
        columnNumber: 16
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/index.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}, components_default = IndexPage;

// app/components/skill.tsx
import { useRef as useRef3 } from "react";
import { Link as Link7 } from "@remix-run/react";
import { useGSAP as useGSAP2 } from "@gsap/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
gsapWithCSS.registerPlugin(ScrollTrigger2);
var Skills = () => {
  let container = useRef3(null), buttonRef = useRef3(null), buttonRef1 = useRef3(null);
  useGSAP2(() => {
    gsapWithCSS.fromTo(".span1", {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".span1",
        start: "top center",
        end: "+=500"
      }
    }), gsapWithCSS.fromTo(".span2", {
      opacity: 0,
      x: -100
    }, {
      opacity: 1,
      x: 0,
      duration: 3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".span2",
        start: "top center",
        end: "+=500"
      }
    }), gsapWithCSS.fromTo(".span3", {
      opacity: 0,
      scale: 0
    }, {
      opacity: 3,
      scale: 1,
      duration: 3,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: ".span3",
        start: "top center",
        end: "+=500"
      }
    });
  }, { scope: container });
  let articles = [
    {
      id: 1,
      title: "Finance Landing Page",
      date: "3rd October, 2023",
      buttonLabel: "Kitchen design",
      blog: "blog1"
    },
    {
      id: 2,
      title: "Interior Design Website",
      date: "23rd november, 2023",
      buttonLabel: "Living design",
      blog: "blog2"
    },
    {
      id: 3,
      title: "Russel Morgan Portfolio",
      date: "3rd October, 2023",
      buttonLabel: "Kitchen design",
      blog: "blog1"
    },
    {
      id: 4,
      title: "Sonali Landing Page",
      date: "23rd november, 2023",
      buttonLabel: "Living design",
      blog: "blog2"
    }
  ], Footer2 = /* @__PURE__ */ jsxDEV16("div", { className: "ml-[5rem] relative -top-[5rem] h-[2rem] w-[70rem] ]", children: [
    /* @__PURE__ */ jsxDEV16("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, !1, {
      fileName: "app/components/skill.tsx",
      lineNumber: 102,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV16("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 104,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ jsxDEV16(Link7, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 108,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV16(Link7, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 109,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV16(Link7, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 110,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 107,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/skill.tsx",
      lineNumber: 103,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV16("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 115,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV16("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 119,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/skill.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV16("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 120,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/skill.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV16("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 121,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/skill.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 118,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/skill.tsx",
      lineNumber: 114,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/skill.tsx",
    lineNumber: 101,
    columnNumber: 9
  }, this);
  return /* @__PURE__ */ jsxDEV16("div", { children: [
    /* @__PURE__ */ jsxDEV16("div", { className: "bg-customColor ", children: /* @__PURE__ */ jsxDEV16("div", { className: "w-[70rem]  text-white lg:pt-[10rem] pb-[8rem] flex flex-col ml-[6rem]", children: [
      /* @__PURE__ */ jsxDEV16("h1", { ref: container, className: "text-3xl mt-[1rem] font-bold  sm:text-5xl ", children: [
        /* @__PURE__ */ jsxDEV16("span", { className: "span1", children: " Design that solves" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 178,
          columnNumber: 64
        }, this),
        "    ",
        /* @__PURE__ */ jsxDEV16("span", { className: "span2 block flex ml-[7rem] items-center", children: [
          /* @__PURE__ */ jsxDEV16("span", { className: "icon-[fluent--line-horizontal-1-16-regular]  w-[4rem] h-[4rem]" }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "flex items-center", children: "problems, one" }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 180,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/skill.tsx",
          lineNumber: 178,
          columnNumber: 74
        }, this),
        /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 185,
          columnNumber: 12
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV16("span", { className: "span3 block -mt-[3.5rem] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text", children: " product at a time" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 185,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex mt-[2rem] gap-x-[1rem]", children: [
        /* @__PURE__ */ jsxDEV16(
          "button",
          {
            ref: buttonRef1,
            onClick: () => {
              gsapWithCSS.fromTo(buttonRef1.current, {
                background: "linear-gradient(to right, #ff3a3a, #0022ff)",
                // Original gradient
                scale: 1
              }, {
                background: "linear-gradient(to right, #a61a1a, #0000a6)",
                // Lightened darker gradient
                scale: 1.1,
                duration: 0.2,
                ease: "power4.out",
                onComplete: () => {
                  gsapWithCSS.to(buttonRef1.current, {
                    background: "linear-gradient(to right, #ff3a3a, #0022ff)",
                    // Original gradient
                    scale: 1,
                    duration: 0.2,
                    ease: "power4.out"
                  });
                }
              });
            },
            className: " text-[0.8rem] text-black sm:text-lg text-white  bg-gradient-to-r from-red-500 to-blue-500 font-bold py-3 sm:py-[0.5rem] sm:px-[1.5rem]  rounded-md sm:rounded-3xl",
            children: "Get in touch"
          },
          void 0,
          !1,
          {
            fileName: "app/components/skill.tsx",
            lineNumber: 189,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16(
          "button",
          {
            ref: buttonRef,
            onClick: () => {
              gsapWithCSS.fromTo(buttonRef.current, {
                scale: 1
              }, {
                scale: 1.1,
                duration: 0.2,
                ease: "power4.out",
                onComplete: () => {
                  gsapWithCSS.to(buttonRef.current, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power4.out"
                  });
                }
              });
            },
            className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  border border-white text-white font-bold py-3 sm:py-[0.5rem] sm:px-[1.5rem]  rounded-md sm:rounded-3xl",
            children: "View all works"
          },
          void 0,
          !1,
          {
            fileName: "app/components/skill.tsx",
            lineNumber: 194,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV16("hr", { className: " w-[60rem] mt-[4rem] h-[0.15rem] bg-white" }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 200,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "sm:w-[60rem] border-2 border border-b-white border-t-customColor border-x-customColor", children: /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between mx-auto items-center", children: [
        /* @__PURE__ */ jsxDEV16("p", { className: "py-[1rem] px-[1rem]  text-[3rem] flex items-center", children: "UI/UX Design" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 203,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV16("span", { className: "icon-[eva--diagonal-arrow-right-up-fill]  w-[5rem] h-[8rem]" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 206,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 202,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 201,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "sm:w-[60rem] border-2 border border-b-customColor border-t-customColor border-x-customColor", children: /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between mx-auto items-center", children: [
        /* @__PURE__ */ jsxDEV16("p", { className: "py-[1rem] px-[1rem]  text-[3rem] flex items-center", children: "Graphic Design" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 211,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV16("span", { className: "icon-[eva--diagonal-arrow-right-up-fill]  w-[5rem] h-[8rem]" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 214,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 210,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 209,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "sm:w-[60rem] border-0 border border-b-customColor border-t-customColor border-x-customColor bg-gradient-to-r from-red-500 to-blue-500 ", children: /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between mx-auto items-center", children: [
        /* @__PURE__ */ jsxDEV16("p", { className: "py-[1rem] px-[1rem]  text-[3rem] flex items-center", children: "Web Design" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 219,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV16("span", { className: "icon-[eva--diagonal-arrow-right-up-fill]  w-[5rem] h-[8rem]" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 222,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 218,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 217,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "sm:w-[60rem] border-2 border border-b-white border-t-customColor border-x-customColor", children: /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between mx-auto items-center", children: [
        /* @__PURE__ */ jsxDEV16("p", { className: "py-[1rem] px-[1rem]  text-[3rem] flex items-center", children: "Product Design" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 227,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV16("span", { className: "icon-[eva--diagonal-arrow-right-up-fill]  w-[5rem] h-[8rem]" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 230,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 226,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 225,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/skill.tsx",
      lineNumber: 175,
      columnNumber: 10
    }, this) }, void 0, !1, {
      fileName: "app/components/skill.tsx",
      lineNumber: 174,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "w-[65rem] ml-[6rem] mb-[5rem]", children: [
      /* @__PURE__ */ jsxDEV16("h1", { className: "text-3xl font-bold  sm:text-7xl mt-[7rem]   text-white", children: [
        "Look at My  ",
        /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 239,
          columnNumber: 17
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV16("span", { className: "bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text", children: "Projects" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 239,
          columnNumber: 24
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 238,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: " text-[1.2rem] mt-[3rem] w-[46rem] text-white  mb-[7rem]", children: "Lorem ipsum dolor sit amet consectetur. Consequat tempus rhoncus cum in. Vel id donec adipiscing elit morbi amet. Fermentum aliquam sed vitae placerat quam nec convallis." }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 241,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "grid grid-cols-1 w-[55rem]  md:grid-cols-2 gap-y-[3rem] ", children: articles.map((article) => /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col w-[25rem] justify-center bg-gray-900 items-center sm:mx-1  mx-8 px-4  rounded-[2rem]", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: ` w-full h-[17rem] flex flex-col rounded-t-[0.4rem] justify-end  ${article.blog}` }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 247,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV16(Link7, { to: `/blogs/${article.id}`, children: /* @__PURE__ */ jsxDEV16("div", { className: "py-[1.4rem] px-[1.4rem] w-[25rem] flex flex-col gap-y-[1.2rem]", children: [
          /* @__PURE__ */ jsxDEV16("h2", { className: "text-2xl font-bold text-white  ", children: article.title }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 253,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "text-md  text-white font2 w-10/12 mt-[0.5rem] ", children: "Dribble Shot" }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 254,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/skill.tsx",
          lineNumber: 251,
          columnNumber: 7
        }, this) }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 250,
          columnNumber: 7
        }, this)
      ] }, article.id, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 246,
        columnNumber: 5
      }, this)) }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 244,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/skill.tsx",
      lineNumber: 236,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "bg-customColor ", children: /* @__PURE__ */ jsxDEV16("div", { className: "w-[65rem] pb-[15rem] ml-[6rem]", children: [
      /* @__PURE__ */ jsxDEV16("div", { className: "pt-[7rem] ", children: [
        /* @__PURE__ */ jsxDEV16("h1", { className: "text-3xl font-bold  sm:text-7xl   text-white", children: "Karthic Bansal" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 265,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "flex mt-[2rem] w-[55rem] gap-x-[1rem]", children: [
          /* @__PURE__ */ jsxDEV16("p", { className: "text-[1.2rem]  text-white ", children: "Lorem ipsum dolor sit amet consectetur. Aliquam consectetur id massa nec elementum nisi. Aliquet in tempor sociis ut. Condimentum porttitor metus ridiculus tempor in scelerisque facilisis. Gravida pulvinar amet fringilla" }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 269,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "text-[1.2rem]  text-white ", children: "Lorem ipsum dolor sit amet consectetur. Aliquam consectetur id massa nec elementum nisi. Aliquet in tempor sociis ut. Condimentum porttitor metus ridiculus tempor in scelerisque facilisis. Gravida pulvinar amet fringilla" }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/skill.tsx",
          lineNumber: 268,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "flex justify-between items-center  w-[65rem]  font-medium p-4 sm:py-8  ", children: [
          /* @__PURE__ */ jsxDEV16("div", { className: "w-1/4 h-20 flex items-center justify-start ", children: [
            /* @__PURE__ */ jsxDEV16("div", { className: "sm:hidden", children: [
              /* @__PURE__ */ jsxDEV16("span", { className: "font1 text-5xl text-customColor2", children: "12" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 285,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 285,
                columnNumber: 73
              }, this),
              /* @__PURE__ */ jsxDEV16("span", { className: "text-xs", children: [
                "years of ",
                /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
                  fileName: "app/components/skill.tsx",
                  lineNumber: 286,
                  columnNumber: 48
                }, this),
                "experience"
              ] }, void 0, !0, {
                fileName: "app/components/skill.tsx",
                lineNumber: 286,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/skill.tsx",
              lineNumber: 284,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "hidden mt-4  sm:block sm:flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxDEV16("span", { className: " text-5xl font-bold  bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text", children: "15+" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 289,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("span", { className: "text-md text-white", children: "Products Done" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 290,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/skill.tsx",
              lineNumber: 288,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/skill.tsx",
            lineNumber: 282,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "w-1/4 h-20 flex items-center justify-start", children: [
            /* @__PURE__ */ jsxDEV16("div", { className: "sm:hidden", children: [
              /* @__PURE__ */ jsxDEV16("span", { className: "text-5xl text-white", children: "85" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 300,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 300,
                columnNumber: 60
              }, this),
              /* @__PURE__ */ jsxDEV16("span", { className: "text-xs", children: [
                "success ",
                /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
                  fileName: "app/components/skill.tsx",
                  lineNumber: 301,
                  columnNumber: 47
                }, this),
                "projects"
              ] }, void 0, !0, {
                fileName: "app/components/skill.tsx",
                lineNumber: 301,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/skill.tsx",
              lineNumber: 299,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "hidden mt-4 sm:block sm:flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxDEV16("span", { className: "text-5xl font-bold bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text", children: "07" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 304,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("span", { className: "text-md text-white", children: "years of experience" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 305,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/skill.tsx",
              lineNumber: 303,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/skill.tsx",
            lineNumber: 297,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "w-1/4 h-20 flex items-center justify-start ", children: [
            /* @__PURE__ */ jsxDEV16("div", { className: "sm:hidden", children: [
              /* @__PURE__ */ jsxDEV16("span", { className: "font1 text-5xl text-customColor2", children: "15" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 314,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 314,
                columnNumber: 73
              }, this),
              /* @__PURE__ */ jsxDEV16("span", { className: "text-xs", children: "Active " }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 315,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 315,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ jsxDEV16("span", { className: "text-xs", children: "projects " }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 316,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/skill.tsx",
              lineNumber: 313,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV16("div", { className: "hidden mt-4 sm:block sm:flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxDEV16("span", { className: "font-bold text-5xl block bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text", children: "100%" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 319,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV16("span", { className: "text-md text-white", children: "clients satisfaction" }, void 0, !1, {
                fileName: "app/components/skill.tsx",
                lineNumber: 320,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/skill.tsx",
              lineNumber: 318,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/skill.tsx",
            lineNumber: 311,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/skill.tsx",
          lineNumber: 280,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 264,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "flex mt-[2rem] justify-between", children: [
        /* @__PURE__ */ jsxDEV16("div", { className: "picture h-[25rem] w-[20rem] rounded-md" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 328,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "picture2 h-[25rem] w-[23rem] rounded-md" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 331,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col gap-y-[1rem] h-[25rem] w-[20rem] rounded-md", children: [
          /* @__PURE__ */ jsxDEV16("div", { className: "picture2 h-[12rem] w-[20rem] rounded-md" }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 335,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("div", { className: "picture3 h-[12rem] w-[20rem] rounded-md" }, void 0, !1, {
            fileName: "app/components/skill.tsx",
            lineNumber: 338,
            columnNumber: 12
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/skill.tsx",
          lineNumber: 334,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 327,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/skill.tsx",
      lineNumber: 263,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/skill.tsx",
      lineNumber: 262,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "w-[65rem] relative -top-[13rem] ml-[6rem]  p-6 rounded-b-3xl bg-gradient-to-r from-red-500 to-blue-500 sm:rounded-b-[8rem] sm:py-[3rem] sm:flex sm:flex-col sm:justify-center sm:items-center", children: [
      /* @__PURE__ */ jsxDEV16("h2", { className: "text-3xl sm:text-7xl font-bold sm:text-center  mb-2 sm:mb-2 text-white sm:w-3/4", children: [
        "Interested in ",
        /* @__PURE__ */ jsxDEV16("br", {}, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 347,
          columnNumber: 117
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV16("span", { className: "mt-[1.7rem] block", children: " Working with me?" }, void 0, !1, {
          fileName: "app/components/skill.tsx",
          lineNumber: 347,
          columnNumber: 124
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/skill.tsx",
        lineNumber: 347,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV16("button", { className: " text-[1.3rem] text-black  mt-[3.5rem] hover:bg-blue-700 bg-white font-bold py-3 sm:py-5 sm:px-[3.2rem]  rounded-md sm:rounded-[3rem]", children: "Get in touch" }, void 0, !1, {
        fileName: "app/components/skill.tsx",
        lineNumber: 349,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/skill.tsx",
      lineNumber: 346,
      columnNumber: 4
    }, this),
    Footer2
  ] }, void 0, !0, {
    fileName: "app/components/skill.tsx",
    lineNumber: 173,
    columnNumber: 4
  }, this);
}, skill_default = Skills;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
  { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
  { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:site_name", content: "Interior Decorators Inc." }
];
function Index6() {
  let bodyRef = useRef4(null), [isMenuOpen, setIsMenuOpen] = useState7(!1), toggleMenuDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  }, [isLoading, setIsLoading] = useState7(!0);
  return useEffect4(() => {
    bodyRef.current && bodyRef.current.classList.add("loaded");
  }, []), /* @__PURE__ */ jsxDEV17("div", { ref: bodyRef, id: "body", children: [
    /* @__PURE__ */ jsxDEV17("div", { id: "loader-wrapper", children: [
      /* @__PURE__ */ jsxDEV17("div", { id: "loader" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "loader-section section-left" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "loader-section section-right" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV17(NavigationBar_default, { isMenuOpen, toggleMenuDropdown }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV17(components_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(skill_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index7,
  meta: () => meta7
});
import { useState as useState8 } from "react";

// app/components/About-home.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var AboutHome = () => /* @__PURE__ */ jsxDEV18("div", { className: "", children: [
  /* @__PURE__ */ jsxDEV18("div", { className: " bg-opacity-60 p-4 text-white sm:p-8 ml-4 sm:ml-8 lg:ml-[5rem] lg:mt-0 lg:pt-[10rem] shadow-sm w-11/12 sm:w-7/12 lg:w-6/12  rounded-tl-[2rem] rounded-br-[3rem] sm:rounded-tl-[4rem] sm:rounded-br-[5rem]", children: [
    /* @__PURE__ */ jsxDEV18("h1", { className: "text-3xl sm:text-5xl font2 w-10/12 sm:w-4/5 lg:w-3/5", children: [
      "Hi, I am ",
      /* @__PURE__ */ jsxDEV18("br", {}, void 0, !1, {
        fileName: "app/components/About-home.tsx",
        lineNumber: 10,
        columnNumber: 22
      }, this),
      " ",
      /* @__PURE__ */ jsxDEV18("span", { className: "mt-4 block", children: "  Kartik Bansal" }, void 0, !1, {
        fileName: "app/components/About-home.tsx",
        lineNumber: 10,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/About-home.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV18("p", { className: "sm:mt-6 text-md w-4/5 sm:text-xl ", children: "Over the past 12 years, I've worked with a diverse range of clients,from startups to fortune 500 companies. I love crafting interfaces that delight users and elp business grow" }, void 0, !1, {
      fileName: "app/components/About-home.tsx",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "flex gap-x-6 sm:gap-x-4  mt-4", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
        "   ",
        /* @__PURE__ */ jsxDEV18("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
          fileName: "app/components/About-home.tsx",
          lineNumber: 16,
          columnNumber: 104
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/About-home.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
        "   ",
        /* @__PURE__ */ jsxDEV18("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
          fileName: "app/components/About-home.tsx",
          lineNumber: 17,
          columnNumber: 104
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/About-home.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
        "   ",
        /* @__PURE__ */ jsxDEV18("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
          fileName: "app/components/About-home.tsx",
          lineNumber: 18,
          columnNumber: 104
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/About-home.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
        "   ",
        /* @__PURE__ */ jsxDEV18("span", { className: " icon-[ri--instagram-line] w-4 h-4 text-white " }, void 0, !1, {
          fileName: "app/components/About-home.tsx",
          lineNumber: 19,
          columnNumber: 104
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/About-home.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/About-home.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/About-home.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this),
  /* @__PURE__ */ jsxDEV18("div", { className: "flex justify-between w-[59rem] ml-[7rem]", children: [
    /* @__PURE__ */ jsxDEV18("div", { className: "picture h-[25rem] w-[17rem] rounded-md" }, void 0, !1, {
      fileName: "app/components/About-home.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "picture2 h-[25rem] w-[23rem] rounded-md" }, void 0, !1, {
      fileName: "app/components/About-home.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col gap-y-[1rem] h-[25rem] w-[17rem] rounded-md", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "picture2 h-[12rem] w-[17rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/About-home.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "picture3 h-[12rem] w-[17rem] rounded-md" }, void 0, !1, {
        fileName: "app/components/About-home.tsx",
        lineNumber: 38,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/About-home.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/About-home.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/About-home.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), About_home_default = AboutHome;

// app/components/ExperienceSection.tsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var ExperienceSection = () => /* @__PURE__ */ jsxDEV19("div", { className: "w-full  py-10", children: /* @__PURE__ */ jsxDEV19("div", { className: "flex justify-between items-center  max-w-[66rem] font2 font-medium p-4 sm:py-8 sm:ml-[5rem] ", children: [
  /* @__PURE__ */ jsxDEV19("div", { className: "w-1/4 h-20 flex items-center justify-center pr-[5rem] border-r-[0.07rem] border-white", children: [
    /* @__PURE__ */ jsxDEV19("div", { className: "sm:hidden", children: [
      /* @__PURE__ */ jsxDEV19("span", { className: "font1 text-5xl text-customColor2", children: "12" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 11,
        columnNumber: 73
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-xs", children: [
        "years of ",
        /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
          fileName: "app/components/ExperienceSection.tsx",
          lineNumber: 12,
          columnNumber: 48
        }, this),
        "experience"
      ] }, void 0, !0, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ExperienceSection.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "hidden sm:block sm:flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxDEV19("span", { className: " text-5xl text-white", children: "12+" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-sm text-white", children: "years of experience in" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-white text-sm", children: "Design" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ExperienceSection.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ExperienceSection.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV19("div", { className: "w-1/4 h-20 flex items-center pr-[5rem] justify-center border-r-[0.07rem] border-white", children: [
    /* @__PURE__ */ jsxDEV19("div", { className: "sm:hidden", children: [
      /* @__PURE__ */ jsxDEV19("span", { className: "text-5xl text-white", children: "85" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 26,
        columnNumber: 60
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-xs", children: [
        "success ",
        /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
          fileName: "app/components/ExperienceSection.tsx",
          lineNumber: 27,
          columnNumber: 47
        }, this),
        "projects"
      ] }, void 0, !0, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ExperienceSection.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "hidden sm:block sm:flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxDEV19("span", { className: "text-5xl text-white", children: "85+" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-sm text-white", children: "successful Projects" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-sm text-white", children: " Completed" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ExperienceSection.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ExperienceSection.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV19("div", { className: "w-1/4 h-20 flex items-center justify-center ", children: [
    /* @__PURE__ */ jsxDEV19("div", { className: "sm:hidden", children: [
      /* @__PURE__ */ jsxDEV19("span", { className: "font1 text-5xl text-customColor2", children: "15" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 40,
        columnNumber: 73
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-xs", children: "Active " }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 41,
        columnNumber: 53
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-xs", children: "projects " }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ExperienceSection.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "hidden sm:block sm:flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxDEV19("span", { className: "font1 text-5xl text-white", children: "15+" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV19("span", { className: "text-sm text-white", children: "Global Customers" }, void 0, !1, {
        fileName: "app/components/ExperienceSection.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ExperienceSection.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ExperienceSection.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/ExperienceSection.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/ExperienceSection.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), ExperienceSection_default = ExperienceSection;

// app/components/Sticker.tsx
import { Link as Link8 } from "@remix-run/react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var EducationSection = /* @__PURE__ */ jsxDEV20("div", { className: "sm:w-[40rem] ml-[5rem] mt-[2rem] text-white mb-8", children: [
  /* @__PURE__ */ jsxDEV20("h2", { className: "text-5xl font2 mb-8", children: "Education" }, void 0, !1, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "sm:w-[38rem] mb-4", children: [
    /* @__PURE__ */ jsxDEV20("p", { className: "flex justify-between items-center px-2 sm:px-0", children: [
      /* @__PURE__ */ jsxDEV20("span", { className: "font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full", children: [
        "STANFORD UNIVERSITY ",
        /* @__PURE__ */ jsxDEV20("br", {}, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 20,
          columnNumber: 29
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-4 text-[1.2rem]", children: " Frontend Web Developer Degree " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 20,
          columnNumber: 36
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]", children: "- 2016-2020" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("hr", { className: " bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "sm:w-[38rem] mb-4", children: [
    /* @__PURE__ */ jsxDEV20("p", { className: "flex justify-between items-center px-2 sm:px-0", children: [
      /* @__PURE__ */ jsxDEV20("span", { className: "font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full", children: [
        "MIT UNIVERSITY ",
        /* @__PURE__ */ jsxDEV20("br", {}, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 31,
          columnNumber: 24
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-4 text-[1.2rem]", children: " User Experience Master " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 31,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]", children: "- 2012-2016" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV20("hr", { className: " bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "sm:w-[38rem] mb-4", children: [
    /* @__PURE__ */ jsxDEV20("p", { className: "flex justify-between items-center px-2 sm:px-0", children: [
      /* @__PURE__ */ jsxDEV20("span", { className: "font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full", children: [
        "NEW YORK UNIVERSITY ",
        /* @__PURE__ */ jsxDEV20("br", {}, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 42,
          columnNumber: 29
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-4 text-[1.2rem]", children: " Wev Development Degree " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 42,
          columnNumber: 36
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]", children: "- 2012-2017" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV20("hr", { className: " bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Sticker.tsx",
  lineNumber: 12,
  columnNumber: 5
}, this), ExperienceSection2 = /* @__PURE__ */ jsxDEV20("div", { className: "sm:w-[40rem] ml-[5rem] mt-[3rem] my-[2rem] text-white ", children: [
  /* @__PURE__ */ jsxDEV20("h2", { className: "text-5xl font2 mb-8", children: "Work Experience" }, void 0, !1, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "sm:w-[38rem] mb-4", children: [
    /* @__PURE__ */ jsxDEV20("p", { className: "flex justify-between items-center px-2 sm:px-0", children: [
      /* @__PURE__ */ jsxDEV20("span", { className: "font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full", children: [
        "Twitter Inc ",
        /* @__PURE__ */ jsxDEV20("br", {}, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-4 text-[1.2rem]", children: " Product Mananger " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 65,
          columnNumber: 28
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]", children: "- 2016-2020" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("hr", { className: " bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "sm:w-[38rem] mb-4", children: [
    /* @__PURE__ */ jsxDEV20("p", { className: "flex justify-between items-center px-2 sm:px-0", children: [
      /* @__PURE__ */ jsxDEV20("span", { className: "font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full", children: [
        "Tesla ",
        /* @__PURE__ */ jsxDEV20("br", {}, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-4 text-[1.2rem]", children: " Visual Designer " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 76,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]", children: "- 2012-2016" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 74,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV20("hr", { className: " bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "sm:w-[38rem] mb-4", children: [
    /* @__PURE__ */ jsxDEV20("p", { className: "flex justify-between items-center px-2 sm:px-0", children: [
      /* @__PURE__ */ jsxDEV20("span", { className: "font-medium font2 mb-2 text-xl sm:min-w-[8.5rem] w-full", children: [
        "Apple ",
        /* @__PURE__ */ jsxDEV20("br", {}, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-4 text-[1.2rem]", children: " UI Designer " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 87,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: "text-gray-600 mt-[1.8rem] text-nowrap text-[1.0rem]", children: "- 2012-2017" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 85,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV20("hr", { className: " bg-white w-full sm:w-[40rem] h-[0.1rem] rounded-4" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Sticker.tsx",
  lineNumber: 57,
  columnNumber: 5
}, this), Logo = /* @__PURE__ */ jsxDEV20("div", { className: "ml-[5rem] mt-[5rem]", children: [
  /* @__PURE__ */ jsxDEV20("h1", { className: "text-white text-5xl mt-[3rem]", children: [
    "Companies I've ",
    /* @__PURE__ */ jsxDEV20("br", {}, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 103,
      columnNumber: 28
    }, this),
    " ",
    /* @__PURE__ */ jsxDEV20("span", { className: "mt-3 block", children: " Worked with" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 103,
      columnNumber: 35
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 102,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "flex justify-between items-center -ml-[2rem] -mt-[5rem] sm:w-[40rem] py-4", children: [
    /* @__PURE__ */ jsxDEV20("img", { src: __default, alt: "Logo 1", className: "sm:mr-4 mx-2 w-20 h-10 sm:w-[20rem] sm:h-[20rem]" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("img", { src: __default2, alt: "Logo 1", className: "sm:mx-4 mx-2 w-10 h-10 sm:w-[20rem] sm:h-[20rem]" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("img", { src: __default3, alt: "Logo 1", className: "sm:mx-4 mx-2 w-10 -mt-[4.5rem] h-10 sm:w-[20rem] sm:h-[20rem]" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 105,
    columnNumber: 12
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Sticker.tsx",
  lineNumber: 101,
  columnNumber: 5
}, this), FollowMe = /* @__PURE__ */ jsxDEV20("div", { className: "picture4 h-[35rem] w-[35rem] ml-[5rem] rounded-md", children: /* @__PURE__ */ jsxDEV20("div", { className: "relative top-[10rem] flex flex-col items-center justify-center left-[25rem] w-[30rem] py-[2rem] bg-white text-black rounded-md", children: [
  /* @__PURE__ */ jsxDEV20("h1", { className: "font-bold text-3xl w-[26rem] bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text ", children: "Follow Me" }, void 0, !1, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 116,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium mt-[1.5rem] w-[26rem] mb-[1rem]", children: [
    "I'm Karthic Bansal, a designer who works with ",
    /* @__PURE__ */ jsxDEV20("br", {}, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 120,
      columnNumber: 63
    }, this),
    " startups to build brands"
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 119,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV20("hr", { className: "bg-black w-[26rem] h-[0.15rem]" }, void 0, !1, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 122,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "flex gap-x-6 sm:gap-x-10 w-[26rem] mt-[1rem]", children: [
    /* @__PURE__ */ jsxDEV20("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
      "   ",
      /* @__PURE__ */ jsxDEV20("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 124,
        columnNumber: 104
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 124,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
      "   ",
      /* @__PURE__ */ jsxDEV20("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 125,
        columnNumber: 104
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
      "   ",
      /* @__PURE__ */ jsxDEV20("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 126,
        columnNumber: 104
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
      "   ",
      /* @__PURE__ */ jsxDEV20("span", { className: " icon-[ri--instagram-line] w-4 h-4 text-white " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 127,
        columnNumber: 104
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
      "   ",
      /* @__PURE__ */ jsxDEV20("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 128,
        columnNumber: 104
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "bg-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
      "   ",
      /* @__PURE__ */ jsxDEV20("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 129,
        columnNumber: 104
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 129,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 123,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Sticker.tsx",
  lineNumber: 115,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Sticker.tsx",
  lineNumber: 114,
  columnNumber: 5
}, this), Footer = /* @__PURE__ */ jsxDEV20("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
  /* @__PURE__ */ jsxDEV20("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, !1, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 142,
    columnNumber: 6
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
    /* @__PURE__ */ jsxDEV20("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 144,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex gap-x-6", children: [
      /* @__PURE__ */ jsxDEV20(Link8, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 148,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV20(Link8, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 149,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV20(Link8, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 150,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 147,
      columnNumber: 8
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 143,
    columnNumber: 6
  }, this),
  /* @__PURE__ */ jsxDEV20("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
    /* @__PURE__ */ jsxDEV20("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, !1, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 155,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
      /* @__PURE__ */ jsxDEV20("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
        "   ",
        /* @__PURE__ */ jsxDEV20("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 159,
          columnNumber: 115
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
        "   ",
        /* @__PURE__ */ jsxDEV20("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 160,
          columnNumber: 115
        }, this),
        " "
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
        "   ",
        /* @__PURE__ */ jsxDEV20("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
          fileName: "app/components/Sticker.tsx",
          lineNumber: 161,
          columnNumber: 115
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 158,
      columnNumber: 8
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 154,
    columnNumber: 6
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Sticker.tsx",
  lineNumber: 141,
  columnNumber: 5
}, this), StickerSection = () => /* @__PURE__ */ jsxDEV20("div", { children: [
  /* @__PURE__ */ jsxDEV20("div", { className: "w-full  py-10", children: /* @__PURE__ */ jsxDEV20("div", { className: "bg-gradient-to-r from-cyan-500 to-blue-500  h-[4rem] w-full", children: /* @__PURE__ */ jsxDEV20("div", { className: "bg-white w-full h-[4rem] items-centertransform -rotate-2 flex gap-x-4", children: [
    /* @__PURE__ */ jsxDEV20("div", { className: "relative -left-[1rem] flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 177,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 180,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 186,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 182,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 192,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 188,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 201,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 204,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 200,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 207,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 210,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 206,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 213,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 212,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 219,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 222,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 218,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 225,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 228,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 224,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 231,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 234,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 230,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 237,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 240,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 236,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 243,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV20("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/Sticker.tsx",
        lineNumber: 246,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sticker.tsx",
      lineNumber: 242,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/Sticker.tsx",
    lineNumber: 173,
    columnNumber: 5
  }, this),
  EducationSection,
  ExperienceSection2,
  Logo,
  FollowMe,
  Footer
] }, void 0, !0, {
  fileName: "app/components/Sticker.tsx",
  lineNumber: 172,
  columnNumber: 5
}, this), Sticker_default = StickerSection;

// app/routes/about.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var meta7 = () => [
  { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
  { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
  { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:site_name", content: "Interior Decorators Inc." }
];
function Index7() {
  let [isMenuOpen, setIsMenuOpen] = useState8(!1);
  return /* @__PURE__ */ jsxDEV21("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV21(NavigationBar_default, { isMenuOpen, toggleMenuDropdown: () => {
      setIsMenuOpen(!isMenuOpen);
    } }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV21(About_home_default, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(ExperienceSection_default, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Sticker_default, {}, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Index8,
  meta: () => meta8
});
import { useState as useState9 } from "react";

// app/components/BlogSection.tsx
import { Link as Link9 } from "@remix-run/react";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var BlogSection = () => {
  let Footer2 = /* @__PURE__ */ jsxDEV22("div", { className: "ml-[5rem] w-[70rem] mt-[5rem]", children: [
    /* @__PURE__ */ jsxDEV22("hr", { className: " w-[70rem] h-[0.15rem] bg-white" }, void 0, !1, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 9,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex  mt-[2.6rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV22("h1", { className: "text-white font-bold text-4xl", children: "XFOLIO" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 11,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "flex gap-x-6", children: [
        /* @__PURE__ */ jsxDEV22(Link9, { to: "/", className: "hover:bg-gray-900 text-white rounded-md px-3 text-sm font-medium hover:text-white", "aria-current": "page", children: "Home" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV22(Link9, { to: "/casestudy", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3  text-sm font-medium", children: "Case-study" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 16,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV22(Link9, { to: "/testimonial", className: "text-white hover:bg-gray-700 hover:text-white rounded-md px-3 text-sm font-medium", children: "Testimonial" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 17,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 14,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 10,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex  my-[1.5rem] w-[70rem] items-center justify-between ", children: [
      /* @__PURE__ */ jsxDEV22("h1", { className: "text-white  text-xl", children: "@Designed by TechAngels" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 22,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "flex gap-x-6 sm:gap-x-6  mt-4 mb-6 ", children: [
        /* @__PURE__ */ jsxDEV22("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV22("span", { className: "icon-[basil--facebook-solid] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 26,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV22("span", { className: " icon-[mdi--twitter] w-4 h-4 text-white ", children: " " }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 27,
            columnNumber: 119
          }, this),
          " "
        ] }, void 0, !0, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV22("div", { className: "border border-red-500 h-[2rem] w-[2rem] flex justify-center items-center rounded-full", children: [
          "   ",
          /* @__PURE__ */ jsxDEV22("span", { className: " icon-[ri--linkedin-fill] w-4 h-4 text-white " }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 28,
            columnNumber: 119
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 25,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 21,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this), articles = [
    {
      id: 1,
      title: "Let's get solutions for building construction work",
      date: "3rd October, 2023",
      buttonLabel: "Kitchen design",
      blog: "blog1"
    },
    {
      id: 2,
      title: "Low cost latest invented interior designing ideas",
      date: "23rd november, 2023",
      buttonLabel: "Living design",
      blog: "blog2"
    }
  ], sticker = /* @__PURE__ */ jsxDEV22("div", { className: "w-full mt-[5rem] py-10", children: /* @__PURE__ */ jsxDEV22("div", { className: "bg-gradient-to-r from-cyan-500 to-blue-500  h-[4rem] w-full", children: /* @__PURE__ */ jsxDEV22("div", { className: "bg-white w-full h-[4rem] items-centertransform -rotate-2 flex gap-x-4", children: [
    /* @__PURE__ */ jsxDEV22("div", { className: "relative -left-[1rem] flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 99,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 105,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 108,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 107,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 114,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 117,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 113,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 120,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 123,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-lg font-medium", children: "Design" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 126,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV22("span", { className: " bg-gradient-to-r from-cyan-500 to-blue-500 icon-[ic--sharp-star-half] w-5 h-5 text-white ", children: " " }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 129,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 125,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this), articleshori = [
    {
      id: 1,
      title: "Let's get solutions for building construction work",
      date: "3rd October, 2023",
      buttonLabel: "Kitchen design",
      blog: "blog1"
    },
    {
      id: 2,
      title: "Low cost latest invented interior designing ideas",
      date: "23rd november, 2023",
      buttonLabel: "Living design",
      blog: "blog2"
    },
    {
      id: 3,
      title: "Best for any office and business interior solution",
      date: "3rd january, 2024",
      buttonLabel: "Interior design",
      blog: "blog3"
    },
    {
      id: 4,
      title: "Let's get solutions for building construction work",
      date: "3rd October, 2023",
      buttonLabel: "Kitchen design",
      blog: "blog2"
    },
    {
      id: 5,
      title: "Low cost latest invented interior designing ideas",
      date: "23rd november, 2023",
      buttonLabel: "Living design",
      blog: "blog5"
    },
    {
      id: 6,
      title: "Best for any office and business interior solution",
      date: "3rd january, 2024",
      buttonLabel: "Interior design",
      blog: "blog6"
    }
  ];
  return /* @__PURE__ */ jsxDEV22("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV22("div", { className: "pt-[10rem] ml-[7.5rem] ", children: /* @__PURE__ */ jsxDEV22("div", { className: "w-[65rem]", children: [
      /* @__PURE__ */ jsxDEV22("h1", { className: "text-3xl font-bold -ml-[8rem] sm:text-7xl  mb-[7rem] text-center text-white", children: [
        "Blogs & articles ",
        /* @__PURE__ */ jsxDEV22("br", {}, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 185,
          columnNumber: 26
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV22("span", { className: "bg-gradient-to-r mt-[0.5rem] block from-red-500 to-blue-500 text-transparent bg-clip-text", children: "for buisness growth" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 185,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 184,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "grid grid-cols-1 w-[55rem] md:grid-cols-2 sm:px-4", children: articles.map((article) => /* @__PURE__ */ jsxDEV22("div", { className: "flex flex-col w-[25rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]", children: [
        /* @__PURE__ */ jsxDEV22("div", { className: `p-4 w-full h-[12rem] flex flex-col justify-end rounded-t-[0.4rem] ${article.blog}` }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV22(Link9, { to: "/blog-details", children: /* @__PURE__ */ jsxDEV22("div", { className: "py-[1.2rem] px-[1.2rem] w-full flex flex-col gap-y-[1.2rem]", children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "flex gap-x-[1rem]", children: [
            /* @__PURE__ */ jsxDEV22("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "web design" }, void 0, !1, {
              fileName: "app/components/BlogSection.tsx",
              lineNumber: 196,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV22("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "ui/ux design" }, void 0, !1, {
              fileName: "app/components/BlogSection.tsx",
              lineNumber: 200,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 195,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV22("h2", { className: "text-2xl font-bold text-white font2 w-10/12 ", children: article.title }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 205,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV22("p", { className: "text-md  text-white font2 w-10/12 mt-[0.5rem] ", children: "By Karthic Bansal" }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 206,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 194,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this)
      ] }, article.id, !0, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this)) }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 181,
      columnNumber: 5
    }, this),
    sticker,
    /* @__PURE__ */ jsxDEV22("div", { className: "pt-[10rem] ml-[7.5rem] ", children: /* @__PURE__ */ jsxDEV22("div", { className: "w-[65rem] ", children: [
      /* @__PURE__ */ jsxDEV22("h1", { className: "text-3xl font-bold  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text ml-[1rem] sm:text-7xl  mb-[2rem]  ", children: "Recent insights" }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "flex gap-x-[1rem] mb-[2rem] ml-[1.3rem]", children: [
        /* @__PURE__ */ jsxDEV22("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl", children: "All post" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 223,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ jsxDEV22("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl", children: "Design" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV22("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl", children: "Technology" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 231,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV22("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-3xl", children: "Webflow" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 222,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "grid grid-cols-1 w-[55rem]  sm:px-4", children: articleshori.map((articlehori) => /* @__PURE__ */ jsxDEV22("div", { className: "flex  w-[50rem] justify-center bg-gray-900 items-center sm:mx-1 my-4 mx-8 p-3  rounded-[0.4rem]", children: [
        /* @__PURE__ */ jsxDEV22("div", { className: `p-4 w-full h-[18rem] max-w-[25rem] flex flex-col justify-end rounded-t-[0.4rem] ${articlehori.blog}` }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV22(Link9, { to: "/blog-details", children: /* @__PURE__ */ jsxDEV22("div", { className: "px-[1.5rem] h-[18rem] w-full mt-[1rem]  flex flex-col gap-y-[2.3rem]", children: [
          /* @__PURE__ */ jsxDEV22("div", { className: "flex gap-x-[1rem]", children: [
            /* @__PURE__ */ jsxDEV22("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700 bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "web design" }, void 0, !1, {
              fileName: "app/components/BlogSection.tsx",
              lineNumber: 249,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV22("button", { className: " text-[0.8rem] text-black sm:text-lg  hover:bg-blue-700  bg-white font-bold py-3 sm:py-2 sm:px-6  rounded-md sm:rounded-2xl", children: "ui/ux design" }, void 0, !1, {
              fileName: "app/components/BlogSection.tsx",
              lineNumber: 253,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 248,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV22("h2", { className: "text-2xl font-bold text-white font2 w-10/12 ", children: articlehori.title }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 258,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV22("p", { className: "text-md  text-white font2 w-10/12 mt-[0.5rem] ", children: "By Karthic Bansal" }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 259,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 246,
          columnNumber: 11
        }, this)
      ] }, articlehori.id, !0, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, this)) }, void 0, !1, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 217,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 216,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "ml-[7.5rem] w-[65rem] mt-[3rem] ", children: [
      /* @__PURE__ */ jsxDEV22("p", { className: "text-white font-bold text-[4rem]", children: [
        "See the impact of good,",
        /* @__PURE__ */ jsxDEV22("br", {}, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 270,
          columnNumber: 34
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV22("span", { className: "relative -top-[1.5rem]", children: "conversation-oriented design" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 270,
          columnNumber: 41
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV22("br", {}, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 270,
          columnNumber: 118
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV22("span", { className: "relative -top-[3rem]", children: " on your business " }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 270,
          columnNumber: 125
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 269,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV22("div", { className: "sm:w-[50rem] mt-[0.5rem] mb-2", children: [
        /* @__PURE__ */ jsxDEV22("div", { className: "flex justify-between mx-auto items-center", children: [
          /* @__PURE__ */ jsxDEV22("p", { className: "font-bold text-[4rem]  bg-gradient-to-r block from-red-500 to-blue-500 text-transparent bg-clip-text  flex items-center", children: "Let's Work Together" }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 274,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV22("span", { className: "icon-[eva--diagonal-arrow-right-up-fill] bg-gradient-to-r block from-red-500 to-blue-500  w-[8rem] h-[8rem]" }, void 0, !1, {
            fileName: "app/components/BlogSection.tsx",
            lineNumber: 277,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 273,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV22("hr", { className: " bg-gradient-to-r block -mt-[1rem] from-red-500 to-blue-500  w-full sm:w-[50rem] h-[0.2rem] rounded-4" }, void 0, !1, {
          fileName: "app/components/BlogSection.tsx",
          lineNumber: 279,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/BlogSection.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/BlogSection.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, this),
    Footer2
  ] }, void 0, !0, {
    fileName: "app/components/BlogSection.tsx",
    lineNumber: 180,
    columnNumber: 5
  }, this);
}, BlogSection_default = BlogSection;

// app/routes/blog.tsx
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var meta8 = () => [
  { name: "description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:title", content: "Interior Decorators Inc. - Transforming Spaces" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://drive.google.com/uc?export=view&id=1G6deIUVFQG1pD-yxvBXrSRhe591u1REy" },
  { property: "og:url", content: "https://interior-deco-kappa.vercel.app/" },
  { property: "og:description", content: "Elevate your spaces with our expert interior decoration services. Discover innovative designs tailored to your style." },
  { property: "og:site_name", content: "Interior Decorators Inc." }
];
function Index8() {
  let [isMenuOpen, setIsMenuOpen] = useState9(!1);
  return /* @__PURE__ */ jsxDEV23("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV23(NavigationBar_default, { isMenuOpen, toggleMenuDropdown: () => {
      setIsMenuOpen(!isMenuOpen);
    } }, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV23(BlogSection_default, {}, void 0, !1, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RGWXQHGG.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-SHA6JZ4A.js", "/build/_shared/chunk-7JORAR74.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4QGM6JCP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-HQKGO5I3.js", imports: ["/build/_shared/chunk-OAELVAL7.js", "/build/_shared/chunk-M6PVTXRF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-XY7QZGFD.js", imports: ["/build/_shared/chunk-OAELVAL7.js", "/build/_shared/chunk-M6PVTXRF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-PLDVFYIT.js", imports: ["/build/_shared/chunk-M6PVTXRF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog-details": { id: "routes/blog-details", parentId: "root", path: "blog-details", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-details-JJOIOOOI.js", imports: ["/build/_shared/chunk-M6PVTXRF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/casestudy": { id: "routes/casestudy", parentId: "root", path: "casestudy", index: void 0, caseSensitive: void 0, module: "/build/routes/casestudy-FLZMJ6Q7.js", imports: ["/build/_shared/chunk-M6PVTXRF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-26RTUU2R.js", imports: ["/build/_shared/chunk-M6PVTXRF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/service": { id: "routes/service", parentId: "root", path: "service", index: void 0, caseSensitive: void 0, module: "/build/routes/service-KGMQ364C.js", imports: ["/build/_shared/chunk-M6PVTXRF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/testimonial": { id: "routes/testimonial", parentId: "root", path: "testimonial", index: void 0, caseSensitive: void 0, module: "/build/routes/testimonial-KECUAOGX.js", imports: ["/build/_shared/chunk-M6PVTXRF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "12ab4ac5", hmr: { runtime: "/build/_shared/chunk-7JORAR74.js", timestamp: 1722948002799 }, url: "/build/manifest-12AB4AC5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog-details": {
    id: "routes/blog-details",
    parentId: "root",
    path: "blog-details",
    index: void 0,
    caseSensitive: void 0,
    module: blog_details_exports
  },
  "routes/testimonial": {
    id: "routes/testimonial",
    parentId: "root",
    path: "testimonial",
    index: void 0,
    caseSensitive: void 0,
    module: testimonial_exports
  },
  "routes/casestudy": {
    id: "routes/casestudy",
    parentId: "root",
    path: "casestudy",
    index: void 0,
    caseSensitive: void 0,
    module: casestudy_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/service": {
    id: "routes/service",
    parentId: "root",
    path: "service",
    index: void 0,
    caseSensitive: void 0,
    module: service_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
