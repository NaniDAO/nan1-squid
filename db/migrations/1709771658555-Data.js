module.exports = class Data1709771658555 {
    name = 'Data1709771658555'

    async up(db) {
        await db.query(`ALTER TABLE "account" ADD "block_timestamp" numeric NOT NULL`)
        await db.query(`CREATE INDEX "IDX_4fbb461ccd756bfcafec1332a5" ON "account" ("block_timestamp") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" DROP COLUMN "block_timestamp"`)
        await db.query(`DROP INDEX "public"."IDX_4fbb461ccd756bfcafec1332a5"`)
    }
}
