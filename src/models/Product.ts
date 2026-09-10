import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProductVariant {
  name: string;
  weight: string;
  dimensions: string;
  loadCapacity?: string;
  priceEstimate?: string;
}

export interface IProduct extends Document {
  name: string;
  slug: string;
  category: 'shuttering' | 'scaffolding' | 'bearings' | 'joints' | 'drainage';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  weightVariants: string[];
  dimensions: string[];
  materialGrade: string;
  finishType: string;
  applications: string[];
  specs: Record<string, string>;
  variants: IProductVariant[];
  imageUrls: string[];
  featuredImage: string;
  specSheetUrl?: string;
  complianceStandards: string[];
  isFeatured: boolean;
  minOrderQuantity: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
      type: String,
      enum: ['shuttering', 'scaffolding', 'bearings', 'joints', 'drainage'],
      required: true,
    },
    categoryLabel: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    weightVariants: [{ type: String }],
    dimensions: [{ type: String }],
    materialGrade: { type: String, required: true },
    finishType: { type: String, default: 'Anti-Rust Red Oxide / Painted / Galvanized' },
    applications: [{ type: String }],
    specs: { type: Map, of: String },
    variants: [
      {
        name: String,
        weight: String,
        dimensions: String,
        loadCapacity: String,
        priceEstimate: String,
      },
    ],
    imageUrls: [{ type: String }],
    featuredImage: { type: String, required: true },
    specSheetUrl: { type: String },
    complianceStandards: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
    minOrderQuantity: { type: String, default: '50 Pcs / 1 Metric Ton' },
  },
  { timestamps: true }
);

export const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
