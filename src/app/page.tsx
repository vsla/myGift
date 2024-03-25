import React from 'react';

import { GiftList } from './components/GiftList';

async function getProducts() {
  const response = await fetch('http://localhost:3000/api', {
    method: 'GET'
  })

  return response.json()
}


const Home = async () => {
  const productsByCategory = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Presentes de casa nova </h1>
      <h1 className="text-lg font-semibold mb-4">Lista de sugestões de presentes</h1>
      <h1 className="text-sm font-semibold mb-4">Caso esteja querendo dar um presente, só clicar em presentear! <br></br></h1>
      <GiftList productsByCategory={productsByCategory} />

    </div>
  );
};


export default Home;
