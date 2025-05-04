import { render, screen } from "@testing-library/react";

import ShopItemFunc from "./ShopItemFunc";

test("ShopItemFunc test", () => {
  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  };

  render(<ShopItemFunc item={item} />);
  expect(screen.getByText(/Tiger of Sweden/)).toBeInTheDocument();
});
