import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISnag extends Document {
  snagNumber: string;
  title: string;
  description: string;
  location: string;
  branchId: mongoose.Types.ObjectId | string;
  branchName: string;
  category: 'CASTING_DEFECT' | 'MATERIAL_DAMAGE' | 'SAFETY_HAZARD' | 'DIMENSION_MISMATCH' | 'FINISHING';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'OPEN' | 'IN_REVIEW' | 'RESOLVED' | 'CLOSED';
  reportedBy: {
    id: string;
    name: string;
    role: string;
  };
  assignedTo?: string;
  photoUrl?: string;
  resolutionNotes?: string;
  resolvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const SnagSchema = new Schema<ISnag>(
  {
    snagNumber: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
    branchName: { type: String, required: true },
    category: {
      type: String,
      enum: [
        'CASTING_DEFECT',
        'MATERIAL_DAMAGE',
        'SAFETY_HAZARD',
        'DIMENSION_MISMATCH',
        'FINISHING',
      ],
      default: 'CASTING_DEFECT',
    },
    priority: {
      type: String,
      enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
      default: 'HIGH',
    },
    status: {
      type: String,
      enum: ['OPEN', 'IN_REVIEW', 'RESOLVED', 'CLOSED'],
      default: 'OPEN',
    },
    reportedBy: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      role: { type: String, required: true },
    },
    assignedTo: String,
    photoUrl: String,
    resolutionNotes: String,
    resolvedAt: Date,
  },
  { timestamps: true }
);

export const Snag: Model<ISnag> =
  mongoose.models.Snag || mongoose.model<ISnag>('Snag', SnagSchema);
