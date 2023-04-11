import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
  if (!["x", "y", "s", "3"].includes(params.id)) {
    throw error(404, {
      message: "Not found",
    });
  }

  return {
    id: params.id,
  };
};
