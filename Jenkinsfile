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
        stage('Deploy') {
            steps {
                sh 'npm run start &'
            }
        }
        stage('Exit') {
            steps {
                input message: 'Finished using the website? (Click "Proceed" to close website)'
            }
        }
    }
}