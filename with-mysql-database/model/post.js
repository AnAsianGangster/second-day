module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'posts',
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
            title: {
                type: DataTypes.STRING,
            },
            content: {
                type: DataTypes.STRING,
            },
            tag: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    );

    return Post;
};
