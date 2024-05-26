module.exports = class Data1716722692254 {
    name = 'Data1716722692254'

    async up(db) {
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "address" text NOT NULL, "owner" text NOT NULL, "salt" text NOT NULL, "factory" text NOT NULL, "tx_hash" text NOT NULL, "block_timestamp" numeric NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_78f18a993051a02b43ce16c27e" ON "account" ("owner") `)
        await db.query(`CREATE INDEX "IDX_4fbb461ccd756bfcafec1332a5" ON "account" ("block_timestamp") `)
        await db.query(`CREATE TABLE "user_operation" ("id" character varying NOT NULL, "user_op_hash" text NOT NULL, "sender" text NOT NULL, "paymaster" text NOT NULL, "nonce" numeric NOT NULL, "success" boolean NOT NULL, "actual_gas_cost" numeric NOT NULL, "actual_gas_used" numeric NOT NULL, "tx_hash" text NOT NULL, "timestamp" numeric NOT NULL, CONSTRAINT "PK_daae96c3cc5ba909299a40d0e42" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ed690e44291108b9e95664ee7b" ON "user_operation" ("user_op_hash") `)
        await db.query(`CREATE INDEX "IDX_4a24c447292900b2759221a516" ON "user_operation" ("sender") `)
        await db.query(`CREATE INDEX "IDX_6c0d2eda3db9a917ddc131bfc2" ON "user_operation" ("paymaster") `)
        await db.query(`CREATE INDEX "IDX_a64a8d418e9521d379b898b231" ON "user_operation" ("timestamp") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP INDEX "public"."IDX_78f18a993051a02b43ce16c27e"`)
        await db.query(`DROP INDEX "public"."IDX_4fbb461ccd756bfcafec1332a5"`)
        await db.query(`DROP TABLE "user_operation"`)
        await db.query(`DROP INDEX "public"."IDX_ed690e44291108b9e95664ee7b"`)
        await db.query(`DROP INDEX "public"."IDX_4a24c447292900b2759221a516"`)
        await db.query(`DROP INDEX "public"."IDX_6c0d2eda3db9a917ddc131bfc2"`)
        await db.query(`DROP INDEX "public"."IDX_a64a8d418e9521d379b898b231"`)
    }
}
