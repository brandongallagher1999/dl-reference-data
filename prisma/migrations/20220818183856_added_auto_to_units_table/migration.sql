-- AlterTable
CREATE SEQUENCE "units_id_seq";
ALTER TABLE "units" ALTER COLUMN "id" SET DEFAULT nextval('units_id_seq');
ALTER SEQUENCE "units_id_seq" OWNED BY "units"."id";
