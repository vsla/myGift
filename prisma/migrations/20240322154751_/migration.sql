/*
  Warnings:

  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "gifted" BOOLEAN NOT NULL DEFAULT false,
    "giftedBy" TEXT,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Product" ("gifted", "giftedBy", "id", "imgUrl", "name") SELECT "gifted", "giftedBy", "id", "imgUrl", "name" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
