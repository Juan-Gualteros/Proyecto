"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    database: { host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'library',
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};
