pipeline {
    agent any
    tools {nodejs "nodejs"}
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