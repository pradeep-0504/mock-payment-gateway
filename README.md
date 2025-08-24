🏦 Mock Payment Gateway (Learning Project)

A simple mock payment gateway built with Node.js + Express 🚀  
Not a real payment system (no banks involved!) — just for learning how gateways like Razorpay/Stripe work under the hood.  
---
✨ Features
- Accepts payment requests (amount, method).
- Generates unique transaction IDs using uuid.
- Randomly simulates SUCCESS or FAILED responses.
- Stores transactions (currently in memory).
- API Endpoints:
  - POST /payment → process a payment
  - GET /transactions → view all transactions
---
🛠️ Tech Stack
- Backend: Node.js, Express
- Libraries: body-parser, uuid
- Testing Tool: Postman
---
📌 How It Works:--
 A client sends a request:
   `json
   {
     "amount": 500,
     "method": "UPI"
   }
<img width="1441" height="860" alt="Screenshot 2025-08-24 230058" src="https://github.com/user-attachments/assets/7dca14c3-79e6-4f35-9355-2484951b9f46" />
<img width="1439" height="804" alt="Screenshot 2025-08-24 230002" src="https://github.com/user-attachments/assets/a39652ed-a924-4014-8d68-eba5d66cf2c0" />
