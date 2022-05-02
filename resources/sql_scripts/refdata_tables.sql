-- Units

CREATE TABLE IF NOT EXISTS public.refdata_unit_type (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT refdata_unit_type_name_un UNIQUE (name),
	CONSTRAINT refdata_unit_type_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.refdata_units (
	id serial4 NOT NULL,
	long_name varchar NOT NULL,
	short_name varchar NOT NULL,
	unit_type_id int4 NOT NULL,
	CONSTRAINT refdata_units_long_name_un UNIQUE (long_name),
	CONSTRAINT refdata_units_pk PRIMARY KEY (id),
	CONSTRAINT refdata_units_short_name_un UNIQUE (short_name),
	CONSTRAINT refdata_units_fk FOREIGN KEY (unit_type_id) REFERENCES public.refdata_unit_type(id)
);

CREATE OR REPLACE VIEW public.refdata_units_pretty_view
AS SELECT refdata_units.id,
    refdata_units.long_name,
    refdata_units.short_name,
    refdata_unit_type.name AS unit_type
   FROM refdata_units
     JOIN refdata_unit_type ON refdata_units.unit_type_id = refdata_unit_type.id;

-- Active Ingredients

CREATE TABLE IF NOT EXISTS public.refdata_active_ingredients (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT refdata_active_ingredients_name_un UNIQUE (name),
	CONSTRAINT refdata_pactive_ingredients_pk PRIMARY KEY (id)
);

-- Dosage Forms

CREATE TABLE IF NOT EXISTS public.refdata_dosage_form_type (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT refdata_dosage_form_type_pk PRIMARY KEY (id),
	CONSTRAINT rrefdata_dosage_form_type_name_un UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS public.refdata_dosage_forms (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	dosage_form_type_id int4 NOT NULL,
	CONSTRAINT refdata_dosage_forms_name_un UNIQUE (name),
	CONSTRAINT refdata_dosage_forms_pk PRIMARY KEY (id),
	CONSTRAINT refdata_dosage_forms_fk FOREIGN KEY (dosage_form_type_id) REFERENCES public.refdata_dosage_form_type(id)
);

CREATE OR REPLACE VIEW public.refdata_dosage_forms_pretty_view
AS SELECT refdata_dosage_forms.id,
    refdata_dosage_forms.name,
    refdata_dosage_form_type.name AS dosage_type
   FROM refdata_dosage_forms
     JOIN refdata_dosage_form_type ON refdata_dosage_forms.id = refdata_dosage_form_type.id;

-- Manufacturers

CREATE TABLE IF NOT EXISTS public.refdata_manufacturers (
	id serial4 NOT NULL,
	long_name varchar NOT NULL,
	short_name varchar NOT NULL,
	CONSTRAINT refdata_manufacturers_long_name_un UNIQUE (long_name),
	CONSTRAINT refdata_manufacturers_pk PRIMARY KEY (id),
	CONSTRAINT refdata_manufacturers_short_name_un UNIQUE (short_name)
);

-- Payment Methods

CREATE TABLE IF NOT EXISTS public.refdata_payment_methods (
	id serial4 NOT NULL,
	long_name varchar NOT NULL,
	short_name varchar NOT NULL,
	CONSTRAINT refdata_payment_methods_long_name_un UNIQUE (long_name),
	CONSTRAINT refdata_payment_methods_pk PRIMARY KEY (id),
	CONSTRAINT refdata_payment_methods_short_name_un UNIQUE (short_name)
);

-- Product Categories

CREATE TABLE IF NOT EXISTS public.refdata_product_categories (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT refdata_product_category_name_un UNIQUE (name),
	CONSTRAINT refdata_product_category_pk PRIMARY KEY (id)
);

-- Suppliers

CREATE TABLE IF NOT EXISTS public.refdata_suppliers (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT refdata_suppliers_pk PRIMARY KEY (id),
	CONSTRAINT refdata_suppliers_un UNIQUE (name)
);

-- Tags

CREATE TABLE IF NOT EXISTS public.refdata_tags (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT refdata_tags_name_un UNIQUE (name),
	CONSTRAINT refdata_tags_pk PRIMARY KEY (id)
);

-- Inventory Update Reasons
CREATE TABLE IF NOT EXISTS public.refdata_inventory_update_reasons (
	id serial4 NOT NULL,
	reason varchar NOT NULL,
	CONSTRAINT inventory_update_reason_pk PRIMARY KEY (id),
	CONSTRAINT refdata_inventory_update_reasons_un UNIQUE (reason)
);

-- Refdata Change History Table
CREATE TABLE IF NOT EXISTS public.refdata_update_history (
	id serial4 NOT NULL,
	instruction varchar NOT NULL,
	table_name varchar NOT NULL,
	refdata_id int4 NOT NULL,
	user_id int4 NOT NULL,
	update_timestamp timestamptz NOT NULL,
	before_state json NOT NULL,
	after_state json NOT NULL,
	CONSTRAINT refdata_update_history_table_pk PRIMARY KEY (id),
	CONSTRAINT  refdata_update_history_table_un UNIQUE (table_name, refdata_id)
);