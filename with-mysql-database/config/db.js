module.exports = {
    HOST: 'localhost',
    // HOST: 'IP_ADDRESS_PLACEHOLDER',
    USER: 'root',
    PASSWORD: 'password',
    PORT: 3306,
    DB: 'IAP',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
