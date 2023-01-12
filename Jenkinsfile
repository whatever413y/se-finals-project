pipeline {
    agent any
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run compile'
                sh 'npm run build'
                sh 'npm run start'
            }
        }
    }
}