import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IIndentItem {
  productId?: string;
  productName: string;
  variant?: string;
  quantity: number;
  unit: string;
  urgency: 'ROUTINE' | 'URGENT' | 'CRITICAL';
  estimatedCost?: number;
}

export interface IMaterialIndent extends Document {
  indentNo: string;
  branchId: mongoose.Types.ObjectId | string;
  branchName: string;
  requestedBy: {
    id: string;
    name: string;
    email: string;
  };
  items: IIndentItem[];
  purpose: string;
  requiredByDate: string;
  status: 'PENDING_APPROVAL' | 'APPROVED' | 'DISPATCHED' | 'DELIVERED' | 'REJECTED';
  approvedBy?: {
    id: string;
    name: string;
    date: Date;
  };
  dispatchDetails?: {
    vehicleNo: string;
    driverName: string;
    driverPhone: string;
    dispatchDate: string;
  };
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MaterialIndentSchema = new Schema<IMaterialIndent>(
  {
    indentNo: { type: String, required: true, unique: true },
    branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
    branchName: { type: String, required: true },
    requestedBy: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    items: [
      {
        productId: String,
        productName: { type: String, required: true },
        variant: String,
        quantity: { type: Number, required: true },
        unit: { type: String, default: 'Pcs' },
        urgency: {
          type: String,
          enum: ['ROUTINE', 'URGENT', 'CRITICAL'],
          default: 'ROUTINE',
        },
        estimatedCost: Number,
      },
    ],
    purpose: { type: String, required: true },
    requiredByDate: { type: String, required: true },
    status: {
      type: String,
      enum: ['PENDING_APPROVAL', 'APPROVED', 'DISPATCHED', 'DELIVERED', 'REJECTED'],
      default: 'PENDING_APPROVAL',
    },
    approvedBy: {
      id: String,
      name: String,
      date: Date,
    },
    dispatchDetails: {
      vehicleNo: String,
      driverName: String,
      driverPhone: String,
      dispatchDate: String,
    },
    notes: String,
  },
  { timestamps: true }
);

export const MaterialIndent: Model<IMaterialIndent> =
  mongoose.models.MaterialIndent ||
  mongoose.model<IMaterialIndent>('MaterialIndent', MaterialIndentSchema);
