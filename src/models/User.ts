import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: 'SUPER_ADMIN' | 'BRANCH_ADMIN' | 'STAFF';
  branchId?: mongoose.Types.ObjectId | string;
  phone?: string;
  designation?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ['SUPER_ADMIN', 'BRANCH_ADMIN', 'STAFF'],
      default: 'STAFF',
      required: true,
    },
    branchId: { type: Schema.Types.Mixed },
    phone: { type: String },
    designation: { type: String },
  },
  { timestamps: true }
);

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
