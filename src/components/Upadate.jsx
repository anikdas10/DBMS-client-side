import { useLoaderData } from "react-router-dom";


const Upadate = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);


    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email. value;
        console.log(name,email);

        const updatedUser = {name,email};
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" /><br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email} /><br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Upadate;