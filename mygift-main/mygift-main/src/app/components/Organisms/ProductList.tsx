import React, { ReactNode } from "react";
import Link from "next/link";

import { Product } from "types";
import Image from "next/image";

const tableCellStyles = "px-3 py-4 whitespace-nowrap";

const TableCell = ({ children }: { children: ReactNode }) => {
  return <td className={tableCellStyles}>{children}</td>;
};

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full">
      <table className="w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr>
            {[
              "ID",
              "Name",
              "Gifted",
              "GiftedBY",
              "Description",
              "Category",
              "Price",
              "Link",
              "Image",
            ].map((header) => (
              <th
                key={header}
                className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map(
            (
              {
                id,
                name,
                gifted,
                giftedBy,
                description,
                category,
                price,
                productLink,
                imgUrl,
              }: Product,
              rowId
            ) => (
              <tr
                key={id}
                className={`${
                  rowId % 2 === 1 ? "bg-white-500" : "bg-gray-300"
                }`}
              >
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{gifted}</TableCell>
                <TableCell>{giftedBy}</TableCell>
                <td className="px-3 py-4 break-words">{description}</td>
                <TableCell>{category}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(price)}
                </TableCell>
                <TableCell>
                  <Link href={productLink} className="hover:underline">
                    Link to product
                  </Link>
                </TableCell>
                <TableCell>
                  <Image
                    src={"/images/" + imgUrl}
                    alt={name}
                    height={30}
                    width={30}
                  />
                </TableCell>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
