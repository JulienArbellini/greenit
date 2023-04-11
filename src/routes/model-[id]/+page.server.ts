import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
    if (!["x", "y", "s", "3"].includes(params.id)) {
        throw error(404, {
            message: "Not found",
        });
    }

    const id = params.id;
    let page;

    switch (params.id) {
        case "s":
            page = {
                title: "Model S",
                subtitle: "Plaid",
                textColor: "text-black",
                logoColor: "fill-black"
            }
            break;
        case "x":
            page = {
                title: "Model X",
                subtitle: "Plaid",
                textColor: "text-black",
                logoColor: "fill-black"
            }
            break;
        case "y":
            page = {
                title: "Model Y",
                subtitle: "Schedule a Demo Drive",
                textColor: "text-white",
                logoColor: "fill-white"
            }
            break;
        case "3":
            page = {
                title: "Model 3",
                subtitle: "Schedule a Demo Drive",
                textColor: "text-white",
                logoColor: "fill-white"
            }
            break;
    }

    if (!page) {
        throw error(404, {
            message: "Not found",
        });
    }

    return {
        id,
        page
    };
};
