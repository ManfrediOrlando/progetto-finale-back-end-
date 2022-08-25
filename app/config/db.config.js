module.exports = {
    HOST: "localhost",
    USER: "andrea",
    PASSWORD: "andrea",
    DB: "optionsfy",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
