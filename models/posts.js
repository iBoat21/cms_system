module.exports = (sequelize, DataTypes) => {
    const posts = sequelize.define(
        'posts', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: users,
                key: userId,
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }
    )
    return posts
}