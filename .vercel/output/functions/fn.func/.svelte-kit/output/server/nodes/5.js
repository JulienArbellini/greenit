import * as server from '../entries/pages/purchase/model-_id_/_page.server.ts.js';
import stylesheet_1 from '../stylesheets/1.js';
import stylesheet_2 from '../stylesheets/2.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/purchase/model-_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/purchase/model-[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BBDJAUBW.js","_app/immutable/chunks/disclose-version.7pOt-K0F.js","_app/immutable/chunks/runtime.2SSwYnVA.js","_app/immutable/chunks/legacy.DBmJDQxd.js","_app/immutable/chunks/MenuButton.md4giQx1.js","_app/immutable/chunks/props.FQjrW_87.js","_app/immutable/chunks/render.B358DNcu.js","_app/immutable/chunks/ProductHeaders.1BKDzHx4.js","_app/immutable/chunks/lifecycle.F6FqH8ar.js"];
export const stylesheets = ["_app/immutable/assets/5.B56xiN6g.css","_app/immutable/assets/MenuButton.d4YIFXBx.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/5.B56xiN6g.css": stylesheet_1,
	"_app/immutable/assets/MenuButton.d4YIFXBx.css": stylesheet_2
});
