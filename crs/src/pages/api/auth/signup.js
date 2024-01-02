import { withSession } from "../../../lib/session";
import bcrypt from "bcryptjs";

export default withSession(async (req, res) => {
  const {
    userEmail,
    userName,
    userPhone,
    userPassword,
    isAdmin,
  } = await req.body;

  try {
    const userHashedPassword = await bcrypt.hash(userPassword, 10);
    const result = await fetch("http://localhost:3000/api/users/addUser", {
      method: "POST",
      body: JSON.stringify({
        userEmail,
        userName,
        userPhone,
        userHashedPassword,
        isAdmin,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
        const user = {userEmail, userName, userPhone, userHashedPassword, isAdmin};
        req.session.set("user", { user:user });
        await req.session.save();
        return res.status(200).json(user);
    }
    const response = await result();
    
  } catch (error) {
    console.error("Error logging in:", error);
    
    return res.status(500).json({ message: "Internal server Error" });
  }
});
