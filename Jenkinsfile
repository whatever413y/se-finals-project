pipeline {
    agent any

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