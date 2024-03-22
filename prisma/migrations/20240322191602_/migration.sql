/*
  Warnings:

  - Made the column `category` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "gifted" BOOLEAN NOT NULL DEFAULT false,
    "giftedBy" TEXT,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_Product" ("category", "description", "gifted", "giftedBy", "id", "imgUrl", "name") SELECT "category", "description", "gifted", "giftedBy", "id", "imgUrl", "name" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
