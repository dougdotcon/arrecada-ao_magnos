# 🏳️‍🌈 Tapetrica da Serra - Fundraising System

A professional and elegant fundraising system for the Tapetrica da Serra Pride Parade. Built with Node.js, Express, and SQLite, it provides a seamless way to track donations and manage fundraising efforts.

## ✨ Features

- **Public Progress Page**: Displays real-time fundraising progress and a QR Code for PIX donations.
- **Admin Dashboard**: Secure interface for manually registering and managing donations.
- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Pride Theme**: Vibrant and inclusive design inspired by the rainbow flag.
- **Social Sharing**: Integrated buttons for sharing on WhatsApp, Facebook, and Instagram.

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Steps

1. **Clone the repository:**
   bash
   git clone <repository_url>
   cd tapetrica_serra_fundraising
   

2. **Install dependencies:**
   bash
   npm install
   

3. **Configure the Fundraising Goal:**
   - Open `server.js` in your code editor.
   - Find the line `const GOAL_AMOUNT = 5000;`
   - Change `5000` to your target amount (e.g., `10000`).

4. **Add your PIX QR Code:**
   - Place your QR Code image in `public/images/`.
   - Ensure the file is named `qr.png`.
   - **Important**: If your image has a different name, rename it to `qr.png`.

5. **(Optional) Secure the Admin Panel:**
   - By default, the admin panel is open. For production, it is highly recommended to add a simple authentication middleware.

## 🎯 How to Run

### Start the Server
bash
node server.js

You should see a message like `Server is running on port 3000`.

### Access the Application
- **Public Page**: [http://localhost:3000](http://localhost:3000)
- **Admin Dashboard**: [http://localhost:3000/admin](http://localhost:3000/admin)

### Adding Donations via Admin Panel
1. Navigate to the Admin Dashboard.
2. Enter the donor's name.
3. Enter the donation amount (do not include currency symbols).
4. Click "Adicionar Doação" (Add Donation).

## 📁 Project Structure


tapetrica_serra_fundraising/
├── data.sqlite              # SQLite database file (auto-generated)
├── db.js                    # Database connection and configuration
├── server.js                # Main Express server application
├── package.json             # Project metadata and dependencies
├── public/
│   ├── css/
│   │   └── style.css        # Global styles and responsive rules
│   └── images/
│       └── qr.png           # Your PIX QR Code (you provide this)
├── views/
│   ├── index.ejs            # Public-facing donation page
│   └── admin.ejs            # Admin dashboard for adding donations
└── README.md                # Project documentation


## 🛠️ Technology Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [SQLite](https://www.sqlite.org/)
- **Templating Engine**: [EJS](https://ejs.co/)
- **Styling**: Custom CSS3 (Flexbox & Grid)

## 🔧 Configuration & Customization

### Changing the Theme Colors
To modify the color scheme, edit the `:root` variables in `public/css/style.css`.

css
:root {
    --red: #ff0000;
    --orange: #ff8d00;
    --yellow: #ffee00;
    --green: #008121;
    --blue: #004cff;
    --purple: #760188;
}


### Database Management
The system automatically creates `data.sqlite` upon the first run. To reset or backup:
- **Backup**: Copy the `data.sqlite` file to a safe location.
- **Reset**: Stop the server, delete `data.sqlite`, and restart the server. A new empty database will be created.

## 🚀 Deployment for Production

For a production environment, we recommend using a process manager like `pm2` to keep the application running continuously.

bash
# Install pm2 globally
npm install -g pm2

# Start your application
pm2 start server.js --name "tapetrica-fundraising"

# Save the process list to restart on server reboot
pm2 save
pm2 startup


## 📞 Support

If you encounter issues:
1. Ensure all dependencies are installed (`npm install`).
2. Verify the `qr.png` file exists in `public/images/`.
3. Check the server console for error messages.
4. Ensure your Node.js version is 14 or higher.
