-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unit_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "unit_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "units" (
    "id" INTEGER NOT NULL,
    "long_name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "unit_type_id" INTEGER NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "active_ingredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "active_ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dosage_form_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "dosage_form_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dosage_forms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dosage_form_type_id" INTEGER NOT NULL,

    CONSTRAINT "dosage_forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manufacturers" (
    "id" SERIAL NOT NULL,
    "long_name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,

    CONSTRAINT "manufacturers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_methods" (
    "id" SERIAL NOT NULL,
    "long_name" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "update_reasons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "update_reasons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "update_history" (
    "id" BIGSERIAL NOT NULL,
    "instruction" TEXT NOT NULL,
    "table_name" TEXT NOT NULL,
    "data_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "update_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_name_key" ON "suppliers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "unit_types_name_key" ON "unit_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "units_long_name_key" ON "units"("long_name");

-- CreateIndex
CREATE UNIQUE INDEX "units_short_name_key" ON "units"("short_name");

-- CreateIndex
CREATE UNIQUE INDEX "active_ingredients_name_key" ON "active_ingredients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "dosage_form_types_name_key" ON "dosage_form_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "dosage_forms_name_key" ON "dosage_forms"("name");

-- CreateIndex
CREATE UNIQUE INDEX "manufacturers_long_name_key" ON "manufacturers"("long_name");

-- CreateIndex
CREATE UNIQUE INDEX "manufacturers_short_name_key" ON "manufacturers"("short_name");

-- CreateIndex
CREATE UNIQUE INDEX "payment_methods_long_name_key" ON "payment_methods"("long_name");

-- CreateIndex
CREATE UNIQUE INDEX "payment_methods_short_name_key" ON "payment_methods"("short_name");

-- CreateIndex
CREATE UNIQUE INDEX "product_categories_name_key" ON "product_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "update_reasons_name_key" ON "update_reasons"("name");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_unit_type_id_fkey" FOREIGN KEY ("unit_type_id") REFERENCES "unit_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dosage_forms" ADD CONSTRAINT "dosage_forms_dosage_form_type_id_fkey" FOREIGN KEY ("dosage_form_type_id") REFERENCES "dosage_form_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
