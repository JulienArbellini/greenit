import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
    if (!['x', 'y', 's', '3'].includes(params.id)) {
        throw error(404, {
            message: 'Not found'
        });
    }
    let info;
    let image;

    switch (params.id) {
        case 's':
            info = {
                text: "bla bla",
                model: `Model-S`,
                price: 34500
            },
                image = {
                    autopilot: `/images/product/S/Autopilot.jpeg`,
                    AWD: `/images/product/S/AWD.jpeg`,
                    Interior: `/images/product/S/Interior.jpeg`,
                    Main: `/images/product/S/Main.jpeg`,
                    Safety: `/images/product/S/Safety.png`,
                    Utility: `/images/product/S/Utility.jpeg`,
                }
            break;
        case 'x':
            info = {
                text: "bla bla",
                model: `Model-${params.id}`,
                price: 34500
            },
            image = {
                autopilot: `/images/product/X/Autopilot.jpeg`,
                AWD: `/images/product/X/AWD.jpeg`,
                Interior: `/images/product/X/Interior.webp`,
                Main: `/images/product/X/Main.jpeg`,
                Safety: `/images/product/X/Safety.png`,
                Utility: `/images/product/X/Utility.jpeg`,
            }
            break;
        case 'y':
            info = {
                text: "bla bla",
                model: `Model Y`,
                price: 34500
            },
                image = {
                    autopilot: `/images/product/Y/Autopilot.jpeg`,
                    AWD: `/images/product/Y/AWD.webp`,
                    Interior: `/images/product/Y/Interior.webp`,
                    Main: `/images/product/Y/Main.webp`,
                    Safety: `/images/product/Y/Safety.png`,
                    Utility: `/images/product/Y/Utility.jpeg`,
                }

            break;
    }
    return {
        info, image
    }

}