import mongoose = require("mongoose");

const qaSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    source: { type: String, required: true },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const QAModel = mongoose.model('QA', qaSchema);
export default QAModel;
