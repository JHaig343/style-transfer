FROM python:3.7
# Copy is (hopefully) better as it doesn't rebuild everything after it
COPY . /
WORKDIR /
EXPOSE 5000
RUN pip install -r requirements.txt
CMD [ "flask", "run", "--host=0.0.0.0" ]