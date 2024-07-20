
# Real-Time Crypto Tracker

A real-time cryptocurrency tracking application built with Next.js, Redux, and Socket.io. This app allows users to monitor the latest cryptocurrency prices, volumes, and market caps, and also view the percentage change over different time periods.


<img width="1470" alt="Screenshot 2024-07-20 at 7 43 55 PM" src="https://github.com/user-attachments/assets/9dade07f-6bf9-4b78-819a-af8aa783b72b">

<img width="1470" alt="Screenshot 2024-07-20 at 7 45 40 PM" src="https://github.com/user-attachments/assets/d336a9ca-8a5f-4db7-9351-cd56024d971e">



## Features

- Real-time updates for selected cryptocurrencies
- Ability to switch between different cryptocurrencies
- Display of price, volume, market cap, and percentage change over different periods
- Data polling every 10 seconds for the latest updates
- Responsive design

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [Redux](https://redux.js.org/) - State management
- [Socket.io](https://socket.io/) - Real-time, bidirectional and event-based communication
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool
- [Axios](https://axios-http.com/) - Promise based HTTP client

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vikramkadu/stock-tracker-next.git
   cd stock-tracker-next
   ```
   
2. Install dependencies:
```
npm install
```

3. Set up your environment variables. Create a .env file in the root of the project and add the following:
```
NEXT_PUBLIC_API_KEY=your_livecoinwatch_api_key
MONGO_URI=your_mongodb_connection_string
```

4. Run the development server:
```
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

Folder Structure
```
├── components
│   ├── CryptoModal.tsx
│   └── CryptoTable.tsx
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   └── api
│       └── stock.ts
├── redux
│   ├── stockSlice.ts
│   └── store.ts
├── styles
│   ├── CryptoModal.module.css
│   ├── CryptoTable.module.css
│   └── Home.module.css
├── utils
│   └── formatNumber.ts
├── .env
├── package.json
└── README.md
```

Components
CryptoModal.tsx: Component for the modal that allows users to select different cryptocurrencies.
CryptoTable.tsx: Component to display the cryptocurrency data in a table format.
Utils
formatNumber.ts: Utility function for formatting large numbers.


Vikram kadu
