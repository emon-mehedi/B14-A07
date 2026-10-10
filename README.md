# 🛒 বাজার দর / BazarDor

 প্রয়োজনীয় পণ্যের দাম এক নজরে — একটি রিয়েল-টাইম বাজার মূল্য ট্র্যাকিং প্ল্যাটফর্ম ।

## 📖 Short Description
**BazarDor (বাজার দর)** is a modern web application designed to track and display real-time market prices of essential daily commodities (such as rice, vegetables, meat, oil, etc.) across different local markets. It features daily price trends (risers and fallers), category-based filtering, advanced Bengali numeral sorting, secure user authentication with BetterAuth, and market-by-market price breakdowns.

---

## 🛠️ Technologies Used
- **Framework:** Next.js (App Router)
- **Language:** TypeScript / JavaScript
- **Styling:** Tailwind CSS, DaisyUI / Hero UI
- **Authentication:** BetterAuth (Email/Password, Google, GitHub)
- **Notifications:** React Hot Toast
- **Deployment:** Vercel

---

## ✨ 5 Key Features of the Project

1. **Real-time Price Ticker & Market Insights:** An infinite scrolling marquee ticker at the top displaying item prices and daily percentage changes, accompanied by dedicated home sections for top risers ("আজ দাম বেড়েছে") and fallers ("আজ দাম কমেছে").

2. **Category Navigation & Bengali Numeral Sorting:** Clean category-based routing with custom sorting controls (`দাম: কম থেকে বেশি` and `দাম: বেশি থেকে কম`) that accurately parse and sort Bengali numeral price strings numerically.

3. **Protected Product Details & Market Breakdown:** Authenticated route (`/product/[slug]`) providing comprehensive market statistics (minimum, maximum, average price) alongside detailed market-by-market price comparisons.

4. **Secure Authentication & Profile Management:** Powered by **BetterAuth**, supporting Email/Password and OAuth social logins (Google/GitHub) with user profile update features and toast notifications for smooth user experience.

5. **Responsive Design & Dynamic Fallbacks:** Fully optimized grid layouts for mobile, tablet, and desktop screens, complemented by smooth skeleton loaders during data fetches and a custom 404 error page for invalid routes.

---

## 🚀 Live Demo & Repository
- **Live Link:** 
- **GitHub Repository:** 

---
> সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।