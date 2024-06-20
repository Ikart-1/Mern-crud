import mongoose from 'mongoose';

// Define the Address sub-schema
// const AddressSchema = mongoose.Schema({
//     street: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     zipCode: { type: String, required: true },
//     country: { type: String, required: true }
// });

// // Define the Contact sub-schema
// const ContactSchema = mongoose.Schema({
//     phone: { type: String, required: true },
//     email: { type: String, required: true }
// });

// // Define the Company schema
// const CompanySchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             unique: true,
//             trim: true
//         },
//         description: {
//             type: String,
//             trim: true
//         },
//         address: AddressSchema,
//         contact: ContactSchema,
//         website: {
//             type: String,
//             trim: true
//         },
//         established: {
//             type: Date
//         },
//         employees: {
//             type: Number,
//             min: 1
//         },
//         active: {
//             type: Boolean,
//             default: true
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now
//         },
//         updatedAt: {
//             type: Date,
//             default: Date.now
//         }
//     },
//     {
//         timestamps: true // Automatically adds createdAt and updatedAt fields
//     }
// );

const CompanySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        website: {
            type: String,
        },
        employees: {
            type: Number,
            min: 1
        },
        active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt fields
    }
);


export const Company = mongoose.model('Company', CompanySchema);


