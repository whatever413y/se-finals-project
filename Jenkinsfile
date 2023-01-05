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
                sh 'npm i docker-compose'
                sh 'npm run docker'
            }
        }
        stage('Test') { 
            steps {
                sh 'echo http://localhost:3000/index.html'
            }
        }
    }
}