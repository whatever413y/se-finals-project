pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run compile'
                sh 'npm run build'
            }
        }
        stage('Start') { 
            steps {
                sh 'npm run start'
            }
        }
    }
}