pipeline {
    agent {
        docker {
            image 'node:19-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm compile'
                sh 'npm build'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm start'
            }
        }
    }
}