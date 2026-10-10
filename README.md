

# 🔧 Main Requirements — 50 Marks


### 1. 🔝 Navbar

- ❌**Right-side auth buttons**: `সাইন ইন` + `সাইন আপ`. When logged in, show profile / sign-out instead.

---

### 5. Category Page
- ❌**Loading state**: show skeleton / “Loading…” while fetching before the list renders.
- ❌**Empty state** (when category has no items / invalid slug): 404-style message + CTA button **“হোম পেজে ফিরে যান”** (links back to `/`).


### ❌6. Authentication (`/signin`, `/signup`)

- **Sign In**: User Login: The user will  show  a Login page with a form , so that the user can Log in this application. 
    - Show a Title for Login.  & Form with following fields ( Email , Password , Login button ) 
    - If the user Login successfully then navigate him to his Home page. If not, show him an error with toast / error message anywhere in the form.

    - There will be some other options like:
        - Show the user a Link for Register  so that he can go to the register page. 
        - Show users a Social Login Button ( Google/GitHub/any other social login ) . on Clicking it user authenticate with Google Navigate him to  his Home page.
- **Sign Up**: User Registration: Create a register page with a form , so that the user can register himself in this application. 
    - Show a Title for registration and a Form with following fields( Name , Email, Password & Register Button ) 
    - If the user Register successfully then navigate him to his login page.
    - If not, show him an error with toast / error message anywhere in the form.


    - There will be some other options like 
        - Show the user a Link for Login so that he can go to the Login page. 
        - Show users a Social Login Button ( Google/GitHub/any other social login ) . on Clicking it user authenticate with Google Navigate the user to the Home page.

- Use **BetterAuth** (email/password + Google + GitHub), toast on success/error, skeleton loaders.
- Show relevant **toast notification** on login / signup / logout / validation error.
-  💡Don’t implement email verification or forget password method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.

--- 

### 8. Responsive Design
- ❌The entire website must work correctly on mobile, tablet, and desktop screen sizes (grid collapses correctly, navbar + ticker stays usable, hero stacks, `btn-sm sm:btn-md`, `max-w-6xl` container, etc.).

---

#	Requirement
- ❌Show a loading animation ( `skeleton`) while the product data is being fetched on the Home / Category page
- ❌Show a relevant toast notification for auth + protected-route redirects (use `react-hot-toast` / `data-rht-toaster`).
- ❌Make sure reloading any page after deployment does not cause an error (dynamic `[slug]` routes must work on Vercel — no hard 404 on refresh)

---

# Challenge Requirements — 10 Marks

### ❌C2. GitHub README
- Add a well-designed `README.md` that includes:
  - Project name (বাজার দর / BazarDor)
  - Short description
  - Technologies used
  - 5 key features of the project

### ❌C3. - Update Information Feature
- In My Profile route there will be an update button. On clicking it,  Take user to another route 
- Show user a form with an input field (  Name ), An Update Information button.

Follow this documentation: https://better-auth.com/docs/concepts/users-accounts#update-user 