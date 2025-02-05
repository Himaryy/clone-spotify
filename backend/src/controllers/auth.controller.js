import { User } from "../models/user.model.js";

export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // if user already exist
    const user = await User.findOne({ clerkId: id });

    if (!user)
      ({
        // Sign Up
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    await user.save(); // Save user to MongoDB

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in status Callback", error);
    next(error);
  }
};
