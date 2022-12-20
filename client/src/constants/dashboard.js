import { APP_NAME, telegram_membership_link, telegram_payment_support_link, coinbasePaymentLink, binancePaymentLink } from '../config';
import { IoReorderTwo, IoMail, IoPint, IoPerson, IoCash, IoInformation, IoJournal } from 'react-icons/io5';

export const navigationLinks = [
    {
        icon: <IoPerson />,
        name: 'account',
        url: '/dashboard/account'
    },
	{
        icon: <IoReorderTwo />,
        name: 'orders',
        url: '/dashboard'
    },
    {
        icon: <IoReorderTwo />,
        name: 'mass order',
        url: '/dashboard/mass-order'
    },
    {
        icon: <IoPint />,
        name: 'book order',
        url: '/dashboard/book-order'
    },
    {
        icon: <IoCash />,
        name: 'add funds',
        url: '/dashboard/add-funds'
    },
    {
        icon: <IoMail />,
        name: 'ticket support',
        url: '/dashboard/ticket-support'
    },
    {
        icon: <IoInformation />,
        name: 'api',
        url: '/api'
    },
    {
        icon: <IoJournal />,
        name: 'how to use',
        url: '/how-to-use'
    },
];

export const ticketSupportNote = ["✅ Please send your message in English.", "✅ We will respond 5 minutes to 6 hours, depending on the ticket overload.", "✅ If the ticket is solved, please use another ticket.", "✅ Please do not create multiple ticket for the same order Id."];

export const addFundsNote = ["✅ If you don't pay the exact amount, your payment, your payment won't be completed, even 1 cent more or less.", "✅ Be sure to use a real email [If you use a fake email, you may lose your money, if you pay the wrong amount].", "✅ All details will be sent to your mail after making payment."];

export const newOrderNote = [
    {
        note: "Due of the new Telegram Security update, Telegram member services are working slow now. We update this list daily, so if you want the best services, click this link daily:",
        linkName: 'Best Telegram Services',
        url: telegram_membership_link
    },
    {
        note: "New Child Panel update. Price decreased to 5% per month:",
        linkName: 'Create you own panel',
        url: 'http://localhost:3000/dashboard'
    },
    {
        note: `New Telegram account for payment support [It's specify only to ${APP_NAME}, don't trust anyone who use our name and icon]`,
        linkName: 'Click here',
        url: telegram_payment_support_link
    }
];

export const newOrderDescription = {
    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
    fastWorking: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
    info: {
        link: "🧷 Link Format: https://t.me/example or @example",
        content: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"]
    }
};

export const addFundsBonuses = ["✔ 3.5% Bonus for +25$ payment", "✔ 4% Bonus for +1000$ payment", "✔ 5% Bonus for +4000$ payment", "✔ 7% Bonus for +10000$ payment"];

export const addFundsPaymentOptions = [
    {
        name: 'CoinPayment « [Up to 7% Bonus] 🎇 » BTC',
        link: 'coinbase'
    },
    {
        name: 'Binance « [Up to 5% Bonus] 🎇 » BTC',
        link: 'binance'
    }
];

export const addFundsPaymentLinks = {
    coinbase: coinbasePaymentLink,
    binance: binancePaymentLink
};