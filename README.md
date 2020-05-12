# Neural Style Transfer Web App
This web application provides a front over an arbitrary neural style transfer model from Tensorflow Hub.

Provide a **content** image and **style** image and `Submit`, and the neural network will generate a new image drawing the content image in the style of the style image

## Requirements:
- `tensorflow==2.0.0`
- `tensorflow_hub==0.8.0`
- `flask`
- `numpy`
- `Pillow`
- `matplotlib`

## To Run:
- `flask run` in the root directory
- navigate to `localhost:5000` to see the application.

### As a Docker Container:
- `docker build -t styletransferapp .`
- `docker run -i -p 5000:5000 styletransferapp`
- access app through `localhost:5000`

(Also working on making a Kubernetes deployment manifest for it so you can run it as part of a cluster...)