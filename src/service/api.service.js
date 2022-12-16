import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL:'https://creepy-ray-belt.cyclic.app/'
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
                
            }
            throw error
        })
    }

    signup = async (signupInfo) => {
        try {
            const { data } = await this.api.post('/signup', signupInfo)
            return data
        } catch (error) {
            throw error.response
        }
    }

    login = async (loginInfo) => {
        try {
            const { data } = await this.api.post('/login', loginInfo)
        localStorage.setItem('token', data.token)
        return data
        } catch (error) {
            throw error
        }
    }

    //adicionar exercicio
    //addExercise = async (name) => {
        //try {
           // const { data } = await this.api.post('/exercise', {name})
        //} catch (error) {
          //  console.log(error, `Could not add a new exercise`)
       // }
   // }

    //adicionar training
    //addTraining = async (name) => {
       // try {
         //   const { data } = await this.api.post('/training', {name})
     //   } catch (error) {
       //     console.log(error, `Could not add a new training`)
    //    }
  //  }


    //get all exercise
    getExercises = async () => {
        try {
            const { data } = await this.api.get('/exercise')
            return data
        } catch (error) {
            console.log(error, `Could not load the exercises`)
        }
    }

    //get all training
    getTrainings = async () => {
        try {
            const { data } = await this.api.get('/training')
            return data
        } catch (error) {
            console.log(error, `Could not load the trainings`) 
        }
    }

    //get one exercise

    getExercise = async (exerciseId) => {
        try {
            const { data } = await this.api.get(`/exercise/${exerciseId}`)
            return data
        } catch (error) {
            console.log(error, `Could not load the exercise`) 
        }
    }

    //get one training

    getTraining = async (trainingId) => {
        try {
            const { data } = await this.api.get(`/training/${trainingId}`)
            return data
        } catch (error) {
            console.log(error, `Could not load the training`) 
        }
    }

    //update one exercise

    updateExercise = async (exerciseId, exercise) => {
        try {
            await this.api.put(`/exercise/${exerciseId}/edit`, exercise)
        } catch (error) {
            console.log(error, `Could not update this exercise`)
        }
    }

    //update one training

    updateTraining = async (trainingId, training) => {
        try {
            await this.api.put(`/training/${trainingId}/edit`, training)
        } catch (error) {   
            console.log(error, `Could not update this exercise`)
        }
    }

    //delete one exercise

    deleteExercise = async (exerciseId, exercise) => {
        try {
            await this.api.delete(`/exercise/${exerciseId}/delete`, exercise)
        } catch(error) {
            console.log(error, `Could not delete this exercise`)
        }
    }

    //delete one training
    deleteTraining = async (trainingId, training) => {
        try {
            await this.api.delete(`/training/${trainingId}/delete`, training)
        } catch(error) {
            console.log(error, `Could not delete this training`)
        }
    }

}

export default new Api()