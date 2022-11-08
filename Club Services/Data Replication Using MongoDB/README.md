# Topic: Data Replication Using MongoDB

## Presenters:
  - [Krishnacharan Bhola](https://github.com/kcbhola3030)
  - [Kartik Chavan](https://github.com/KartikJS1)

## Date: [4th Nov 2022]()

## Prerequisite
- ### MongoDB

### MongoDB Installation
  - #### Linux:
    ```bash
    $ sudo apt update
    $ sudo apt install dirmngr gnupg apt-transport-https ca-certificates software-properties-common
    $ sudo wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
    $ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
    $ sudo apt-get update
    $ sudo apt-get install -y mongodb-org
    ```

    If you came across an error like this: `You have held broken packages (libssl1)` then do:
    ```bash
    $ echo "deb http://security.ubuntu.com/ubuntu focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list
    $ sudo apt-get update
    $ sudo apt-get install libssl1.1
    ```

    Once MongoDB is installed run this commands to start MongoDB:
    ```bash
    $ sudo systemctl start mongod
    $ sudo systemctl enable mongod
    $ sudo systemctl statust mongod
    ```

  - #### Windows:
    1. Click on this [link](https://www.mongodb.com/try/download/community)
    2. Select the latest version.
    3. Platform as Windows and package of your choice.(zip or msi installer)
    4. Hit the download button
