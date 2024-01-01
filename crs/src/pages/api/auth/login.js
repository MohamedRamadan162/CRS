import { withSession } from "../../../lib/session";
import bcrypt from "bcryptjs";

export default withSession(async (req, res) => {
  const { userEmail, userPassword } = await req.body;
  console.log("in login", req.body);

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
    } 
    else if (users.length == 1) {
        // const isMatch = await bcrypt.compare(userPassword, users[0].user_password);
        // if (isMatch === false) {
        if(userPassword !== users[0].user_password){
        console.log("wrong password");
        console.log(users[0].user_password);
        console.log(userPassword);
        return res.status(401).json("wrong password");
      } 
      else {
        
        req.session.set("user", {user:users[0], isLoggedIn: true});
        await req.session.save();
        console.log(req.session.get("user"));
        console.log("login successful");
        return res.status(200).json(users);
      }
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Internal server Error" });
  }

  // if (user.isLoggedIn) {
  //   req.session.set("user", user);
  //   await req.session.save();
  //   res.json(user);
  // } else {
  //   res.status(401).send('Unauthorized');
  // }
});
