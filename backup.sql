PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
INSERT INTO _prisma_migrations VALUES('507a2d0d-f0a4-4393-9b34-758d053d3356','fe032174f2eee74f60f3f5398c853ca2544c8510210280dd8cd7bf44d214ff0a',1711134333347,'20240322190533_',NULL,NULL,1711134333310,1);
INSERT INTO _prisma_migrations VALUES('da710237-6064-4069-843f-1aa6b28e649c','b7cd921137b010156580f762fc19bf0c131a8f7736ed686f4122aea52af10a24',1711134962768,'20240322191602_',NULL,NULL,1711134962694,1);
CREATE TABLE IF NOT EXISTS "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "gifted" BOOLEAN NOT NULL DEFAULT false,
    "giftedBy" TEXT,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "productLink" TEXT NOT NULL
);
INSERT INTO Product VALUES(1,'Mop','mop.jpg',0,NULL,'Mop para o casal limpar tudinho','Limpeza',49.899999999999998579,'https://www.amazon.com.br/Girat%C3%B3rio-Rayco-Essencial-Pl%C3%A1stico-litros/dp/B0C4BJ7VB1/ref=sr_1_3?dib=eyJ2IjoiMSJ9.V-FLIQvgxLGCJeRLZlbomnhGleG5cJ4IoU7_4cJXWj5xkQ1jnZJ6OLsJA_yqoaJJzNM7CoLBRP3CZvnk52JLp1xRxd9DWbwEQzWVfUjEXd8l6EGG8R516i712hPD1DoKS1-Tsw9P4xMQIcNLfsGpZ9eZTTaOSMwMavSLlgvh8x47T86cTXiXNc2RwknpeYv9suK43KFszD1QlfYcRoY_998DbV7n88qBRc_qhlhB1OA.kr_C9wldkUmG9pGaqKMm2oRZHpvSNDVv1IdyPHdHjEM&dib_tag=se&qid=1711144513&refinements=p_4%3ARayco&s=home&sr=1-3');
INSERT INTO Product VALUES(2,'Ventilador','ventilador.jpg',0,NULL,'Tá calor em recife, ninguém aguenta','Quarto',109.90000000000000568,'https://www.amazon.com.br/Ventilador-Mesa-MONDIAL-Super-Power/dp/B09B17MQLC/ref=asc_df_B09B17MQLC/?tag=googleshopp00-20&linkCode=df0&hvadid=379720649038&hvpos=&hvnetw=g&hvrand=8996085443309539574&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001625&hvtargid=pla-1419721838358&mcid=b892fc5f305f3043adc739a7cd6f3a32&th=1');
INSERT INTO Product VALUES(3,'Aspirador','aspirador.jpg',0,NULL,'Ela quer ter pet em casa, já sabe pra que preciso né?','Limpeza',169.90000000000000568,'https://www.amazon.com.br/Aspirador-Mondial-AP-36-ASPIRADOR-PO-220V-VERMELHO/dp/B07JFSM214/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2IYZJQ8AO0CZ1&dib=eyJ2IjoiMSJ9.GyH9VMuBqYyeNVduhQX9leC22RMQY0XruR3dJVVA8fEKdkEwIdLKu6aYXWnMqMedFdQLSDer7l2rWIbFmxyJk0QKZx3Mh_7XhDSpW-k7BVpKNuhnADyF4mqkzhva3Y3W92U8nGCkX5UzNxXQjAdyiTZ01I19hz9wEPfDZUV4U_Qwz3y-0i7mwtHCGfPT_lOdwkqWGc39To4lLEQYVrsGZ80zexRDmpw2ySP3fifuwBM.HoKxbH0wrT5d6VziRv3PcCRDdHt03SPSew-15csgZXE&dib_tag=se&keywords=aspirador&qid=1711144594&s=home&sprefix=aspirador%2Chome%2C210&sr=1-6&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d');
INSERT INTO Product VALUES(4,'Travesseiro','travesseiro.jpg',0,NULL,'Para termos bons sonhos 😴','Quarto',35.899999999999998578,'https://shopee.com.br/Kit-Travesseiro-Pluma-e-Penas-de-Ganso-Confortavel-Toque-Macio-Anticaro-Sint%C3%A9tico-i.300779622.22392823663?sp_atk=0f4537f5-19e0-47fa-b491-61413bfadff9&xptdk=0f4537f5-19e0-47fa-b491-61413bfadff9');
INSERT INTO Product VALUES(5,'Kit de Facas','kit-de-facas.jpg',0,NULL,'Para nao ter perigo de cortar o clima 😆','Cozinha',32.890000000000000567,'https://www.amazon.com.br/Tramontina-JOGO-FACAS-PLENUS-Preto/dp/B09XFD2YMF/ref=asc_df_B09XFD2YMF/?tag=googleshopp00-20&linkCode=df0&hvadid=379726668679&hvpos=&hvnetw=g&hvrand=13607755247044358862&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001625&hvtargid=pla-1715262887240&psc=1&mcid=423b26a5455032fd8e1babfd5efefd3c');
INSERT INTO Product VALUES(6,'Frigideira Wok','frigideira-wok.jpg',0,NULL,'Para fazer aquele frango bem tostado','Cozinha',49.0,'https://www.amazon.com.br/Brinox-Garlic-7001-365-Vermelho/dp/B076X7QJGJ/ref=asc_df_B076X7QJGJ/?tag=googleshopp00-20&linkCode=df0&hvadid=379727342281&hvpos=&hvnetw=g&hvrand=8610300799174110766&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001625&hvtargid=pla-875186651757&mcid=224846c162fc35c588f176e2cf78fe5b&th=1');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('Product',6);
COMMIT;
