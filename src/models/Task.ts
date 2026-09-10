import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description?: string;
  branchId: mongoose.Types.ObjectId | string;
  branchName: string;
  assignedToName: string;
  assignedToRole?: string;
  dueDate: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  progressPercent: number;
  category: 'CASTING' | 'SCAFFOLDING' | 'SHUTTERING' | 'INSPECTION' | 'DISPATCH' | 'SAFETY';
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: String,
    branchId: { type: Schema.Types.ObjectId, ref: 'Branch', required: true },
    branchName: { type: String, required: true },
    assignedToName: { type: String, required: true },
    assignedToRole: String,
    dueDate: { type: String, required: true },
    priority: {
      type: String,
      enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
      default: 'MEDIUM',
    },
    status: {
      type: String,
      enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED'],
      default: 'PENDING',
    },
    progressPercent: { type: Number, default: 0 },
    category: {
      type: String,
      enum: ['CASTING', 'SCAFFOLDING', 'SHUTTERING', 'INSPECTION', 'DISPATCH', 'SAFETY'],
      default: 'CASTING',
    },
  },
  { timestamps: true }
);

export const Task: Model<ITask> =
  mongoose.models.Task || mongoose.model<ITask>('Task', TaskSchema);
