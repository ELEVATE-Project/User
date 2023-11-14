const moment = require('moment')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let notificationTemplateData = [
			{
				code: 'invite_org_admin',
				subject: 'Welcome Aboard as a Organization Admin!',
				body: '<p>Dear {name},</p> We are delighted to inform you that you have been successfully onboarded as a organization admin for {orgName}. You can now explore {appName}. <br>We request you to register on our Mentoring Platform (if not already), to start your journey with us as a organization admin.',
				status: 'ACTIVE',
				type: 'email',
				created_at: moment().format(),
				updated_at: moment().format(),
				email_header: 'email_header',
				email_footer: 'email_footer',
			},
		]

		await queryInterface.bulkInsert('notification_templates', notificationTemplateData, {})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('notification_templates', null, {})
	},
}
