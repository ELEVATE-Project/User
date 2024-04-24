module.exports = {
	up: async (queryInterface, Sequelize) => {
		let rolesData = []
		const roleArray = ['user', 'mentor', 'mentee', 'admin']
		//user_type denotes the role is system user or not 1: system user, 0: non system user
		roleArray.forEach(async function (role) {
			let user_type = 0
			if (role == 'admin') {
				user_type = 1
			}

			let eachRow = {
				title: role,
				user_type: user_type,
				updated_at: new Date(),
				created_at: new Date(),
			}

			rolesData.push(eachRow)
		})
		await queryInterface.bulkInsert('user_roles', rolesData, {})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('user_roles', null, {})
	},
}
