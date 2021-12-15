function initUsersModel(sequelize, DataTypes) {
    return sequelize.define(
        'users',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
        },
        {
            // The underscored option makes Sequelize reference snake_case names in the DB.
            underscored: true,
        }
    );
}

module.exports = initUsersModel