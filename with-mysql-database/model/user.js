module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'users',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            password: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    );

    return User;
};
