import { withSession } from "../../../lib/session";
import bcrypt from "bcryptjs";

export default withSession(async (req, res) => {
  const { userEmail, userPassword } = await req.body;

  try {
    const result = await fetch(
      `http://localhost:3000/api/users/getUsers?userEmail=${userEmail}`,
      {
        method: "GET",
      }
    );
    const users = await result.json();
    if (users.length === 0) {
      console.log("user non existent");
      return res.status(401).json("user non existent");
    } else if (users.length == 1) {
      const isMatch = await bcrypt.compare(
        userPassword,
        users[0].user_password
      );
      if (isMatch === false) {
        console.log("wrong password");
        return res.status(401).json("wrong password");
      } else {
        if (users[0].is_admin == 1) {
          req.session.set("admin", { admin: users[0] });
        }
        else {
          req.session.set("user", { user: users[0] });
        }
        await req.session.save();
        return res.status(200).json(users);
      }
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Internal server Error" });
  }
});
