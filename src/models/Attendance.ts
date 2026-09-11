import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAttendance extends Document {
  workerName: string;
  workerId: string;
  trade: string;
  phone?: string;
  wageType: 'DAILY' | 'MONTHLY';
  dailyRate: number;
  branchId: mongoose.Types.ObjectId | string;
  branchName?: string;
  date: string; // YYYY-MM-DD
  status: 'PRESENT' | 'ABSENT' | 'HALF_DAY';
  checkInTime?: string;
  verifiedGpsCoords?: {
    lat: number;
    lng: number;
    distanceMeters: number;
    isWithinGeofence: boolean;
  };
  markedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AttendanceSchema = new Schema<IAttendance>(
  {
    workerName: { type: String, required: true },
    workerId: { type: String, required: true },
    trade: { type: String, required: true },
    phone: { type: String },
    wageType: {
      type: String,
      enum: ['DAILY', 'MONTHLY'],
      default: 'DAILY',
    },
    dailyRate: { type: Number, required: true },
    branchId: { type: Schema.Types.Mixed, required: true },
    branchName: { type: String },
    date: { type: String, required: true },
    status: {
      type: String,
      enum: ['PRESENT', 'ABSENT', 'HALF_DAY'],
      default: 'PRESENT',
    },
    checkInTime: { type: String },
    verifiedGpsCoords: {
      lat: Number,
      lng: Number,
      distanceMeters: Number,
      isWithinGeofence: Boolean,
    },
    markedBy: { type: String },
  },
  { timestamps: true }
);

export const Attendance: Model<IAttendance> =
  mongoose.models.Attendance || mongoose.model<IAttendance>('Attendance', AttendanceSchema);
