import * as server from '../entries/pages/_page.server.ts.js';
import stylesheet_2 from '../stylesheets/2.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.hcTq0KgW.js","_app/immutable/chunks/disclose-version.7pOt-K0F.js","_app/immutable/chunks/runtime.2SSwYnVA.js","_app/immutable/chunks/legacy.DBmJDQxd.js","_app/immutable/chunks/MenuButton.md4giQx1.js","_app/immutable/chunks/props.FQjrW_87.js","_app/immutable/chunks/render.B358DNcu.js","_app/immutable/chunks/JSHelpers.CDtFzYci.js","_app/immutable/chunks/if.BVgm6m1T.js","_app/immutable/chunks/lifecycle.F6FqH8ar.js"];
export const stylesheets = ["_app/immutable/assets/MenuButton.d4YIFXBx.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/MenuButton.d4YIFXBx.css": stylesheet_2
});
