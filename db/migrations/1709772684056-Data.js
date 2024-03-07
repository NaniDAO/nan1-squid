module.exports = class Data1709772684056 {
    name = 'Data1709772684056'

    async up(db) {
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "address" text NOT NULL, "owner" text NOT NULL, "salt" text NOT NULL, "tx_hash" text NOT NULL, "block_timestamp" numeric NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_78f18a993051a02b43ce16c27e" ON "account" ("owner") `)
        await db.query(`CREATE INDEX "IDX_4fbb461ccd756bfcafec1332a5" ON "account" ("block_timestamp") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP INDEX "public"."IDX_78f18a993051a02b43ce16c27e"`)
        await db.query(`DROP INDEX "public"."IDX_4fbb461ccd756bfcafec1332a5"`)
    }
}
