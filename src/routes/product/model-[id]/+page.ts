import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
    if (!['x', 'y', 's', '3'].includes(params.id)) {
        throw error(404, {
            message: 'Not found'
        });
    }
    let info;
    let image;
    image = {
        autopilot: `/images/product/Model-${params.id}-Autopilot.jpeg`,
        AWD: `/images/product/Model-${params.id}-AWD.webp`,
        Interior: `/images/product/Model-${params.id}-Interior.webp`,
        Main: `/images/product/Model-${params.id}-Main.webp`,
        Safety: `/images/product/Model-${params.id}-Safety.png`,
        Utility: `/images/product/Model-${params.id}-Utility.jpeg`,
    }
    switch (params.id) {
       case 's':
       info = {
             text: "bla bla",
             model: `Model-${params.id}`,
             price: 34500
        }
        break;
        case 'x':
        info = {
                text: "bla bla",
                model: `Model-${params.id}`,
                price: 34500
        }
        break;
        case 'y':
        info = {
                text: "bla bla",
                model: `Model Y`,
                price: 34500
        }

        break;
    }
    return {
        info,image
    }

}