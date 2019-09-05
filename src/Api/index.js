const Api = {
    search: (handle) =>(fetch(`https://api.github.com/users/${handle}/followers`)
            .then(response => response.json())
    )
}

export default Api;