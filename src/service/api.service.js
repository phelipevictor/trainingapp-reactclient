import axios from 'axios'

class Api {
    construtor() {
        this.api = axios.create({
            baseUrl:'http://localhost:5005/'
        })

        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers = {
                    'Authorization': `Bearer ${token}`
                }
            }
            return config
        }, 
        (error) => {
            console.log(error)
        }
    )

        this.api.interceptors.response.use((response) => response, (error) => {
            if(error.response.status === 401) {
                localStorage.removeItem('token')
                window.location = '/'
            }
            throw error
        })
    }

    signup = async (signupInfo) => {
        try {
            const { data } = await this.api.post('/signup', signupInfo)
        localStorage.setItem('token', data.token)
        } catch (error) {
            console.log(error)
        }
    }

    login = async (loginInfo) => {
        try {
            const { data } = await this.api.post('/login', loginInfo)
        localStorage.setItem('token', data.token)
        } catch (error) {
            console.log(error)
        }
    }

    getExercises = async (exerciseName) => {
        try {
            const { data } = await this.api.get(`/exercises/${ExerciseName}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    getTrainings = async (trainingName) => {
        try {
            const { data } = await this.api.get(`/mytraining`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
}

export default new Api()