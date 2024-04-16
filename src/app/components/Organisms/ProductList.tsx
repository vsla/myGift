import React, { ReactNode } from "react";
import Link from "next/link";

import { Product } from "types";
import Image from "next/image";

const TableCell = ({ children, styles = '' }: { children: ReactNode, styles?: string }) => {
  return <td className={`px-2 py-3 text-sm whitespace-nowrap text-black break-words ${styles}`}>{children}</td>;
};

export const ProductList = ({ products }: { products: Product[] }) => {
  return (

    <div className="flex flex-col overflow-x-auto">

      <div className="inline-block min-w-full ">
        <div className="md:overflow-x-auto">
          <table
            className="min-w-full text-start text-sm font-light text-surface dark:text-white">
            <thead
              className="border-b border-neutral-200 font-medium dark:border-white/10 bg-blue-500">
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
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
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
                    className={`${rowId % 2 === 1 ? "bg-white" : "bg-gray-200"
                      }`}
                  >
                    <TableCell styles="text-center">{id}</TableCell>
                    <TableCell >{name}</TableCell>
                    <TableCell>{gifted}</TableCell>
                    <TableCell>{giftedBy}</TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell>{category}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(price)}
                    </TableCell>
                    <TableCell>
                      <Link href={productLink} className="hover:underline">
                        Link
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Image
                        src={imgUrl}
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
      </div>

    </div>

  );
};
