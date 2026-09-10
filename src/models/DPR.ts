import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDPR extends Document {
  dprNo: string;
  branchId: mongoose.Types.ObjectId | string;
  branchName: string;
  date: string; // YYYY-MM-DD
  weather: string;
  labourCount: {
    skilled: number;
    unskilled: number;
    supervisors: number;
    total: number;
  };
  workAccomplished: string;
  materialReceived: string;
  machineryDeployed: string;
  roadblocks: string;
  safetyObservations: string;
  submittedBy: {
    id: string;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const DPRSchema = new Schema<IDPR>(
  {
    dprNo: { type: String, required: true, unique: true },
    branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
    branchName: { type: String, required: true },
    date: { type: String, required: true },
    weather: { type: String, default: 'Clear / Sunny' },
    labourCount: {
      skilled: { type: Number, default: 0 },
      unskilled: { type: Number, default: 0 },
      supervisors: { type: Number, default: 0 },
      total: { type: Number, default: 0 },
    },
    workAccomplished: { type: String, required: true },
    materialReceived: String,
    machineryDeployed: String,
    roadblocks: String,
    safetyObservations: String,
    submittedBy: {
      id: { type: String, required: true },
      name: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export const DPR: Model<IDPR> =
  mongoose.models.DPR || mongoose.model<IDPR>('DPR', DPRSchema);
