/**
 * name : constants/common.js
 * author : Aman Kumar Gupta
 * Date : 29-Sep-2021
 * Description : All commonly used constants through out the service
 */

function getPaginationOffset(page, limit) {
	return (page - 1) * limit
}
module.exports = {
	pagination: {
		DEFAULT_PAGE_NO: 1,
		DEFAULT_PAGE_SIZE: 100,
	},
	getPaginationOffset,
	internalAccessUrls: [
		'/user/v1/profile/details',
		'/user/v1/account/list',
		'/user/v1/user/read',
		'/user/v1/admin/create',
		'/user/v1/organization/read',
		'/user/v1/user/share',
		'/user/v1/admin/triggerViewRebuildInternal',
		'/user/v1/admin/triggerPeriodicViewRefreshInternal',
		'/user/v1/account/search',
		'/user/v1/organization/list',
		'/user/v1/user-role/default',
		'/user/v1/account/validateUserSession',
		'/user/v1/account/searchByEmailIds',
	],
	notificationEmailType: 'email',
	accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
	refreshTokenExpiry: `${process.env.REFRESH_TOKEN_EXPIRY}d`,
	refreshTokenExpiryInMs: Number(process.env.REFRESH_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000,
	refreshTokenLimit: 3,
	otpExpirationTime: process.env.OTP_EXP_TIME, // In Seconds,
	ADMIN_ROLE: 'admin',
	ORG_ADMIN_ROLE: 'org_admin',
	USER_ROLE: 'user',
	SESSION_MANAGER_ROLE: 'session_manager',
	PUBLIC_ROLE: 'public',
	USER_SERVICE: 'user',
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
	EXPIRED_STATUS: 'EXPIRED',
	MENTOR_ROLE: 'mentor',
	MENTEE_ROLE: 'mentee',
	SESSION_MANAGER_ROLE: 'session_manager',
	redisUserPrefix: 'user_',
	redisOrgPrefix: 'org_',
	location: 'location',
	languages: 'languages',
	typeSystem: 'system',
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
	SEARCH: '',
	materializedViewsPrefix: 'm_',
	DELETED_STATUS: 'DELETED',
	DEFAULT_ORG_VISIBILITY: 'PUBLIC',
	ROLE_TYPE_NON_SYSTEM: 0,
	captchaEnabledAPIs: ['/user/v1/account/login', '/user/v1/account/generateOtp', '/user/v1/account/registrationOtp'],
	WRITE_ACCESS: 'w',
	READ_ACCESS: 'r',
}
