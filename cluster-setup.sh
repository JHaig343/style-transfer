#!/bin/bash



# Script to apply both deployment and service manifests
apply_yml() {
	sudo microk8s kubectl apply -f $1
}

docker build -t test/styletransferapp .

# microk8s uses its own containerd registry for storing images and
# exclusively looks there(as far as I've tried) - save the image as  
# a tar file then import it into the microk8s containerd registry 
# before applying manifests
docker save test/styletransferapp > styletransfer.tar

sudo microk8s ctr image import styletransfer.tar

apply_yml styletransfer-deployment.yml

apply_yml styletransfer-service.yml


