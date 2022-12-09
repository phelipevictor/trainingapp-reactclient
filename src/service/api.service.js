import axios from 'axios'

class Api {
    construtor() {
        this.api = axios.create({
            baseURL:'http://localhost:5005/'
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

    getExercise = async (exerciseId) => {
        try {
            const { data } = await this.api.get(`/exercises`) //exerciseId?
            return data
        } catch (error) {
            console.log(error)
        }
    }

    getTrainings = async () => {
        try {
            const { data } = await this.api.get(`/training`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
}

export default new Api()