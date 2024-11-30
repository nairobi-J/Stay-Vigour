

function Firstpage(){
    return(
        <>
        <form>
            <p>
                Email:
            </p>
            <input type= "email" name= "email" placeholder="Jerin@gmail.com" />
            <p>
                Password:
            </p>
            <input type= "password" name= "password" placeholder="as^5+@ghifht?" />
        </form>
        <button>Submit</button>
        <p>Create An account? 
            <a href="/signup">Signup</a>
        </p>
        </>


    );
}

export default Firstpage