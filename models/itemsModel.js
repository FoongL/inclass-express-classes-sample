function initItemsModel(sequelize, DataTypes) {
    return sequelize.define(
        'items',
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
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                  },
          
            },
        },
        {
            // The underscored option makes Sequelize reference snake_case names in the DB.
            underscored: true,
        }
    );
}

module.exports = initItemsModel