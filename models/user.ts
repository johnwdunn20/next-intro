import exp from "constants";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    unique: [true, 'Username already exists'],
    required: [true, 'Username is required'],
    // ensure username contains 8-20 alphanumeric characters
    match: [/^[a-zA-Z0-9]{8,20}$/, 'Username must be 8-20 alphanumeric characters'],
  },
  image: {
    type: String,
  }
});

// route only exists when it gets called in nextjs api. So we need to check if the model already exists
const User = models.User || model('User', UserSchema);

export default User;