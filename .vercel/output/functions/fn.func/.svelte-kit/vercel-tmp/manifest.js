export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.svg","fonts/gotham_book.woff2","fonts/gotham_light.woff2","fonts/gotham_medium.woff2","images/home/hero-charger-1280.avif","images/home/hero-charger-1280.jpg","images/home/hero-charger-1920.avif","images/home/hero-charger-1920.jpg","images/home/hero-charger-mobile.avif","images/home/hero-charger-mobile.jpg","images/home/hero-charger.avif","images/home/hero-charger.jpg","images/home/hero-model-3-1280.avif","images/home/hero-model-3-1280.jpg","images/home/hero-model-3-1920.avif","images/home/hero-model-3-1920.jpg","images/home/hero-model-3-mobile.avif","images/home/hero-model-3-mobile.jpg","images/home/hero-model-3.avif","images/home/hero-model-3.jpg","images/home/hero-model-s-1280.avif","images/home/hero-model-s-1280.jpg","images/home/hero-model-s-1920.avif","images/home/hero-model-s-1920.jpg","images/home/hero-model-s-mobile.avif","images/home/hero-model-s-mobile.jpg","images/home/hero-model-s.avif","images/home/hero-model-s.jpg","images/home/hero-model-x-1280.avif","images/home/hero-model-x-1280.jpg","images/home/hero-model-x-1920.avif","images/home/hero-model-x-1920.jpg","images/home/hero-model-x-mobile.avif","images/home/hero-model-x-mobile.jpg","images/home/hero-model-x.avif","images/home/hero-model-x.jpg","images/home/hero-model-y-1280.avif","images/home/hero-model-y-1280.jpg","images/home/hero-model-y-1920.avif","images/home/hero-model-y-1920.jpg","images/home/hero-model-y-mobile.avif","images/home/hero-model-y-mobile.jpg","images/home/hero-model-y.avif","images/home/hero-model-y.jpg","images/home/hero-solar-panels-1280.avif","images/home/hero-solar-panels-1280.jpg","images/home/hero-solar-panels-1920.avif","images/home/hero-solar-panels-1920.jpg","images/home/hero-solar-panels-mobile.avif","images/home/hero-solar-panels-mobile.jpg","images/home/hero-solar-panels.avif","images/home/hero-solar-panels.jpg","images/home/hero-solar-roof-1280.avif","images/home/hero-solar-roof-1280.jpg","images/home/hero-solar-roof-1920.avif","images/home/hero-solar-roof-1920.jpg","images/home/hero-solar-roof-mobile.avif","images/home/hero-solar-roof-mobile.jpg","images/home/hero-solar-roof.avif","images/home/hero-solar-roof.jpg","images/home/plaid-av1.webm","images/home/plaid-vp9.webm","images/home/thumb.webp","images/logo.svg","images/products/autopilot-mobile.avif","images/products/autopilot-mobile.jpg","images/products/autopilot.avif","images/products/autopilot.jpg","images/products/hero-model-3-1280.avif","images/products/hero-model-3-1280.jpg","images/products/hero-model-3-1920.avif","images/products/hero-model-3-1920.jpg","images/products/hero-model-3-mobile.avif","images/products/hero-model-3-mobile.jpg","images/products/hero-model-3.avif","images/products/hero-model-3.jpg","images/products/hero-model-s-1280.avif","images/products/hero-model-s-1280.jpg","images/products/hero-model-s-1920.avif","images/products/hero-model-s-1920.jpg","images/products/hero-model-s-mobile.avif","images/products/hero-model-s-mobile.jpg","images/products/hero-model-s.avif","images/products/hero-model-s.jpg","images/products/hero-model-x-1280.avif","images/products/hero-model-x-1280.jpg","images/products/hero-model-x-1920.avif","images/products/hero-model-x-1920.jpg","images/products/hero-model-x-mobile.avif","images/products/hero-model-x-mobile.jpg","images/products/hero-model-x.avif","images/products/hero-model-x.jpg","images/products/hero-model-y-1280.avif","images/products/hero-model-y-1280.jpg","images/products/hero-model-y-1920.avif","images/products/hero-model-y-1920.jpg","images/products/hero-model-y-mobile.avif","images/products/hero-model-y-mobile.jpg","images/products/hero-model-y.avif","images/products/hero-model-y.jpg","images/products/model-3-hero-safety-mobile.avif","images/products/model-3-hero-safety-mobile.webp","images/products/model-3-hero-safety.avif","images/products/model-3-hero-safety.webp","images/products/model-y-hero-safety-mobile.avif","images/products/model-y-hero-safety-mobile.webp","images/products/model-y-hero-safety.avif","images/products/model-y-hero-safety.webp","images/products/order-3.avif","images/products/order-3.jpg","images/products/order-s.avif","images/products/order-s.png","images/products/order-x.avif","images/products/order-x.jpg","images/products/order-y.avif","images/products/order-y.jpg","images/products/seats-mobile.avif","images/products/seats-mobile.jpg","images/products/seats.avif","images/products/seats.jpg","images/purchase/black-wheel-1.avif","images/purchase/black-wheel-2.avif","images/purchase/blue-wheel-1.avif","images/purchase/blue-wheel-2.avif","images/purchase/color-black.avif","images/purchase/color-blue.avif","images/purchase/color-grey.avif","images/purchase/color-red.avif","images/purchase/color-white.avif","images/purchase/grey-wheel-1.avif","images/purchase/grey-wheel-2.avif","images/purchase/icon-interior-1.avif","images/purchase/icon-interior-2.avif","images/purchase/icon-interior-3.avif","images/purchase/interior-1.avif","images/purchase/interior-2.avif","images/purchase/interior-3.avif","images/purchase/model-s-black-show.avif","images/purchase/model-s-black.avif","images/purchase/model-s-blue-show.avif","images/purchase/model-s-blue.avif","images/purchase/model-s-grey-show.avif","images/purchase/model-s-grey.avif","images/purchase/model-s-red-show.avif","images/purchase/model-s-red.avif","images/purchase/model-s-white-show.avif","images/purchase/model-s-white.avif","images/purchase/model-s.avif","images/purchase/red-wheel-1.avif","images/purchase/red-wheel-2.avif","images/purchase/wheel-1.avif","images/purchase/wheel-2.avif","images/purchase/white-wheel-1.avif","images/purchase/white-wheel-2.avif","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".woff2":"font/woff2",".avif":"image/avif",".jpg":"image/jpeg",".webm":"video/webm",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.vCC5-jHW.js","app":"_app/immutable/entry/app.Dx51NyYs.js","imports":["_app/immutable/entry/start.vCC5-jHW.js","_app/immutable/chunks/entry.CjEyce9c.js","_app/immutable/chunks/runtime.2SSwYnVA.js","_app/immutable/chunks/index-client.C_opy9vN.js","_app/immutable/entry/app.Dx51NyYs.js","_app/immutable/chunks/runtime.2SSwYnVA.js","_app/immutable/chunks/render.B358DNcu.js","_app/immutable/chunks/disclose-version.7pOt-K0F.js","_app/immutable/chunks/if.BVgm6m1T.js","_app/immutable/chunks/props.FQjrW_87.js","_app/immutable/chunks/index-client.C_opy9vN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/model-[id]",
				pattern: /^\/model-([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/purchase/model-[id]",
				pattern: /^\/purchase\/model-([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/sitemap.xml/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
