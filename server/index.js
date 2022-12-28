const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if(process.env.NODE_ENV !== "production") require("dotenv").config();

// Express App
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    })
}

app.get("/", (req, res) => {
    res.send('Home page')
})

// Database
const database = {
    users: [
        {
            id: "dsfs345fd",
            sessionID: "mrans4eh39n",
            username: "cyphersloops",
            email: "josephibok36@gmail.com",
            remember_me: false,
            password: "123456",
            check: false,
            verified_mail: true,
            created_at: '2022-06-03T23:00:00.000Z'
        }
    ],
    services: {
        telegram: [
            {
                id: 4332,
                service: 'telegram 0% drop members - [Super instant start][high speed] 🎀',
                rate: 0.88,
                min_order: 500,
                max_order: 25000,
                avg_time: '1 hour 24 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            },
            {
                id: 4218,
                service: 'telegram 0% drop members - [Fastest Non Drop Server]',
                rate: 1.33,
                min_order: 100,
                max_order: 30000,
                avg_time: '8 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 1 hour - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                }
            },
            {
                id: 4231,
                service: 'telegram mix members - [Fast & cheap][public & private]',
                rate: 0.49,
                min_order: 500,
                max_order: 18000,
                avg_time: '29 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            },
            {
                id: 4194,
                service: 'telegram members - [Auto refill 3 days][Working][HQ]',
                rate: 0.39,
                min_order: 100,
                max_order: 80000,
                avg_time: '5 hour 45 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            },
            {
                id: 4265,
                service: 'telegram members - [Only private link working][+20k/Day]',
                rate: 0.55,
                min_order: 500,
                max_order: 30000,
                avg_time: '1 hour 25 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            }
        ],
        spotify: [
            {
                id: 5352,
                service: 'spotify enhancer - [Super instant start]',
                rate: 2.21,
                min_order: 600,
                max_order: 5000,
                avg_time: '42 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            },
            {
                id: 5289,
                service: 'spotify 0% drop members - [Fastest Non Drop Server]',
                rate: 1.00,
                min_order: 1500,
                max_order: 3000,
                avg_time: '1 hour 2 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            }
        ],
        instagram: [
            {
                id: 6362,
                service: 'instagram enhancer - [instagram start server]',
                rate: 2.02,
                min_order: 700,
                max_order: 4000,
                avg_time: '1 hour 47 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            },
            {
                id: 6389,
                service: 'instagram monify - [[Super instant start]',
                rate: 1.00,
                min_order: 1500,
                max_order: 3000,
                avg_time: 'Not enough data',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            },
            {
                id: 6444,
                service: 'instagram monify - [Fastest Non Drop Server 100%]',
                rate: 5.32,
                min_order: 8500,
                max_order: 12000,
                avg_time: '1 hour 2 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"]
                }
            }
        ],
        twitter: [
            {
                id: 7567,
                service: 'twitter enhancer - [twitter start server]',
                rate: 6.08,
                min_order: 800,
                max_order: 12600,
                avg_time: '34 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"]
                }
            },
            {
                id: 7656,
                service: 'twitter monify - [Fastest Non Drop Server]',
                rate: 2.00,
                min_order: 3000,
                max_order: 30000,
                avg_time: '5 minutes',
                description: {
                    features: ["✅ High Quality", "✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owners", "✅ 1 month Non Drop 1 - Month Fill Guarantee"],
                    notice: ["✅ Chanel Group", "✅ Public and private", "✅ Suitable for all Country Owner", "✅ Cancel Button Enabled"],
                    link: "🧷 Link Format: https://t.me/example or @example",
                    start_time: '⏳ Start Time: 30 min - 4 hours',
                    notice: ["🟨 The number you order will be delivered in the same amount, regardless of the channel drop", "🟨 If you change the link while you work, your order will be changed to a complete state, in which we will not refund the cost"],
                    warning: true
                }
            }
        ]
    },
    orders: [
        {
            id: 0,
            userID: 'dsfs345fd',
            category: 'telegram',
            service: 'telegram 0% drop members - [Super instant start][high speed] 🎀',
            link: "https://t.me/axios",
            quantity: 500,
            status: 'pending',
            charge: 20,
            averageTime: '1 hour 30 minutes'
        },
        {
            id: 1,
            userID: 'dsfs345fd',
            category: 'spotify',
            service: 'Spotify Enhancer - [Super Instant Start]',
            link: "https://t.me/axios",
            quantity: 7000,
            status: 'completed',
            charge: 523,
            averageTime: '42 hours'
        },
        {
            id: 2,
            userID: 'another user',
            category: 'instagram',
            service: 'instagram enhancer - [twitter start server]',
            link: 6362,
            quantity: 5000,
            status: 'pending',
            charge: 34,
            averageTime: '30 minutes'
        }
    ],
    funds: {
        paymentMethods: [
            {
                type: 'CoinPayment « [Up to 7% Bonus] 🎇 » BTC',
                url: 'https://coinbase/btc'
            },
            {
                type: 'Binance « [Up to 5% Bonus] 🎇 » BTC',
                url: 'https://binance/btc'
            },
        ],
        users: [
            {
                userID: 'dsfs345fd',
                accountBalance: 32.10,
                balanceSpent: 0.00
            }
        ]
    },
    mails: [],
    session: ["mrans4eh39n"]
}

// Users Route
app.get('/users', (req, res) => {
    res.send(database.users);
});

// Session Route
app.get('/user-session', (req, res) => {
    res.send(database.session);
});

// Register user route
app.post("/register", (req, res) => {
    // Database
    const { users, session, funds, orders } = database;

    const { username, email, password } = req.body;

    // Existing User
    const existingUser = users.find(user => user.email === email && user.password === password);

    if(!existingUser) {
        // Remove previous session
        session.pop();

        // Create new user session
        session.push(Math.random().toString(36).slice(2));

        // Fetch user session
        const [ userSession ] = session;


        users.push({
            id: Math.random().toString(36).slice(2),
            sessionID: userSession,
            username,
            email,
            password,
            verified_mail: true,
            created_at: new Date().toISOString()
        });

        // User ID
        const newUser = users[users.length - 1]; 
        const { id, verified_mail } = newUser;

        funds.push({
            userID: id,
            accountBalance: 0.00, 
            balanceSpent: 0.00
        });

        const { accountBalance, balanceSpent } = funds.users.filter(fund => fund.userID === id)[0];
        const userOrdersAmount = orders.filter(order => order.userID === id).length || 0;
        

        const user = {
            id,
            sessionID: session[0],
            username,
            email,
            verified_mail,
            funds: {accountBalance, balanceSpent},
            orders_amount: userOrdersAmount
        }

        res.send({ status: "success", user });
    } else 
        res.status(404).send({status: 'failed', message: 'User already exists'});
})

// Login user router
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Database
    let { users, session, orders, funds } = database;

    const existingUser = users.find(user => user.username === username && user.password === password);

    if(existingUser) {
        const { id, sessionID, username, email, verified_mail } = existingUser;
        const { accountBalance, balanceSpent } = funds.users.filter(fund => fund.userID === id)[0];
        const userOrdersAmount = orders.filter(order => order.userID === id).length;

        // Remove previous session
        session.pop();

        // Add New User Session
        session.push(sessionID);

        const user = {
            id,
            sessionID,
            username,
            email,
            verified_mail,
            funds: {accountBalance, balanceSpent},
            orders_amount: userOrdersAmount
        }

        const data = {
            status: 'success',
            user
        };

        res.send(data);
    } else
        res.send({ status: 'invalid', message: 'Username or Password is invalid' });
});

// Forgot Password
app.post("/account/password", (req, res) => {
    const { email } = req.body;
    const { users } = database;

    let existingUser = users.find(user => user.email === email);

    if(existingUser) {
        const newPassword = "cypher123456";

        existingUser = {
            ...existingUser,
            password: newPassword
        };

        res.send({ status: "success" });
    } else 
        res.send({ status: "invalid", message: "User does not exist" });
});

// Update Email
app.post("/account/email", (req, res) => {
    const { userID, updatedEmail } = req.body;
    const { users } = database;

    let existingUser = users.find(user => user.id === userID);

    if(existingUser) {
        const currentUserEmail = existingUser.email;

        if(currentUserEmail === updatedEmail) 
            res.send({ status: "failed", message: "Email already in use" });
        else {
            const updatedUser = users.map(user => 
                user.id === userID ?
                    {...user, email: updatedEmail}
                : user);

            // Empty Array
            users.length = 0;

            // Add User
            const updatedUserData = [].concat(updatedUser);

            // Update User Data
            users.push(updatedUserData);

            // Send Response
            res.send({ status: "success", message: "Email successfully updated" });
        }
    } else 
        res.send({ status: "failed", message: "Email already in use. Try something else" });
});

// Auth route
app.post('/account/:token', (req, res) => {
    const { token } = req.params;
    const { session, users, funds, orders } = database;

    const sessionExists = session[0] === token;

    if(sessionExists) {
        const existingUser = users.find(user => user.sessionID === token);

        if(existingUser) {
            const { id, sessionID, username, email, verified_mail } = existingUser;
            const { accountBalance, balanceSpent } = funds.users.filter(fund => fund.userID === id)[0];
            const userOrdersAmount = orders.filter(order => order.userID === id).length;

            const user = {
                id,
                sessionID,
                username,
                email,
                verified_mail,
                funds: {accountBalance, balanceSpent},
                orders_amount: userOrdersAmount
            }

            res.status(200).send({ status: "success", user });
        }

    } else
        res.status(404).send({ status: "expired", message: "Session has expired" });
});

// Logout
app.get("/logout", (req, res) => {
    let { session } = database;

    session = [].concat([]);

    if(session.length === 0)
        res.status(200).send({ status: "success" });
});

// Add funds
app.post("dashboard/add-funds", (req, res) => {
    const { userID, paymentMethod, amount } = req.body;
    const { users } = database;

    const checkIfUserExists = users.find(user => user.id === userID);

    if(checkIfUserExists) {
        console.log(checkIfUserExists);
    }
});


// Get funds payment methods
app.get("/dashboard/funds/payment-methods", (req, res) => {
    const { funds } = database;
    const { paymentMethods } = funds;

    res.send(paymentMethods)
})

// *********************** Services Routes ************************ 
app.get("/services", (req, res) => {
    const { services } = database;

    res.send(services);
}); 

// Filter services
app.get("/services/:category", (req, res) => {
    let { category } = req.params;
    const { services } = database;

    if(category === "all") 
        res.send(services);

    const servicesCategory = {[category]: services[category]};

    if(servicesCategory)
        res.send(servicesCategory);
})

// Search services
app.post("/services/search", (req, res) => {
    const { serviceName } = req.body;
    const { services } = database;

    const servicesEntries = Object.entries(services);
    const servicesCategoryData = servicesEntries.map(([, data]) => data).flat();
    const servicesCategoryName = servicesEntries.map(([name]) => name);
    const existingServices = servicesCategoryData.filter(service => service.service.toLowerCase().includes(serviceName.toLowerCase()));
    const serviceType = servicesCategoryName.filter(name => serviceName.toLowerCase().includes(name))[0];

    if(existingServices)
        res.send({ status: 'success', services: {[serviceType]: existingServices}});
})

// ************************** Orders ****************************
// Show all orders
app.get("/orders", (req, res) => {
    const { orders } = database;

    res.send(orders);
})

// Book orders
app.post("/dashboard/book-order", (req, res) => {
    const { userID, category, service, link, quantity, charge } = req.body;
    
    // Database
    const { orders } = database; 
    const validateData = [userID, category, service, link, quantity, charge].every(value => Boolean(value));

    if(validateData) {
        const newOrder = {
            id: Math.random().toString(36).slice(2),
            userID, 
            category, 
            service, 
            link, 
            quantity, 
            charge,  
            status: 'pending',
            created_at: new Date().toISOString()
        };

        orders.push(newOrder);
        console.log(newOrder);

        res.send({ status: 'success', newOrder });
    } else {
        res.send({ status: 'failed', message: "There was an error booking order" });
    }
 });

// Search Order
app.post("/dashboard/orders/search", (req, res) => {
    const { orderService, userID } = req.body;
    const { orders } = database;

    const existingOrders = orders.filter(order => order.userID === userID).find(order => order.service.toLowerCase().includes(orderService.toLowerCase()));

    if(existingOrders)
        res.status(200).send({ status: 'success', data: existingOrders});
    else {
        res.send({ data: orders, status: 'error', message: "Order does not exist" });
    }
})

// Mass orders
app.post("/dashboard/orders/mass-order", (req, res) => {
    const { massOrder } = req.body;
});

// Get user order
app.get("/dashboard/:userID", (req, res) => {
    const { userID } = req.params;
    const { orders } = database;

    const userOrders = orders.filter(order => order.userID === userID);

    res.send({ status: 'success', data: userOrders });
})

app.post("/dashboard/:status", (req, res) => {
    let { status } = req.params;
    const { userID } = req.body;
    const { orders } = database;
    let filterOrdersByStatus;

    if(status === "in progress")
        status = "in_progress"; 

    filterOrdersByStatus = 
        orders
            .filter(order => order.userID === userID)
            .filter(order => order.status === status);


    if(status === "all") 
        filterOrdersByStatus = orders.filter(order => order.userID === userID);

    if(filterOrdersByStatus)
        res.send({status: 'success', data: filterOrdersByStatus});
});

// Port
app.listen(port, error => {
    if(error) throw error;

    console.log("Server running on port " + port);
});
