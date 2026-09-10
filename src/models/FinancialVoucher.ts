import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFinancialVoucher extends Document {
  voucherNo: string;
  branchId: mongoose.Types.ObjectId | string;
  branchName: string;
  vendorName: string;
  category: 'LABOUR_WAGES' | 'MATERIAL_PURCHASE' | 'EQUIPMENT_RENTAL' | 'SITE_UTILITIES' | 'TRANSPORTATION' | 'MISCELLANEOUS';
  amount: number;
  billDate: string;
  description: string;
  proofImageUrl?: string;
  invoiceNo?: string;
  status: 'PENDING_HQ' | 'APPROVED' | 'REJECTED';
  requiresHqApproval: boolean;
  createdBy: {
    id: string;
    name: string;
  };
  approvedBy?: {
    id: string;
    name: string;
    date: Date;
    remarks?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const FinancialVoucherSchema = new Schema<IFinancialVoucher>(
  {
    voucherNo: { type: String, required: true, unique: true },
    branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
    branchName: { type: String, required: true },
    vendorName: { type: String, required: true },
    category: {
      type: String,
      enum: [
        'LABOUR_WAGES',
        'MATERIAL_PURCHASE',
        'EQUIPMENT_RENTAL',
        'SITE_UTILITIES',
        'TRANSPORTATION',
        'MISCELLANEOUS',
      ],
      required: true,
    },
    amount: { type: Number, required: true },
    billDate: { type: String, required: true },
    description: { type: String, required: true },
    proofImageUrl: { type: String },
    invoiceNo: { type: String },
    status: {
      type: String,
      enum: ['PENDING_HQ', 'APPROVED', 'REJECTED'],
      default: 'PENDING_HQ',
    },
    requiresHqApproval: { type: Boolean, default: true },
    createdBy: {
      id: { type: String, required: true },
      name: { type: String, required: true },
    },
    approvedBy: {
      id: String,
      name: String,
      date: Date,
      remarks: String,
    },
  },
  { timestamps: true }
);

export const FinancialVoucher: Model<IFinancialVoucher> =
  mongoose.models.FinancialVoucher ||
  mongoose.model<IFinancialVoucher>('FinancialVoucher', FinancialVoucherSchema);
