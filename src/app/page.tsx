import React from "react";

import { GiftList } from "./components/Molecules/GiftList";
import { getProductsByCategory } from "./actions";

export const revalidate = 1;
export const dynamic = "force-dynamic";

const Home = async () => {
  const byCategoryProducts = await getProductsByCategory();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Presentes de casa nova{" "}
      </h1>
      <h1 className="text-lg font-semibold mb-4 text-white">
        Lista de sugestões de presentes
      </h1>
      <h1 className="text-sm font-semibold mb-4 text-white">
        Caso esteja querendo dar um presente, só clicar em presentear! <br></br>
      </h1>
      <GiftList productsByCategory={byCategoryProducts} />
    </div>
  );
};

export default Home;
