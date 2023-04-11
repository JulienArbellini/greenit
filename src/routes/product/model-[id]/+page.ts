import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
    if (!['x', 'y', 's'].includes(params.id)) {
        throw error(404, {
            message: 'Not found'
        });
    }
    let info;
    let image;
    let AWD;
    // let Interior;
    // let Main;
    let Utility;

    switch (params.id) {
        case 's':
            info = {
                text: "bla bla",
                model: `Model S`,
                price: 34500
            },
            image = {
                autopilot: `/images/product/S/Autopilot.jpeg`,
                AWD: `/images/product/S/AWD.jpeg`,
                Interior: `/images/product/S/Interior.jpeg`,
                Main: `/images/product/S/Main.jpeg`,
                Safety: `/images/product/S/Safety.png`,
                Utility: `/images/product/S/Utility.jpeg`,
            },
            AWD = {
                title: "",
                motor: "Electric Powertrain",
                content: "Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions."
            },
            Utility = {
                content: "With ample storage and 5,000 lbs of towing capacity, Model S is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go."
            }

            break;
        case 'x':
            info = {
                text: "bla bla",
                model: `Model X`,
                price: 34500
            },
            image = {
                autopilot: `/images/product/X/Autopilot.jpeg`,
                AWD: `/images/product/X/AWD.jpeg`,
                Interior: `/images/product/X/Interior.webp`,
                Main: `/images/product/X/Main.jpeg`,
                Safety: `/images/product/X/Safety.png`,
                Utility: `/images/product/X/Utility.jpeg`,
            },
            AWD = {
                title: "",
                motor: "Electric Powertrain",
                content: "Model X platforms unite powertrain and battery technologies for an unrivaled combination of performance, range and efficiency. New module and pack thermal architecture allows for faster charging and gives you more power and endurance in all conditions."
            },
            Utility = {
                content: "With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go."
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
            },
            AWD = {
                title: "All-Wheel Drive",
                motor: "Dual Motor",
                content: "Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road. Compare Models"
            },
            Utility = {
                content: "Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today."
            }

            break;
        default:
            throw error(404, {
                message: 'Not found'
            });
    }
    return {
        info, image, AWD, Utility
    }

}
