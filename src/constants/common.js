/**
 * name : constants/common.js
 * author : Aman Kumar Gupta
 * Date : 29-Sep-2021
 * Description : All commonly used constants through out the service
 */

const form = require('@generics/form')
const { elevateLog, correlationId } = require('elevate-logger')
const logger = elevateLog.init()
const successResponse = async ({ statusCode = 500, responseCode = 'OK', message, result = [], meta = {} }) => {
	const versions = await form.getAllFormsVersion()
	let response = {
		statusCode,
		responseCode,
		message,
		result,
		meta: { ...meta, formsVersion: versions, correlation: correlationId.getId() },
	}
	logger.info('Request Response', { response: response })

	return response
}

const failureResponse = ({ message = 'Oops! Something Went Wrong.', statusCode = 500, responseCode, result }) => {
	const error = new Error(message)
	error.statusCode = statusCode
	error.responseCode = responseCode
	error.data = result || []

	return error
}

module.exports = {
	pagination: {
		DEFAULT_PAGE_NO: 1,
		DEFAULT_PAGE_SIZE: 100,
	},
	successResponse,
	failureResponse,
	guestUrls: [
		'/user/v1/account/login',
		'/user/v1/account/create',
		'/user/v1/account/generateToken',
		'/user/v1/account/generateOtp',
		'/user/v1/account/registrationOtp',
		'/user/v1/account/resetPassword',
		'/user/v1/admin/login',
		'/user/v1/userRole/list',
		'/user/v1/account/reActivate',
		'/user/v1/account/reActivateOtp',
	],
	internalAccessUrls: [
		'/user/v1/profile/details',
		'/user/v1/account/list',
		'/user/v1/user/read',
		'/user/v1/admin/create',
		'/user/v1/organization/read',
		'/user/v1/user/share',
	],
	notificationEmailType: 'email',
	accessTokenExpiry: `${process.env.ACCESS_TOKEN_EXPIRY}d`,
	refreshTokenExpiry: `${process.env.REFRESH_TOKEN_EXPIRY}d`,
	refreshTokenExpiryInMs: Number(process.env.REFRESH_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000,
	refreshTokenLimit: 3,
	reactive_action: 'reactivation',
	reactive_limit: 86400000,
	randomOtp: Math.floor(Math.random() * 900000 + 100000), // 6-digit OTP
	otpExpirationTime: process.env.OTP_EXP_TIME, // In Seconds,
	ADMIN_ROLE: 'admin',
	USER_ROLE: 'user',
	roleValidationPaths: [
		'/user/v1/account/verifyMentor',
		'/user/v1/accounts/verifyUser',
		'/user/v1/accounts/changeRole',
		'/user/v1/user/update',
		'/user/v1/user/share',
		'/user/v1/user/read',
		'/user/v1/org-admin/bulkUserCreate',
		'/user/v1/org-admin/getBulkInvitesFilesList',
		'/user/v1/org-admin/getRequestDetails',
		'/user/v1/org-admin/getRequests',
		'/user/v1/organization/requestOrgRole',
		'/user/v1/organization/create',
		'/user/v1/organization/update',
	],
	responseType: 'stream',
	roleAssociationModel: 'UserRole',
	roleAssociationName: 'user_roles',
	ACTIVE_STATUS: 'ACTIVE',
	INACTIVE_STATUS: 'INACTIVE',
	MENTOR_ROLE: 'mentor',
	MENTEE_ROLE: 'mentee',
	redisUserPrefix: 'user_',
	redisOrgPrefix: 'org_',
	location: 'location',
	languages: 'languages',
	typeSystem: 'system',
	ORG_ADMIN_ROLE: 'org_admin',
	UPLOADED_STATUS: 'UPLOADED',
	FAILED_STATUS: 'FAILED',
	PROCESSED_STATUS: 'PROCESSED',
	REQUESTED_STATUS: 'REQUESTED',
	ACCEPTED_STATUS: 'APPROVED',
	REJECTED_STATUS: 'REJECTED',
	UNDER_REVIEW_STATUS: 'UNDER_REVIEW',
	fileTypeCSV: 'text/csv',
	tempFolderForBulkUpload: '/public/invites',
	azureBlobType: 'BlockBlob',
	ROLE_TYPE_SYSTEM: 1,
	inviteeOutputFile: 'output-user-invite',
	csvExtension: '.csv',
	BACK_OFF_RETRY_QUEUE: 600000,
	PATCH_METHOD: 'PATCH',
	GET_METHOD: 'GET',
	NO_OF_ATTEMPTS: 3,
}
