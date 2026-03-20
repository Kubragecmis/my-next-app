(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/map/MapComponent.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/9e883_93f3f862._.js",
  "static/chunks/frontend_app_map_MapComponent_tsx_3a5cc81b._.js",
  {
    "path": "static/chunks/9e883_leaflet_dist_leaflet_51b5388e.css",
    "included": [
      "[project]/frontend/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/frontend_app_map_MapComponent_tsx_366c60bc._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/frontend/app/map/MapComponent.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);