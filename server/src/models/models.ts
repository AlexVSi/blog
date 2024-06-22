import { DataTypes } from 'sequelize'
import sequelize from 'db.js'

export const Users = sequelize.define("Users", {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
		firstname: {type: DataTypes.STRING, allowNull: false},
		lastname: {type: DataTypes.STRING, allowNull: false},
		login: {type: DataTypes.STRING, allowNull: false},
		password: {type: DataTypes.STRING, allowNull: false},
	},
	{
		timestamps: false
	}
)

export const Posts = sequelize.define("Posts", {
		id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
		title: {type: DataTypes.STRING, allowNull: false},
		description: {type: DataTypes.STRING, allowNull: false},
	},
	{
		timestamps: false
	}
)

export const Comments = sequelize.define("Comments", {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
	comment: {type: DataTypes.TEXT, allowNull: false},
	date: {type: DataTypes.DATEONLY, allowNull: false}
	},
	{
		timestamps: false
	}
)

Users.hasMany(Posts, {onDelete: 'cascade', onUpdate: 'cascade'})
Users.hasMany(Comments, {onDelete: 'cascade', onUpdate: 'cascade'})
Posts.hasMany(Comments, {onDelete: 'cascade', onUpdate: 'cascade'})
