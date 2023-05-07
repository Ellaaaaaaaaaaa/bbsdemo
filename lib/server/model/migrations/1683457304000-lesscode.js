const path = require('path')
const { execSql } = require('../../util')

export class Lesscode1683457304000 {
    async up (queryRunner) {
        await execSql(queryRunner, path.resolve(__dirname, './sql/1683457304000-lesscode.sql'))
    }

    async down () {}
}
