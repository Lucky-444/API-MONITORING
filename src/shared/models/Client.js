import mongoose from "mongoose";

/**
 * MongoDB schema for clients/organizations
 * Each client represents a business/organization using the monitoring service
 */
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    /**
     * best practice for multi-tenant applications to have a unique slug/identifier for each client
     * const slug = name
         .toLowerCase()
         .replace(/ /g, "-")
         .replace(/[^a-z0-9-]/g, "");
     * Auto-generate slug from name if not provided
     * slug = clean name used to identify a client in your API system and URLs. It should be unique, lowercase, and URL-friendly (no spaces or special characters).
     * Example: "Acme Corporation" -> "acme-corporation"
     * This slug can be used in API keys and URLs to associate resources with the correct client.
     */
    slug: {
      //slug is a URL-friendly identifier for the client, used in API keys and URLs
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[a-z0-9-]+$/,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 500,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    settings: {
      dataRetentionDays: {
        type: Number,
        default: 30,
        min: 7,
        max: 365,
      },
      alertsEnabled: {
        type: Boolean,
        default: true,
      },
      timezone: {
        type: String,
        default: "UTC",
      },
    },
  },
  {
    timestamps: true,
    collection: "clients",
  },
);

clientSchema.index({ isActive: 1 });

const Client = mongoose.model("Client", clientSchema);

export default Client;
