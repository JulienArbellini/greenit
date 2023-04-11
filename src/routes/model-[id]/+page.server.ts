import { error } from "@sveltejs/kit";

export const csr = false;

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
                logoColor: "fill-black",
                hasSkeleton: false,
                heroStats: [
                    {
                        title: "76cu ft",
                        subtitle: "Cargo Space"
                    },
                    {
                        title: "330 mi",
                        subtitle: "Range (EPA est.)"
                    },
                    {
                        title: "AWD",
                        subtitle: "Dual Motor"
                    }
                ]
            }
            break;
        case "x":
            page = {
                title: "Model X",
                subtitle: "Plaid",
                textColor: "text-black",
                logoColor: "fill-black",
                hasSkeleton: false,
                heroStats: [
                    {
                        title: "76cu ft",
                        subtitle: "Cargo Space"
                    },
                    {
                        title: "330 mi",
                        subtitle: "Range (EPA est.)"
                    },
                    {
                        title: "AWD",
                        subtitle: "Dual Motor"
                    }
                ]
            }
            break;
        case "y":
            page = {
                title: "Model Y",
                subtitle: "Schedule a Demo Drive",
                textColor: "text-white",
                logoColor: "fill-white",
                hasSkeleton: true,
                heroStats: [
                    {
                        title: "76cu ft",
                        subtitle: "Cargo Space"
                    },
                    {
                        title: "330 mi",
                        subtitle: "Range (EPA est.)"
                    },
                    {
                        title: "AWD",
                        subtitle: "Dual Motor"
                    }
                ]
            }
            break;
        case "3":
            page = {
                title: "Model 3",
                subtitle: "Schedule a Demo Drive",
                textColor: "text-white",
                logoColor: "fill-white",
                hasSkeleton: true,
                heroStats: [
                    {
                        title: "76cu ft",
                        subtitle: "Cargo Space"
                    },
                    {
                        title: "330 mi",
                        subtitle: "Range (EPA est.)"
                    },
                    {
                        title: "AWD",
                        subtitle: "Dual Motor"
                    }
                ]
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
