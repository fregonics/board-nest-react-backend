import * as path from 'path'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const options : TypeOrmModuleOptions = {
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "senhaforte",
    database: "yt",
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')]
}

module.exports = options;