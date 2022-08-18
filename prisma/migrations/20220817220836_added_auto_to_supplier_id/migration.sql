-- AlterTable
CREATE SEQUENCE "suppliers_id_seq";
ALTER TABLE "suppliers" ALTER COLUMN "id" SET DEFAULT nextval('suppliers_id_seq');
ALTER SEQUENCE "suppliers_id_seq" OWNED BY "suppliers"."id";
