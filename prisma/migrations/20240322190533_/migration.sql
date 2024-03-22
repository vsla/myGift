-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "gifted" BOOLEAN NOT NULL DEFAULT false,
    "giftedBy" TEXT,
    "description" TEXT NOT NULL,
    "category" TEXT
);
