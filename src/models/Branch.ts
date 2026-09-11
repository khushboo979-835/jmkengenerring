import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBranch extends Document {
  name: string;
  city: string;
  code: string;
  address: string;
  locationCoords: {
    lat: number;
    lng: number;
    radiusMeters: number;
  };
  allocatedBudget: number;
  currentSpend: number;
  adminId?: mongoose.Types.ObjectId | string;
  status: 'ACTIVE' | 'SUSPENDED';
  activeWorkersCount: number;
  contactNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

const BranchSchema = new Schema<IBranch>(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    code: { type: String, required: true, uppercase: true },
    address: { type: String, required: true },
    locationCoords: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      radiusMeters: { type: Number, default: 500 },
    },
    allocatedBudget: { type: Number, default: 0 },
    currentSpend: { type: Number, default: 0 },
    adminId: { type: Schema.Types.Mixed },
    status: {
      type: String,
      enum: ['ACTIVE', 'SUSPENDED'],
      default: 'ACTIVE',
    },
    activeWorkersCount: { type: Number, default: 0 },
    contactNumber: { type: String },
  },
  { timestamps: true }
);

export const Branch: Model<IBranch> =
  mongoose.models.Branch || mongoose.model<IBranch>('Branch', BranchSchema);
