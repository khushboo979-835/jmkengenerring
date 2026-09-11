import mongoose, { Schema, Document, Model } from 'mongoose';
export interface IRFQ extends Document {
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  selectedProducts: string[];
  projectDetails: string;
  status: 'NEW' | 'CONTACTED' | 'QUOTED' | 'CONVERTED' | 'CLOSED';
  createdAt: Date;
  updatedAt: Date;
}
const RFQSchema = new Schema<IRFQ>(
  {
    customerName: { type: String, required: true },
    companyName: { type: String, default: 'Not Specified' },
    email: { type: String, required: true },
   phone:
{ type: String, required: true },
    city: { type: String, default: 'Patna' },
    state: { type: String, default: 'Bihar' },
    selectedProducts: [{ type: String }],
    projectDetails: { type: String, required: true },
    status: {
      type: String,
      enum: ['NEW', 'CONTACTED', 'QUOTED', 'CONVERTED', 'CLOSED'],
      default: 'NEW',
    },
  },
  { timestamps: true }
);
export const RFQSchemaModel: Model<IRFQ> =
  mongoose.models.RFQ || mongoose.model<IRFQ>('RFQ', RFQSchema);
export const RFQprovider = RFQSchemaModel;
