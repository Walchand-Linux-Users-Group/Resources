# Topic: Data Replication Using MongoDB

## Presenters:
  - [Krishnacharan Bhola](https://github.com/kcbhola3030)
  - [Kartik Chavan](https://github.com/KartikJS1)

## Date: [4th Nov 2022]()

## Prerequisite
- ### MongoDB

### MongoDB Installation
  - #### Kali Linux:
    1] Import public key
       ```bash
       $ wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
       ```
      If error occured about `gnupg` is not installed try this:
      ```bash
      $ sudo apt-get install gnupg  
      ```
      Once installed retry importing the key using the same command as above.
    
    2] Create a `/etc/apt/sources.list.d/mongodb-org-6.0.list` file for MongoDB. 
      For Debian 10:
      ```bash
      echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
      ```
      For Debian 9:
      ```bash
      $ echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
      ```
    3] Update the packages
       ```bash
       $ sudo apt-get update
       ```
    4] Install the MongoDB packages
       ```bash
       $ sudo apt-get install -y mongodb-org
       ```
    5] Check if MongoDB is correctly installed or not by checking the version
       ```bash
       $ mongod --version                         
       ```
  - #### Ubuntu:
    1] Get the Prerequisites
    ```bash
    $ sudo apt-get install libcurl4 openssl liblzma5
    ```
    
    2] Download the tarball
    Click on the following [link](https://www.mongodb.com/try/download/community)
    
    3] Extract the files
    ```bash
    tar -zxvf mongodb-linux-*-6.0.2.tgz
    ```
    
  - #### Windows:
    1. Click on this [link](https://www.mongodb.com/try/download/community)
    2. Select the latest version.
    3. Platform as Windows and package of your choice.(zip or msi installer)
    4. Hit the download button
