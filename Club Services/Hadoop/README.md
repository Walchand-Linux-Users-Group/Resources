# Topic: Hadoop
## Presentors: 
- [Umesh Bagade](https://github.com/umeshbagade)
- [Brijesh Kumar](https://github.com/Brij2)
---
## Date: [15th Sept 2022]()


## Prerequisite

- Ubuntu OS
- Docker Installation
   - For in-dept information you can check: [source](https://docs.docker.com/engine/install/ubuntu/)

```bash
    # Update packages
    sudo apt-get update

    # Accept required certificates
    sudo apt-get install apt-transport-https ca-certificates

    # Install docker
    sudo apt install docker.io
    systemctl start docker
    systemctl enable docker
    docker --version

    # Pull the hadoop image:
    docker pull sequenceiq/hadoop-docker:2.7.0

    # Run the container:
    docker run -it sequenceiq/hadoop-docker:2.7.0 /etc/bootstrap.sh -bash

```
 
---

## Word Count Program
```bash
    # Check Whether all nodes are up and running
    Jps

    # Go to the directory where hadoop is installed
    cd $HADOOP_PREFIX

    # Create the input file
    cat > input.txt
    Hello hi 
    Hello hi hi
    Hi Hello
    ^C

    # Put the input file into HDFS
    bin/hadoop dfs -put input.txt /

    # Check whether the file is present there or not
    bin/hadoop dfs -cat /input.txt

    # Check various functions present in the inbuilt jar file
    bin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-2.7.0.jar

    # Execute our wordcount program for the created file
    bin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-2.7.0.jar wordcount /input.txt /output

    # List the contents of the output directory
    bin/hadoop dfs -ls /output

    # Displaying the contents of Output file
    bin/hadoop -cat /outlut/part-r-00000

```

## Future References
- [Research Gate](https://www.researchgate.net/profile/Rida-Qayyum/publication/343484997_A_Roadmap_Towards_Big_Data_Opportunities_Emerging_Issues_and_Hadoop_as_a_Solution/links/5f2c4454458515b7290ac385/A-Roadmap-Towards-Big-Data-Opportunities-Emerging-Issues-and-Hadoop-as-a-Solution.pdf)
- [Edureka](https://www.edureka.co/blog/mapreduce-tutorial/)
- [Simplilearn](https://www.simplilearn.com/tutorials/hadoop-tutorial/mapreduce-example)
- [Data-Flair](https://data-flair.training/blogs/hadoop-mapreduce-tutorial/)
- [Guru99](https://www.guru99.com/create-your-first-hadoop-program.html)
