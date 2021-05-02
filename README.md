# adabas-tcp-test
ADABAS TCP test program

1. Login to your server;
2. wget https://github.com/gwandre/adabas-tcp-test/archive/refs/heads/main.zip
3. sudo apt install unzip
4. unzip main.zip
5. cd adabas-tcp-test-main
6. sudo docker build -t adabas-tcp-test .
7. sudo docker run --rm -it -p 8080:8080 --name adatcp1 adabas-tcp-test
8. The container is running (until you close with CTRL+C as you used the --rm parameter)
9. Press CTRL+P and CTRL+Q to quit. The container will continue running.

THAT'S ALL!
