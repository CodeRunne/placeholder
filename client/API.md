### CPANEL API'S
	service_name = telegram | instagram | twitter | spotify

	## Services
		- Fetch all services
			API: 'http://localhost:5000/services',
			Method: GET,
			Response:
				{
					service_name: [{...}],
					service_name: [{...}]
				}

		- Filter services
			API: 'http://localhost:5000/services/category',
			Method: GET,
			Request: all | telegram | spotify,
			Response: 
				{service_name: [{...}]}

		- Search services
			API: 'http://localhost:5000/services/search',
			Method: POST,
			Request: service name service (Telegram 0% Drop Members - [Fastest Non Drop Server] | Spotify Enhancer - [Super Instant Start]),
			Response: 
				{ 
					status: 'success', 
					services: {service_name: [{...}]}
				}


	## Authentication
		- Login 
			API: 'http://localhost:5000/login',
			Method: POST,
			Request: {username, password, check} (check prop is optional)
			Response: 
				{
					status: "success",
					user: {
						id,
			            sessionID,
			            username,
			            email,
			            verified_mail,
			            funds: {accountBalance, balanceSpent},
			            orders_amount: userOrdersAmount
					}
				}

		- Register
			API: 'http://localhost:5000/register',
			Method: POST,
			Request: {username, email, password} 
			Response: 
				{
					status: "success",
					user: {
						id,
			            sessionID,
			            username,
			            email,
			            verified_mail,
			            funds: {accountBalance, balanceSpent},
			            orders_amount: userOrdersAmount
					}
				}

		- Forgot Password
			API: 'http://localhost:5000/account/password',
			Method: POST,
			Request: {email}
			Response: 
				{
					status: "success",
					token: '...',
					message: '...'
				}
		- Reset Password
			API: 'http://localhost:5000/account/password/token',
			Method: POST,
			Request: {newPassword}
			Response: 
				{
					status: "success",
					message: '...'
				}


	### Dashboard
		## Orders
			- Add Order
				API: 'http://localhost:5000/dashboard/book-order',
				Method: POST,
				Request: {userID, category, service, link, averageTime, quantity, charge}
				Response: 
					# Success
						{
							status: "success",
							order: {...},
						}
					# Failure
						{
							status: "failed",
							message: '...'
						}


			- Orders (View Orders)
				API: 'http://localhost:5000/dashboard/userID',
				Method: POST,
				Response: [{...}, {...}]

			- Mass Order
				API: 'http://localhost:5000/dashboard/orders/mass-order',
				Method: POST,
				Request: ["2333 | @link | 23", "4352 | @link | 3"]
				Response: 
					# Success
						{
							status: "success",
							order: [{...}, {...}],
						}
					# Failure
						{
							status: "failed",
							message: '...'
						}

		## Account
			- Update Email
				API: 'http://localhost:5000/account/email',
				Method: POST,
				Request: {userID, updatedEmail}
				Response: 
					# Success
						{
							status: "success",
							message: "..."
						}
					# Failure
						{
							status: "failed",
							message: '...'
						}

			- Update Username
				API: 'http://localhost:5000/account/username',
				Method: POST,
				Request: {userID, updatedUsername}
				Response: 
					# Success
						{
							status: "success",
							message: "..."
						}
					# Failure
						{
							status: "failed",
							message: '...'
						}

			- Update Password
				API: 'http://localhost:5000/account/reset-password',
				Method: POST,
				Request: {userID, currentPassword, newPassword}
				Response: 
					# Success
						{
							status: "success",
							message: "..."
						}
					# Failure
						{
							status: "failed",
							message: '...'
						}


			- Generate API Key 
				API: 'http://localhost:5000/account/generate-api',
				Method: POST,
				Request: {apiKey}
				Response: 
					# Success
						{
							status: "success",
							api: "...",
							message: "..."
						}
					# Failure
						{
							status: "failed",
							message: '...'
						}

		## Ticket Support 
			API: 'http://localhost:5000/dashboard/ticket-support',
			Method: POST,
			Request: {userID, subject, message}
			Response: 
				# Success
					{
						status: "success",
						message: "..."
					}
				# Failure
					{
						status: "failed",
						message: '...'
					}

		## Add Funds
			API: 'http://localhost:5000/dashboard/add-funds',
			Method: POST,
			Request: {userID, paymentLink, amount}
			Response: 
				# Success
					{
						status: "success",
						message: "..."
					}
				# Failure
					{
						status: "failed",
						message: '...'
					}