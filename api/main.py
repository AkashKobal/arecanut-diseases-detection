from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import tensorflow as tf
import uvicorn
from io import BytesIO
from PIL import Image

app = FastAPI()

# Allow CORS
origins = ["http://localhost", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
MODEL = tf.keras.models.load_model("C:/Users/Admin/Desktop/models/1")

# Class names and corresponding medicine info
CLASS_NAMES = [
    'Healthy_Leaf', 'Healthy_Nut', 'Healthy_Trunk', 'Mahali_Koleroga', 
    'Stem_bleeding', 'bud_borer', 'healthy_foot', 'stem cracking', 'yellow leaf disease'
]

MEDICINE_INFO = {
    'Healthy_Leaf': "No treatment needed. Maintain healthy practices.",
    'Healthy_Nut': "No treatment needed. Maintain healthy practices.",
    'Healthy_Trunk': "No treatment needed. Maintain healthy practices.",
    'Mahali_Koleroga': "Spray Bordeaux mixture (1%) or Copper Oxychloride (3 g/L).",
    'Stem_bleeding': "Apply Tridemorph (0.1%) or Copper Oxychloride (5 g/L).",
    'bud_borer': "Spray Chlorpyrifos (0.05%) or Neem Oil (5 ml/L).",
    'healthy_foot': "No treatment needed. Maintain healthy practices.",
    'stem cracking': "Apply Copper Oxychloride (0.3%) and avoid waterlogging.",
    'yellow leaf disease': "Spray Fosetyl-Al (0.2%) or Potassium Phosphonate (0.3%).",
}

@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def preprocess_image(file_data):
    image = Image.open(BytesIO(file_data)).convert("RGB")
    resized_image = image.resize((256, 256))  # Resize to match model input shape
    return np.array(resized_image)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read and preprocess the image
        file_data = await file.read()
        image = preprocess_image(file_data)
        img_batch = np.expand_dims(image, 0)

        # Run the model prediction
        prediction = MODEL.predict(img_batch)
        predicted_class_index = np.argmax(prediction)
        predicted_class = CLASS_NAMES[predicted_class_index]
        confidence = np.max(prediction)

        # Debugging logs
        print(f"Prediction: {prediction}")
        print(f"Predicted Class: {predicted_class}, Confidence: {confidence}")

        # Get medicine information
        medicine = MEDICINE_INFO.get(predicted_class, "No information available.")
        print(f"Medicine: {medicine}")

        return {
            "class": predicted_class,
            "confidence": float(confidence),
            "medicine": medicine
        }
    except Exception as e:
        return {"error": str(e)}
    
    

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8080)







# from fastapi import FastAPI, File, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# import numpy as np
# import tensorflow as tf
# import uvicorn
# from io import BytesIO
# from PIL import Image
# import os
# from PIL import Image
# import numpy as np


# app = FastAPI()

# # MODEL =tf.keras.models.load_model("../training/models/1")
# origins = [
#     "http://localhost",
#     "http://localhost:3000",
# ]
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# MODEL =tf.keras.models.load_model("C:/Users/Admin/Desktop/models/1")


# # MODEL = tf.keras.models.load_model("../training/models/1")


# # prod_model = tf.keras.models.load_model("../training/models/1")
# # beta_model = tf.keras.models.load_model("../training/models/2")


# # CLASS_NAMES = ['Healthy_Nut', 'Mahali_Koleroga', 'Stem_bleeding']
# CLASS_NAMES = ['Healthy_Leaf', 'Healthy_Nut', 'Healthy_Trunk', 'Mahali_Koleroga', 'Stem_bleeding', 'bud_borer', 'healthy_foot', 'stem cracking','yellow leaf disease']

# @app.get("/ping")
# async def ping():
#     return "Hello, I am alive"



# def read_file_as_image(data) -> np.ndarray:
#    image = np.array(Image.open(BytesIO(data)))
#    return image
#    pass

# def preprocess_image(file_data):
#     image = Image.open(BytesIO(file_data)).convert("RGB")
#     resized_image = image.resize((256, 256))  # Resize to match model input shape
#     return np.array(resized_image)

# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     try:
#         # Read and preprocess the image
#         file_data = await file.read()
#         image = preprocess_image(file_data)
#         img_batch = np.expand_dims(image, 0)

#         # Run the model prediction
#         prediction = MODEL.predict(img_batch)
#         predicted_class = CLASS_NAMES[np.argmax(prediction)]
#         confidence = np.max(prediction[0])

#         return {"class": predicted_class, "confidence": float(confidence)}
#     except Exception as e:
#         return {"error": str(e)}


# if __name__ == "__main__":
#     uvicorn.run(app, host='localhost', port=8080)


