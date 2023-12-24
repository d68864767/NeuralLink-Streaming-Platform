```javascript
const mongoose = require('mongoose');

// Define the DataProcessing schema
const DataProcessingSchema = new mongoose.Schema({
  brainInterfaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BrainInterface',
    required: true
  },
  processedData: {
    type: Object,
    required: true
  },
  processingTimestamp: {
    type: Date,
    default: Date.now
  }
});

// Define methods or statics here if needed

// Create the model from the schema
const DataProcessing = mongoose.model('DataProcessing', DataProcessingSchema);

module.exports = DataProcessing;
```
