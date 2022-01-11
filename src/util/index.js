export const signup_fetch = async (username, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const remove_fetch = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: ""
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const edit_fetch = async (username, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const info_fetch = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}