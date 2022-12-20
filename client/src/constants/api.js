export const apiMethods = [
	{
		method: 'HTTP Method',
		value: 'POST'
	},
	{
		method: 'API URL',
		value: 'https://cpanel/api/v2'
	},
	{
		method: 'Response Format',
		value: 'JSON'
	}
];

export const apiServiceOptionList = [
	{
		params: 'key',
		desc: 'Your API key'
	},
	{
		params: 'action',
		desc: 'services'
	}
];

export const apiAddOrder = {
	selectOrderOptions: ['Default', 'Order', 'Check order'],
	addOrderOptions: [
		{
			params: 'key',
			desc: 'Your API key'
		},
		{
			params: 'action',
			desc: 'add'
		},
		{
			params: 'service',
			desc: 'Service ID'
		},
		{
			params: 'link',
			desc: 'Link to page'
		},
		{
			params: 'quantity',
			desc: 'Quantity needed'
		},
		{
			params: 'runs (optional)',
			desc: 'Runs to deliver'
		},
		{
			params: 'interval (optional)',
			desc: 'Interval in minutes'
		}
	]
}

export const apiOrderOptionList = [
	{
		params: 'key',
		desc: 'Your API key'
	},
	{
		params: 'action',
		desc: 'status'
	},
	{
		params: 'order',
		desc: 'Order ID'
	}
];

export const apiMultipleOrderOptionList = [
	{
		params: 'key',
		desc: 'Your API key'
	},
	{
		params: 'action',
		desc: 'status'
	},
	{
		params: 'order',
		desc: 'Order IDs seperated by comma'
	}
];

export const apiCreateRefillOptionList = [
	{
		params: 'key',
		desc: 'Your API key'
	},
	{
		params: 'action',
		desc: 'refill'
	},
	{
		params: 'order',
		desc: 'Order ID'
	}
]

export const apiCreateRefillStatusOptionList = [
	{
		params: 'key',
		desc: 'Your API key'
	},
	{
		params: 'action',
		desc: 'refill_status'
	},
	{
		params: 'order',
		desc: 'Refill ID'
	}
]

export const apiUserBalanceOptionList = [
	{
		params: 'key',
		desc: 'Your API key'
	},
	{
		params: 'action',
		desc: 'balance'
	}
]

