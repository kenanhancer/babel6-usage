pipeline {
  agent any
  stages {
    stage('Initialize') {
      agent any
      steps {
        echo 'Merhaba'
      }
    }
    stage('deneme') {
      parallel {
        stage('deneme') {
          agent any
          environment {
            firstName = 'kenan hancer'
          }
          steps {
            sh 'echo $firstName'
          }
        }
        stage('hhh') {
          steps {
            echo 'kkkkk'
          }
        }
      }
    }
  }
}