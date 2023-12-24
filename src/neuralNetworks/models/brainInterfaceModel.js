```javascript
const mongoose = require('mongoose');

// Define the BrainInterface schema
const BrainInterfaceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  neuralData: {
    type: Object,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Define methods or statics here if needed

// Create the model from the schema
const BrainInterface = mongoose.model('BrainInterface', BrainInterfaceSchema);

module.exports = BrainInterface;
```

