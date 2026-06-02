const user = {
  isLoggedIn: true,
  logout() {
    console.log("Logging out...");
  }
};

const admin = {
  deleteAccount() {
    console.log("Account deleted!");
  }
};

// 1. THIS IS THE CABLE! 
// We are plugging the admin's hidden port directly into the user object.
admin.__proto__ = user;

// 2. Now let's ask the Admin if it is logged in.
console.log(admin.isLoggedIn); // Output: true