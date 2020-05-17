
const GetUsers = async () => {
    try {
        const usersResponse = await fetch('https://reqres.in/api/users?')
        const users = await usersResponse.json();
        return users
    } catch(err) {
        console.log('there was an error')
    }
    
}

export default GetUsers