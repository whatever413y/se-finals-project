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
            }
        }
        stage('Start') {
            steps {
                sh 'npm run start'
            }
        }
        stage('Start') {
            steps {
                // sh 'npm run start'
                sh 'docker-compone up'
            }
        }
    }
}